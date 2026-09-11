---
title: "Obsidian in the Terminal - I Pointed emeraldian at My 199-Note Vault"
date: 2026-09-11
path: /blog/emeraldian-obsidian-tui/
published: true
heroImage: ./header.png
tags: [obsidian, terminal, rust, tools, neovim]
description: A Rust TUI that opens your existing Obsidian vault with backlinks, a force-directed graph and Vim mode. I ran it on my real vault on a headless Linux box. Here is what rendered.
---

My Obsidian vault is not a notes app anymore. It is the memory for my agents. Every gotcha Claude learns about a service lands there as a markdown file, and I wrote about that setup in [the basic-memory post](/blog/basic-memory-mcp-obsidian/). The problem is that I live in a terminal, and the vault lives in an Electron window on my Mac. On the Linux box where most of the agents actually run, there is no Obsidian at all. I have been reading my own second brain with `cat`.

So a TUI for Obsidian vaults was always going to get bookmarked. This one is called [emeraldian](https://github.com/iamrohithrnair/emeraldian), it is Rust and ratatui, and the pitch is nothing but "your vault, the way you already know it": wikilinks, tags, backlinks, callouts, a graph view, Vim mode, all on the plain markdown folder Obsidian already reads. No import, no database, and you can keep Obsidian open on the same folder.

## Okay, but does it actually open a real vault?

I did not test it on a demo folder. I pointed it at the real thing, 199 notes across a dozen folders, on the Linux box that has never had Obsidian installed.

```bash
emeraldian ~/ObsidianVault              # a plain folder works
emeraldian ~/ObsidianVault --graph      # start in the graph
emeraldian ~/ObsidianVault -n "Vault index"
emeraldian --list-vaults                # "No vaults are registered with Obsidian"
```

That last line is the one detail worth knowing. Vault auto-detection reads Obsidian's own config, so without the desktop app installed it finds nothing. Pass the path and it is fine.

What rendered, in a plain `xterm-256color` inside tmux:

- The file tree with note counts per folder (`tools 74`, `plivo-cx 49`, `workflow 24`), the same shape I see in Obsidian.
- A note opened with its frontmatter block, headings, bullets and an outline pane on the right showing the section list. My index note read exactly like it does on the Mac.
- The graph. This was the one I expected to be a gimmick. It is a force-directed graph drawn on a braille canvas, and my vault's actual clusters showed up with labels: the Plivo CX map of content in the middle, `hodor`, `grove` and `Glance` as their own hubs, the odd orphan note out on the edge. It looked like my graph, just in dots.

Memory sat around 8MB per instance. The binary is 6.6MB. The whole thing feels like a tool, not a runtime.

## The honest part

Two things. First, the fancy image rendering needs a terminal with a graphics protocol (Kitty, Ghostty, WezTerm, iTerm2). In my plain terminal the footer said so directly and fell back to half-block mosaics, which is the right behaviour but means the Excalidraw and picture features are not something I saw. Second, I drove this from a headless box through tmux, so I only exercised the read side: opening notes, the graph, navigation by CLI flag. Vim mode, live editing and the built-in assistant panel are untested by me, and I would try editing on a scratch copy of the vault before trusting it with the real one.

Also, `cargo install emeraldian` needs Rust 1.90 and a fair bit of RAM to build. My first attempt got OOM-killed on a box that was busy with other things. The prebuilt binary from the releases page took ten seconds and a checksum. Use that.

## Why this matters more than it looks

For me the value is not "Obsidian but in the terminal". It is that my agents' memory finally has a human-readable front end on the machine where the agents live. Backlinks and the graph are exactly how I want to audit what Claude has been writing into the vault, and now I can do that over SSH instead of syncing the folder to a laptop first.

*If your vault is already plain markdown, there is nothing to migrate. Point it at the folder and press Ctrl+G.*
