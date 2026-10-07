---
title: "My lazygit Config - Branch Menus, Ticket Commits and a Dinosaur"
date: 2026-10-06
path: /blog/lazygit-config-custom-commands/
published: true
heroImage: ./header.png
tags: [git, lazygit, terminal, cli]
description: 73 lines of YAML that turned lazygit from "nice git UI" into the place I make every commit. Custom commands, a branch-type menu, ticket-prefixed commits and AI messages.
---

My lazygit config landed in my dotfiles in August 2025 with the very creative commit message "Added lazygit config". It has grown to 73 lines since, and almost all of them are custom commands.

Lazygit's default UI is already good. The magic is `customCommands`, where any key can run any shell command, with prompts and menus in front of it. Here's what mine does.

## Opening it from anywhere

`cmd+g` opens lazygit as a full-screen popup over whatever pane I'm in (the keybind is in my [Herdr setup](/blog/my-herdr-setup/)). It runs a tiny picker script first:

```bash
#!/usr/bin/env bash
if git rev-parse --git-dir >/dev/null 2>&1; then
  lazygit
else
  while repo=$({ grep "^ *- " ~/.local/state/lazygit/state.yml | sed "s/^ *- //"; find . -maxdepth 1 -type d ! -name '.' -exec realpath {} \;; } | sort -u | fzf --prompt="Pick a repo> " --query="$(pwd)"); do
    lazygit -p "$repo"
  done
fi
```

Inside a repo, it just opens lazygit. Outside one, it pulls lazygit's own list of recent repos from its state file, adds the folders around me, and pipes all of it into fzf. Quit lazygit and you land back in the picker for the next repo. Very handy when a task touches three repos.

## A menu for branch names

```yaml
- key: 'n'
  context: 'localBranches'
  prompts:
    - type: 'menu'
      title: 'What kind of branch is it?'
      key: 'BranchType'
      options:
        - name: 'feature'
          value: 'feature'
        - name: 'fix'
          value: 'fix'
        # task, release, research, temp...
    - type: 'input'
      title: 'What is the new branch name?'
      key: 'BranchName'
  command: "git checkout -b {{.Form.BranchType}}/{{.Form.BranchName}}"
```

Press `n` in branches, pick the type, type the name, done. No more `feture/` branches. And the prefixes get colors in the branch list:

```yaml
branchColorPatterns:
  '^feature/': '#11aaff'
  '^fix/': '#ff5733'
  'main': 'red'
```

`main` in red, which feels right.

## Commits with a ticket number

Every commit at work starts with a ticket ID in brackets, like `[ABC-1234] fix the thing`. Typing that over and over is boring. So `ctrl+a` in the files panel opens a prompt that suggests IDs from my recent history:

```yaml
- key: '<C-a>'
  context: 'files'
  prompts:
    - type: 'input'
      title: 'Enter Ticket Number'
      key: 'Tnum'
      initialValue: '[ABC-'
      suggestions:
        command: "git log -n 10 -m | grep -o '\\[ABC-\\d\\d\\d\\d\\]' | awk '!seen[$0]++'"
    - type: 'input'
      title: 'Enter Commit Message'
      initialValue: '{{index .PromptResponses 0}} '
      key: 'Message'
```

(Our real prefix is different, I swapped it out.) The `awk '!seen[$0]++'` dedupes the IDs while keeping order, so the ticket I'm working on is usually the first suggestion. The second prompt starts pre-filled with the ticket, so I only type the message.

## The dinosaur

`ctrl+k` is the lazy option:

```yaml
- key: '<C-k>'
  context: 'files'
  description: 'Commit 🦕'
  command: 'diny commit'
  output: 'terminal'
```

[diny](https://github.com/dinoDanic/diny) reads the staged diff and writes a commit message for it. Free, no API key. Hence the dinosaur in the description.

Before diny, I had my own script for this, `lgsc`. It sent the staged diff (with `--diff-algorithm=minimal` to keep it small) through opencode to a small open model, and asked for three commit messages, one per line. Lazygit showed them as suggestions and I picked one. It worked, and in December 2025 I swapped it for diny anyway. One less script in my dotfiles.

## The small stuff

```yaml
os:
  edit: 'nvim -c "cd $(git rev-parse --show-toplevel)" {{filename}}'
git:
  autoFetch: false
  autoRefresh: false
```

`e` on a file opens nvim with the working directory set to the repo root, so my fuzzy finder and LSP see the whole project, not just the file's folder. Auto fetch and auto refresh are off, and `F` in branches runs `git fetch --prune` when I actually want it.

That's all of it. If you've never opened your lazygit config, start with one custom command for the git thing you type most. That's how mine got to 73 lines.

*Happy committing!*
