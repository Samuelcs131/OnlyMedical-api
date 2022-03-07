import { ApolloServer } from 'apollo-server'
import { typeDefs, resolvers } from './grapql/merging'

const SERVER = new ApolloServer({ typeDefs, resolvers })

SERVER.listen().then(({ url }) => { console.log(`🚀 Servidor pronto em ${url}`); });