"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _merging = require("./grapql/merging");

var _apolloServerExpress = require("apollo-server-express");

var _apolloServerCore = require("apollo-server-core");

var _express = _interopRequireDefault(require("express"));

var _http = _interopRequireDefault(require("http"));

function startApolloServer(_x, _x2) {
  return _startApolloServer.apply(this, arguments);
}

function _startApolloServer() {
  _startApolloServer = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(typeDefs, resolvers) {
    var app, httpServer, PORT, server;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Required logic for integrating with Express
            app = (0, _express["default"])();
            httpServer = _http["default"].createServer(app);
            PORT = process.env.PORT || 8080; // Same ApolloServer initialization as before, plus the drain plugin.

            server = new _apolloServerExpress.ApolloServer({
              typeDefs: typeDefs,
              resolvers: resolvers,
              plugins: [(0, _apolloServerCore.ApolloServerPluginDrainHttpServer)({
                httpServer: httpServer
              })]
            });
            _context.next = 6;
            return server.start();

          case 6:
            server.applyMiddleware({
              app: app,
              path: '/graphql'
            }); // Modified server startup

            _context.next = 9;
            return new Promise(function (resolve) {
              return httpServer.listen({
                port: PORT
              }, resolve);
            });

          case 9:
            console.log("\uD83D\uDE80 Server ready at http://localhost:4000".concat(server.graphqlPath));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _startApolloServer.apply(this, arguments);
}

startApolloServer(_merging.typeDefs, _merging.resolvers);