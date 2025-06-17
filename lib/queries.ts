export const GET_POSTS = `
  query GetPosts {
    posts(first: 5) {
      nodes {
        id
        title
        slug
        excerpt
      }
    }
  }
`
