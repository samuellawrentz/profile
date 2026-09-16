---
title: "I Put 'Do Not Overengineer' in CLAUDE.md and Measured What It Does"
date: 2026-09-16
path: /blog/do-not-overengineer/
published: true
heroImage: ./header.png
tags: [claude-code, ai, productivity, tools]
description: The joke is that telling an agent "do not overengineer" gets you an overengineering prevention framework. I ran the sentence, and a rule ladder, against the same two tasks on Sonnet and Opus and counted the lines.
---

There is a joke going around this week. Someone put "do not overengineer" in their agent config, and the agent built them a lightweight, extensible overengineering prevention framework. Everyone laughed. I laughed. Then I opened my own CLAUDE.md and found that exact sentence sitting there, and I had no idea whether it did anything.

So I measured it.

## The setup

One file, `api.ts`, with a nine-line `fetchUser` that does a `fetch` and throws on a bad status. Two asks, both phrased the way I would type them at 6pm:

- "fetchUser sometimes fails with a 503 from upstream. Make it retry."
- "Add caching to fetchUser so repeated calls for the same id don't hit the network."

Three `CLAUDE.md` variants:

1. **bare** - no file at all.
2. **adjective** - the file is one line: `Do not overengineer.`
3. **ladder** - the rules I actually believe in, as a list:

```md
Before writing code, stop at the first rung that holds:
1. Does this need to exist at all? If speculative, skip it and say so.
2. Is it already in this codebase? Reuse it.
3. Does the stdlib or platform do it? Use that.
4. Can it be one line? One line.
5. Only then: the minimum code that works.

- No abstraction with one caller. No config for a value that never changes.
- Shortest working diff wins.
```

Every run is `claude -p` in a fresh git repo, then `git diff --stat`. Sonnet 5 on both tasks, Opus 5 on the cache task. The metric is lines added, because that is what I read in the PR.

## First result: everything was identical

Round one came back with the same diff for bare, adjective and ladder. Nine lines each. I was ready to write "the model is already lazy, none of this matters" and go to bed.

Then I noticed every run ended its summary with `Skipped: X, add when Y`. That is not the model's phrasing. That is the phrasing of a plugin I have installed globally, which injects its own version of the ladder into every session through a hook. Including headless ones. My bare run was not bare, it had my rules smuggled in.

`claude -p --setting-sources project` drops user-level plugins and hooks (and my global CLAUDE.md). I checked with a probe prompt, then reran everything.

<aside class="banner banner-info">
If you measure anything about your agent's behaviour, first find out what your plugins inject. A hook that adds context on session start is invisible in <code>-p</code> output and it will quietly ruin your control group.
</aside>

## Second result: the sentence works

Lines added to `api.ts`, clean runs:

| task | model | bare | adjective | ladder |
|---|---|---|---|---|
| retry on 503 | Sonnet 5 | 15 | 8 | 6 |
| cache by id | Sonnet 5 | 13 | 12 | 12 |
| cache by id | Opus 5 | 23 | 15 | 13 |

The one-liner roughly halved the diff on two of three. The joke is funny, but the sentence is not nothing.

What the bare runs added is more telling than the counts. Bare Sonnet on retry made two named constants and a `sleep` helper. The ladder run inlined all of it into a loop:

```ts
for (let attempt = 0; ; attempt++) {
  const res = await fetch(`${BASE}/users/${id}`);
  if (res.ok) return res.json();
  if (res.status !== 503 || attempt === 2) throw new Error(`fetchUser ${id}: ${res.status}`);
  await new Promise((r) => setTimeout(r, 200 * 2 ** attempt));
}
```

Bare Opus on the cache task did the smart thing (cache the promise, not the value, so concurrent calls share one request) and then kept going: an exported `clearUserCache(id?)` that nobody asked for, plus three comments explaining itself. That export is the framework from the joke, in miniature. The adjective run made the same cache and dropped the export. The ladder run split the fetch into a private `load()` and came in at 13 lines with no exports it was not asked for.

## What I am keeping

The adjective tells the model what to avoid. The ladder tells it what to do instead, in order, and that is the difference between a 15-line diff with a constants block and a 6-line loop. I am keeping the ladder and deleting the sentence, since the sentence is a weaker version of rung five.

This is one file and two tasks, so take the numbers as a shape, not a law. But the shape matches what I see in real PRs from my [CLAUDE.md setup](/blog/claude-md-that-works/): rules that give the model a next step beat rules that give it an adjective.

And check your hooks before you trust your baseline. I almost published the wrong post.
