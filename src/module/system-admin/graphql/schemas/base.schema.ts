import { mergeTypeDefs } from '@graphql-tools/merge';

import { customScalarSchema } from './custom.schema';
import { userSchema } from './user.schema';

const systemAdminSchemas = [ customScalarSchema, userSchema ];

export const typeDefs = mergeTypeDefs(systemAdminSchemas);
