---
title: "Glance - A Self-Hosted Alternative to Claude Artifacts"
date: 2026-08-01
heroImage: ./header.png
path: /blog/glance-self-hosted-artifacts/
published: true
tags: [ai, agents, cloudflare, open-source, developer-tools]
description: "Your agent builds a page, and you screenshot it back into the chat. We built Glance so that stops. Open source, any agent, running on your own Cloudflare account for zero dollars a month."
---

Artifacts spoiled me. Ask for a dashboard, get a rendered page right there in the chat, feels like magic. Then I tried to actually do something with one. Send it to my lead. Open it on my phone. Find it again next Tuesday. And the magic ran out, because the thing lives inside a chat window that somebody else owns.

The worse part was the loop. My agent builds a page, I look at it, I screenshot the bit that's wrong, I paste the screenshot back into the chat and type "the third card, the spacing". Every single time. That is not a workflow, that is me being a very slow API.

So we built [Glance](https://github.com/plivo-labs/glance). It's MIT, it's open source, and it runs on your own Cloudflare account.

## One command up, comments back down

Your agent runs this:

```bash
glance deploy ./report
```

A file or a folder goes up, a URL comes back. That part is boring, plenty of things do that.

The part I use every day is what happens next. You open the URL and you comment on the page like it's a Google Doc, right where the problem is. Then your agent runs `glance comments <space/site>`, reads what you wrote, fixes it, and redeploys. No screenshots. No describing the third card.

```
  agent builds  ->  glance deploy  ->  URL
       ^                                |
  reads comments, fixes  <-  you comment in the browser
```

That's the whole product. Everything else is plumbing to make that loop safe and free.

## Any agent, not just the one I use

The CLI is a single Go binary, so anything that can run a shell command drives it. Claude Code, Cursor, Codex, Cline, Aider, a cron job on a box somewhere, doesn't matter. There's a bundled skill that teaches your agent the commands:

```bash
npx skills add plivo-labs/glance
```

I did not want to build another thing that only works if you're holding the right subscription.

## Why it stands up two Workers

This is the one design decision I'd defend in a room. Everything Glance hosts is code an LLM wrote five seconds ago, which means it is untrusted, full stop.

So the app and the uploaded content are served from two separate origins. Your session cookie physically cannot reach a page your agent generated. Every link is gated behind a short-lived, single-use HMAC token, there is no anonymous tier at all, and markdown renders with raw HTML neutralized under a strict CSP. Two Workers instead of one is the price, and it's cheap.

## Zero dollars a month

Workers, D1, R2 and KV, all on Cloudflare's free tier. Enable R2 on your account, then:

```bash
bun install
bunx wrangler login
scripts/setup.sh
```

It provisions everything, deploys both Workers, runs migrations and prints a bootstrap token. Paste that at `/login` and you're the first superadmin. No Google account needed, no billing page, no seat count.

## Two things I didn't expect to like

**Voice comments.** Record a note in the review composer, Workers AI transcribes it, and the transcript becomes the comment body. So the agent still reads plain text, and I get to just talk at the page.

**`glance.db`.** Hosted pages get a tiny document store with realtime, no keys and no config, brokered through the parent frame so the page never holds a credential. My PR review metrics dashboard is nothing but a cron job doing a `PUT` and a page that updates itself.

We run our own instance at [glance.plivo.com](https://glance.plivo.com), and the code is at [github.com/plivo-labs/glance](https://github.com/plivo-labs/glance). The honest summary of six weeks of work is that I stopped screenshotting things. Go stand up your own.
