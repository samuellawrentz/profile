---
title: "The Magic of Smooth Scrolling: Two Lines of CSS That Transform User Experience"
path: /blog/smooth-scrolling-css-scroll-behavior/
description: Transform your website's navigation with just two lines of CSS. Learn how scroll-behavior and scroll-margin-top properties create seamless, professional scrolling experiences that users love.
heroImage: ./header.png
tags: [CSS, UX, web development, smooth scrolling]
published: true
date: 2025-06-03
---

Have you ever clicked an anchor link on a website and been jarred by the sudden, instant jump to another section? That abrupt movement can feel harsh and disorienting. Fortunately, there's a simple CSS solution that can make your website feel more polished and professional with just two lines of code.

## The Problem with Default Scrolling

By default, when users click internal links or when JavaScript programmatically scrolls to elements, the browser instantly jumps to the target location. While functional, this behavior can feel jarring and break the smooth flow of user interaction.

## The Solution: Smooth Scrolling CSS

The code snippet shown demonstrates two powerful CSS properties that work together to create a seamless scrolling experience:

```css
html {
  scroll-behavior: smooth;
}

[id] {
  scroll-margin-top: 60px;
}
```

Let's break down what each property does:

### `scroll-behavior: smooth`

This property applied to the `html` element enables smooth scrolling for the entire page. Instead of instant jumps, the browser will animate the scroll transition, creating a gentle gliding effect when:
- Users click anchor links (`<a href="#section">`)
- JavaScript calls [`scrollIntoView()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView) or similar methods
- The browser navigates to URL fragments (like `yoursite.com#about`)

Learn more about the [`scroll-behavior` property on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior).

### `scroll-margin-top: 60px`

This property is applied to all elements with an `id` attribute (`[id]`). It adds invisible margin space above the target element when scrolling to it. This is incredibly useful for:
- **Fixed headers**: Prevents content from being hidden behind sticky navigation bars
- **Visual breathing room**: Ensures the target content isn't flush against the top of the viewport
- **Better readability**: Gives users context by showing some content above the target

Read the complete documentation for [`scroll-margin-top` on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-margin-top).

## Why This Matters for User Experience

These two simple lines of CSS can significantly improve how users interact with your website:

1. **Professional feel**: Smooth animations make your site feel more polished
2. **Better navigation**: Users can follow the scroll movement and understand where they're going
3. **Reduced cognitive load**: Smooth transitions are less jarring than instant jumps
4. **Accessibility**: Some users with [vestibular disorders](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html) prefer reduced motion, but smooth scrolling is generally more comfortable than sudden movements

For more insights on web accessibility, check out the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/).

## Browser Support and Considerations

The `scroll-behavior` property has excellent modern browser support, working in all current versions of Chrome, Firefox, Safari, and Edge. For older browsers, it gracefully degrades to the default instant scrolling behavior.

Check the latest [browser support for scroll-behavior on Can I Use](https://caniuse.com/css-scroll-behavior).

The `scroll-margin-top` property is also well-supported and provides a much cleaner solution than the old technique of using invisible padding or positioning hacks. View [scroll-margin browser support](https://caniuse.com/mdn-css_properties_scroll-margin-top).

## Implementation Tips

- **Adjust the margin**: The `60px` value should match your fixed header height
- **Consider mobile**: You might need different values for different screen sizes using [CSS media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- **Test thoroughly**: Make sure your smooth scrolling doesn't interfere with other animations
- **Respect user preferences**: Consider using [`prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) media query for users who prefer less animation

Here's an example of respecting user motion preferences:

```css
@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}
```

Learn more about [creating inclusive animations](https://web.dev/prefers-reduced-motion/) on web.dev.

## Conclusion

Sometimes the most impactful improvements come from the simplest solutions. These two lines of CSS demonstrate how small details can make a big difference in user experience. Smooth scrolling might seem like a minor enhancement, but it's these thoughtful touches that separate good websites from great ones.

For more CSS tips and tricks, explore the [CSS-Tricks website](https://css-tricks.com/) or dive deeper into [modern CSS techniques on web.dev](https://web.dev/learn/css/).

Next time you're building a website with internal navigation, remember this simple technique. Your users will appreciate the smoother, more professional experience – even if they don't consciously notice it. 
