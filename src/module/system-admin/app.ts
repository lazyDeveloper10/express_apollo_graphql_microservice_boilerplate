import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSubgraphSchema } from '@apollo/subgraph';

import { typeDefs } from './graphql/schemas/base.schema';
import { resolvers } from './graphql/resolvers/base.resolver';

const server = new ApolloServer({
    schema: buildSubgraphSchema({ typeDefs, resolvers }),
});

startStandaloneServer(server, { listen: { port: 3001 } })
    .then((url) => console.log(`🚀 Server ready at ${ url }`))
    .catch((err) => console.log(err));
