"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ArticleItem.js":
/*!***********************************!*\
  !*** ./components/ArticleItem.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Article_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Article.module.css */ \"./styles/Article.module.css\");\n/* harmony import */ var _styles_Article_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Article_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\n\nvar ArticleItem = function(param) {\n    var article = param.article;\n    var date = new Date().toUTCString();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            href: \"/article/id\",\n            as: \"article/\".concat(article.id),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                className: (_styles_Article_module_css__WEBPACK_IMPORTED_MODULE_2___default().card),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: [\n                            \" \",\n                            article.title,\n                            \" →\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\NATHAN LUORNOR\\\\Desktop\\\\React_learning_phase\\\\next-crash-course\\\\components\\\\ArticleItem.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: Date.toUTCString\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\NATHAN LUORNOR\\\\Desktop\\\\React_learning_phase\\\\next-crash-course\\\\components\\\\ArticleItem.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\NATHAN LUORNOR\\\\Desktop\\\\React_learning_phase\\\\next-crash-course\\\\components\\\\ArticleItem.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, _this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\NATHAN LUORNOR\\\\Desktop\\\\React_learning_phase\\\\next-crash-course\\\\components\\\\ArticleItem.js\",\n            lineNumber: 9,\n            columnNumber: 5\n        }, _this)\n    }, void 0, false);\n};\n_c = ArticleItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticleItem);\nvar _c;\n$RefreshReg$(_c, \"ArticleItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0FydGljbGVJdGVtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBd0Q7QUFDNUI7QUFFNUIsSUFBTUUsV0FBVyxHQUFHLGdCQUFlO1FBQWJDLE9BQU8sU0FBUEEsT0FBTztJQUMzQixJQUFNQyxJQUFJLEdBQUcsSUFBSUMsSUFBSSxFQUFFLENBQUNDLFdBQVcsRUFBRTtJQUNyQyxxQkFDRTtrQkFFQSw0RUFBQ0wsa0RBQUk7WUFBQ00sSUFBSSxFQUFDLGFBQWE7WUFBQ0MsRUFBRSxFQUFFLFVBQVMsQ0FBYSxPQUFYTCxPQUFPLENBQUNNLEVBQUUsQ0FBRTtzQkFDbEQsNEVBQUNDLEdBQUM7Z0JBQUNDLFNBQVMsRUFBRVgsd0VBQWtCOztrQ0FFOUIsOERBQUNhLElBQUU7OzRCQUFDLEdBQUM7NEJBQUNWLE9BQU8sQ0FBQ1csS0FBSzs0QkFBQyxJQUFPOzs7Ozs7NkJBQUs7a0NBQ2hDLDhEQUFDQyxNQUFJO2tDQUFFVixJQUFJLENBQUNDLFdBQVc7Ozs7OzZCQUFROzs7Ozs7cUJBQzdCOzs7OztpQkFDQztxQkFDSixDQUVKO0FBQ0gsQ0FBQztBQWZLSixLQUFBQSxXQUFXO0FBaUJqQiwrREFBZUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0FydGljbGVJdGVtLmpzPzYzZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFydGljbGVTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0FydGljbGUubW9kdWxlLmNzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgQXJ0aWNsZUl0ZW0gPSAoe2FydGljbGV9KSA9PiB7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCkudG9VVENTdHJpbmcoKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG5cclxuICAgIDxMaW5rIGhyZWY9XCIvYXJ0aWNsZS9pZFwiIGFzPXtgYXJ0aWNsZS8ke2FydGljbGUuaWR9YH0+XHJcbiAgICAgIDxhIGNsYXNzTmFtZT17YXJ0aWNsZVN0eWxlcy5jYXJkfT5cclxuICAgICAgICBcclxuICAgICAgICA8aDM+IHthcnRpY2xlLnRpdGxlfSAmcmFycjs8L2gzPlxyXG4gICAgICAgIDxzcGFuPntEYXRlLnRvVVRDU3RyaW5nfTwvc3Bhbj5cclxuICAgICAgPC9hPlxyXG4gICAgPC9MaW5rPlxyXG4gICAgPC8+XHJcbiAgICBcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVJdGVtXHJcbiJdLCJuYW1lcyI6WyJhcnRpY2xlU3R5bGVzIiwiTGluayIsIkFydGljbGVJdGVtIiwiYXJ0aWNsZSIsImRhdGUiLCJEYXRlIiwidG9VVENTdHJpbmciLCJocmVmIiwiYXMiLCJpZCIsImEiLCJjbGFzc05hbWUiLCJjYXJkIiwiaDMiLCJ0aXRsZSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ArticleItem.js\n"));

/***/ })

});