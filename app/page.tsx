import { graphQLClient } from "@/lib/wp-client"
import { gql } from "graphql-request"

const query = gql`
  {
    posts {
      nodes {
        id
        title
        slug
      }
    }
  }
`

export default async function Home() {
  const data = await graphQLClient.request(query)
  const posts = data.posts.nodes

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">WordPress Posts</h1>
      <ul className="list-disc pl-5">
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}
