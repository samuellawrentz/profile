---
title: "A VM as Cheap as a Folder - Why exe.dev Stuck in My Bookmarks"
date: 2026-09-09
path: /blog/exe-dev-a-vm-as-cheap-as-a-folder/
published: true
heroImage: ./header.png
tags: [infrastructure, cli, ai, tools]
description: One ssh command, half a second, and you have a persistent Linux box with its own HTTPS URL. The billing model is the interesting part, not the speed.
---

I bookmark a lot of things on X and read maybe a third of them. This one I read twice. Flavio Copes wrote a deep dive on exe.dev, and the line that got me was not the boot time, it was this: "A VM is as cheap as a folder."

I have been paying for cloud machines for a decade and I have never once thought of one as cheap as a folder. I think of them as a meter running. That mental model is the thing this post is about.

## Okay, but what is it?

exe.dev is nothing but persistent Linux VMs you create over SSH:

```bash
ssh exe.dev new
# half a second later
ssh jitney-of-ottoman.exe.xyz
```

You can size it if you care:

```bash
ssh exe.dev new --cpu 2 --memory 4GB --disk 40GB
```

Every VM gets root, `apt`, `systemd`, a 25GB disk that survives reboots, and an HTTPS URL that is private by default until you share it. It never sleeps. Close the laptop, the process keeps running. If that sounds like a Codespace, the difference is that a Codespace stops after 30 minutes idle and this does not stop at all.

The team behind it is the ex-Tailscale crowd (David Crawshaw, Josh Bleecher Snyder) plus Ian Lance Taylor from Go core. They run Cloud Hypervisor on their own bare metal, not on top of AWS, and boot container images straight into KVM VMs, which is why "new" comes back in under 500ms. I wrote about why microVMs make that possible in [the sandbox post](/blog/microvm-sandboxes-untrusted-code/), so I will not repeat it here. That post was about the disposable end of the spectrum. This is the persistent end.

## The part that actually matters

You do not pay per VM. You pay for a pool.

| Pool | CPU / RAM | Price |
|------|-----------|-------|
| Small | 2 vCPU / 8GB | $20/mo |
| Medium | 4 vCPU / 16GB | $40/mo |
| Large | 8 vCPU / 32GB | $80/mo |

An idle VM takes zero CPU from the pool, only its disk counts. So the number of machines you have stops mattering. One per project. One per experiment. One per agent task. Flavio put it as "you stop watching the meter", and that is exactly the behaviour change. On a VPS I consolidate everything onto one box because a second box is another line on the bill. Here a second box is a folder.

This is the same trick microVMs pulled on the sandbox side: once the unit gets cheap enough, you stop rationing it and your whole workflow changes shape.

## Why I care right now

I just wrote about [Herdr and agent runtimes](/blog/herdr-6m-seed-why-agent-runtimes-get-funded/). The obvious question with agents that run for an hour is where they run. On my Mac, with my credentials and my filesystem, is the honest answer today, and I am not thrilled about it. Flavio moved his agent workspaces onto exe.dev VMs, one per task, and the agent gets its own box with nothing of his on it. Herdr can attach to any of them over SSH. That is a clean setup and I want it.

## The honest part

I have not signed up yet, this is a bookmark that turned into a post, so take it as "why I am interested" and not a review. And the limits are real: no public IP per VM (HTTP and SSH only), one public port per machine, one region per account, no snapshots (you bring your own rsync or Litestream), and you do not pick the kernel. If you need a raw machine, Hetzner is still the answer.

But I do not need a raw machine. I need twelve small ones I never think about.

*If you try it before I do, tell me how the agent-per-VM thing goes. That is the experiment I am going to run first.*
