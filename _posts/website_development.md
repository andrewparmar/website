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
