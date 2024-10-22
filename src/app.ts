import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { ApolloGateway, IntrospectAndCompose } from '@apollo/gateway';

const gateway = new ApolloGateway({
    supergraphSdl: new IntrospectAndCompose({
        subgraphs: [
            { name: 'systemAdmin', url: 'http://localhost:3001' },
        ],
    }),
});

const setHttpPlugin = {
    async requestDidStart() {
        return {};
    }
};

const server = new ApolloServer({
    gateway,
    csrfPrevention: true,
    plugins: [ setHttpPlugin ],
});

startStandaloneServer(server, { listen: { port: 3000 } })
    .then((url) => console.log(`🚀 Server ready at ${ url }`))
    .catch((err) => console.log(err));
