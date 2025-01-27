---
title: Developing the blog site
date: 2025-1-7
---
Notes detailing my process of developing my personal website.

Goal: A simple site showcasing articles developed in Markdown.

## Tech Stack
- NextJS
    - I've been going through the NextJS tutorial for work, and it seems like a good choice for building out a static site.
- Github
    - I've wanted to try out Github's site hosting feature. If I have a static site generated with NextJS, having it deployed via Github pages would be the simplest approach.
- Markdown
    - I want my base articles to be in Markdown. This will act as a primitve content managment system. I don't want to spend too much time on CSS while starting off.

## Development
Create a new Github repo - I'm just choosing to call it `website`.

Need to create a NextJS app. Using the recomended approach here https://nextjs.org/docs/app/getting-started/installation

## Using Markdown

In search of some examples I can follow to use Markdown as the source of my blog article contents. Googling NextJS + Markdown returned a few hits

* The top hit is the Next.js [docs](https://nextjs.org/docs/app/building-your-application/configuring/mdx)
    * This seemed like a very heavy approach to what I am trying to do. 
    * At first encountering I assumed this is the suggested way, but that isn't the case.

* This [example project](https://vercel.com/templates/next.js/blog-starter-kit) from vercel seemed promising
    * uses `gray-matter` + `remark` + `remark-html`
    * `remark` is highly extensible

* Finally I found this [YouTube tutorial](https://www.youtube.com/watch?v=lcqT5N7Lphg)
    * Also uses `gray-matter` + `markdown-it`
    * `markdown-it` is more lightweight and fast

I used a combination of the second and third. The third provided easy setup but needed some optimization that I borrowed from the NextJS starter blog template.

## Flexbox
Flexbox is a powerful tool for laying out content.
I was trying to line up the date and title of each post, and cursor suggested using flexbox.


# Debugging NextJS

I'm using the `debug` script in `package.json` to run the dev server with the debugger.

```
npm run debug
```

However, I'm having trouble getting the Chrome dev tools to show the sources.

I'm using the `inspect` flag in the `NODE_OPTIONS` environment variable.

```
NODE_OPTIONS='--inspect' next dev --turbopack
```
https://www.youtube.com/watch?v=_5mGxLZ61J0


# Publishing to Github Pages
I wanted to quicked options possible. Since I'm already using Github as my remote repository, I figured I could first give Github Pages a try.

First I needed to make my respitory public from private. The site doesn't contain anything sensitive so that wasn't an issue. Next, I needed to configurea publishing source. Following this [page](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), I opted for my main branch and tthe `/docs` folder as the root of the content. I had to change my build destination for my build command to `docs` in my next.config.ts file. By adding 

https://www.freecodecamp.org/news/how-to-deploy-next-js-app-to-github-pages/