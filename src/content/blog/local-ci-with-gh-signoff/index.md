---
title: "You Are the CI Now - Local CI With gh-signoff"
date: 2026-07-05
heroImage: ./header.png
path: /blog/local-ci-with-gh-signoff/
published: true
tags: [ci, local-ci, github, cli, testing, workflow, productivity]
description: "Local CI with gh-signoff, a GitHub CLI extension from Basecamp. Run your tests on your own fast laptop and sign off with a green commit status instead of waiting on slow, rented cloud CI."
---

I have spent more of my life than I want to admit staring at a spinning yellow dot on a pull request. Push, wait, go make coffee, come back, it failed on a lint rule, push again, wait again. The whole time my laptop, the same machine that ran those exact tests in eight seconds locally, is sitting there doing absolutely nothing.

Then I found `gh-signoff`, a tiny thing from the Basecamp folks. The idea is almost rude in how simple it is.

## The whole pitch in one line

Your dev machine is fast. Cloud CI is slow, expensive, and rented. So run the tests where they are fast, and just tell GitHub you did.

That is it. `gh-signoff` is nothing but a GitHub CLI extension that stamps a green commit status when you say your tests passed.

```bash
gh extension install basecamp/gh-signoff

# run your suite, and when it is green:
gh signoff
```

That green check is the same status a cloud runner would post. GitHub does not care who put it there. If you want to actually gate merges on it:

```bash
gh signoff install
```

Now a PR will not merge until someone runs `gh signoff` on the commit. You can even split it up if you are feeling fancy.

```bash
gh signoff tests lint security
```

## "Wait, isn't that cheating?"

That was my first reaction too. You are just... trusting people to run the tests? Yeah. You are.

Here is the thing though. You already trust your team to push code, to review, to hit deploy. The green dot was never a security guard. It was a receipt. And a receipt you print yourself is still a receipt as long as the team has decent discipline. Merge queues and five-OS matrix builds are wonderful, but a lot of apps are carrying that ceremony for no reason.

## When I would actually reach for this

Not everywhere. If your test suite takes forty minutes and needs to run across Linux, macOS and Windows in parallel, keep your cloud runners. That is exactly what they are good at.

But side projects, internal tools, small repos where the suite finishes before you can tab away? Those do not need a rented robot. They need a fast machine and a bit of trust, and you already have both.

I flipped it on for a personal repo the same evening I read about it. No more staring at the yellow dot. I run the tests, I see them go green, I sign off, I merge. The loop went from minutes to seconds, and the only thing I gave up was the illusion that a cloud server was protecting me from myself.

You are the CI now.
