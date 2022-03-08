"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _pacientes = _interopRequireDefault(require("../../../../public/dados/pacientes.json"));

var _convertFiles = _interopRequireDefault(require("../../../database/convertFiles"));

var indice_pulmonar = (0, _convertFiles["default"])('./public/dados/indice_pulmonar');
var indice_cardiaco = (0, _convertFiles["default"])('./public/dados/indice_cardiaco');
var _default = {
  Patient: {
    indiceCardiaco: function () {
      var _indiceCardiaco = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(patientData) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return indice_cardiaco;

              case 2:
                return _context.abrupt("return", _context.sent.map(function (exam) {
                  return {
                    data: exam.data,
                    exame: exam.dados.filter(function (patient) {
                      return patient.CPF === patientData.cpf;
                    })
                  };
                }));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function indiceCardiaco(_x) {
        return _indiceCardiaco.apply(this, arguments);
      }

      return indiceCardiaco;
    }(),
    indicePulmonar: function () {
      var _indicePulmonar = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(patientData) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return indice_pulmonar;

              case 2:
                return _context2.abrupt("return", _context2.sent.map(function (exam) {
                  return {
                    data: exam.data,
                    exame: exam.dados.filter(function (patient) {
                      return patient.CPF === patientData.cpf;
                    })
                  };
                }));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function indicePulmonar(_x2) {
        return _indicePulmonar.apply(this, arguments);
      }

      return indicePulmonar;
    }()
  },
  Query: {
    patients: function () {
      var _patients = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _pacientes["default"];

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function patients() {
        return _patients.apply(this, arguments);
      }

      return patients;
    }(),
    getPatientByCPF: function () {
      var _getPatientByCPF = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(_, _ref) {
        var cpf;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                cpf = _ref.cpf;
                _context4.next = 3;
                return _pacientes["default"].filter(function (patient) {
                  return patient.cpf === cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
                });

              case 3:
                return _context4.abrupt("return", _context4.sent);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function getPatientByCPF(_x3, _x4) {
        return _getPatientByCPF.apply(this, arguments);
      }

      return getPatientByCPF;
    }(),
    getPatientByName: function () {
      var _getPatientByName = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(_, _ref2) {
        var nome;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                nome = _ref2.nome;
                nome = nome.toLowerCase();
                _context5.next = 4;
                return _pacientes["default"].filter(function (patient) {
                  return patient.nome.toLowerCase().includes(nome);
                });

              case 4:
                return _context5.abrupt("return", _context5.sent);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function getPatientByName(_x5, _x6) {
        return _getPatientByName.apply(this, arguments);
      }

      return getPatientByName;
    }()
  }
};
exports["default"] = _default;