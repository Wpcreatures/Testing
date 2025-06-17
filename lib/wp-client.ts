import { GraphQLClient } from 'graphql-request'

const endpoint = 'https://mudassarjamil.com/graphql'

export const wpClient = new GraphQLClient(endpoint)
