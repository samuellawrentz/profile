---
title: "Interrogate What You Built Before Calling It Done - I Ran the Prompt on My Own Repo"
date: 2026-09-10
path: /blog/interrogate-what-you-built-before-calling-it-done/
published: true
heroImage: ./header.png
tags: [ai, code-quality, tools, astro]
description: A three-question prompt that asks an agent to delete before it simplifies and simplify before it optimizes. I pointed it at this blog's own code and it found 128 lines to remove.
---

Every AI coding session ends the same way for me. The agent says "done", I skim the diff, it looks fine, I merge. And a month later I open the file and think, why is this 187 lines?

So I have started running one more prompt before "done" counts. It goes like this:

```text
Think from first principles about what we're trying to achieve here.
Interrogate what you built before calling it done:

1. Is anything here unnecessary, overly complicated, or based on
   weak assumptions? Challenge them.
2. What can be deleted entirely?
3. What can be simplified now that the unnecessary pieces are gone?

Prefer deleting over simplifying, simplifying over optimizing,
and optimizing over automating.

It might be done too. You don't HAVE to make changes.
If it's good, leave it alone.
```

The ordering is the whole trick. Delete beats simplify, simplify beats optimize, optimize beats automate. Most "cleanup" passes go the other way round, they add a helper, a config flag, a cache. This one is only allowed to add after it has tried to remove.

## Okay, but does it find anything?

I did not want to write about a prompt I had only run on toy code, so I pointed it at this blog. Five files, read-only, report back. The rule was that it had to say "leave it alone" when a file was fine.

Here is what came back:

| File | Verdict |
|------|---------|
| `scripts/generate-og-images.cjs` (187 lines) | simplify, and delete a sibling |
| `src/layouts/BaseLayout.astro` (121 lines) | delete a few lines |
| `SessionTimer.tsx` | leave alone |
| `ThemeToggle.astro` | leave alone |
| `rss.xml.ts` | leave alone |

Three out of five untouched. That is the "if it's good, leave it alone" line doing its job, and it is the part I trust the most, because a reviewer that always finds something is nothing but noise.

The finds were real though:

- A `scripts/canvas-fallback.js` file, 120 lines, referenced nowhere. A leftover from the Gatsby days. Delete.
- The OG image script has two copy-pasted loops, one for blog and one for hacks, same twelve lines each. One `collect(dir)` helper and twenty lines go away.
- The same script has a three-tier fallback that redraws the same background three times and loads the logo twice. Collapse it and another twenty-five lines go.
- `BaseLayout.astro` sets the favicon twice (`icon` and the IE-era `shortcut icon`) and ships a `<noscript>` font block for a site whose comments and timer already need JS.

Roughly 128 lines gone from deletions alone, before any simplifying. On a five-file sample. Of a site I thought was tidy.

## The weak assumption was the best find

Question one asks about weak assumptions, and that is where the interesting one was. The OG generator skips a post if its PNG already exists. Sounds harmless. But the gradient behind the title is random, so my machine and CI generate different cards for the same post, and a title edit never refreshes the card because the file is already there. Which one readers see depends on whether I committed the PNG before pushing.

I have been living with that for who knows how long. No linter flags it. No test fails. It only shows up when something asks "what is this code assuming?" instead of "is this code correct?"

## Where it fits

I already wrote about [keeping a quality loop around AI-written code](/blog/ai-code-needs-a-quality-loop/), and that post is about the outer loop, review in CI, a second model grading the first. This prompt is the inner loop. It runs once, right before "done", on the thing that was just built, and its default answer is "remove something".

I have not applied the findings yet. That is a separate PR and a separate decision, which is exactly the point. The prompt reports, I choose.

*Run it on something you think is clean. That is where it stings.*
