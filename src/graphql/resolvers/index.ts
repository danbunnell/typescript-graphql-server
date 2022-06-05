import { mergeResolvers } from '@graphql-tools/merge';
import UserResolver from './UserResolver';

const resolvers = mergeResolvers([UserResolver]);

export default resolvers;