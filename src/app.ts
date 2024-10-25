import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { ApolloGateway, IntrospectAndCompose } from '@apollo/gateway';

import env from 'dotenv';

env.config();

const gateway = new ApolloGateway({
    supergraphSdl: new IntrospectAndCompose({
        subgraphs: [
            { name: 'systemAdmin', url: process.env.URL_SYSTEM_ADMIN },
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

startStandaloneServer(server, { listen: { port: Number(process.env.PORT_GATEWAY) } })
    .then((data: any) => console.log(`🚀 Server ready at ${ data.url }`))
    .catch((err: any) => console.log(err));
