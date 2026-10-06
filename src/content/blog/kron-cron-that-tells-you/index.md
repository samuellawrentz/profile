---
title: "kron - I Got Tired of Cron Not Telling Me Anything"
date: 2026-10-05
path: /blog/kron-cron-that-tells-you-what-happened/
published: true
heroImage: ./header.png
tags: [rust, cli, terminal, tools]
description: Cron runs your job and forgets it ever happened. kron is the small Rust tool I wrote that keeps every run's output, exit code and duration one command away.
---

Here is how cron debugging used to go for me. Something didn't happen overnight. Was the job scheduled? Did it run? Did it fail? What did it print? Cron's answer to all four is a shrug. Unless you remembered `>> /tmp/something.log 2>&1` at the end of the line, the output is just gone.

I still have two old lines in plain crontab. One of them ends in `> /tmp/...log 2>&1`. Do as I say, not as I do.

So in March I wrote [kron](https://github.com/samuellawrentz/kron). It is nothing but cron that remembers. One Rust binary, a daemon, and SQLite underneath.

## What it looks like

```
$ kron history dotfiles-pull
Run history for 'dotfiles-pull' (most recent first):

#    STATUS     EXIT CODE    DURATION   STARTED
-----------------------------------------------------------------
1    success    0            3s         2026-10-05 10:30:01
2    success    0            2s         2026-10-05 10:00:01
```

That's a real job on my machine, it pulls my dotfiles every 30 minutes. Every run gets its exit code, duration, stdout and stderr stored. `kron logs dotfiles-pull` shows what the last run printed (in this case, `(no output)`, which is exactly what you want from a `git pull -q`).

I run 14 jobs through kron right now. `kron list` shows each one's runs as successful / total, and several of mine are sitting at things like `18/21` and `27/29`. Under cron, I would have had no idea. That column alone was worth the project.

## The PATH thing

The most common cron bug isn't your script. It's that cron runs it with a nearly empty `PATH`, so the `bun` or `node` that works fine in your shell is suddenly "command not found" at 3am.

kron snapshots your environment when you add the job and replays it at runtime. A job is just a TOML file:

```toml
[job]
name = "dotfiles-pull"
command = "git -C ~/dotfiles pull --ff-only -q"
schedule = "*/30 * * * *"
enabled = true

[job.env]
PATH = "..."
```

I trimmed that `PATH` for the post. The real one has about 30 entries, every bin directory my shell ever picked up, including a pile of Claude Code plugin folders. Ugly, but it means "works in my shell" and "works in kron" are the same thing.

## The rest of it

The other bits:

1. **Human schedules.** `kron add "every day at 2am" ./backup.sh` works, so does plain cron syntax.
2. **`kron run <job>`** to fire it right now instead of waiting for the schedule, and **`kron test`** to run it without recording anything.
3. **Alerts.** A Telegram, Slack or webhook ping on failure, per job. Mine go to Telegram.
4. **No overlaps.** If the last run is still going, the next trigger is skipped instead of piling up.
5. **`kron import`** reads your existing crontab and converts it. (Yes, I should run it on those two leftover lines.)

Old runs get pruned automatically, so the SQLite file doesn't grow forever.

## Built with an agent, for agents

Honest part, 71 of kron's 80 commits have a Claude co-author line. I drove the design and the reviews, Claude typed most of the Rust. The commit right before the last release is literally titled "address critical and high issues from code review", which tells you how that went. Write fast, then review hard.

It also means kron was built to be driven by agents. The output is deterministic, every command takes a job ID or a name, config is plain files, and the README has a "For LLMs" section with the exact install and verify commands. I also keep a small kron skill in Claude Code, so "schedule this every morning" turns into a `kron add`, and "did it run?" turns into `kron history`.

*If you have a crontab line ending in `/tmp/something.log`, you know who you are. Give kron a try.*
