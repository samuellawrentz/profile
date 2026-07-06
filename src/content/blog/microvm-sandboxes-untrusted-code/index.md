---
title: "A Sandbox That Boots in 60ms - MicroVMs vs Containers for Untrusted Code"
date: 2026-07-06
heroImage: ./header.png
path: /blog/microvm-sandboxes-untrusted-code/
published: true
tags: [infrastructure, sandbox, microvm, containers, security, performance]
description: "For years you had to pick between fast containers and safe VMs. MicroVMs quietly killed that tradeoff, booting a fully isolated Linux in under 60ms. Why a container was never really a sandbox."
---

For an embarrassingly long time, my mental model of a sandbox was a Docker container with the network switched off. Untrusted code goes in, I feel clever, everyone goes home happy. It took me way too long to notice the hole in that plan.

A container shares the host kernel. One kernel bug, one clever escape, and your cozy little sandbox is the whole machine. For your own code that is fine. For code you did not write, it is a bad bet.

## The tradeoff everyone just accepted

The old rule was fast or safe, pick one.

Containers boot in milliseconds and cost almost nothing, but they share a kernel, so the isolation is thin. Real virtual machines give you a true kernel boundary, but they boot in seconds and eat hundreds of megabytes, so you are never going to spin up a thousand of them. So we all quietly agreed to run untrusted code in containers and not think about it too hard.

## MicroVMs quietly deleted the tradeoff

A microVM is a virtual machine on a diet. Minimal virtual hardware, a lean guest kernel, KVM doing the real work underneath. AWS started this with [Firecracker](https://firecracker-microvm.github.io/) to run Lambda. The payoff is a genuine hardware-backed kernel boundary that boots in tens of milliseconds instead of seconds.

The one that made me sit up is [CubeSandbox](https://github.com/TencentCloud/CubeSandbox), which Tencent just open-sourced under Apache 2.0, built on RustVMM and KVM. Cold start under 60ms, versus roughly 200ms for Docker. Around 5MB of memory overhead per instance, so a single box runs thousands of them. Every sandbox gets its own guest kernel, so the whole category of container-escape bugs simply does not apply. Network isolation between sandboxes is handled with eBPF.

## Why this is bigger than the AI hype

The headline everywhere is "run thousands of AI agents," which is fine, but it buries the real story. This is the old, unglamorous problem of safely running code you do not trust. LLM output, arbitrary user submissions, per-PR CI, plugin systems, online code playgrounds. Every one of those wants VM-grade isolation at container speed and price, and until recently that combination did not exist.

## The part that actually makes it spread

The clever move is not the benchmark. It is that CubeSandbox speaks the E2B SDK, so you migrate by swapping one URL. Keep your code, change an environment variable, done. That is how infrastructure actually wins, not by being 3% faster in a chart but by being a one-line switch away.

## Am I putting it in production tomorrow?

No. It is new, it is from a big cloud vendor with its own agenda, and I have not put it under real load. But the shape of the thing is the point. The fast-or-safe tradeoff that defined sandboxing for a decade is basically gone, and if you are still isolating untrusted code with a container and a hopeful expression, it is worth understanding why that was never quite enough.

A container is not a sandbox. It never was.
