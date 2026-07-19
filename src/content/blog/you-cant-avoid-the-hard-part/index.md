---
title: "You Can't Avoid the Hard Part - When to Take the Big Swing"
date: 2026-07-06
heroImage: ./header.png
path: /blog/you-cant-avoid-the-hard-part/
published: true
tags: [engineering, decision-making, architecture, leadership, career]
description: "The safe incremental path feels responsible, but when a project has a hard part you keep engineering around, it just delays the failure. A simple test for when to stop refactoring and take the big swing."
---

I have spent entire quarters heroically avoiding the one hard part of a project. Not on purpose. It just feels so reasonable to ship the easy 80% first, pick off the low-risk tickets, show a nice burndown chart, and quietly hope the scary part sorts itself out by the time we get there. It never sorts itself out.

## The safe path is often just a slow failure

Most engineering advice says prefer the incremental option. Refactor, do not rewrite. And usually that is correct. Most big rewrites are a disaster, something like 60 to 80% get cancelled or miss the point entirely, and the ones that do ship take two or three times as long as anyone promised. Incremental is the responsible default and I will defend it most days.

But there is one situation where incremental is a trap. When a project has a genuine hard part, and your safe little plan is quietly built to route around it, you are not reducing risk. You are just pushing the failure further out and making it more expensive to finally hit.

## The test I use now

Here is the question I ask before I commit to the safe plan. Hold the hard part constant. Pretend it is already solved. Now look at the rest of the plan and ask if everything else falls into place.

If the answer is yes, then the hard part is not a risk to manage. It is the project. Everything else is set dressing. This is the same muscle as [knowing which problem is actually worth solving](/blog/the-part-of-the-job-ai-cant-grade/), and if the whole thing hinges on that one problem, chipping away at the edges for six months is the risky move, not the swing.

If the answer is no, if solving the hard part still leaves you with three other unsolved messes, then great, it was never the crux, and incremental really is safer. Go do that.

## Why we dodge it anyway

We dodge the hard part because it is hard, obviously. But also because the safe path is legible. It has tickets. It looks like progress in a standup. Taking the swing looks like a team that went quiet for a month and might come back with nothing, and that is a genuinely scary thing to sign up for.

Which is why the swing needs two things the safe path does not. First, people who are actually fired up by that specific problem, not people who got talked into it by consensus. Consensus builds the safe plan. Obsession solves the hard part. Second, someone with enough standing to personally own the risk, so that when the team goes quiet for a month, they are not spending that month defending themselves.

## The part I keep relearning

The hard part is patient. You can patch its symptoms, wrap it in retries, bolt on a cache, split the container, and it will sit there looking handled right up until it takes the whole thing down. The one honest question is whether you can truly ship without solving it. If you cannot, you were always going to do the hard part. The only thing you got to choose was when, and how much it cost by then.

Do the hard part first.
