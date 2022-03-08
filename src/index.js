import { typeDefs, resolvers } from './grapql/merging'
import { ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
const PORT = process.env.PORT || 8080
import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import http from 'http'

const app = express()
const httpServer = http.createServer(app);
const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer }), ApolloServerPluginLandingPageGraphQLPlayground()],
});

app.get('/', (req,res)=>{  res.send('Servidor funcionando!')  })

async function start(){ 

    await server.start()
    server.applyMiddleware({ app });
    
    app.listen({ port: PORT }, ()=>{
    console.log("SERVER RUNNING ON PORT 8080")
})
}

start()