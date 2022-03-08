"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeDefs = exports.resolvers = void 0;

var _loadFiles = require("@graphql-tools/load-files");

var _merge = require("@graphql-tools/merge");

var _path = _interopRequireDefault(require("path"));

// TYPEDEFS
var typesArray = (0, _loadFiles.loadFilesSync)(_path["default"].join(__dirname, './modules'), {
  extensions: ['gql']
});
var typeDefs = (0, _merge.mergeTypeDefs)(typesArray, {
  all: true
}); // RESOLVERS

exports.typeDefs = typeDefs;
var resolversArray = (0, _loadFiles.loadFilesSync)(_path["default"].join(__dirname, './modules'), {
  extensions: ['js']
});
var resolvers = (0, _merge.mergeResolvers)(resolversArray, {
  all: true
});
exports.resolvers = resolvers;