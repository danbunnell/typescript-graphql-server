import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import resolvers from './resolvers';
import typeDefs from './types';

const baseSchema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
});

// Merge multiple schemas here, if required in the future

export default baseSchema;