import { wpClient } from '@/lib/wp-client'
import { GET_POSTS } from '@/lib/queries'

export default async function WpPostsPage() {
  const data = await wpClient.request(GET_POSTS)
  const posts = data.posts.nodes

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Latest WordPress Posts</h1>
      <ul className="space-y-4">
        {posts.map((post: any) => (
          <li key={post.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          </li>
        ))}
      </ul>
    </div>
  )
}
