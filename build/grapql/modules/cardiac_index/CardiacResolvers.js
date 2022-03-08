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

var indice_cardiaco = (0, _convertFiles["default"])('./public/dados/indice_cardiaco');
var _default = {
  ExameCardiac: {
    paciente: function () {
      var _paciente = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(patientSearch) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _pacientes["default"].filter(function (patient) {
                  return patient.cpf === patientSearch.CPF;
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function paciente(_x) {
        return _paciente.apply(this, arguments);
      }

      return paciente;
    }()
  },
  Query: {
    getExamsCardiac: function () {
      var _getExamsCardiac = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return indice_cardiaco;

              case 2:
                return _context2.abrupt("return", _context2.sent.map(function (exam) {
                  return {
                    data: exam.data,
                    exame: exam.dados
                  };
                }));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getExamsCardiac() {
        return _getExamsCardiac.apply(this, arguments);
      }

      return getExamsCardiac;
    }(),
    getExamCardiacByCpf: function () {
      var _getExamCardiacByCpf = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_, _ref) {
        var CPF;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                CPF = _ref.CPF;
                _context3.next = 3;
                return indice_cardiaco;

              case 3:
                return _context3.abrupt("return", _context3.sent.map(function (exam) {
                  return {
                    data: exam.data,
                    exame: exam.dados.filter(function (patient) {
                      return patient.CPF === CPF;
                    })
                  };
                }));

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getExamCardiacByCpf(_x2, _x3) {
        return _getExamCardiacByCpf.apply(this, arguments);
      }

      return getExamCardiacByCpf;
    }(),
    getExamCardiacByDateAndCpf: function () {
      var _getExamCardiacByDateAndCpf = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(_, _ref2) {
        var data, CPF, filterDateExam, filterCpfPatient, resultSearch;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                data = _ref2.data, CPF = _ref2.CPF;
                _context4.next = 3;
                return indice_cardiaco;

              case 3:
                filterDateExam = _context4.sent.filter(function (exam) {
                  return exam.data === data;
                })[0];
                filterCpfPatient = filterDateExam.dados.filter(function (patient) {
                  return patient.CPF === CPF;
                });
                resultSearch = [{
                  data: data,
                  exame: filterCpfPatient
                }];
                return _context4.abrupt("return", resultSearch);

              case 7:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function getExamCardiacByDateAndCpf(_x4, _x5) {
        return _getExamCardiacByDateAndCpf.apply(this, arguments);
      }

      return getExamCardiacByDateAndCpf;
    }(),
    getExamCardiacByDate: function () {
      var _getExamCardiacByDate = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(_, _ref3) {
        var data, filterDataExam, resultSearch;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                data = _ref3.data;
                _context5.next = 3;
                return indice_cardiaco;

              case 3:
                filterDataExam = _context5.sent.filter(function (exam) {
                  return exam.data === data;
                })[0];
                resultSearch = [{
                  data: filterDataExam.data,
                  exame: filterDataExam.dados
                }];
                return _context5.abrupt("return", resultSearch);

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function getExamCardiacByDate(_x6, _x7) {
        return _getExamCardiacByDate.apply(this, arguments);
      }

      return getExamCardiacByDate;
    }(),
    getExamCardiacWithInterval: function () {
      var _getExamCardiacWithInterval = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(_, _ref4) {
        var dataInicial, dataFinal, CPF, getDatesExams, dateInitial, dateFinal, getExamInterval, resultSearch;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                dataInicial = _ref4.dataInicial, dataFinal = _ref4.dataFinal, CPF = _ref4.CPF;
                _context6.next = 3;
                return indice_cardiaco;

              case 3:
                getDatesExams = _context6.sent.map(function (exam) {
                  return exam.data;
                });
                dateInitial = getDatesExams.indexOf(dataInicial);
                dateFinal = Number(getDatesExams.indexOf(dataFinal)) + 1;
                getExamInterval = indice_cardiaco.slice(dateInitial, dateFinal);
                resultSearch = getExamInterval.map(function (exam) {
                  return {
                    data: exam.data,
                    exame: exam.dados.filter(function (patient) {
                      return patient.CPF === CPF;
                    })
                  };
                });
                return _context6.abrupt("return", resultSearch);

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function getExamCardiacWithInterval(_x8, _x9) {
        return _getExamCardiacWithInterval.apply(this, arguments);
      }

      return getExamCardiacWithInterval;
    }(),
    getExamCardiacWithIntervalValue: function () {
      var _getExamCardiacWithIntervalValue = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(_, _ref5) {
        var valorInicial, valorFinal, CPF;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                valorInicial = _ref5.valorInicial, valorFinal = _ref5.valorFinal, CPF = _ref5.CPF;
                _context7.next = 3;
                return indice_cardiaco;

              case 3:
                return _context7.abrupt("return", _context7.sent.map(function (exam) {
                  return {
                    data: exam.data,
                    exame: exam.dados.filter(function (patient) {
                      return patient.CPF === CPF;
                    }).filter(function (item) {
                      return item.ind_card >= valorInicial && item.ind_card <= valorFinal;
                    })
                  };
                }));

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function getExamCardiacWithIntervalValue(_x10, _x11) {
        return _getExamCardiacWithIntervalValue.apply(this, arguments);
      }

      return getExamCardiacWithIntervalValue;
    }()
  }
};
exports["default"] = _default;