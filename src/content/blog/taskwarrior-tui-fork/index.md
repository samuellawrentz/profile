---
title: "I Forked taskwarrior-tui Until It Felt Like Linear"
date: 2026-10-04
path: /blog/taskwarrior-tui-fork-linear-style/
published: true
heroImage: ./header.png
tags: [taskwarrior, terminal, tui, productivity]
description: Taskwarrior holds my tasks, timewarrior holds my hours, and a fork of taskwarrior-tui glues them together with Linear-style pickers, a worked-time column and a pomodoro tab.
---

There is a fork of taskell (a kanban board for the terminal) sitting in my GitHub from 2023. That was attempt one. My `.taskrc` says it was created on 2/2/2024, and Taskwarrior is the one that stuck, because it lives where I already am, the terminal.

The CLI is great, but day to day I live in [taskwarrior-tui](https://github.com/kdheepak/taskwarrior-tui). And this September I ended up forking it, because I kept wanting it to behave like Linear.

## First, the config does a lot

Before touching Rust, a lot can be done in `.taskrc` alone. These are the bits doing real work for me.

**Custom fields (UDAs).** Half my tasks are not mine to do, they are mine to chase. So every task can have an owner and a "from":

```
uda.owner.type=string
uda.owner.label=Owner
# who asked for it
uda.from.type=string
uda.from.label=From
```

**Urgency that knows whose turn it is.** If I've replied or delegated something, it shouldn't sit at the top of my list making me feel guilty:

```
# ball is in someone else's court: sink below own work
urgency.user.tag.replied.coefficient=-5.0
urgency.user.tag.delegated.coefficient=-5.0
```

Tag it `+replied` and it sinks. When they get back to me, remove the tag, and it floats up again. Simple, and it keeps the top of the list for things I can actually do something about.

**Contexts.** `work`, `personal`, `followup`, and a `me` context that only shows things owned by me or not assigned yet:

```
context.me.read=( owner:me or owner.none: or project.none: )
```

## Time goes into timewarrior

Timewarrior ships an `on-modify.timewarrior` hook for Taskwarrior. Start a task, timewarrior starts tracking. Stop it, tracking stops. My copy has one extra line:

```python
# taskwarrior-tui reads this tag to show time worked per task
tags.append(json_obj['uuid'])
```

Every timewarrior interval now carries the task's UUID as a tag. That one line is what makes the fork's best feature possible.

## What the fork adds

The fork lives on a branch in [my taskwarrior-tui fork](https://github.com/samuellawrentz/taskwarrior-tui/tree/feat/fuzzy-search), about a dozen commits on top of upstream:

1. **A Worked column.** The TUI sums timewarrior time per task UUID and shows it right in the list. No more guessing how long that "quick fix" really took. (Spoiler, it's never quick.)
2. **Linear-style pickers.** Press `o` and a filterable popup of owners shows up, type a few letters, Enter, done. `p` for project, `T` for tags, `D` for due, `w` for wait. It works on multi-select too.
3. **A Pomodoro tab**, with 25/5, 50/10 and 10/2 presets, and break time logged to timewarrior as `break`.
4. **A Time tab** with a weekly timewarrior report per day and per task, plus a chore picker for lunch, workout, standup.
5. **Fuzzy search** across title, project, tags and annotations.
6. **A notes-style detail pane** with clickable links, and `E` to edit notes in nvim.

The pickers are all config, no hardcoded fields:

```
uda.taskwarrior-tui.picker.o=owner
uda.taskwarrior-tui.picker.p=project
uda.taskwarrior-tui.picker.D=due:eod,tomorrow,2d,eow,10d,eom,eoq
uda.taskwarrior-tui.picker.w=wait:1d,3d,1w,2w
```

`attr` alone pulls the values live from Taskwarrior. `attr:list` gives fixed presets. `none` clears it.

## Shortcuts are just shell scripts

taskwarrior-tui can bind number keys to scripts, and it appends the selected task UUIDs as arguments. So most of my shortcuts are one line:

```bash
#!/usr/bin/env bash
task rc.confirmation=off rc.bulk=0 "$@" modify wait:1w
```

`1` parks a task for a week, `2` makes it due tomorrow, `3` tags it `+comms`. The fancier one is `5`, which links all selected tasks to each other through a `related` field. Not a dependency, nothing blocks anything, just "these are about the same thing". The fork's detail pane then shows those related tasks by ID and description.

## One fix went upstream

On Taskwarrior 3, taskwarrior-tui was dropping the first context in the list. My workaround was a fake "sacrificial" context at the top of `.taskrc` so the real ones survived. I sent the fix upstream, it got merged, and I deleted the hack. Best kind of commit.

The rest of the fork is way too opinionated to send upstream. That's fine, that's what forks are for.

*If your todo app keeps getting abandoned, try one that lives in the terminal. Worst case, you fork it.*
