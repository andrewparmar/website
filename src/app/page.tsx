import {getAllPosts} from '@/lib/posts'
import Link from 'next/link';

export default function Page() {
  const posts = getAllPosts();
  return (
    <main>
      <h1>Notes</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts.map((post) => {
          const date = new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit', formatMatcher: 'best fit' });
          return <li key={post.slug}>
            <Link href={`/posts/${post.slug}`} style={{ display: 'flex', textDecoration: 'none' }}>
              <span style={{ minWidth: '150px' }}>{date}</span>
              <span>{post.title}</span>
            </Link>
          </li>
        })}
      </ul>
    </main>
  );
}