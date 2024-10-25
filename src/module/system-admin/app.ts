import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSubgraphSchema } from '@apollo/subgraph';

import env from 'dotenv';

import { typeDefs } from './graphql/schemas/base.schema';
import { resolvers } from './graphql/resolvers/base.resolver';

env.config();

const server = new ApolloServer({
    schema: buildSubgraphSchema({ typeDefs, resolvers }),
});

startStandaloneServer(server, { listen: { port: Number(process.env.PORT_SYSTEM_ADMIN) } })
    .then((data: any) => console.log(`🚀 Server ready at ${ data.url }`))
    .catch((err: any) => console.log(err));
