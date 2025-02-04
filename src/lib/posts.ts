import fs from 'fs';
import {join} from 'path';
import matter from 'gray-matter';
import {Post} from '@/interfaces/posts'

const postsDirectory = join(process.cwd(), "_posts");

export function getPostBySlug(slug: string) {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
  
    return { ...data, slug: realSlug, content } as Post;
}

export const getAllPosts = (): Post[] => {
    const fileNames = fs.readdirSync(postsDirectory);

    const posts = fileNames.map(fileName => {
        const slug = fileName.replace(/\.md$/, "")
        const filePath = join(process.cwd(), "_posts", fileName)
        const fileContents = fs.readFileSync(filePath)
        const {data, content} = matter(fileContents)

        return {
            slug,
            ...data,
            content,
            timestamp: new Date(data.date).getTime()
        } as Post
    })
    posts.sort((a, b) => b.timestamp - a.timestamp)

    return posts
}