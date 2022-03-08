"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = convertFiles;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _fs = _interopRequireDefault(require("fs"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var file = require('fs').promises;

function convertFiles(_x) {
  return _convertFiles.apply(this, arguments);
}

function _convertFiles() {
  _convertFiles = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(diretorio) {
    var fileDates, resultado, index, _fs$readFileSync$toSt, _fs$readFileSync$toSt2, header, dataIndice, atribute, dadosValue, _iterator, _step, _dadosValue$push, valueInd, result;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return file.readdir(diretorio);

          case 2:
            fileDates = _context.sent;
            resultado = [];

            for (index = 0; index < fileDates.length; index++) {
              _fs$readFileSync$toSt = _fs["default"].readFileSync(diretorio + '/' + fileDates[index]).toString().split(/\r?\n/), _fs$readFileSync$toSt2 = (0, _toArray2["default"])(_fs$readFileSync$toSt), header = _fs$readFileSync$toSt2[0], dataIndice = _fs$readFileSync$toSt2.slice(1);
              atribute = header.split(' ').filter(function (res) {
                return res !== '';
              });
              dadosValue = [];
              _iterator = _createForOfIteratorHelper(dataIndice);

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  valueInd = _step.value;
                  result = valueInd.split(' ');
                  dadosValue.push((_dadosValue$push = {}, (0, _defineProperty2["default"])(_dadosValue$push, atribute[0], result[0]), (0, _defineProperty2["default"])(_dadosValue$push, atribute[1], Number(result[1])), (0, _defineProperty2["default"])(_dadosValue$push, atribute[2], Number(result[2])), _dadosValue$push));
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              resultado.push({
                data: fileDates[index],
                dados: dadosValue
              });
            }

            return _context.abrupt("return", resultado);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _convertFiles.apply(this, arguments);
}