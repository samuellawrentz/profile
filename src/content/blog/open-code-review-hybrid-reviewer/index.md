---
title: "Rules First, Model Second - I Ran Alibaba's open-code-review on My Own Commits"
date: 2026-09-13
path: /blog/open-code-review-hybrid-reviewer/
published: true
heroImage: ./header.png
tags: [ai, code-review, tools, testing]
description: A code reviewer that decides which files to look at and which rules apply before the LLM sees a single line. I pointed it at two real commits. Sixteen seconds, four findings, one dropped on the floor.
---

Every AI code reviewer I have tried has the same shape. Dump the diff into a big model, ask for comments, hope. Sometimes it is brilliant, sometimes it reviews the lockfile. The variance is the problem, and I wrote about boxing that in with [a quality loop](/blog/ai-code-needs-a-quality-loop/) a while back.

So a reviewer whose pitch is "deterministic pipeline first, LLM agent second" got my bookmark. It is [open-code-review](https://github.com/alibaba/open-code-review), Alibaba's internal tool, open sourced under Apache 2.0, written in Go, 22k stars. The claim is that the boring parts of review, which files matter, which rules apply, where exactly a comment should land, should not be left to a model's mood. The model only gets called for the judgment.

## Okay, but what does "rules first" mean?

You can watch the deterministic half work without an API key at all:

```bash
npm install -g @alibaba-group/open-code-review
ocr review -c 8443bd54 --preview
```

On a real commit from this site (a perf rewrite, 15 files, +209 -1247) it picked 13 files and explained the two it skipped: the lockfile as unsupported, a deleted component as deleted. Then this, which is the part I did not expect:

```bash
ocr delegate rule src/pages/index.astro scripts/generate-og-images.cjs
```

It printed the review rules it would apply, grouped by file type. The `.astro` files got an Astro-specific rulebook: `client:*` only on framework components, `set:html` treated as a high-risk escape hatch, `define:vars` payloads checked for secrets, `client:load` on non-critical UI flagged. The `.cjs` file got a generic JS list, `var` banned, `==` banned, unused variables. These are prose rules, not regexes, and they get attached to the prompt for that file group. That is the "fine-tuned ruleset". It is a template engine picking rulebooks by path, which is a lot less magic than the tweet made it sound and a lot more useful.

## The real runs

```bash
ocr config set provider openai
ocr config set model gpt-5.4-mini
ocr review -c 8443bd54 --format json --output review.json --audience agent
```

| Commit | Files | Wall time | Tokens in / out | Cached | Findings |
|--------|-------|-----------|-----------------|--------|----------|
| perf rewrite | 13 | 16s | 95k / 1.8k | 46k | 4 |
| vendored TS package | 11 | 18s | 67k / 2.3k | 43k | 3 |

The agent made five tool calls per run: two file reads, one code search, two comment submissions. It did not wander.

The findings were specific and mostly right. On the perf commit it caught that a hero title width was hard-coded to one font metric ratio and would misrender if the copy changed, and that a reveal animation class still inherited a delay that could push the LCP element later. On the TypeScript package it flagged that the response parser only reads the first candidate, and that deriving a file extension by splitting a MIME type on `/` breaks on `image/svg+xml`. Both true. Both things I would have merged.

## The honest part

On the second run, two findings never made it into the output. The log shows why:

```text
✘ code_comment failed: Error: 'comments' array is required
```

The model called the comment tool with the wrong argument shape twice, the tool rejected it, and the review carried on with three findings instead of five. One of the dropped ones was the best catch of the run: the output directory gets created before the API request, so a bad key still leaves an empty folder behind. A cheap model plus a strict tool schema means findings silently fall off the edge. I would run this with a stronger model in CI and treat the mini tier as a smoke test.

Also, the README benchmark says it uses about a ninth of the tokens a general-purpose agent burns on the same PR. I did not measure that side, so treat it as their number, not mine. What I can say is that 97k tokens for a 13-file review, half of it cache hits, is cheap enough to run on every push.

## Where it goes

I already had "put review in CI, not in someone's calendar" as a rule. This is the first tool I have run that makes the CI half boring in the right way: it chooses the files, it chooses the rules, it gives you JSON, and it has GitHub Actions and GitLab CI recipes out of the box. The model is the last step, not the whole thing.

*Try the preview and the rule dump on your own repo before you spend a token. That alone tells you whether it understands your stack.*
