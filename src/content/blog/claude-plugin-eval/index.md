---
title: "claude plugin eval - Finally a Way to Prove Your Skill Does Anything"
date: 2026-09-12
path: /blog/claude-plugin-eval/
published: true
heroImage: ./header.png
tags: [claude-code, ai, tools, testing]
description: Claude Code can now run your plugin or skill against test cases, score the runs, then run the same cases without it and show the delta. I wrote an eval for one of my skills. Here is the file format, and the wall I hit.
---

I have 60-odd skills in `~/.claude/skills`. I could not tell you which of them do anything. Some I wrote in a rush and never touched again, and for all I know Claude would do the same job without the skill loaded. There was no way to check, short of running the prompt twice and squinting.

Now there is. Claude Code shipped `claude plugin eval`. You write test cases, it runs your plugin or skill against them in fresh sessions, scores each run with graders, and then, this is the part I care about, runs the same cases again with the plugin not loaded and reports the difference. If the delta is zero, your skill is decoration.

## Okay, what does a case look like?

The CLI help is the only documentation right now, so here is the layout I worked out. A case is a folder under `evals/` inside the skill or plugin, with a prompt and a folder of graders:

```text
~/.claude/skills/loom-script/
  SKILL.md
  evals/
    deploy-walkthrough/
      prompt.md
      graders/
        html-file.md
        say-lines.md
        real-anchors.md
        teleprompter-quality.md
        skill-fired.md
```

`prompt.md` is frontmatter plus the prompt a user would actually type:

```yaml
---
name: deploy-walkthrough
runs: 2
max_turns: 12
timeout_seconds: 240
allowed_tools: [Write]
---
I just shipped a release and need a 2-minute Loom for the team.
Facts: hodor 3.4.1 to 3.5.0, Jenkins build #8812, p95 on /v1/calls
410ms to 260ms, one rollback on the first attempt. Write the script
I read while recording, saved as an HTML file.
```

Each grader is one markdown file whose frontmatter says how to score. The deterministic ones are the ones I trust:

```yaml
---
type: regex
pattern: "8812"
match: contains
target: files
---
Real anchors from the prompt must survive into the output.
```

There are six types: `regex`, `tool_used`, `tool_order`, `file_exists`, `llm` (a rubric judged by Haiku by default), and `baseline`. The one that makes the with-versus-without comparison honest is this:

```yaml
---
type: tool_used
tool: Skill
with-only: true
---
```

`with-only` means "this grader is an indicator, not part of the score". Without it, the no-skill arm would fail "did the skill fire" every time and the comparison would be meaningless.

## The run

```bash
claude plugin eval . --runs 2 --allow-tools Write \
  --max-cost-usd 3 --no-publish --json /tmp/loom-eval.json
```

`--allow-tools` is you signing off on which gated tools the eval session may really use, because the runs are not mocked. Bash and Write execute for real in an isolated workspace. `--max-cost-usd` is a hard ceiling that aborts with exit 2. `--threshold 0.8` turns the whole thing into a CI gate.

And here is where my afternoon ended:

```text
`plugin eval` is currently in early access
```

Exit 1. My account is not on the list yet. I have the eval written, the graders written, and no numbers. I am publishing this anyway because the file format took an hour to piece together from `--help` and nobody has written it down, and because the eval is sitting in my skill folder ready to run the day the flag flips.

## Why I still think this is the right shape

A skill is nothing but a prompt with a trigger. Prompts drift, models change underneath them, and "it worked when I wrote it" is not a test. The ablation arm is the first tool I have seen that asks the only question that matters about a skill: would the model have done this anyway? If yes, delete it. I wrote about [interrogating what you built before calling it done](/blog/interrogate-what-you-built-before-calling-it-done/), and this is that idea with a scoreboard.

Two cautions from the docs before you go write twenty graders. LLM graders get noisy on long outputs, so prefer regex and file checks for anything bigger than a paragraph. And scaffold scripts run as you, off by default, so only enable `--scaffold` on cases you authored.

*If you have early access, run it on your oldest skill first. I want to know what the delta says.*
