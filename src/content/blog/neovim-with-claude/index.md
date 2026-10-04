---
title: "How I Wired Claude Code Into Neovim (It's Smaller Than You Think)"
date: 2026-10-03
path: /blog/neovim-with-claude-code/
published: true
heroImage: ./header.png
tags: [neovim, claude, ai, terminal]
description: No AI chat sidebar, no completion plugin. One lazy-loaded plugin, ten keymaps, a few diff tools, and an AGENTS.md so Claude can edit my Neovim config without breaking it.
---

Back in March I wrote a whole post comparing [avante.nvim and CodeCompanion](/blog/neovim-ai-plugins-avante-codecompanion/). I just grepped my config. Neither of them is in it.

What stuck is way smaller. Claude Code already runs in a terminal, it already reads files and makes edits. I didn't need Neovim to become a chat app. I needed Neovim and Claude to know about each other, and I needed good tools to review what Claude did. That's it.

## The plugin

```lua
-- Claude Code IDE integration (native terminal, no snacks)
{
  "coder/claudecode.nvim",
  cmd = {
    "ClaudeCode", "ClaudeCodeFocus", "ClaudeCodeSelectModel", "ClaudeCodeAdd", "ClaudeCodeSend",
    "ClaudeCodeTreeAdd", "ClaudeCodeStatus", "ClaudeCodeStart", "ClaudeCodeStop", "ClaudeCodeOpen",
    "ClaudeCodeClose", "ClaudeCodeDiffAccept", "ClaudeCodeDiffDeny", "ClaudeCodeCloseAllDiffs",
  },
  opts = { terminal = { provider = "native" } },
},
```

[claudecode.nvim](https://github.com/coder/claudecode.nvim) is nothing but the VS Code extension's protocol, rebuilt for Neovim. The author reverse engineered the official extension (using Claude, which is a little funny) and implemented the same WebSocket MCP server. So Claude Code in the terminal thinks it's talking to an IDE. It can see what I have selected, open files in my editor, and show its proposed edits as a diff that I accept or reject.

Two choices in that spec:

1. **`cmd = {...}`** means it loads only when I call one of those commands. Startup stays fast, and if I never touch Claude in a session, the plugin never loads.
2. **`provider = "native"`** uses a plain Neovim terminal split. The README defaults to snacks.nvim, and I wasn't going to install a whole plugin collection just to get a terminal window.

## The keymaps

Everything lives under `<leader>c` in which-key:

```lua
{ "<leader>cc", "<cmd>ClaudeCode<cr>", desc = "Toggle Claude" },
{ "<leader>cf", "<cmd>ClaudeCodeFocus<cr>", desc = "Focus Claude" },
{ "<leader>cr", "<cmd>ClaudeCode --resume<cr>", desc = "Resume Claude" },
{ "<leader>cC", "<cmd>ClaudeCode --continue<cr>", desc = "Continue Claude" },
{ "<leader>cb", "<cmd>ClaudeCodeAdd %<cr>", desc = "Add current buffer" },
{ "<leader>cs", "<cmd>ClaudeCodeSend<cr>", mode = "v", desc = "Send selection to Claude" },
{ "<leader>ca", "<cmd>ClaudeCodeDiffAccept<cr>", desc = "Accept diff" },
{ "<leader>cd", "<cmd>ClaudeCodeDiffDeny<cr>", desc = "Deny diff" },
```

The useful one is `<leader>cs` in visual mode. Select the weird function, hit it, and Claude gets that exact range as context. Way better than typing "look at the function around line 140 in that one file".

`<leader>cs` in normal mode does something else, it adds the file under the cursor from the file tree. Same key, two meanings depending on mode, and which-key keeps me honest about it.

## Reviewing what Claude did

Writing the code is the fast part now. Reading it is the job, so this side of the config got more love than the Claude side.

```lua
{ "<leader>do", "<cmd>DiffviewOpen<cr>", desc = "Diff: open repo view" },
{ "<leader>db", "<cmd>DiffviewOpen origin/main...HEAD<cr>", desc = "Diff: branch vs main" },
{ "<leader>dw", function() require("samsden.workspace-diff").pick() end, desc = "Diff: workspace (all repos)" },
```

`<leader>db` shows the whole branch against main in diffview, which is basically the PR before it is a PR. gitsigns handles the hunk level stuff, stage or reset a hunk right from the buffer.

`<leader>dw` is my own little module. A lot of my tasks span multiple repos (each one a git worktree), so "what changed?" has no single answer. The picker finds every repo under the cwd, runs `git status --porcelain` in each, and dumps all changed files into one fzf-lua list:

```lua
local label = string.format("%s  %s › %s", f.status, rel_repo, f.path)
```

Pick one, it opens the file and runs `Gitsigns diffthis`. 65 lines of Lua, no plugin.

And one tiny thing. In the fzf-lua file picker, `ctrl-y` copies the selected file's path to the clipboard. Find a file, `ctrl-y`, paste it into the Claude prompt. Silly, but it saves a lot of "which file?" back and forth.

## Letting Claude edit the config itself

The last bit is kinda meta. Claude edits my Neovim config too, and 9 commits in that repo have a Claude co-author line. The big one in September collapsed my whole config into lazy.nvim specs and threw out `after/plugin/` and lsp-zero.

Left alone, an agent will "verify" a Neovim change by running `nvim --headless`, seeing no errors, and calling it done. That proves almost nothing. So the repo has an `AGENTS.md` with the verification gotchas spelled out:

```
- `nvim --headless` never attaches LSP clients and never fires VeryLazy/UIEnter.
  To verify LSP, cmp, or the dashboard, run nvim in a pty and dump state
  to a file from a deferred lua callback.
- A `require()` of a lazy plugin anywhere in init/after path silently loads it eagerly.
```

It's the kind of thing an agent gets wrong, and keeps getting wrong, until it's written down. Cheaper to write it once than to catch it every time.

*If you want my general Neovim setup, the [minimal config post](/blog/minimal-neovim-config/) covers the base (minus lsp-zero, that's gone now). This is just the Claude layer on top.*
