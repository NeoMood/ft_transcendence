"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Chat/layout",{

/***/ "(app-client)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"d4ff9ac9418a\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZ2xvYmFscy5jc3M/OTliYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImQ0ZmY5YWM5NDE4YVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/globals.css\n"));

/***/ }),

/***/ "(app-client)/./components/Dashboard/Chat/group/SelectUsers.tsx":
/*!*********************************************************!*\
  !*** ./components/Dashboard/Chat/group/SelectUsers.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SelectUsers; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Avatar_Avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Avatar/Avatar */ \"(app-client)/./components/Dashboard/Chat/Avatar/Avatar.tsx\");\n\n\nfunction SelectUsers(param) {\n    let { user, setGroupUsers, groupUsers } = param;\n    const handleClick = (e)=>{\n        setTimeout(()=>{\n            if (e.target.checked) setGroupUsers([\n                ...groupUsers,\n                user.userId\n            ]);\n            else setGroupUsers(groupUsers.filter((username)=>username !== user.userId));\n        }, 100);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            htmlFor: user.username,\n            className: \"cursor-pointer flex items-center gap-[42px] py-[15px] hover:bg-[#D9D9D9] rounded-[10px] w-full pl-[10px]\",\n            onClick: handleClick,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"checkbox\",\n                    value: user.username,\n                    id: user.username,\n                    className: \"form-checkbox cursor-pointer h-[31px] w-[31px] text-gray-400 border-none rounded-[10px]\"\n                }, void 0, false, {\n                    fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/group/SelectUsers.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"flex items-center gap-[10px]\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Avatar_Avatar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            url: user.url,\n                            status: false\n                        }, void 0, false, {\n                            fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/group/SelectUsers.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-[20px] font-[500] font-[Poppins] text-[#474A4B]\",\n                                    children: user.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/group/SelectUsers.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-[15px] font-[500] font-[Poppins] text-[#A0A5A9]\",\n                                    children: user.username\n                                }, void 0, false, {\n                                    fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/group/SelectUsers.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/group/SelectUsers.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/group/SelectUsers.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/group/SelectUsers.tsx\",\n            lineNumber: 27,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_c = SelectUsers;\nvar _c;\n$RefreshReg$(_c, \"SelectUsers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvQ2hhdC9ncm91cC9TZWxlY3RVc2Vycy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFxQztBQWF0QixTQUFTQyxZQUFZLEtBQWlEO1FBQWpELEVBQUNDLElBQUksRUFBQ0MsYUFBYSxFQUFDQyxVQUFVLEVBQW1CLEdBQWpEO0lBRWhDLE1BQU1DLGNBQWMsQ0FBQ0M7UUFFakJDLFdBQVc7WUFDUCxJQUFHRCxFQUFFRSxPQUFPQyxTQUNSTixjQUFjO21CQUFJQztnQkFBV0YsS0FBS1E7YUFBTztpQkFFekNQLGNBQWNDLFdBQVdPLE9BQU8sQ0FBQ0MsV0FBb0JBLGFBQWFWLEtBQUtRO1FBQy9FLEdBQUc7SUFDUDtJQUNBLHFCQUNJO2tCQUNBLDRFQUFDRztZQUFNQyxTQUFTWixLQUFLVTtZQUFXRyxXQUFVO1lBQzFDQyxTQUFTWDs7OEJBQ0wsOERBQUNZO29CQUFNQyxNQUFLO29CQUFXQyxPQUFPakIsS0FBS1U7b0JBQVVRLElBQUlsQixLQUFLVTtvQkFBVUcsV0FBVTs7Ozs7OzhCQUMxRSw4REFBQ007b0JBQUtOLFdBQVU7O3NDQUNaLDhEQUFDZixzREFBTUE7NEJBQUNzQixLQUFLcEIsS0FBS29COzRCQUFLQyxRQUFROzs7Ozs7c0NBQy9CLDhEQUFDRjs7OENBQ0csOERBQUNHO29DQUFFVCxXQUFVOzhDQUNSYixLQUFLdUI7Ozs7Ozs4Q0FDViw4REFBQ0Q7b0NBQUVULFdBQVU7OENBQ1JiLEtBQUtVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTlCO0tBNUJ3QlgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvQ2hhdC9ncm91cC9TZWxlY3RVc2Vycy50c3g/MWZlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXZhdGFyIGZyb20gXCIuLi9BdmF0YXIvQXZhdGFyXCJcblxudHlwZSBTZWxlY3RVc2Vyc1Byb3BzID0ge1xuICAgIHVzZXIgOiB7XG4gICAgICAgIHVzZXJJZDogYW55O1xuICAgICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICAgIHVzZXJuYW1lOiBzdHJpbmcsXG4gICAgICAgIHVybDogc3RyaW5nLFxuICAgIH0sXG4gICAgc2V0R3JvdXBVc2VyczogbnVtYmVyW10sXG4gICAgZ3JvdXBVc2VyczogYW55XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlbGVjdFVzZXJzKHt1c2VyLHNldEdyb3VwVXNlcnMsZ3JvdXBVc2Vyc306IFNlbGVjdFVzZXJzUHJvcHMpIHtcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGU6YW55KSA9PlxuICAgIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZihlLnRhcmdldC5jaGVja2VkKVxuICAgICAgICAgICAgICAgIHNldEdyb3VwVXNlcnMoWy4uLmdyb3VwVXNlcnMsdXNlci51c2VySWRdKVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHNldEdyb3VwVXNlcnMoZ3JvdXBVc2Vycy5maWx0ZXIoKHVzZXJuYW1lOnN0cmluZykgPT4gdXNlcm5hbWUgIT09IHVzZXIudXNlcklkKSlcbiAgICAgICAgfSwgMTAwKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9e3VzZXIudXNlcm5hbWV9ICBjbGFzc05hbWU9J2N1cnNvci1wb2ludGVyIGZsZXggaXRlbXMtY2VudGVyIGdhcC1bNDJweF0gcHktWzE1cHhdIGhvdmVyOmJnLVsjRDlEOUQ5XSByb3VuZGVkLVsxMHB4XSB3LWZ1bGwgcGwtWzEwcHhdJ1xuICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT0nY2hlY2tib3gnIHZhbHVlPXt1c2VyLnVzZXJuYW1lfSBpZD17dXNlci51c2VybmFtZX0gY2xhc3NOYW1lPSdmb3JtLWNoZWNrYm94IGN1cnNvci1wb2ludGVyIGgtWzMxcHhdIHctWzMxcHhdIHRleHQtZ3JheS00MDAgYm9yZGVyLW5vbmUgcm91bmRlZC1bMTBweF0nIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGdhcC1bMTBweF0nPlxuICAgICAgICAgICAgICAgIDxBdmF0YXIgdXJsPXt1c2VyLnVybH0gc3RhdHVzPXtmYWxzZX0gIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzIwcHhdIGZvbnQtWzUwMF0gZm9udC1bUG9wcGluc10gdGV4dC1bIzQ3NEE0Ql1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LVsxNXB4XSBmb250LVs1MDBdIGZvbnQtW1BvcHBpbnNdIHRleHQtWyNBMEE1QTldXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dXNlci51c2VybmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8Lz5cbiAgICApXG59Il0sIm5hbWVzIjpbIkF2YXRhciIsIlNlbGVjdFVzZXJzIiwidXNlciIsInNldEdyb3VwVXNlcnMiLCJncm91cFVzZXJzIiwiaGFuZGxlQ2xpY2siLCJlIiwic2V0VGltZW91dCIsInRhcmdldCIsImNoZWNrZWQiLCJ1c2VySWQiLCJmaWx0ZXIiLCJ1c2VybmFtZSIsImxhYmVsIiwiaHRtbEZvciIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsImlkIiwic3BhbiIsInVybCIsInN0YXR1cyIsInAiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/Dashboard/Chat/group/SelectUsers.tsx\n"));

/***/ })

});