"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _apolloServerExpress = require("apollo-server-express");

var _apolloServerCore = require("apollo-server-core");

var _merging = require("./grapql/merging");

var _http = _interopRequireDefault(require("http"));

var _express = _interopRequireDefault(require("express"));

function startApolloServer() {
  return _startApolloServer.apply(this, arguments);
}

function _startApolloServer() {
  _startApolloServer = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var PORT, app, httpServer, server;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            PORT = process.env.PORT || 4000;
            app = (0, _express["default"])();
            httpServer = _http["default"].createServer(app);
            server = new _apolloServerExpress.ApolloServer({
              typeDefs: _merging.typeDefs,
              resolvers: _merging.resolvers,
              plugins: [(0, _apolloServerCore.ApolloServerPluginDrainHttpServer)({
                httpServer: httpServer
              }), (0, _apolloServerCore.ApolloServerPluginLandingPageDisabled)()]
            });
            _context.next = 6;
            return server.start();

          case 6:
            _context.next = 8;
            return server.applyMiddleware({
              app: app
            });

          case 8:
            httpServer.listen({
              port: PORT,
              path: '/graphql'
            }, function () {
              console.log("\uD83D\uDE80 Servidor pronto em ".concat("http://localhost:".concat(PORT)));
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _startApolloServer.apply(this, arguments);
}

console.log(process.env.NODE_ENV == "production");
startApolloServer();
/* const SERVER = new ApolloServer({ typeDefs, resolvers }) */

/* SERVER.listen().then(({ url }) => { console.log(`🚀 Servidor pronto em ${url}`); }); */