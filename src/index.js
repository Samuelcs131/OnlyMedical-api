import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { typeDefs, resolvers } from './grapql/merging'
import http from 'http'
import express from 'express'

async function startApolloServer(){
const PORT = process.env.PORT || 8080

const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs, resolvers, plugins: [ApolloServerPluginDrainHttpServer({ httpServer }) ]
  });


await server.start();
await server.applyMiddleware({ app });

httpServer.listen({ port: PORT, path:'/graphql' }, ()=>{
    console.log(`🚀 Servidor pronto em ${`http://localhost:${PORT}`}`)
})

}

startApolloServer()

/* const SERVER = new ApolloServer({ typeDefs, resolvers }) */

/* SERVER.listen().then(({ url }) => { console.log(`🚀 Servidor pronto em ${url}`); }); */