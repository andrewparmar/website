import {getAllPosts} from '@/lib/posts'
import Link from 'next/link';

export default function Page() {
  const posts = getAllPosts();
  console.log("******")
  console.log(posts)
  return (
    <main>
      <div>Header</div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => {
          return <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        })}
      </ul>
      <div>Footer</div>
    </main>
  );
}