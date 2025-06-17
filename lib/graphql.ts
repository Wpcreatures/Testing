import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.WP_GRAPHQL_API

if (!endpoint) {
  throw new Error("WP_GRAPHQL_API is not defined in environment variables")
}

export const graphQLClient = new GraphQLClient(endpoint)
