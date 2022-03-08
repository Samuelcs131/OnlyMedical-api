"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

var _regenerator = _interopRequireWildcard(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _merging = require("./grapql/merging");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var PORT = process.env.PORT || 8080;
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

var _require = require('apollo-server-express'),
    ApolloServer = _require.ApolloServer;

var express = require('express');

var app = express();
var server = new ApolloServer({
  typeDefs: _merging.typeDefs,
  resolvers: _merging.resolvers
});

function start() {
  return _start.apply(this, arguments);
}

function _start() {
  _start = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return server.start();

          case 2:
            _context.next = 4;
            return server.applyMiddleware({
              app: app
            });

          case 4:
            app.listen({
              port: PORT
            }, function () {
              console.log("SERVER RUNNING ON PORT 8080");
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _start.apply(this, arguments);
}

app.get('/', function (req, res) {
  res.send('Funcionando!');
});
start();