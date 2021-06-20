# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: https://github.com/mmorrisisund/stats-preview-card.git

## My process

### Built with

- Semantic HTML5 markup
- Tailwindcss
- Flexbox
- Mobile-first workflow

### What I learned

I learned to use flexbox to responsively display card and card info. Also utilize mix-blend to overlay image with color.

```html
<div class="flex-1 bg-soft-violet">
  <picture>
    <source
      srcset="images/image-header-desktop.jpg"
      media="(min-width: 375px)"
    />
    <img
      class="object-cover w-full h-full mix-blend-overlay"
      src="images/image-header-mobile.jpg"
      alt="people at computers"
    />
  </picture>
</div>
```

### Continued development

I need to work on position and styling of images more.

### Useful resources

- [Tailwindcss Docs](https://tailwindcss.com/docs) - Tailwind docs were very good resource to help with styling.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
