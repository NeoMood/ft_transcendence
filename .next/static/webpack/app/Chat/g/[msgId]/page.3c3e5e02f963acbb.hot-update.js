"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Chat/g/[msgId]/page",{

/***/ "(app-client)/./components/Dashboard/Chat/Messages/HandlRightClick.tsx":
/*!****************************************************************!*\
  !*** ./components/Dashboard/Chat/Messages/HandlRightClick.tsx ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HandlRightClick; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction HandlRightClick(param) {\n    let { children, id, name, type, mytype } = param;\n    _s();\n    const [showMenu, setShowMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showMutemenu, setShowMutemenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [pos, setPos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const handleContextMenu = (e)=>{\n        e.preventDefault(); // Prevent the default context menu\n        setShowMenu(true);\n        setPos({\n            x: e.clientX - window.innerWidth,\n            y: e.clientY\n        });\n        console.log(e.clientX, e.clientY);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onContextMenu: handleContextMenu,\n        onC: true,\n        onMouseLeave: ()=>{\n            setShowMenu(false);\n        },\n        children: [\n            showMenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute w-[120px] flex flex-col gap-[10px] z-[100] bg-[#034B8A] translate-[\".concat(pos.x, \"px,\").concat(pos.y, \"px] right-0\\n                    groupInfo text-white rounded-[10px]\\n                    \"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" cursor-pointer relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"py-[10px] px-[20px]\",\n                                onClick: ()=>{\n                                    setShowMutemenu(!showMutemenu);\n                                },\n                                children: \"Mute\"\n                            }, void 0, false, {\n                                fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 33\n                            }, this),\n                            showMutemenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"absolute top-[0px] -left-[110px] bg-[#034B8A] rounded-[10px] flex flex-col\",\n                                onMouseLeave: ()=>{\n                                    setShowMutemenu(false);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"py-[10px] px-[20px] cursor-pointer\",\n                                        children: \"5 sec\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 41\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"py-[10px] px-[20px] cursor-pointer\",\n                                        children: \"5 min\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 41\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"py-[10px] px-[20px] cursor-pointer\",\n                                        children: \"1 hour\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 41\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"py-[10px] px-[20px] cursor-pointer\",\n                                        children: \"1 year\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 41\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 37\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 29\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-[10px] px-[20px] cursor-pointer\",\n                        children: \"Ban\"\n                    }, void 0, false, {\n                        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-[10px] px-[20px] cursor-pointer\",\n                        children: \"Kick\"\n                    }, void 0, false, {\n                        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-[10px] px-[20px] cursor-pointer\",\n                        children: \"Set Admin\"\n                    }, void 0, false, {\n                        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-[10px] px-[20px] cursor-pointer\",\n                        children: \"Set Owner\"\n                    }, void 0, false, {\n                        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                lineNumber: 35,\n                columnNumber: 21\n            }, this),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, this);\n}\n_s(HandlRightClick, \"1qzGwtbJHAJNMiRTHHjzNhFipCw=\");\n_c = HandlRightClick;\nvar _c;\n$RefreshReg$(_c, \"HandlRightClick\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvQ2hhdC9NZXNzYWdlcy9IYW5kbFJpZ2h0Q2xpY2sudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUN5QztBQUNSO0FBVWxCLFNBQVNFLGdCQUFnQixLQUE4RDtRQUE5RCxFQUFFQyxRQUFRLEVBQUdDLEVBQUUsRUFBR0MsSUFBSSxFQUFHQyxJQUFJLEVBQUdDLE1BQU0sRUFBd0IsR0FBOUQ7O0lBQ3BDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNTLGNBQWNDLGdCQUFnQixHQUFHViwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNXLEtBQUtDLE9BQU8sR0FBR1osK0NBQVFBLENBQUM7UUFBRWEsR0FBRztRQUFHQyxHQUFHO0lBQUU7SUFDNUMsTUFBTUMsb0JBQW9CLENBQUNDO1FBQ3ZCQSxFQUFFQyxrQkFBa0IsbUNBQW1DO1FBQ3ZEVCxZQUFZO1FBQ1pJLE9BQU87WUFBRUMsR0FBR0csRUFBRUUsVUFBVUMsT0FBT0M7WUFBWU4sR0FBR0UsRUFBRUs7UUFBUTtRQUN4REMsUUFBUUMsSUFBSVAsRUFBRUUsU0FBU0YsRUFBRUs7SUFDN0I7SUFFQSxxQkFDSSw4REFBQ0c7UUFBSUMsZUFBZVY7UUFDcEJXLEdBQUc7UUFDSEMsY0FDSTtZQUNJbkIsWUFBWTtRQUNoQjs7WUFJSUQsMEJBQ0ksOERBQUNpQjtnQkFBS0ksV0FBVywrRUFBMEZqQixPQUFYQSxJQUFJRSxHQUFFLE9BQVcsT0FBTkYsSUFBSUcsR0FBRTs7a0NBS3pHLDhEQUFDVTt3QkFBSUksV0FBVTs7MENBQ1gsOERBQUNDO2dDQUFFRCxXQUFVO2dDQUFzQkUsU0FDL0I7b0NBQ0lwQixnQkFBZ0IsQ0FBQ0Q7Z0NBQ3JCOzBDQUNGOzs7Ozs7NEJBSUVBLDhCQUNBLDhEQUFDc0I7Z0NBQUdILFdBQVU7Z0NBQTZFRCxjQUN2RjtvQ0FDSWpCLGdCQUFnQjtnQ0FDcEI7O2tEQUVBLDhEQUFDc0I7d0NBQUdKLFdBQVU7a0RBQXFDOzs7Ozs7a0RBR25ELDhEQUFDSTt3Q0FBR0osV0FBVTtrREFBcUM7Ozs7OztrREFHbkQsOERBQUNJO3dDQUFHSixXQUFVO2tEQUFxQzs7Ozs7O2tEQUduRCw4REFBQ0k7d0NBQUdKLFdBQVU7a0RBQXFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBUW5FLDhEQUFDSjt3QkFBSUksV0FBVTtrQ0FBcUM7Ozs7OztrQ0FHcEQsOERBQUNKO3dCQUFJSSxXQUFVO2tDQUFxQzs7Ozs7O2tDQUdwRCw4REFBQ0o7d0JBQUlJLFdBQVU7a0NBQXFDOzs7Ozs7a0NBR3BELDhEQUFDSjt3QkFBSUksV0FBVTtrQ0FBcUM7Ozs7Ozs7Ozs7OztZQU0vRDFCOzs7Ozs7O0FBSWI7R0E5RXdCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Rhc2hib2FyZC9DaGF0L01lc3NhZ2VzL0hhbmRsUmlnaHRDbGljay50c3g/YTYxMCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbnR5cGUgSGFuZGxSaWdodENsaWNrUHJvcHMgPXtcbiAgICBjaGlsZHJlbjogUmVhY3ROb2RlLFxuICAgIGlkID86IG51bWJlcixcbiAgICBuYW1lID86IHN0cmluZyxcbiAgICB0eXBlID86IHN0cmluZyxcbiAgICBteXR5cGUgPzogc3RyaW5nLFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIYW5kbFJpZ2h0Q2xpY2soeyBjaGlsZHJlbiAsIGlkICwgbmFtZSAsIHR5cGUgLCBteXR5cGUgfTogSGFuZGxSaWdodENsaWNrUHJvcHMpIHtcbiAgICBjb25zdCBbc2hvd01lbnUsIHNldFNob3dNZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc2hvd011dGVtZW51LCBzZXRTaG93TXV0ZW1lbnVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtwb3MsIHNldFBvc10gPSB1c2VTdGF0ZSh7IHg6IDAsIHk6IDAgfSk7XG4gICAgY29uc3QgaGFuZGxlQ29udGV4dE1lbnUgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnQgdGhlIGRlZmF1bHQgY29udGV4dCBtZW51XG4gICAgICAgIHNldFNob3dNZW51KHRydWUpO1xuICAgICAgICBzZXRQb3MoeyB4OiBlLmNsaWVudFggLSB3aW5kb3cuaW5uZXJXaWR0aCwgeTogZS5jbGllbnRZIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhlLmNsaWVudFgsIGUuY2xpZW50WSk7XG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgb25Db250ZXh0TWVudT17aGFuZGxlQ29udGV4dE1lbnV9XG4gICAgICAgIG9uQ1xuICAgICAgICBvbk1vdXNlTGVhdmU9e1xuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFNob3dNZW51KGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2hvd01lbnUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e2BhYnNvbHV0ZSB3LVsxMjBweF0gZmxleCBmbGV4LWNvbCBnYXAtWzEwcHhdIHotWzEwMF0gYmctWyMwMzRCOEFdIHRyYW5zbGF0ZS1bJHtwb3MueH1weCwke3Bvcy55fXB4XSByaWdodC0wXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwSW5mbyB0ZXh0LXdoaXRlIHJvdW5kZWQtWzEwcHhdXG4gICAgICAgICAgICAgICAgICAgIGB9PlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgY3Vyc29yLXBvaW50ZXIgcmVsYXRpdmUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3B5LVsxMHB4XSBweC1bMjBweF0nIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dNdXRlbWVudSghc2hvd011dGVtZW51KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE11dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TXV0ZW1lbnUgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nYWJzb2x1dGUgdG9wLVswcHhdIC1sZWZ0LVsxMTBweF0gYmctWyMwMzRCOEFdIHJvdW5kZWQtWzEwcHhdIGZsZXggZmxleC1jb2wnIG9uTW91c2VMZWF2ZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTaG93TXV0ZW1lbnUoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0ncHktWzEwcHhdIHB4LVsyMHB4XSBjdXJzb3ItcG9pbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDUgc2VjXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdweS1bMTBweF0gcHgtWzIwcHhdIGN1cnNvci1wb2ludGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNSBtaW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3B5LVsxMHB4XSBweC1bMjBweF0gY3Vyc29yLXBvaW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxIGhvdXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3B5LVsxMHB4XSBweC1bMjBweF0gY3Vyc29yLXBvaW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxIHllYXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B5LVsxMHB4XSBweC1bMjBweF0gY3Vyc29yLXBvaW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHktWzEwcHhdIHB4LVsyMHB4XSBjdXJzb3ItcG9pbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgS2lja1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHktWzEwcHhdIHB4LVsyMHB4XSBjdXJzb3ItcG9pbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0IEFkbWluXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdweS1bMTBweF0gcHgtWzIwcHhdIGN1cnNvci1wb2ludGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXQgT3duZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7Y2hpbGRyZW5cbiAgICAgICAgfTwvZGl2PlxuICAgICAgICApXG4gICAgICAgIDtcbn1cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJIYW5kbFJpZ2h0Q2xpY2siLCJjaGlsZHJlbiIsImlkIiwibmFtZSIsInR5cGUiLCJteXR5cGUiLCJzaG93TWVudSIsInNldFNob3dNZW51Iiwic2hvd011dGVtZW51Iiwic2V0U2hvd011dGVtZW51IiwicG9zIiwic2V0UG9zIiwieCIsInkiLCJoYW5kbGVDb250ZXh0TWVudSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNsaWVudFgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY2xpZW50WSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJvbkNvbnRleHRNZW51Iiwib25DIiwib25Nb3VzZUxlYXZlIiwiY2xhc3NOYW1lIiwicCIsIm9uQ2xpY2siLCJ1bCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/Dashboard/Chat/Messages/HandlRightClick.tsx\n"));

/***/ })

});