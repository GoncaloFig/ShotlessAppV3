/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://shotlessappv3/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://shotlessappv3/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// server/index.js\n//require(\"ignore-styles\");\n\n__webpack_require__(/*! @babel/register */ \"@babel/register\")({\n  ignore: [/(node_modules)/],\n  presets: [\"@babel/preset-env\", \"@babel/preset-react\"]\n});\n__webpack_require__(/*! ./server */ \"./server/server.js\");\n\n//# sourceURL=webpack://shotlessappv3/./server/index.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/App */ \"./src/App.js\");\n\n\n\n\n\n\nconst PORT = 4000;\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n\n// app.use('/static/css', express.static(path.resolve(__dirname, '..', 'build', 'static', 'css')));\napp.use('/static', express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](path__WEBPACK_IMPORTED_MODULE_2___default().resolve(__dirname, '..', 'build', 'static'))); //<- LAST FAILURE\n\napp.use('/*', (req, res, next) => {\n  try {\n    fs__WEBPACK_IMPORTED_MODULE_1___default().readFile(path__WEBPACK_IMPORTED_MODULE_2___default().resolve(__dirname, '..', 'build', 'index.html'), 'utf-8', (err, data) => {\n      if (err) {\n        console.log(err);\n        return res.status(500).send(\"Some error happened\");\n      }\n      //const mainJsFilename = fs.readdirSync(path.join(buildPath, 'static', 'js')).find(file => file.startsWith('main.') && file.endsWith('.js'));\n\n      return res.send(data.replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat((0,react_dom_server__WEBPACK_IMPORTED_MODULE_4__.renderToString)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_src_App__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null)), \"</div>\\n                    <script defer=\\\"defer\\\" src=\\\"/static/js/main.js\\\"></script>\")));\n    });\n  } catch (error) {\n    console.error(error);\n    return res.status(500).send('Internal Server Error');\n  }\n});\napp.listen(PORT, () => {\n  console.log(\"Server listening on port \".concat(PORT));\n});\n\n//# sourceURL=webpack://shotlessappv3/./server/server.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var _componets_EditPlayersContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./componets/EditPlayersContainer */ \"./src/componets/EditPlayersContainer.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/store/store */ \"./src/redux/store/store.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _componets_GameContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componets/GameContainer */ \"./src/componets/GameContainer.js\");\n/* harmony import */ var _componets_PlayersContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componets/PlayersContainer */ \"./src/componets/PlayersContainer.js\");\n\n\n\n\n\n\n\n\nfunction App() {\n  const [visibleEditPlayers, setVisibleEditPlayers] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n  const handleOpenEditPlayers = () => {\n    setVisibleEditPlayers(prev => !prev);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__.Provider, {\n    store: _redux_store_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(\"div\", {\n    className: \"App\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_componets_GameContainer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null), visibleEditPlayers ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_componets_EditPlayersContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    handleOpenEditPlayers: handleOpenEditPlayers\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_componets_PlayersContainer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    handleOpenEditPlayers: handleOpenEditPlayers\n  })));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://shotlessappv3/./src/App.js?");

/***/ }),

/***/ "./src/componets/CountDownContainer.js":
/*!*********************************************!*\
  !*** ./src/componets/CountDownContainer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_CountDownContainer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/CountDownContainer.scss */ \"./src/styles/CountDownContainer.scss\");\n\n\n\nconst CountDownContainer = _ref => {\n  let {\n    shotlessLoser,\n    handleClickOnWinner\n  } = _ref;\n  const [showText, setShowText] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    // Delay the visibility of the text until the animation has ended\n    const timer = setTimeout(() => {\n      setShowText(true);\n    }, 1000); // Duration of the hideText animation in milliseconds\n\n    return () => clearTimeout(timer);\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"demo\",\n    onClick: handleClickOnWinner\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"demo__colored-blocks\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"demo__colored-blocks-rotater\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"demo__colored-block\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"demo__colored-block\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"demo__colored-block\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"demo__colored-blocks-inner\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"demo__text\"\n  }, showText ? shotlessLoser.name : \"GO\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"demo__inner\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", {\n    className: \"demo__numbers\",\n    viewBox: \"0 0 100 100\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"defs\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    className: \"demo__num-path-1\",\n    d: \"M40,28 55,22 55,78\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    className: \"demo__num-join-1-2\",\n    d: \"M55,78 55,83 a17,17 0 1,0 34,0 a20,10 0 0,0 -20,-10\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    className: \"demo__num-path-2\",\n    d: \"M69,73 l-35,0 l30,-30 a16,16 0 0,0 -22.6,-22.6 l-7,7\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    className: \"demo__num-join-2-3\",\n    d: \"M28,69 Q25,44 34.4,27.4\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    className: \"demo__num-path-3\",\n    d: \"M30,20 60,20 40,50 a18,15 0 1,1 -12,19\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", {\n    className: \"demo__numbers-path\",\n    d: \"M-10,20 60,20 40,50 a18,15 0 1,1 -12,19 \\r Q25,44 34.4,27.4\\r l7,-7 a16,16 0 0,1 22.6,22.6 l-30,30 l35,0 L69,73 \\r a20,10 0 0,1 20,10 a17,17 0 0,1 -34,0 L55,83 \\r l0,-61 L40,28\"\n  }))));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountDownContainer);\n\n//# sourceURL=webpack://shotlessappv3/./src/componets/CountDownContainer.js?");

/***/ }),

/***/ "./src/componets/EditPlayersContainer.js":
/*!***********************************************!*\
  !*** ./src/componets/EditPlayersContainer.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux */ \"./src/redux/index.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"uuid\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_EditPlayersContainer_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/EditPlayersContainer.scss */ \"./src/styles/EditPlayersContainer.scss\");\n/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/im */ \"react-icons/im\");\n/* harmony import */ var react_icons_im__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_im__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst EditPlayersContainer = props => {\n  const [players, setPlayers] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.players);\n  const [newPlayer, setNewPlayer] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    id: null,\n    name: \"\",\n    isEditing: false\n  });\n  const [playerNameInputEnable, setPlayerNameInputEnable] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n  const [playerNameChanged, setPlayerNameChanged] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const isAnyPlayerEditing = props.players.some(player => player.isEditing === true);\n  const handleAddPlayer = () => {\n    if (newPlayer.name && newPlayer.name.trim() !== \"\") {\n      const playerToAdd = {\n        ...newPlayer,\n        id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(),\n        isEditing: false\n      };\n      console.log(playerToAdd);\n      props.onAddPlayer(playerToAdd);\n      setNewPlayer({});\n      setPlayerNameInputEnable(false);\n    }\n  };\n  const handleRemovePlayer = playerId => {\n    //console.log(playerId)\n    props.onRemovePlayer(playerId);\n  };\n  const handleInputNameChange = e => {\n    if (e.target.value.length > 0 ? setPlayerNameInputEnable(true) : setPlayerNameInputEnable(false)) ;\n    setNewPlayer({\n      ...newPlayer,\n      name: e.target.value\n    });\n  };\n  const handleChangeCurrentPlayerName = playerId => {\n    const newName = playerNameChanged;\n    if (newName.trim().length > 0) {\n      props.onChangePlayerName(playerId, newName);\n      props.onClickEditPlayer(playerId);\n    }\n  };\n  const handleClickEditPlayer = (playerId, currentName) => {\n    console.log(isAnyPlayerEditing);\n    if (!isAnyPlayerEditing) {\n      console.log(currentName);\n      setPlayerNameChanged(currentName);\n      props.onClickEditPlayer(playerId);\n    }\n  };\n  const handleLoadCurrentPlayers = players.length > 0 ? players.map(player => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"playersInputContainer\",\n    key: player.id\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    key: player.id,\n    defaultValue: player.name,\n    onChange: e => setPlayerNameChanged(e.target.value),\n    disabled: !player.isEditing\n  }), !player.isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_im__WEBPACK_IMPORTED_MODULE_5__.ImPencil2, {\n    disabled: true,\n    className: \"editPlayerIcon\",\n    \"data-key\": player.id,\n    onClick: () => {\n      handleClickEditPlayer(player.id, player.name);\n    }\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_im__WEBPACK_IMPORTED_MODULE_5__.ImFloppyDisk, {\n    className: \"saveEditPlayerIcon\",\n    \"data-key\": player.id,\n    onClick: () => {\n      handleChangeCurrentPlayerName(player.id);\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_im__WEBPACK_IMPORTED_MODULE_5__.ImCross, {\n    className: \"deletePlayerIcon\",\n    \"data-key\": player.id,\n    onClick: () => handleRemovePlayer(player.id)\n  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"noPlayersDiv\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"You need to add some players\"));\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setPlayers(props.players);\n  }, [props.players]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"playersEditContainer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"editTitleContainer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_im__WEBPACK_IMPORTED_MODULE_5__.ImArrowLeft2, {\n    className: \"goBackFromPlayers\",\n    onClick: function () {\n      props.handleOpenEditPlayers();\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: \"editPlayersTitle\"\n  }, \"Edit Players\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"playersEditListContainer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"playersEditListOverflow\"\n  }, handleLoadCurrentPlayers), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h3\", {\n    className: \"newPlayerTitle\"\n  }, \"New Player\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"playersNewInputContainer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"input\", {\n    type: \"text\",\n    maxlength: \"25\",\n    value: newPlayer.name || '',\n    onChange: handleInputNameChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"\".concat(playerNameInputEnable ? \"savePlayerBtn\" : \"savePlayerBtn disabledButton\"),\n    onClick: handleAddPlayer\n  }, \"Add\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null)));\n};\nconst mapStateToProps = state => {\n  return {\n    players: state.player.players\n  };\n};\nconst mapDispatchToProps = dispatch => {\n  return {\n    onAddPlayer: value => {\n      dispatch((0,_redux__WEBPACK_IMPORTED_MODULE_2__.addPlayer)(value));\n    },\n    onRemovePlayer: value => {\n      dispatch((0,_redux__WEBPACK_IMPORTED_MODULE_2__.removePlayer)(value));\n    },\n    onChangePlayerName: (valueId, valueName) => {\n      dispatch((0,_redux__WEBPACK_IMPORTED_MODULE_2__.changePlayerName)(valueId, valueName));\n    },\n    onClickEditPlayer: valueId => {\n      dispatch((0,_redux__WEBPACK_IMPORTED_MODULE_2__.changePlayerToEdit)(valueId));\n    }\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(EditPlayersContainer));\n\n//# sourceURL=webpack://shotlessappv3/./src/componets/EditPlayersContainer.js?");

/***/ }),

/***/ "./src/componets/GameBtnContainer.js":
/*!*******************************************!*\
  !*** ./src/componets/GameBtnContainer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_GameContainer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/GameContainer.scss */ \"./src/styles/GameContainer.scss\");\n/* harmony import */ var _hooks_useShotlessLoser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useShotlessLoser */ \"./src/hooks/useShotlessLoser.js\");\n/* harmony import */ var _CountDownContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CountDownContainer */ \"./src/componets/CountDownContainer.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n// import styles from '../styles/GameContainer.module.scss'\n\n\n\n\n\nconst GameBtnContainer = _ref => {\n  let {\n    goBtnVisible,\n    setGoBtnVisible,\n    players\n  } = _ref;\n  const {\n    shotlessLoser,\n    handleDrawName\n  } = (0,_hooks_useShotlessLoser__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const handleClickToStartDraw = () => {\n    setGoBtnVisible(false);\n  };\n  const handleClickOnWinner = () => {\n    setGoBtnVisible(true);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(\"div\", {\n    className: \"gameBtnContainer\"\n  }, goBtnVisible ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(\"button\", {\n    className: \"drawBtn \".concat(players.length === 0 ? \"disabledGoButton\" : \"\"),\n    disabled: players.length === 0,\n    onClick: () => {\n      handleClickToStartDraw();\n      handleDrawName();\n    }\n  }, \"GO\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_CountDownContainer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    shotlessLoser: shotlessLoser,\n    handleClickOnWinner: handleClickOnWinner\n  }))\n  // <div className={styles.gameBtnContainer}>\n  //     {goBtnVisible ? ( <button className={styles.drawBtn} onClick={() => {handleClickToStartDraw(); handleDrawName()}}>GO</button> ) : <CountDownContainer shotlessLoser={shotlessLoser} handleClickOnWinner={handleClickOnWinner}/>}\n  // </div>\n  ;\n};\nconst mapStateToProps = state => {\n  return {\n    players: state.player.players\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)(mapStateToProps)(GameBtnContainer));\n\n//# sourceURL=webpack://shotlessappv3/./src/componets/GameBtnContainer.js?");

/***/ }),

/***/ "./src/componets/GameContainer.js":
/*!****************************************!*\
  !*** ./src/componets/GameContainer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _GameBtnContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameBtnContainer */ \"./src/componets/GameBtnContainer.js\");\n/* harmony import */ var _styles_GameContainer_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/GameContainer.scss */ \"./src/styles/GameContainer.scss\");\n\n\n//import styles from '../styles/GameContainer.module.scss'\n\n\nconst GameContainer = () => {\n  const [goBtnVisible, setGoBtnVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  return (\n    /*#__PURE__*/\n    // <div className={styles.gameContainer}>\n    //     <h1 className={styles.shotlessTitle}>Shotless</h1>\n    //     <GameBtnContainer goBtnVisible={goBtnVisible} setGoBtnVisible={setGoBtnVisible}/>\n    // </div>\n    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n      className: \"gameContainer\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n      className: \"shotlessTitle\"\n    }, \"Shotless\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_GameBtnContainer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      goBtnVisible: goBtnVisible,\n      setGoBtnVisible: setGoBtnVisible\n    }))\n  );\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameContainer);\n\n//# sourceURL=webpack://shotlessappv3/./src/componets/GameContainer.js?");

/***/ }),

/***/ "./src/componets/PlayerBadge.js":
/*!**************************************!*\
  !*** ./src/componets/PlayerBadge.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_PlayerBadge_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/PlayerBadge.scss */ \"./src/styles/PlayerBadge.scss\");\n\n// import styles from '../styles/PlayerBadge.module.scss'\n\nconst PlayerBadge = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"playerBadge\"\n  }, props.value);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayerBadge);\n\n//# sourceURL=webpack://shotlessappv3/./src/componets/PlayerBadge.js?");

/***/ }),

/***/ "./src/componets/PlayersContainer.js":
/*!*******************************************!*\
  !*** ./src/componets/PlayersContainer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PlayerBadge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayerBadge */ \"./src/componets/PlayerBadge.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_PlayersContainer_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/PlayersContainer.scss */ \"./src/styles/PlayersContainer.scss\");\n\n\n\n// import styles from '../styles/PlayersContainer.module.scss'\n\nconst PlayersContainer = _ref => {\n  let {\n    handleOpenEditPlayers\n  } = _ref;\n  const players = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(state => state.player.players);\n  //const [players, setPlayers] = useState(props.players)\n\n  const handleLoadPlayers = players.map((playerItem, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PlayerBadge__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    key: playerItem.id,\n    \"data-key\": playerItem.id,\n    value: playerItem.name\n  }));\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"playersContainer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"playersListContainer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"playersListOverflow\"\n  }, players.length > 0 ? handleLoadPlayers : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"noPlayersDiv\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"You need to add some players\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"addPlayerContainer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: handleOpenEditPlayers,\n    className: \"addPlayerBtn\"\n  }, \"Add\")));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlayersContainer);\n\n//# sourceURL=webpack://shotlessappv3/./src/componets/PlayersContainer.js?");

/***/ }),

/***/ "./src/hooks/useShotlessLoser.js":
/*!***************************************!*\
  !*** ./src/hooks/useShotlessLoser.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst useShotlessLoser = () => {\n  const players = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)(state => state.player.players);\n  const [shotlessLoser, setShotlessLoser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n    id: null,\n    name: \"\"\n  });\n  const handleDrawName = () => {\n    const randomPlayer = players[Math.floor(Math.random() * players.length)];\n    setShotlessLoser(randomPlayer);\n    console.log(\"->\", randomPlayer);\n  };\n  return {\n    shotlessLoser: shotlessLoser,\n    handleDrawName: handleDrawName\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useShotlessLoser);\n\n//# sourceURL=webpack://shotlessappv3/./src/hooks/useShotlessLoser.js?");

/***/ }),

/***/ "./src/redux/index.js":
/*!****************************!*\
  !*** ./src/redux/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addPlayer: () => (/* reexport safe */ _player_playerActions__WEBPACK_IMPORTED_MODULE_0__.addPlayer),\n/* harmony export */   changePlayerName: () => (/* reexport safe */ _player_playerActions__WEBPACK_IMPORTED_MODULE_0__.changePlayerName),\n/* harmony export */   changePlayerToEdit: () => (/* reexport safe */ _player_playerActions__WEBPACK_IMPORTED_MODULE_0__.changePlayerToEdit),\n/* harmony export */   removePlayer: () => (/* reexport safe */ _player_playerActions__WEBPACK_IMPORTED_MODULE_0__.removePlayer)\n/* harmony export */ });\n/* harmony import */ var _player_playerActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player/playerActions */ \"./src/redux/player/playerActions.js\");\n\n\n\n\n\n//# sourceURL=webpack://shotlessappv3/./src/redux/index.js?");

/***/ }),

/***/ "./src/redux/player/playerActions.js":
/*!*******************************************!*\
  !*** ./src/redux/player/playerActions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addPlayer: () => (/* binding */ addPlayer),\n/* harmony export */   changePlayerName: () => (/* binding */ changePlayerName),\n/* harmony export */   changePlayerToEdit: () => (/* binding */ changePlayerToEdit),\n/* harmony export */   removePlayer: () => (/* binding */ removePlayer)\n/* harmony export */ });\n/* harmony import */ var _playerTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playerTypes */ \"./src/redux/player/playerTypes.js\");\n\n\n\n\nconst addPlayer = player => {\n  return {\n    type: _playerTypes__WEBPACK_IMPORTED_MODULE_0__.ADD_PLAYER,\n    payload: player\n  };\n};\nconst removePlayer = playerId => {\n  return {\n    type: _playerTypes__WEBPACK_IMPORTED_MODULE_0__.REMOVE_PLAYER,\n    payload: playerId\n  };\n};\nconst changePlayerName = (playerId, playerName) => {\n  return {\n    type: _playerTypes__WEBPACK_IMPORTED_MODULE_0__.CHANGE_PLAYER_NAME,\n    payload: {\n      playerId,\n      playerName\n    }\n  };\n};\nconst changePlayerToEdit = playerId => {\n  return {\n    type: _playerTypes__WEBPACK_IMPORTED_MODULE_0__.CHANGE_PLAYER_TO_EDIT,\n    payload: playerId\n  };\n};\n\n//# sourceURL=webpack://shotlessappv3/./src/redux/player/playerActions.js?");

/***/ }),

/***/ "./src/redux/player/playerReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/player/playerReducer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _playerTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playerTypes */ \"./src/redux/player/playerTypes.js\");\n\n\n\n\nconst initialState = {\n  players: [{\n    id: 1,\n    name: \"Gonyfig\",\n    isEditing: false\n  }]\n};\nconst playerReducer = function () {\n  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  let action = arguments.length > 1 ? arguments[1] : undefined;\n  switch (action.type) {\n    case _playerTypes__WEBPACK_IMPORTED_MODULE_0__.ADD_PLAYER:\n      return {\n        ...state,\n        players: [...state.players, action.payload]\n      };\n    case _playerTypes__WEBPACK_IMPORTED_MODULE_0__.REMOVE_PLAYER:\n      return {\n        ...state,\n        players: state.players.filter(player => player.id !== action.payload)\n      };\n    case _playerTypes__WEBPACK_IMPORTED_MODULE_0__.CHANGE_PLAYER_TO_EDIT:\n      //debugger\n      const updatedPlayersEdit = state.players.map(player => {\n        if (player.id === action.payload) {\n          return {\n            ...player,\n            isEditing: !player.isEditing\n          };\n        } else {\n          return player;\n        }\n      });\n      return {\n        ...state,\n        players: updatedPlayersEdit\n      };\n    case _playerTypes__WEBPACK_IMPORTED_MODULE_0__.CHANGE_PLAYER_NAME:\n      const {\n        playerId,\n        playerName\n      } = action.payload;\n      //console.log(\"payload: \"+ userId + \" \" + userNewName)\n      const updatedPlayers = state.players.map(player => {\n        if (player.id === playerId) {\n          return {\n            ...player,\n            name: playerName\n          };\n        } else {\n          return player;\n        }\n      });\n      return {\n        ...state,\n        players: updatedPlayers\n      };\n    default:\n      return state;\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playerReducer);\n\n//# sourceURL=webpack://shotlessappv3/./src/redux/player/playerReducer.js?");

/***/ }),

/***/ "./src/redux/player/playerTypes.js":
/*!*****************************************!*\
  !*** ./src/redux/player/playerTypes.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ADD_PLAYER: () => (/* binding */ ADD_PLAYER),\n/* harmony export */   CHANGE_PLAYER_NAME: () => (/* binding */ CHANGE_PLAYER_NAME),\n/* harmony export */   CHANGE_PLAYER_TO_EDIT: () => (/* binding */ CHANGE_PLAYER_TO_EDIT),\n/* harmony export */   REMOVE_PLAYER: () => (/* binding */ REMOVE_PLAYER)\n/* harmony export */ });\nconst ADD_PLAYER = \"ADD_PLAYER\";\nconst REMOVE_PLAYER = \"REMOVE_PLAYER\";\nconst CHANGE_PLAYER_NAME = \"CHANGE_PLAYER_NAME\";\nconst CHANGE_PLAYER_TO_EDIT = \"CHANGE_PLAYER_TO_EDIT\";\n\n//# sourceURL=webpack://shotlessappv3/./src/redux/player/playerTypes.js?");

/***/ }),

/***/ "./src/redux/rootReducer.js":
/*!**********************************!*\
  !*** ./src/redux/rootReducer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _player_playerReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player/playerReducer */ \"./src/redux/player/playerReducer.js\");\n\n\nconst rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n  player: _player_playerReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);\n\n//# sourceURL=webpack://shotlessappv3/./src/redux/rootReducer.js?");

/***/ }),

/***/ "./src/redux/store/store.js":
/*!**********************************!*\
  !*** ./src/redux/store/store.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rootReducer */ \"./src/redux/rootReducer.js\");\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n  reducer: _rootReducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n\n//# sourceURL=webpack://shotlessappv3/./src/redux/store/store.js?");

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.App {\n  text-align: center;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://shotlessappv3/./src/App.css?");

/***/ }),

/***/ "./src/styles/CountDownContainer.scss":
/*!********************************************!*\
  !*** ./src/styles/CountDownContainer.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shotlessappv3/./src/styles/CountDownContainer.scss?");

/***/ }),

/***/ "./src/styles/EditPlayersContainer.scss":
/*!**********************************************!*\
  !*** ./src/styles/EditPlayersContainer.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shotlessappv3/./src/styles/EditPlayersContainer.scss?");

/***/ }),

/***/ "./src/styles/GameContainer.scss":
/*!***************************************!*\
  !*** ./src/styles/GameContainer.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shotlessappv3/./src/styles/GameContainer.scss?");

/***/ }),

/***/ "./src/styles/PlayerBadge.scss":
/*!*************************************!*\
  !*** ./src/styles/PlayerBadge.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shotlessappv3/./src/styles/PlayerBadge.scss?");

/***/ }),

/***/ "./src/styles/PlayersContainer.scss":
/*!******************************************!*\
  !*** ./src/styles/PlayersContainer.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shotlessappv3/./src/styles/PlayersContainer.scss?");

/***/ }),

/***/ "@babel/register":
/*!**********************************!*\
  !*** external "@babel/register" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/register");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-icons/im":
/*!*********************************!*\
  !*** external "react-icons/im" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/im");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("uuid");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.js");
/******/ 	
/******/ })()
;