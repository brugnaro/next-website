webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/i18n.js":
/*!***********************!*\
  !*** ./pages/i18n.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/es/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _languages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./languages */ "./pages/languages/index.js");



var resources = {
  en: {
    translation: _languages__WEBPACK_IMPORTED_MODULE_2__["en"]
  },
  pt: {
    translation: _languages__WEBPACK_IMPORTED_MODULE_2__["pt"]
  }
};
i18next__WEBPACK_IMPORTED_MODULE_0__["default"].use(react_i18next__WEBPACK_IMPORTED_MODULE_1__["initReactI18next"]).init({
  resources: resources,
  lng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false
  }
});
/* harmony default export */ __webpack_exports__["default"] = (i18next__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./pages/languages/en.json":
/*!*********************************!*\
  !*** ./pages/languages/en.json ***!
  \*********************************/
/*! exports provided: welcome, other, default */
/***/ (function(module) {

module.exports = {"welcome":"welcome more one test","other":"Other test"};

/***/ }),

/***/ "./pages/languages/index.js":
/*!**********************************!*\
  !*** ./pages/languages/index.js ***!
  \**********************************/
/*! exports provided: en, pt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _en_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en.json */ "./pages/languages/en.json");
var _en_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./en.json */ "./pages/languages/en.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "en", function() { return _en_json__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _pt_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pt.json */ "./pages/languages/pt.json");
var _pt_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./pt.json */ "./pages/languages/pt.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "pt", function() { return _pt_json__WEBPACK_IMPORTED_MODULE_1__; });



/***/ }),

/***/ "./pages/languages/pt.json":
/*!*********************************!*\
  !*** ./pages/languages/pt.json ***!
  \*********************************/
/*! exports provided: welcome, other, default */
/***/ (function(module) {

module.exports = {"welcome":"Seja bem vindo mais um test","other":"Outro teste"};

/***/ })

})
//# sourceMappingURL=index.js.c03ec2541381482a5e03.hot-update.js.map