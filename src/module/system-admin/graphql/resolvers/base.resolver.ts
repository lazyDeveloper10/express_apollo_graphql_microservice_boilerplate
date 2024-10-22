import { userResolvers } from './controllers';

import { DateScalar } from '../../../../config';

export const resolvers = Object.assign(
    {
        Date: DateScalar,
        Query: Object.assign({}, userResolvers.Query),
        Mutation: Object.assign({}, userResolvers.Mutation),
        User: Object.assign({}, userResolvers.User),
    }
);
