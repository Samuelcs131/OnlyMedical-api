"use strict";

var _apolloServer = require("apollo-server");

var _merging = require("./grapql/merging");

var SERVER = new _apolloServer.ApolloServer({
  typeDefs: _merging.typeDefs,
  resolvers: _merging.resolvers
});
SERVER.listen().then(function (_ref) {
  var url = _ref.url;
  console.log("\uD83D\uDE80 Servidor pronto em ".concat(url));
});