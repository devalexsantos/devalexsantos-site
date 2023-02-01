import { GraphQLClient } from 'graphql-request';

export const hygraph = new GraphQLClient(process.env.HYGRAPH_READ_ONLY_API as string);