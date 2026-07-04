---
title: "Don't Just Ship With AI. Learn With It."
date: 2026-07-04
path: /blog/learn-with-ai/
published: true
heroImage: ./header.png
tags: [ai, learning, productivity, workflow]
description: "Everyone is racing to make AI build for them. The bigger win is making it teach you. A tweet reminded me I have been sleeping on the best thing this stuff does."
---

Everyone I follow is busy making AI *do* their work. Ship faster, close more tickets, one person doing the job of five. I do it too, most days. Then a tweet last week stopped me, and it had nothing to do with output:

> AI won't replace you. But the people who use AI to learn will replace the people who don't.

I bookmarked it, went back to it three times, and realized I have been sleeping on the single best thing this stuff does. Not writing my code. Making me good enough that I don't need it to.

## The part nobody optimizes for

The line came from [a tweet](https://x.com/0xCodila/status/2073150805750714387) riffing on an old Karpathy point: the real trick with AI isn't automation, it's tutoring. And the reason it hits is way older than any model.

Back in 1984 a researcher named Benjamin Bloom ran the numbers on one-on-one tutoring. Kids who got a personal tutor did two standard deviations better than kids in a normal classroom. Two sigma is massive, the average tutored kid beat 98% of the classroom. So we have known for forty years that a personal tutor is the best way to learn anything, and the only catch was it did not scale. One tutor, one student, does not go around for eight billion people.

That catch is just gone now. You have a tutor that read most of the internet, never sleeps, never sighs at your dumb question, and costs less than a coffee. Most of us point it at our to-do list. The fun part is pointing it at the holes in your own head.

## The three moves

The tweet broke it into three, and they line up exactly with why a real tutor beats a lecture.

**Meet you where you are.** A good tutor doesn't start from zero, they find the thing you already get and build a bridge from it. The model will do this on command and almost nobody asks. I live in frontend and backend all day, so when something new shows up I make it come to me:

```
Explain write-ahead logging, but in terms of a React reducer and
an action log, because that's the model already in my head.
Use my words, not the textbook's.
```

Lands in a third of the time, because now I'm learning one new idea instead of a new idea plus a new dictionary.

**Poke where it hurts.** Not too easy, not too hard. A book can't do this, it's written for the average reader and you are not average at anything in particular. So make it find your edge:

```
I think I get event loops. Ask me three questions, each harder
than the last, until I miss one. Then teach me the thing I missed.
Don't flatter me.
```

That last line matters. Left alone these things will tell you your understanding is "excellent." Push it to find where you crack, and the crack is the whole point.

**Do it on repeat.** The 2-sigma thing, on tap, for whatever has you stuck. That is the part that feels a little unfair.

## Learning vs laundering

Here's the trap, and I fall in it constantly. There's a difference between using AI to *skip* the learning and using it to *shrink* the learning.

Skipping is pasting the error, pasting the fix, moving on, and not being able to explain one line of what changed. Feels great. Leaves you exactly as capable as you were at breakfast, and a little more dependent than yesterday. Do that for a year and you've shipped a mountain and grown nothing.

Shrinking is pasting the same error and asking *why*, what the underlying thing is, what you would look for next time without the tool. Same ten minutes. Completely different you at the end of it.

The tell is stupid simple. After the AI helps, close the tab and try to say out loud what just happened. Can't? You laundered it, nothing stuck.

## Where this actually pays off

Not in theory. Concretely:

- Reading code I have never seen. I wrote a whole thing on [understanding a strange codebase with AI](/blog/how-to-understand-complex-code-with-ai/), and this is that same muscle pointed at a repo.
- Neovim corners I have faked for years. I make it explain *why* the config line works instead of copying it, which is how I stopped treating my editor like a [blackhole](/blog/vim-is-a-blackhole/).
- Getting dropped into a service at work. I don't read the docs top to bottom, I have it quiz me on the parts I claim to know.

Shipping with AI is a flat trade, today's output for today. Learning with it compounds, and the gap between you and the person who only ships gets quietly wider every week.

I'm not going to stop building with it. I'm just going to spend a real chunk of that time making it teach me, because in a year those are not the same person.

Bookmark the tweet if you want. Then go ask it to teach you the thing you've been faking for six months.
