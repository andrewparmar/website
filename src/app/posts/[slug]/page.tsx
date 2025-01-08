import { getPostBySlug } from "@/lib/posts";
import { Post } from "@/interfaces/posts";
import { notFound } from "next/navigation";
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

const BlogPost = async ({ params }) => {
    const resolvedParams = await params;
    const post: Post = getPostBySlug(resolvedParams.slug);
  
    if (!post) {
      return notFound();
    }

    const htmlContent = md.render(post.content)

    return (
        <article>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </article>
    );
};

export default BlogPost;