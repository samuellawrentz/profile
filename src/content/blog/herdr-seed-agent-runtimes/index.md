---
title: "Herdr Raised $6M. Why Would Anyone Fund a Terminal Multiplexer?"
date: 2026-09-09
path: /blog/herdr-6m-seed-why-agent-runtimes-get-funded/
published: true
heroImage: ./header.png
tags: [ai, cli, tools, herdr]
description: A tmux-for-agents just raised a seed round from Bessemer and YC. I have been building on top of it for months, so here is why the process layer under your coding agents is suddenly worth money.
---

I opened X this morning to see what the fuss was about (OpenAI apparently solved Navier-Stokes, the whole feed was bald jokes, don't ask) and tucked under it was a smaller headline: Herdr raised a $6M seed. Bessemer led, Y Combinator joined, and the angel list has Tobi Lütke from Shopify and Dane Knecht from Cloudflare on it. Solo founder. Apache 2.0. 37k GitHub stars.

That got my attention more than the math did, because I have been running Herdr every day for months. My own tool, grove, is built on top of it.

## Wait, it's a terminal multiplexer?

Yes. Herdr is nothing but tmux that knows what an agent is. One Rust binary, no Electron. You get workspaces, tabs and panes like any multiplexer, sessions survive you closing the laptop, and it can attach to remote machines over SSH.

The bit that matters is that it recognizes the process in the pane. If Claude Code or Codex is running there, Herdr knows whether it is `working`, `blocked` on an approval prompt, `idle`, or `done`. tmux has no idea what a "blocked agent" is. Herdr does, and it exposes all of it over a socket API:

```bash
herdr agent list
herdr pane split --current --direction right --cwd "$PWD" --no-focus
herdr agent start reviewer --kind codex --pane w1:p3
herdr agent wait reviewer --until idle --timeout 600000
```

That last line is the whole product. A script can block until an agent finishes its turn.

## Why I ended up building on it

Most of my work spans three or four repos at once. I wanted one command that gives a task its own git worktree per repo, opens a Herdr workspace with an agent per pane, and lets me drive those agents from a script instead of babysitting tabs. So I wrote grove. It is small and only exists because Herdr does the hard part:

```bash
grove init add-billing api web --branch feat/billing
grove run add-billing "read CONTEXT.md and implement the billing webhook"
grove read add-billing      # what the agent last said, pulled from its transcript
```

`grove run` sends the prompt, waits on Herdr's agent status, and prints the reply. grove owns worktrees and tasks, Herdr owns panes and agent state. I did not have to write a single line of PTY handling, and that is exactly the point. Whoever owns the process layer under the agents gets everyone's tooling built on top of them.

## Okay, but why is it worth $6M?

Because the unit of work changed. Two years ago I typed code and the terminal was where I ran it. Now I write a prompt, an agent runs for forty minutes, and I go do something else. Once one agent runs for that long, the obvious next move is running six. And at six, the bottleneck is not the model anymore, it is you switching between panes trying to remember which one is waiting on a yes.

The IDE was built for humans editing files. Nobody has built the equivalent for humans supervising processes. That is the gap, and a multiplexer that is already on 37k machines is a decent place to start filling it. The GitHub page says Herdr Cloud is "coming soon", which is where I assume the money actually comes back from: all your machines' agents in one place.

## The honest part

It is early software. The CLI changed shape between 0.7 and 0.9 enough that I keep a "known drift" section in my notes. `herdr wait output`, which grove scripted against, is gone, replaced by `agent wait` and `pane wait-output`. And `agent prompt --wait` showed up, which does most of what `grove run` does, so part of my tool got absorbed upstream. Output from a remote pane arrives asynchronously, so `pane run` returns before anything exists and you learn to wait on an end marker. And if an agent runs `git log` in a pane, the pager freezes it until you send `q`. None of this is a dealbreaker, it is just the price of building on something that moves this fast.

Oh, and they are hiring through the terminal instead of a web form:

```bash
ssh apply@join.herdr.dev
```

Which is either a gimmick or the most on-brand thing I have seen this year. Probably both.

*If you are running more than one agent at a time and still doing it in plain tmux, try Herdr for a week. You will not go back.*
