---
title: "Turn a Book Into Claude Code Skills - What Ten of Them Taught Me About Writing Skills"
date: 2026-09-15
path: /blog/book-to-claude-skills/
published: true
heroImage: ./header.png
tags: [claude-code, ai, skills, tools]
description: Someone turned a business book into ten Claude Code skills. I read all ten, ran one on a real decision, and came away with a template for turning any method you already trust into a skill.
---

I have written a lot of skills. Most of them are tool wrappers: how to drive a browser, how to push through a broken SSH setup, how to talk to a log server. Useful, but they encode incantations, not judgment.

So a repo that turns a whole book into skills got my attention. The book is The Minimalist Entrepreneur, and [the skills repo](https://github.com/slavingia/skills) has ten of them: `/validate-idea`, `/mvp`, `/pricing`, `/first-customers`, `/minimalist-review` and so on. Ten thousand stars, MIT, installs as a plugin. The interesting part is not the business advice. It is that every one of the ten files has the same shape, and the shape is the lesson.

## Okay, what does a chapter look like as a skill?

I cloned it and read all ten. They are 50 to 100 lines each, and they all do this:

```markdown
---
name: minimalist-review
description: Review any business decision through the minimalist
  entrepreneur lens. Use when someone wants a gut-check...
argument-hint: describe your decision or situation
---
You are a business advisor channeling the philosophy of ...

## Principles          # 8 headings, each with 2-3 questions
## Decision Framework  # a table the model must fill in
## Common Advice       # 5 quotable one-liners
## Output              # 1. recommendation 2. minimal version
                       # 3. biggest risk 4. one thing to try this week
```

Four moves. A persona line. The method itself, written as questions rather than statements, so the model interrogates instead of lectures. A table with empty cells, which forces it to actually score the situation. And a numbered output contract, so every run comes back in the same four parts.

The description is doing real work too. Each one says "use when someone wants X", which is what Claude matches your request against. That line decides whether the skill fires at all, and it is the part most people write last and badly, myself included.

## Does it do anything?

You can try a plugin without installing it, which I did not know until this week:

```bash
git clone https://github.com/slavingia/skills /tmp/skills
claude -p --plugin-dir /tmp/skills \
  "/minimalist-review <the decision I am actually sitting on>"
```

My real decision: I built grove, a small Rust CLI that gives each task its own git worktree and drives coding agents through a multiplexer. Zero stars, used daily by exactly me. Do I spend two months making it a paid product with a hosted dashboard, or keep it as a tool and write about it?

Twenty-three seconds later I had the table filled in and a verdict. Don't build it. Nobody has asked. A hosted anything means on-call, billing and support, none of which improves my own workflow. Write two posts, set a response threshold before posting, and if fewer than N people say they would pay, the two months go elsewhere. The line that stung: "Building the dashboard first turns a tool you love into a product nobody asked for, and you resent the maintenance."

I knew that. I did not want to know that. That is what a good review skill does.

## The honest part

A skill is nothing but a prompt with a trigger, and the model would have given me decent advice without it. What the skill adds is the shape: the same table, the same four outputs, every time, so I can compare Tuesday's gut-check with Thursday's. Whether that is worth the file is exactly the question [claude plugin eval](/blog/claude-plugin-eval/) exists to answer, and I still do not have access to run it.

The other caveat is that these are opinion skills. They will confidently apply one book's worldview to anything you feed them. That is a feature if you chose the book. It is a trap if you forget you did.

## What I am taking from it

The template travels. My team has a postmortem method, a release checklist and a way we like PR descriptions written. Each of those is a chapter nobody wrote down, and each would fit in 80 lines: persona, principles as questions, a table to fill, a numbered output. I wrote about [a CLAUDE.md that works](/blog/claude-md-that-works/), and that file is where rules live. Skills are where methods live. I have been conflating the two.

*Pick one method your team already trusts and give it an Output section. That is the whole trick.*
