---
title: "Rendering Millions of Points in the Browser Without Killing the Tab"
date: 2026-07-06
heroImage: ./header.png
path: /blog/rendering-millions-of-points-in-the-browser/
published: true
tags: [frontend, performance, dataviz, canvas, webgl, charts]
description: "SVG dies at a couple thousand points, canvas gets you to about 100k, and your screen only has a thousand pixels anyway. How to render huge datasets in the browser without freezing the tab."
---

I once dropped a not-even-that-big dataset into a pretty SVG chart library and watched the browser tab turn into a slideshow. Forty thousand points. The laptop fan spun up like it was trying to take off. So I did what any reasonable engineer does, which is blame the library, swap it for a different one, and freeze the tab a second time.

The library was never the problem. I was asking the browser to do something a little bit absurd.

## SVG gives up early

An SVG chart draws every point as a real DOM node. A `<circle>` or a `<path>` segment per value. That is completely fine for a hundred points. At a few thousand, the browser is parsing, laying out, and painting thousands of live elements, and it starts to crawl somewhere around one or two thousand. SVG is gorgeous, accessible, and exactly the wrong tool for big data.

## Canvas is the honest upgrade

Move to a `<canvas>` and you stop minting DOM nodes entirely. You are just painting pixels in a loop.

```js
const ctx = canvas.getContext("2d")
ctx.beginPath()
for (const [x, y] of points) ctx.lineTo(sx(x), sy(y))
ctx.stroke()
```

One element, one paint. Canvas happily handles tens of thousands of points at 60fps. Past 100k or so it starts to sweat, because you are still looping over every point on the CPU on every single frame.

## WebGL when it is genuinely millions

When you truly have millions of points, you hand the work to the GPU with WebGL. It runs 10 to 20 times faster than SVG for this, and it is what every "15 million points at 120fps" demo is quietly doing underneath. The downside is that raw WebGL is miserable to write by hand, so you lean on a library that speaks it for you. A common move is to go hybrid: canvas or SVG for the axes and labels, WebGL only for the firehose of actual data.

## The trick nobody leads with

Here is the thing I wish someone had smacked me with years earlier. Your chart is maybe a thousand pixels wide. If you are plotting fifteen million points into a thousand pixels, you are stacking fifteen thousand points onto every single column of pixels. The screen physically cannot show them. You are burning a GPU to draw things no human will ever see.

So do not. Downsample before you draw. The algorithm to know is [LTTB](https://github.com/sveinn-steinarsson/flot-downsample), short for Largest Triangle Three Buckets. It walks your data in buckets and keeps the one point per bucket that best preserves the shape of the line, tossing the visually redundant rest. In one common benchmark it takes 130,000 points down to 750 and the chart looks identical, while the payload drops from 1.5MB to 13KB.

Most of the time you do not need canvas or WebGL at all. You need to stop shipping a million points to a chart that can only ever show a thousand. This is the same lesson as most [frontend performance work](/blog/frontend-performance-optimisation-enhancement/), which is that the fastest work is the work you talked yourself out of doing.

## So which do I reach for?

SVG under a couple thousand points. Canvas into the tens of thousands. WebGL when it is genuinely millions and interactive. And LTTB almost always, because the fastest point to render is the one you correctly decided not to draw.

Your tab will thank you.
