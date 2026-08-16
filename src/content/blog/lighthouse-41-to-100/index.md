---
title: "Lighthouse 41 to 100 - Delete the Cool Thing First"
date: 2026-08-17
heroImage: ./header.png
path: /blog/lighthouse-41-to-100/
published: true
tags: [performance, lighthouse, css, web-vitals]
description: "I shipped a WebGL fluid simulation on my homepage and Lighthouse gave me a 41. Here is everything I had to delete, measure, and un-animate to get to 100 on a real phone."
---

I shipped a WebGL fluid simulation on my homepage hero. Cursor pushes liquid around, colors swirl, it looked gorgeous. I merged it, felt great, then ran Lighthouse mobile.

41.

The best part? The fluid was only half the problem. The rest was stuff that had been quietly sitting on my site for years, and the fluid just made me finally look.

## Measure before you panic

Lighthouse has a flag that blocks specific requests, so you can price a single feature:

```bash
lighthouse http://localhost:4321/ --blocked-url-patterns "*LiquidEther*"
```

With the fluid blocked: 68. So the simulation cost 27 points, almost all of it Total Blocking Time (40ms → 1,190ms). That is three.js parsing plus WebGL setup on a throttled phone CPU. I even tried tree-shaking three with named imports, bundled it both ways, byte-identical. WebGLRenderer drags the whole core with it.

So the fluid died, one day old. Two blurred radial gradients drifting on CSS transforms replaced it. Nobody can tell the difference from six feet away, and it costs nothing.

## The villain was one line from 2022

The real jump came from a line I forgot existed, sitting at the top of my global stylesheet:

```scss
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Sans...");
```

A CSS `@import` blocks rendering, and my build inlines the global stylesheet into every page, so every single page was carrying a render-blocking font request. Removing it and loading fonts through a non-blocking `<link>` took FCP from 3.7s to 1.1s. One line. Years of slow.

## CLS whack-a-mole

Now the fonts swapped in after first paint, and the layout jumped. CLS 0.34. This became a full evening of whack-a-mole:

1. Built metric-matched fallback fonts with `size-adjust` so Arial pretends to be Sora. Tip: don't trust the font file's `xAvgCharWidth` for this, it told me Sora was 34% wider than Arial. Canvas `measureText` gave the real answer, 9%.
2. Every element was now pixel-identical before and after the swap, and CLS was still 0.09. Recorded raw `LayoutShift` entries at Lighthouse's exact emulation and found it: my header has `flex-wrap: wrap`, and the 2% wider fallback text pushed the icons onto a second row. The entire page sat 56px lower until the font arrived.
3. The hero title wrapped to a different number of lines in the fallback font at phone widths. Fixed by capping the font size so the longest line fits in both fonts.
4. The RSS icon rendered as the literal text "rss_feed" before the icon font loaded, wide enough to shove the header around. A fixed `1em` box on the icon span ended that.

<aside class="banner banner-info">
Lighthouse's CLS attribution gets vague fast. A PerformanceObserver watching layout-shift entries with sources gives you the exact element, its old rect, and its new rect. That is nothing but five lines of Playwright.
</aside>

## Your fade-in is eating your LCP

My hero text had a staggered reveal, everything starts at `opacity: 0` and fades up. Looks lovely. Chrome does not count invisible text as painted, so LCP waited for my animation to finish.

And here is the fun part: when I fixed the title, Chrome just elected the next largest element as LCP, my subtitle, which was also fading in. The fix is to keep LCP candidates visible from frame one and animate transform and blur only. Same energy, and the blog index had `loading="lazy"` on its featured image, the actual LCP element. Lazy-loading the thing above the fold, classic me.

## The damage report

| Metric (mobile) | before | after |
| --- | --- | --- |
| Performance | 41 | 100 |
| FCP | 4.4s | 1.1s |
| LCP | 7.0s | 1.8s |
| TBT | 1,190ms | 28ms |
| CLS | 0.16 | 0.002 |

The pretty animation was the trigger, but the score was buried under a forgotten `@import`, a wrapping header, and my own fade-ins. Delete the cool thing first, then keep digging.
