---
title: "Don't Just Ship With AI. Learn With It."
date: 2026-07-04
path: /blog/learn-with-ai/
published: true
heroImage: ./header.png
tags: [ai, learning, productivity, workflow]
description: "Everyone is racing to make AI build for them. The bigger unlock is making it teach you. A tweet reminded me that the people who use AI to learn are the ones who pull away from everyone else."
---

Almost everything I read about AI right now is about output. Ship faster, generate more, close more tickets, one person doing the work of five. I do plenty of that myself. But a tweet stopped me the other day, and it was not about shipping at all:

> AI won't replace you. But the people who use AI to learn will replace the people who don't.

I bookmarked it, sat with it, and realized I had been under-using the single most valuable thing this technology does. Not writing my code. Making me the kind of engineer who does not need it to.

## The thing nobody is optimizing for

The framing came from [a tweet riffing on Andrej Karpathy's long-running point](https://x.com/0xCodila/status/2073150805750714387): the real leverage of AI is not automation, it is tutoring. And the reason that matters is older than any model.

Back in 1984, an education researcher named Benjamin Bloom published what he called the "2 Sigma Problem." Students who got one-on-one tutoring performed two standard deviations better than students in a normal classroom. Two sigma is enormous. The average tutored student ended up beating 98 percent of the students who sat in the regular class. We have known for forty years that personal tutoring is the highest-leverage form of learning that exists. The only problem was that it did not scale. One tutor, one student, does not fit eight billion people.

That constraint is gone. You now have a tutor that has read almost everything, is available at 2am, never gets bored of your questions, and costs less than lunch. Most people are pointing it at their to-do list. The interesting move is pointing it at the gaps in your own head.

## The formula that actually works

The tweet broke it into three steps, and they line up exactly with why real tutoring beats a lecture:

**1. It adapts to what you already know.** A good tutor does not restart from zero. They find the thing you understand and build a bridge from it. AI does this on command, and most people never ask it to. I do backend and frontend work all day, so when I want to understand something unfamiliar I tell it what I already know and make it meet me there:

```
Explain how database write-ahead logging works, but explain it
in terms of a React reducer and an action log, because that is
the mental model I already have. Use my language, not the textbook's.
```

The concept lands in about a third of the time, because I am not learning a new domain and a new vocabulary at once. I am learning one new idea, wired into scaffolding I already trust.

**2. It challenges you at your exact level.** Not too easy, not too hard. This is the part a book or a course cannot do, because they are written for the average reader and you are not average at anything specific. Ask the model to find your edge:

```
I think I understand event loops. Ask me three questions that
get progressively harder until I get one wrong, then teach me
exactly the thing I got wrong. Do not flatter me.
```

That "do not flatter me" line matters. Left alone these models will tell you your understanding is excellent. Push them to find where you break, and the break is where the learning happens.

**3. It scales the one thing that used to be scarce.** The whole 2-sigma effect, on demand, for whatever you are stuck on. That is the part that feels almost unfair.

## Learn with it, do not launder through it

Here is the trap, and I fall into it constantly. There is a difference between using AI to *skip* the learning and using AI to *compress* it.

Skipping is when I paste an error, paste the fix, move on, and could not explain a word of what changed. It feels productive. It leaves me exactly as capable as I was that morning, and slightly more dependent than I was the day before. Do that for a year and you have shipped a lot and grown zero.

Compressing is when I paste the same error and ask *why* it happened, what the underlying model is, and what I would look for next time without the tool. Same amount of time. Completely different result. One buys me a fix. The other buys me a fix and a permanent upgrade to the engineer who hits that class of bug next month.

The tell is simple. After the AI helps you, close the window and try to explain what happened out loud. If you cannot, you laundered the work. You did not learn anything.

## Where I actually use this

Not in the abstract. Concretely, this is where the tutor loop has paid off for me:

- **Reading unfamiliar code.** I wrote a whole piece on [using AI to understand a complex codebase](/blog/how-to-understand-complex-code-with-ai/). That is this exact muscle, pointed at a repo instead of a topic. Ask it to explain the system through the parts you already recognize.
- **Neovim internals.** I have spent years in Vim and still hit corners I do not understand. Instead of copying a config snippet, I make it explain *why* the snippet works, which is how I stopped treating my editor like a black box.
- **New domains at work.** When I get dropped into a service I have never touched, I do not read the docs top to bottom. I have the model quiz me on the parts I claim to understand and teach me the parts I clearly do not.
- **The concepts under the tools.** It is easy to learn that a command works. It is more valuable to learn why, because the why transfers and the command does not.

## The compounding part

Shipping with AI is a flat trade. You get today's output today. Learning with AI compounds. Every gap you close makes the next thing faster to learn, and the gap between you and the person who only ships gets wider every week, quietly, in a way that does not show up in a single day's work.

I am not going to stop using AI to build. But I am going to spend a real slice of that time making it teach me instead, because in a year the people who did that will not be competing with the people who did not. They will just be somewhere else entirely.

Bookmark the tweet if you want. Then go ask it to teach you the thing you have been faking for six months.
