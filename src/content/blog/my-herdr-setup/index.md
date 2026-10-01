---
title: "My Herdr Setup - Keybinds, Popups and Hopping Between Agents"
date: 2026-10-01
path: /blog/my-herdr-setup/
published: true
heroImage: ./header.png
tags: [herdr, terminal, cli, ai]
description: One config file, a ctrl+a prefix, and a few keys that jump between coding agents across every workspace. Here is the Herdr setup I use every day.
---

A few weeks back I wrote about [why Herdr raised a seed round](/blog/herdr-6m-seed-why-agent-runtimes-get-funded/). A couple of people asked the obvious follow up, "okay, but what does your setup actually look like?" Fair. Here it is.

Some context first. For a long time I lived in tmux, lately [inside Ghostty](/blog/ghostty-tmux-productivity/). In July I ported the whole `.tmux.conf` to Herdr in one commit (the full migration story is the next post). The whole setup is one `config.toml`, symlinked from my dotfiles into `~/.config/herdr/`.

## The mental model

Herdr has three levels, and I mapped them straight onto what my fingers already knew from tmux:

1. **Workspace** = tmux session. One per project.
2. **Tab** = tmux window.
3. **Pane** = pane. Usually one has a coding agent in it, the others are shells, a dev server, or nvim.

The prefix stays `ctrl+a`, because muscle memory is not something you argue with.

## Moving around

```toml
[keys]
prefix = "ctrl+a"
cycle_pane_previous = "ctrl+h"
cycle_pane_next = "ctrl+l"
previous_agent = "ctrl+comma"
next_agent = "ctrl+period"
last_pane = "ctrl+space"
focus_agent = "prefix+alt+1..9"
```

`ctrl+h` / `ctrl+l` cycle panes in the current tab, nothing new there. The fun ones are `ctrl+,` and `ctrl+.`. They jump to the previous or next **agent**, across every workspace, in sidebar order. I don't care which tab the agent lives in. I care that one of them is waiting on me, and two keys take me there.

`ctrl+space` jumps back to the pane I was just in. tmux had `last-window`, which only remembers the window. Herdr remembers the exact pane, even across workspaces. So the loop is: `ctrl+.` to the agent that finished, read, reply, `ctrl+space` back to whatever I was doing.

I also sort the agent sidebar by priority instead of creation order (`agent_panel_sort = "priority"` under `[ui]`).

## Cmd keys, the hacky part

On my Mac I wanted Cmd shortcuts, but Herdr runs inside Ghostty, and Ghostty swallows Cmd. So Ghostty translates them into bytes Herdr understands:

```
keybind = cmd+s=text:\x01\x73
keybind = cmd+b=text:\x01\x7a
keybind = cmd+control+h=text:\x1b[57376;1u
keybind = cmd+control+l=text:\x1b[57377;1u
keybind = ctrl+semicolon=text:\x01\x1b[49;3u
```

`\x01` is nothing but `ctrl+a`, so `cmd+s` sends prefix + `s` (the session navigator) and `cmd+b` sends prefix + `z` (zoom). `ctrl+;` sends prefix + `alt+1`, which focuses the first agent in the sidebar.

The weird looking ones are F13 and F14 in kitty keyboard protocol form. Herdr won't bind a bare printable key, and it only parses F13+ in that `\x1b[57376;1u` shape, not the old `\x1b[25~` style. Now `cmd+ctrl+h` / `cmd+ctrl+l` flip between workspaces:

```toml
previous_workspace = "f13"
next_workspace = "f14"
```

## Popups

This is where Herdr beats my old tmux config. A custom command can open as a floating popup over whatever you are doing:

```toml
[[keys.command]]
key = "ctrl+f"
type = "popup"
command = "grove tui --popup"
width = "80%"
height = "80%"

[[keys.command]]
key = ["prefix+g", "f16"]
type = "popup"
command = "cd \"$HERDR_ACTIVE_PANE_CWD\" && bash ~/dotfiles/scripts/lazygit-picker.sh"
width = "100%"
height = "100%"
```

`ctrl+f` opens grove, my little task launcher that spins up worktrees and agents. `cmd+g` opens lazygit full screen in the current pane's directory (`$HERDR_ACTIVE_PANE_CWD` is handed to you for free). If I'm not inside a repo, the picker script pipes recent repos into fzf first. Quit lazygit and you're back in the pane, no tab left behind.

One more, a `shell` command instead of a popup. `cmd+ctrl+w` sends F15, which breaks the current pane out into its own tab:

```toml
command = "herdr pane move \"$HERDR_ACTIVE_PANE_ID\" --new-tab --focus"
```

## How it knows about Claude

When you install the Claude Code integration, Herdr drops a hook script into `~/.claude/hooks/`. On session start it reports the session ID and transcript path to Herdr over its socket. That's how the sidebar shows `working` / `blocked` / `idle` per pane, and how `herdr agent wait` knows when a turn is done. It even skips subagent events, so a finished subagent can't mark an idle pane as working again. I didn't write any of that, I just stopped seeing stale status dots.

## The small stuff

```toml
[terminal]
new_cwd = "follow"

[theme]
name = "terminal"
```

New splits and tabs open in the current pane's directory, and the theme just follows Ghostty's palette, so I theme one thing, not two. I also freed bare `ctrl+x` for nvim and moved close-pane to `prefix+x`.

That's the whole thing, about 90 lines of TOML. `herdr config check` tells you if you broke it, which I appreciate more than I'd like to admit.

*Tomorrow: what I left behind in tmux, and what I still miss.*
