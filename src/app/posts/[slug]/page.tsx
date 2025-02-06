import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { Post } from "@/interfaces/posts";
import { notFound } from "next/navigation";
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

const BlogPost = async (props: Props) => {
    const resolvedParams = await props.params;
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


export async function generateStaticParams() {
    const posts = getAllPosts();
  
    return posts.map((post) => ({
      slug: post.slug,
    }));
  }