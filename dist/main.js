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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --color-main: #35543d;\n  --color-bg: #2d2d2d;\n  --color-nav-transparent: rgba(45, 45, 45, 0.4);\n  --color-card-bg: rgba(45, 45, 45, 0.9);\n  --color-tert: #3d3d3d;\n  --color-text-headernav: #c5eccd;\n  --color-text-main: #dadada;\n  font-size: 18px;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background-color: var(--color-main);\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.content {\n  display: flex;\n  flex-direction: column;\n}\n\n.content-box {\n  display: flex;\n  flex-direction: row;\n  background-color: var(--color-bg);\n  width: 100vw;\n  height: calc(100vh - 75px);\n  border-radius: 25px 25px 0 0;\n}\n\nheader {\n  display: flex;\n  grid-area: header;\n  height: 75px;\n  align-items: center;\n  margin-left: 50px;\n  color: var(--color-text-headernav);\n}\n\n.left,\n.right {\n  position: relative;\n  border-radius: 25px;\n  margin: 15px;\n  display: flex;\n  padding: 0;\n}\n\n.left {\n  width: 20vw;\n  background-color: var(--color-main);\n  flex-direction: column;\n  color: var(--color-text-headernav);\n  font-size: 1.1rem;\n}\n\n.active {\n  background-color: var(--color-nav-transparent);\n  margin: 1rem 1rem 1rem 0 !important;\n  padding: 0 0 0 1rem;\n}\n\n.left h2 {\n  font-size: 1.2em;\n  font-weight: 700;\n}\n\n.left li,\n.left h2 {\n  list-style: none;\n  margin: 1rem;\n  display: flex;\n  width: 80%;\n  height: 1.5rem;\n  align-items: center;\n  gap: 0.25rem;\n}\n\n.left li {\n  cursor: pointer;\n  border-radius: 10px;\n}\n\nsvg {\n  width: 28px;\n}\n\n.important > div > svg {\n  fill: #ffd000;\n}\n\n.seperator {\n  align-self: center;\n  border-radius: 50px;\n  height: 5px;\n  width: 80%;\n  background-color: var(--color-text-headernav);\n  opacity: 50%;\n}\n\nfooter {\n  display: flex;\n  padding: 0;\n  background-color: var(--color-nav-transparent);\n  justify-content: center;\n  font-size: 0.9rem;\n  padding: 10px;\n  align-items: center;\n  border-radius: 0 0 25px 25px;\n  margin-top: auto;\n}\n\nfooter,\nfooter a {\n  color: var(--color-text-main);\n  font-size: 0.7rem;\n  font-weight: 900;\n}\n\nfooter a {\n  margin-right: 5px;\n  text-decoration: none;\n  background-color: transparent;\n}\n\nfooter a:hover,\nfooter a:active {\n  color: var(--color-text-headernav);\n}\n\n.right {\n  display: flex;\n  background-color: var(--color-tert);\n  width: 80vw;\n  margin-left: 0;\n  padding: 1em;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  overflow: hidden;\n}\n\n.card {\n  padding: 0 1.5rem;\n  background-color: var(--color-card-bg);\n  color: var(--color-text-main);\n  border-radius: 15px;\n  min-height: 150px;\n  position: relative;\n}\n\n.card > p {\n  font-size: 0.9rem;\n}\n\n.card-nav {\n  background-color: transparent;\n  border-left: 4px solid var(--color-tert);\n  border-bottom: 4px solid var(--color-tert);\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 50px;\n  width: 150px;\n  border-radius: 0 15px 0 25px;\n  display: flex;\n  gap: 10px;\n  justify-content: center;\n  align-items: flex-end;\n}\n\n.card-nav svg {\n  height: 38px;\n  width: 40px;\n  cursor: pointer;\n  transition: transform 0.1s;\n}\n\n.card-nav svg:hover,\n.plusButton svg:hover {\n  transform: scale(1.1);\n}\n\n.plusButton {\n  position: absolute;\n  background: linear-gradient(0deg, rgb(61, 61, 61) 80%, rgba(0, 0, 0, 0) 100%);\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  padding: 35px 20px 20px 30px;\n  display: flex;\n  z-index: 1;\n}\n\n.plusButton svg {\n  width: 70px;\n  color: var(--color-text-headernav);\n  border: 5px solid var(--color-text-main);\n  border-radius: 50px;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-to-do-list/./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top-to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-to-do-list/./src/styles/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/modules/svgs/Crossbox.svg":
/*!***************************************!*\
  !*** ./src/modules/svgs/Crossbox.svg ***!
  \***************************************/
/***/ ((module) => {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" fill=\\\"none\\\" viewBox=\\\"0 0 38 38\\\"><path stroke=\\\"currentColor\\\" stroke-linecap=\\\"square\\\" stroke-width=\\\"4\\\" d=\\\"M9 29.172 30.92 7.251M29 29.171 7.08 7.251\\\"></path><circle cx=\\\"19\\\" cy=\\\"19\\\" r=\\\"17\\\" stroke=\\\"currentColor\\\" stroke-width=\\\"4\\\"></circle></svg>\"\n\n//# sourceURL=webpack://top-to-do-list/./src/modules/svgs/Crossbox.svg?");

/***/ }),

/***/ "./src/modules/svgs/Tickbox.svg":
/*!**************************************!*\
  !*** ./src/modules/svgs/Tickbox.svg ***!
  \**************************************/
/***/ ((module) => {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" fill=\\\"none\\\" viewBox=\\\"0 0 40 38\\\"><circle cx=\\\"19\\\" cy=\\\"19\\\" r=\\\"17\\\" stroke=\\\"currentColor\\\" stroke-width=\\\"4\\\"></circle><path stroke=\\\"#C5ECCD\\\" stroke-linecap=\\\"round\\\" stroke-width=\\\"4\\\" d=\\\"m9 19.552 8.427 7.071m.509.358L37.219 4\\\"></path></svg>\"\n\n//# sourceURL=webpack://top-to-do-list/./src/modules/svgs/Tickbox.svg?");

/***/ }),

/***/ "./src/modules/svgs/plus.svg":
/*!***********************************!*\
  !*** ./src/modules/svgs/plus.svg ***!
  \***********************************/
/***/ ((module) => {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"-4.5 -4.5 24 24\\\" fill=\\\"currentColor\\\" style=\\\"--darkreader-inline-fill: currentColor;\\\" data-darkreader-inline-fill><path d=\\\"M8.9 6.9v-5a1 1 0 1 0-2 0v5h-5a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5z\\\"></path></svg>\"\n\n//# sourceURL=webpack://top-to-do-list/./src/modules/svgs/plus.svg?");

/***/ }),

/***/ "./src/modules/svgs/star-f.svg":
/*!*************************************!*\
  !*** ./src/modules/svgs/star-f.svg ***!
  \*************************************/
/***/ ((module) => {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" viewBox=\\\"-2 -2 24 24\\\" fill=\\\"currentColor\\\" style=\\\"--darkreader-inline-fill: currentColor;\\\" data-darkreader-inline-fill><path d=\\\"M10 16.379l-6.173 3.245 1.179-6.874L.01 7.882l6.902-1.003L10 .624l3.087 6.255 6.902 1.003-4.995 4.868 1.18 6.874z\\\"></path></svg>\"\n\n//# sourceURL=webpack://top-to-do-list/./src/modules/svgs/star-f.svg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _modules_page_content_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/page-content.js */ \"./src/modules/page-content.js\");\n\r\n\r\n\r\n(0,_modules_page_content_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\n\n//# sourceURL=webpack://top-to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/page-content.js":
/*!*************************************!*\
  !*** ./src/modules/page-content.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initWebsite)\n/* harmony export */ });\n/* harmony import */ var _svgs_star_f_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svgs/star-f.svg */ \"./src/modules/svgs/star-f.svg\");\n/* harmony import */ var _svgs_star_f_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_svgs_star_f_svg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _svgs_plus_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svgs/plus.svg */ \"./src/modules/svgs/plus.svg\");\n/* harmony import */ var _svgs_plus_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svgs_plus_svg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _svgs_Tickbox_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svgs/Tickbox.svg */ \"./src/modules/svgs/Tickbox.svg\");\n/* harmony import */ var _svgs_Tickbox_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_svgs_Tickbox_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _svgs_Crossbox_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svgs/Crossbox.svg */ \"./src/modules/svgs/Crossbox.svg\");\n/* harmony import */ var _svgs_Crossbox_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_svgs_Crossbox_svg__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\n// Layout\r\n\r\nfunction createLayout() {\r\n\tconst header = document.createElement('header');\r\n\r\n\tconst contentBox = document.createElement('div');\r\n\tcontentBox.className = 'content-box';\r\n\r\n\tconst leftDiv = document.createElement('div');\r\n\tleftDiv.className = 'left';\r\n\r\n\tconst rightDiv = document.createElement('div');\r\n\trightDiv.className = 'right';\r\n\r\n\tconst content = document.getElementById('content');\r\n\tcontent.appendChild(header);\r\n\tcontent.appendChild(contentBox);\r\n\tcontentBox.appendChild(leftDiv);\r\n\tcontentBox.appendChild(rightDiv);\r\n}\r\n\r\n// Header\r\n\r\nfunction createHeader() {\r\n\tconst header = document.querySelector('header');\r\n\r\n\tlet h1 = document.createElement('h1');\r\n\th1.textContent = 'To-do List';\r\n\theader.appendChild(h1);\r\n}\r\n\r\n// Left side/Navbar\r\n\r\nfunction createNav() {\r\n\tfunction starSvgImport() {\r\n\t\tconst element = document.createElement('div');\r\n\r\n\t\telement.innerHTML = (_svgs_star_f_svg__WEBPACK_IMPORTED_MODULE_0___default());\r\n\r\n\t\treturn element;\r\n\t}\r\n\r\n\tfunction plusSvgImport() {\r\n\t\tconst element = document.createElement('div');\r\n\r\n\t\telement.innerHTML = (_svgs_plus_svg__WEBPACK_IMPORTED_MODULE_1___default());\r\n\r\n\t\treturn element;\r\n\t}\r\n\r\n\tfunction inboxSection() {\r\n\t\tconst inboxList = document.createElement('ul');\r\n\t\tinboxList.className = 'inbox';\r\n\r\n\t\tlet inboxHeader = document.createElement('h2');\r\n\t\tinboxHeader.textContent = 'Home';\r\n\r\n\t\tlet today = document.createElement('li');\r\n\t\ttoday.textContent = 'Today';\r\n\r\n\t\tlet thisWeek = document.createElement('li');\r\n\t\tthisWeek.textContent = 'This Week';\r\n\r\n\t\tlet important = document.createElement('li');\r\n\t\timportant.className = 'important';\r\n\r\n\t\tleftDiv.appendChild(inboxList);\r\n\r\n\t\tinboxList.appendChild(inboxHeader);\r\n\t\tinboxList.appendChild(today);\r\n\t\tinboxList.appendChild(thisWeek);\r\n\t\tinboxList.appendChild(important);\r\n\t\timportant.appendChild(starSvgImport());\r\n\t\timportant.appendChild(document.createTextNode('Important'));\r\n\r\n\t\tconst navList = inboxList.querySelectorAll('li');\r\n\r\n\t\tnavList.forEach((item) => {\r\n\t\t\titem.classList.add('nav-li');\r\n\t\t});\r\n\t}\r\n\r\n\tlet separator = document.createElement('div');\r\n\tseparator.className = 'seperator';\r\n\r\n\tfunction projectsSection() {\r\n\t\tconst projectsList = document.createElement('ul');\r\n\t\tprojectsList.className = 'projects';\r\n\r\n\t\tlet projectsHeader = document.createElement('h2');\r\n\t\tprojectsHeader.textContent = 'Projects';\r\n\r\n\t\tlet addProject = document.createElement('li');\r\n\r\n\t\tleftDiv.appendChild(projectsList);\r\n\t\tprojectsList.appendChild(projectsHeader);\r\n\t\tprojectsList.appendChild(addProject);\r\n\t\taddProject.appendChild(plusSvgImport());\r\n\t\taddProject.appendChild(document.createTextNode('Add Project'));\r\n\t}\r\n\r\n\tfunction Footer() {\r\n\t\tlet footerText = document.createElement('footer');\r\n\t\tlet githubLink = document.createElement('a');\r\n\t\tgithubLink.href = 'https://github.com/Copperage/TOP-to-do-list';\r\n\t\tgithubLink.textContent = 'Github';\r\n\t\tfooterText.appendChild(githubLink);\r\n\t\tfooterText.innerHTML += ' | © 2023 Copperage';\r\n\r\n\t\tleftDiv.appendChild(footerText);\r\n\t}\r\n\r\n\tconst leftDiv = document.querySelector('.left');\r\n\r\n\tinboxSection();\r\n\tleftDiv.appendChild(separator);\r\n\tprojectsSection();\r\n\tFooter();\r\n}\r\n\r\n// Right Side\r\nfunction createCards() {\r\n\tfunction tickboxSvgImport() {\r\n\t\tconst element = document.createElement('div');\r\n\t\telement.className = 'confirm';\r\n\r\n\t\telement.innerHTML = (_svgs_Tickbox_svg__WEBPACK_IMPORTED_MODULE_2___default());\r\n\r\n\t\treturn element;\r\n\t}\r\n\r\n\tfunction crossboxSvgImport() {\r\n\t\tconst element = document.createElement('div');\r\n\t\telement.className = 'delete';\r\n\r\n\t\telement.innerHTML = (_svgs_Crossbox_svg__WEBPACK_IMPORTED_MODULE_3___default());\r\n\r\n\t\telement.addEventListener('click', () => {\r\n\t\t\tcardDiv.remove();\r\n\t\t});\r\n\r\n\t\treturn element;\r\n\t}\r\n\r\n\tlet cardDiv = document.createElement('div');\r\n\tcardDiv.className = 'card';\r\n\r\n\tlet cardHeader = document.createElement('h2');\r\n\tcardHeader.textContent = `Important Reminder`;\r\n\r\n\tlet cardText = document.createElement('p');\r\n\tcardText.textContent = `Temporary text - Do this thing that you've made a very important reminder of.`;\r\n\r\n\tlet cardDivNav = document.createElement('div');\r\n\tcardDivNav.className = 'card-nav';\r\n\r\n\tconst rightDiv = document.querySelector('.right');\r\n\r\n\trightDiv.appendChild(cardDiv);\r\n\tcardDiv.appendChild(cardHeader);\r\n\tcardDiv.appendChild(cardText);\r\n\tcardDiv.appendChild(cardDivNav);\r\n\tcardDivNav.appendChild(tickboxSvgImport());\r\n\tcardDivNav.appendChild(crossboxSvgImport());\r\n}\r\n\r\nfunction createCardButton() {\r\n\tfunction plusSvgImport() {\r\n\t\tconst element = document.createElement('div');\r\n\t\telement.className = 'create-card';\r\n\r\n\t\telement.innerHTML = (_svgs_plus_svg__WEBPACK_IMPORTED_MODULE_1___default());\r\n\r\n\t\treturn element;\r\n\t}\r\n\r\n\tconst rightDiv = document.querySelector('.right');\r\n\r\n\tlet plusButtonDiv = document.createElement('div');\r\n\tplusButtonDiv.className = 'plusButton';\r\n\r\n\trightDiv.appendChild(plusButtonDiv);\r\n\tplusButtonDiv.appendChild(plusSvgImport());\r\n\r\n\tplusButtonDiv.addEventListener('click', function () {\r\n\t\tcreateCards(); // Call the createCards function to append a new card\r\n\t});\r\n}\r\n\r\nfunction setActive(selectedItem) {\r\n\tconst navItems = document.querySelectorAll('.nav-li');\r\n\r\n\tnavItems.forEach((item) => {\r\n\t\titem.classList.remove('active');\r\n\t});\r\n\r\n\tselectedItem.classList.add('active');\r\n}\r\n\r\nfunction initWebsite() {\r\n\tcreateLayout();\r\n\tcreateHeader();\r\n\tcreateNav();\r\n\tcreateCardButton();\r\n\r\n\tconst navList = document.querySelectorAll('.nav-li');\r\n\tconst defaultNavList = document.querySelector('.nav-li');\r\n\tsetActive(defaultNavList);\r\n\r\n\tnavList.forEach((item) => {\r\n\t\titem.addEventListener('click', function () {\r\n\t\t\tsetActive(item);\r\n\t\t});\r\n\t});\r\n}\r\n\r\ninitWebsite();\r\n\n\n//# sourceURL=webpack://top-to-do-list/./src/modules/page-content.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;