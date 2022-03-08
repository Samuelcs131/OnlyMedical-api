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

app.get('/', (req,res)=>{  
    res.send(`<h1>Servidor funcionando!</h1>
              <p style="font-size: 20px;">Entre na rota <b>/graphql</b></p>`)  
})

async function start(){

    await server.start()
    server.applyMiddleware({ app });
    
    app.listen(PORT, ( res )=>{
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}/graphql`)
    })
}

start()