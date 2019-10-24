/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./App.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./App.jsx":
/*!*****************!*\
  !*** ./App.jsx ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Minesweeper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Minesweeper */ "./components/Minesweeper.jsx");




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Minesweeper__WEBPACK_IMPORTED_MODULE_3__["default"], null), document.getElementById("root"));

/***/ }),

/***/ "./components/Board.jsx":
/*!******************************!*\
  !*** ./components/Board.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tile */ "./components/Tile.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background: #0f2949;\n    width: 500px;\n    height: 500px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    flex-wrap: wrap;\n    padding: 22px;\n    box-shadow: 4px 5px 20px 0px rgba(200, 200, 200, 1);\n    border-radius: 20px;\n    border-style: inset;\n    border-color: #507a90;\n    border-width: 5px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var StyledBoard = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());

var Board =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Board, _React$Component);

  function Board(props) {
    _classCallCheck(this, Board);

    return _possibleConstructorReturn(this, _getPrototypeOf(Board).call(this, props));
  }

  _createClass(Board, [{
    key: "render",
    value: function render() {
      var _this = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledBoard, null, this.props.board.grid.map(function (gridrow, topIdx) {
        return gridrow.map(function (tile, idx) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tile__WEBPACK_IMPORTED_MODULE_2__["default"], {
            key: idx,
            tile: tile,
            reveal: tile.explored || _this.props.revealBoard(),
            updateGame: _this.props.updateGame,
            gameOver: _this.props.revealBoard()
          });
        });
      }));
    }
  }]);

  return Board;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Board);

/***/ }),

/***/ "./components/Game.jsx":
/*!*****************************!*\
  !*** ./components/Game.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _minesweeper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../minesweeper */ "./minesweeper.js");
/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Board */ "./components/Board.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    flex-wrap: wrap;\n    background: #0f2949;\n    color: #fff;\n    font-family: \"Anton\", sans-serif;\n    border-radius: 10px;\n    margin-bottom: 41px;\n    text-align: center;\n    padding: 22px;\n    transition: 300ms all ease-in;\n    h3 {\n        letter-spacing: 1px;\n        font-size: 2.5rem;\n        margin: 0;\n    }\n    div {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background: #fff;\n        width: 50%;\n        height: 40%;\n    }\n    button {\n        background: red;\n        color: #fff;\n        border: none;\n        border-radius: 5px;\n        text-transform: uppercase;\n        font-size: 1.2rem;\n        font-weight: 900;\n        outline: none;\n        padding: 10px 15px;\n        margin: 20px auto 10px;\n        cursor: pointer;\n        display: none;\n        &.visible {\n            display: block;\n        }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    h1 {\n        font-size: 24px;\n        color: #1a1a1a;\n        font-family: \"Helvetica\", sans-serif;\n        text-align: center;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var StyledGame = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
var Modal = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());

var Game =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Game, _React$Component);

  function Game() {
    var _this;

    _classCallCheck(this, Game);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Game).call(this));
    _this.state = {
      board: new _minesweeper__WEBPACK_IMPORTED_MODULE_2__["Board"](9, 9),
      isModalOpen: false,
      status: "Game in Progress"
    };
    _this.updateGame = _this.updateGame.bind(_assertThisInitialized(_this));
    _this.checkGame = _this.checkGame.bind(_assertThisInitialized(_this));
    _this.resetGame = _this.resetGame.bind(_assertThisInitialized(_this));
    _this.openModal = _this.openModal.bind(_assertThisInitialized(_this));
    _this.revealBoard = _this.revealBoard.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Game, [{
    key: "updateGame",
    value: function updateGame(tile, flagged, rightClick) {
      var _this2 = this;

      if (tile.explored) return null;
      if (rightClick) tile.toggleFlag();
      if (!flagged && !rightClick) tile.explore();
      this.setState(function () {
        return {
          board: _this2.state.board
        };
      });
      this.checkGame();
    }
  }, {
    key: "checkGame",
    value: function checkGame() {
      var lost = this.state.board.lost();
      var won = this.state.board.won();

      if (lost) {
        this.openModal("You Lost.");
      }

      if (won) {
        this.openModal("You Win!");
      }
    }
  }, {
    key: "revealBoard",
    value: function revealBoard() {
      return this.state.board.lost() || this.state.board.won();
    }
  }, {
    key: "openModal",
    value: function openModal(status) {
      this.setState(function () {
        return {
          isModalOpen: true,
          status: status
        };
      });
    }
  }, {
    key: "resetGame",
    value: function resetGame() {
      this.setState(function () {
        return {
          board: new _minesweeper__WEBPACK_IMPORTED_MODULE_2__["Board"](9, 9),
          status: "Game in Progress"
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledGame, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Modal, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, this.state.status), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: this.revealBoard() ? "visible" : "",
        onClick: this.resetGame
      }, "Play Again")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Board__WEBPACK_IMPORTED_MODULE_3__["default"], {
        board: this.state.board,
        updateGame: this.updateGame,
        revealBoard: this.revealBoard
      }));
    }
  }]);

  return Game;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./components/Minesweeper.jsx":
/*!************************************!*\
  !*** ./components/Minesweeper.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ "./components/Game.jsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Minesweeper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Minesweeper, _React$Component);

  function Minesweeper() {
    _classCallCheck(this, Minesweeper);

    return _possibleConstructorReturn(this, _getPrototypeOf(Minesweeper).apply(this, arguments));
  }

  _createClass(Minesweeper, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Game__WEBPACK_IMPORTED_MODULE_1__["default"], null);
    }
  }]);

  return Minesweeper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Minesweeper);

/***/ }),

/***/ "./components/Tile.jsx":
/*!*****************************!*\
  !*** ./components/Tile.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n            border-color: none;\n            background: #024161;\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background: #507a90;\n    width: 45px;\n    height: 45px;\n    border-radius: 5px;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    border-style: inset;\n    border-color: #507a90;\n    font-family: \"Anton\", sans-serif;\n    font-weight: 900;\n    color: #fff;\n    cursor: pointer;\n    transition: 100ms all ease-in;\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var StyledTile = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), function (props) {
  return props.explored && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2());
});

var Tile =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Tile, _React$Component);

  function Tile(props) {
    var _this;

    _classCallCheck(this, Tile);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tile).call(this, props));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.getValue = _this.getValue.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Tile, [{
    key: "handleClick",
    value: function handleClick(e) {
      e.preventDefault();
      var flagged = this.props.tile.flagged;
      var rightClick = e.type === "contextmenu";
      if (rightClick) flagged = !flagged;
      this.props.updateGame(this.props.tile, flagged, rightClick);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      if (this.props.gameOver) {
        this.props.tile.explore();
      }

      if (!this.props.tile.explored) {
        return this.props.tile.flagged ? "🚩" : null;
      }

      if (this.props.tile.bombed) {
        return "💣";
      }

      if (this.props.tile.adjacentBombCount() === 0) {
        return null;
      }

      return this.props.tile.adjacentBombCount();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledTile, {
        onContextMenu: this.handleClick,
        onClick: this.handleClick,
        explored: this.props.reveal
      }, this.getValue());
    }
  }]);

  return Tile;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Tile);

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./minesweeper.js":
/*!************************!*\
  !*** ./minesweeper.js ***!
  \************************/
/*! exports provided: Tile, Board */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tile", function() { return Tile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Board", function() { return Board; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// minesweeper library from AppAcademy
var Tile =
/*#__PURE__*/
function () {
  function Tile(board, pos) {
    _classCallCheck(this, Tile);

    this.board = board;
    this.pos = pos;
    this.bombed = false;
    this.explored = false;
    this.flagged = false;
  }

  _createClass(Tile, [{
    key: "adjacentBombCount",
    value: function adjacentBombCount() {
      var bombCount = 0;
      this.neighbors().forEach(function (neighbor) {
        if (neighbor.bombed) {
          bombCount++;
        }
      });
      return bombCount;
    }
  }, {
    key: "explore",
    value: function explore() {
      if (this.flagged || this.explored) {
        return this;
      }

      this.explored = true;

      if (!this.bombed && this.adjacentBombCount() === 0) {
        this.neighbors().forEach(function (tile) {
          tile.explore();
        });
      }
    }
  }, {
    key: "neighbors",
    value: function neighbors() {
      var _this = this;

      var adjacentCoords = [];
      Tile.DELTAS.forEach(function (delta) {
        var newPos = [delta[0] + _this.pos[0], delta[1] + _this.pos[1]];

        if (_this.board.onBoard(newPos)) {
          adjacentCoords.push(newPos);
        }
      });
      return adjacentCoords.map(function (coord) {
        return _this.board.grid[coord[0]][coord[1]];
      });
    }
  }, {
    key: "plantBomb",
    value: function plantBomb() {
      this.bombed = true;
    }
  }, {
    key: "toggleFlag",
    value: function toggleFlag() {
      if (!this.explored) {
        this.flagged = !this.flagged;
        return true;
      }

      return false;
    }
  }]);

  return Tile;
}();
Tile.DELTAS = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
var Board =
/*#__PURE__*/
function () {
  function Board(gridSize, numBombs) {
    _classCallCheck(this, Board);

    this.gridSize = gridSize;
    this.grid = [];
    this.numBombs = numBombs;
    this.generateBoard();
    this.plantBombs();
  }

  _createClass(Board, [{
    key: "generateBoard",
    value: function generateBoard() {
      for (var i = 0; i < this.gridSize; i++) {
        this.grid.push([]);

        for (var j = 0; j < this.gridSize; j++) {
          var tile = new Tile(this, [i, j]);
          this.grid[i].push(tile);
        }
      }
    }
  }, {
    key: "onBoard",
    value: function onBoard(pos) {
      return pos[0] >= 0 && pos[0] < this.gridSize && pos[1] >= 0 && pos[1] < this.gridSize;
    }
  }, {
    key: "plantBombs",
    value: function plantBombs() {
      var totalPlantedBombs = 0;

      while (totalPlantedBombs < this.numBombs) {
        var row = Math.floor(Math.random() * (this.gridSize - 1));
        var col = Math.floor(Math.random() * (this.gridSize - 1));
        var tile = this.grid[row][col];

        if (!tile.bombed) {
          tile.plantBomb();
          totalPlantedBombs++;
        }
      }
    }
  }, {
    key: "lost",
    value: function lost() {
      var lost = false;
      this.grid.forEach(function (row) {
        row.forEach(function (tile) {
          if (tile.bombed && tile.explored) {
            lost = true;
          }
        });
      });
      return lost;
    }
  }, {
    key: "won",
    value: function won() {
      var won = true;
      this.grid.forEach(function (row) {
        row.forEach(function (tile) {
          if (tile.flagged === tile.revealed || tile.flagged !== tile.bombed) {
            won = false;
          }
        });
      });
      return won;
    }
  }]);

  return Board;
}();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./index.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./index.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  height: 100vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/msevere/Documents/AppAcademy/minesweeper/node_modules/css-loader/dist/runtime/api.js'");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/msevere/Documents/AppAcademy/minesweeper/node_modules/react-dom/index.js'");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/msevere/Documents/AppAcademy/minesweeper/node_modules/react/index.js'");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/msevere/Documents/AppAcademy/minesweeper/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js'");

/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
/*! exports provided: default, createGlobalStyle, css, isStyledComponent, keyframes, ServerStyleSheet, StyleSheetConsumer, StyleSheetContext, StyleSheetManager, ThemeConsumer, ThemeContext, ThemeProvider, withTheme, __DO_NOT_USE_OR_YOU_WILL_BE_HAUNTED_BY_SPOOKY_GHOSTS */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open '/Users/msevere/Documents/AppAcademy/minesweeper/node_modules/styled-components/dist/styled-components.browser.esm.js'");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map