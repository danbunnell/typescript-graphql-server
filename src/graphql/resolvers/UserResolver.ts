import { IResolvers } from '@graphql-tools/utils';
import { AuthenticationResponse, MutationRegisterArgs, QueryLoginArgs } from '../types/generated';

const resolvers: IResolvers = {
    Query: {
        async login(_: void, args: QueryLoginArgs): Promise<AuthenticationResponse> {
            return Promise.resolve({
                token: `token for ${args.email}:${args.password}`,
            });
        },
    },
    Mutation: {
        async register(_: void, args: MutationRegisterArgs): Promise<AuthenticationResponse> {
            return Promise.resolve({
                token: `registered ${args.email}:${args.password}`,
            });
        },
    },
}

export default resolvers;