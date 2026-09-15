---
title: "hmx - Terminal Mind Maps in Plain Text, and Why I Ported h-m-m to Go"
date: 2026-09-15
path: /blog/hmx-terminal-mind-maps/
published: true
heroImage: ./header.png
tags: [terminal, go, tools, productivity, taskwarrior]
description: I kept my brainstorm maps in h-m-m for a year. Then one map got too big and could not link to another. So I ported it to Go, added links, a list screen and extract, and kept everything plain text.
---

I think in trees. Every plan I make starts as a root node with branches hanging off it, and for the last year those trees lived in [h-m-m](https://github.com/nadrad/h-m-m), a tiny PHP mind mapper that runs in the terminal. One file per map, tabs for depth, `hjkl` to move around. I loved it.

Then my `backend` map grew a branch called `infra`, which grew a branch called `redis`, and suddenly I was scrolling sideways through a 60-node tree to find the thing I opened the map for. h-m-m has no idea that other maps exist. You get one file, and that file is your whole world.

Also, it needs PHP. Fine on my Mac, a chore on the Linux box where most of my stuff runs now, a no on a Raspberry Pi.

So I did the thing you should never do, and rewrote it. Meet [hmx](https://github.com/samuellawrentz/hmx).

## What changed, what did not

The layout engine, the keys, the file format, all the same. An h-m-m map renders identically in hmx, because I ported the layout functions one by one with the same names and the same arithmetic, then checked the Go output byte for byte against tmux captures of the PHP version. Those captures are frozen in the repo as golden files.

What is new is everything one map cannot do on its own:

- **A list screen.** `hmx` with no argument shows every map in the folder, nested under whoever links to it, with node count and age.
- **Links.** `[[infra]]` in a node title jumps to `infra.hmm`. `[[infra#redis]]` lands on that node. `Backspace` comes back, and a breadcrumb shows the trail.
- **Extract.** `Ctrl-E` on a node moves the whole subtree into its own map and leaves a link behind. This is the one I wanted most. Big maps stay small.
- **Bodies.** A node can carry a few lines of notes. `E` opens them in `$EDITOR`, they show in a pane at the bottom.

Here is the whole file format. This is `backend.hmm`, with tabs shown as arrows:

```
backend
→	auth
→	→	JWT rotation
→	→	> Rotate every 24h.
→	→	refresh
→	[[infra#redis]]
```

And this is what it looks like on screen:

```
                 ╭── auth  [+]
   backend ──────┤
                 ╰── [[infra#redis]]
```

Press `Enter` on the link:

```
backend › infra [1]
               ╭── redis
   infra ──────┤
               ╰── postgres
```

No ids. No index. No database. The backlink engine is `grep`. If you rename a map, hmx rewrites `[[old` to `[[new` across the folder and tells you how many files it touched. Sync is `git`, hmx never talks to a network.

## The rules I wrote before the code

I have shipped enough side projects that turned into feature soup, so this time I wrote a `foundations.md` first and checked every change against it:

1. Plain text, readable by upstream h-m-m and by `cat`.
2. One map in memory. No tabs, no splits.
3. Links are text.
4. Fewest keys. h-m-m has 86 bindings, hmx has 24 on the map and 7 on the list.
5. No editor inside the editor. Bodies go to `$EDITOR`.
6. Shortest diff wins, once the problem is understood.

The "out of scope" list is longer than the feature list. No graph model, no backlink panel, no drawn arrows, no templates, no timestamps, no sync. Every one of those was tempting, and every one of them is what makes the other tools feel heavy.

## How the port actually went

I did not go straight to Go. Version one was a PHP fork with the new screens bolted on. Ugly, but it proved the spec and gave me an oracle. Same fixtures, same tmux smoke tests, both binaries had to pass. Once Go passed everything, PHP got retired to a git tag.

The Go side is one `package main`, flat files, one `App` struct where PHP had a global array. Two dependencies, `tcell` and `go-runewidth`. The binary is 5 MB and starts before you finish pressing Enter.

<aside class="banner banner-info">
Install: <code>go install github.com/samuellawrentz/hmx@latest</code>. Maps live in <code>~/maps</code> by default, one <code>.hmm</code> per map. There is a landing page with more screens at <a href="https://hmx.samuellawrentz.com">hmx.samuellawrentz.com</a>.
</aside>

## The Taskwarrior bit

My team lead workload lives in Taskwarrior, so I wired the two together in the smallest way I could. A node with `[[task:uuid8]]` in its title renders a `☐` or `☑`, red when overdue. `t` on a node opens a picker over pending tasks and links one, or creates a task from the node title. That is it. Nothing else writes to Taskwarrior, and without a `task` binary everything just renders as a plain box.

I already put my [Obsidian vault in the terminal](/blog/emeraldian-obsidian-tui/) this month. Now the mind maps are there too, in a folder of text files I can `grep`, `diff` and commit. Trees, all the way down.
