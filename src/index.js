import { async } from '@babel/runtime/regenerator'
import { typeDefs, resolvers } from './grapql/merging'
const PORT = process.env.PORT || 8080
/*
import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
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

startApolloServer() */

const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const app = express()

const server = new ApolloServer({ typeDefs, resolvers})

async function start(){
    await server.start()
    await server.applyMiddleware({app})

    app.listen({ port: PORT }, ()=>{
    console.log("SERVER RUNNING ON PORT 8080")
})
}

start()