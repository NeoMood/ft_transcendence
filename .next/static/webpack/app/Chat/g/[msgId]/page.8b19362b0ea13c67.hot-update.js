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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HandlRightClick; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction HandlRightClick(param) {\n    let { children } = param;\n    _s();\n    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [pos, setPos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const handleContextMenu = (e)=>{\n        e.preventDefault(); // Prevent the default context menu\n        setShow(true);\n        setPos({\n            x: e.clientX - window.innerWidth,\n            y: e.clientY\n        });\n        console.log(e.clientX, e.clientY);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onContextMenu: handleContextMenu,\n        onMouseLeave: ()=>{\n            setShow(false);\n        },\n        children: [\n            show && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute w-[120px] flex flex-col gap-[10px] z-[100] bg-[#034B8A] translate-[\".concat(pos.x, \"px,\").concat(pos.y, \"px] right-0\\n                    groupInfo text-white rounded-[10px]\\n                    \"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-[10px] px-[20px] cursor-pointer relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Mute\"\n                            }, void 0, false, {\n                                fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"absolute top-[0px] -left-[110px] bg-[#034B8A] rounded-[10px] flex flex-col\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"py-[10px] px-[20px] cursor-pointer\",\n                                        children: \"5 s\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"py-[10px] px-[20px] cursor-pointer\",\n                                        children: \"5 hours\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"py-[10px] px-[20px] cursor-pointer\",\n                                        children: \"1 week\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"py-[10px] px-[20px] cursor-pointer\",\n                                        children: \"1 year\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 33\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"py-[10px] px-[20px] cursor-pointer\",\n                                        children: \"Forever\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-[10px] px-[20px] cursor-pointer\",\n                        children: \"Ban\"\n                    }, void 0, false, {\n                        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-[10px] px-[20px] cursor-pointer\",\n                        children: \"Kick\"\n                    }, void 0, false, {\n                        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-[10px] px-[20px] cursor-pointer\",\n                        children: \"Set Admin\"\n                    }, void 0, false, {\n                        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-[10px] px-[20px] cursor-pointer\",\n                        children: \"Set Owner\"\n                    }, void 0, false, {\n                        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                lineNumber: 29,\n                columnNumber: 21\n            }, this),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_s(HandlRightClick, \"V/61R9ln9rRSaba6jqU72mlVhRg=\");\n_c = HandlRightClick;\nvar _c;\n$RefreshReg$(_c, \"HandlRightClick\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvQ2hhdC9NZXNzYWdlcy9IYW5kbFJpZ2h0Q2xpY2sudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUN5QztBQUNSO0FBTWxCLFNBQVNFLGdCQUFnQixLQUFrQztRQUFsQyxFQUFFQyxRQUFRLEVBQXdCLEdBQWxDOztJQUNwQyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDSyxLQUFLQyxPQUFPLEdBQUdOLCtDQUFRQSxDQUFDO1FBQUVPLEdBQUc7UUFBR0MsR0FBRztJQUFFO0lBQzVDLE1BQU1DLG9CQUFvQixDQUFDQztRQUN2QkEsRUFBRUMsa0JBQWtCLG1DQUFtQztRQUN2RFAsUUFBUTtRQUNSRSxPQUFPO1lBQUVDLEdBQUdHLEVBQUVFLFVBQVVDLE9BQU9DO1lBQVlOLEdBQUdFLEVBQUVLO1FBQVE7UUFDeERDLFFBQVFDLElBQUlQLEVBQUVFLFNBQVNGLEVBQUVLO0lBQzdCO0lBRUEscUJBQ0ksOERBQUNHO1FBQUlDLGVBQWVWO1FBQ3BCVyxjQUNJO1lBQ0loQixRQUFRO1FBQ1o7O1lBSUlELHNCQUNJLDhEQUFDZTtnQkFBS0csV0FBVywrRUFBMEZoQixPQUFYQSxJQUFJRSxHQUFFLE9BQVcsT0FBTkYsSUFBSUcsR0FBRTs7a0NBRzdHLDhEQUFDVTt3QkFBSUcsV0FBVTs7MENBQ1gsOERBQUNDOzBDQUFFOzs7Ozs7MENBR0gsOERBQUNDO2dDQUFHRixXQUFVOztrREFDViw4REFBQ0c7d0NBQUdILFdBQVU7a0RBQXFDOzs7Ozs7a0RBR25ELDhEQUFDRzt3Q0FBR0gsV0FBVTtrREFBcUM7Ozs7OztrREFHbkQsOERBQUNHO3dDQUFHSCxXQUFVO2tEQUFxQzs7Ozs7O2tEQUduRCw4REFBQ0c7d0NBQUdILFdBQVU7a0RBQXFDOzs7Ozs7a0RBR25ELDhEQUFDRzt3Q0FBR0gsV0FBVTtrREFBcUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FNM0QsOERBQUNIO3dCQUFJRyxXQUFVO2tDQUFxQzs7Ozs7O2tDQUdwRCw4REFBQ0g7d0JBQUlHLFdBQVU7a0NBQXFDOzs7Ozs7a0NBR3BELDhEQUFDSDt3QkFBSUcsV0FBVTtrQ0FBcUM7Ozs7OztrQ0FHcEQsOERBQUNIO3dCQUFJRyxXQUFVO2tDQUFxQzs7Ozs7Ozs7Ozs7O1lBTS9EbkI7Ozs7Ozs7QUFJYjtHQWpFd0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL0NoYXQvTWVzc2FnZXMvSGFuZGxSaWdodENsaWNrLnRzeD9hNjEwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcbmltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxudHlwZSBIYW5kbFJpZ2h0Q2xpY2tQcm9wcyA9e1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIYW5kbFJpZ2h0Q2xpY2soeyBjaGlsZHJlbiB9OiBIYW5kbFJpZ2h0Q2xpY2tQcm9wcykge1xuICAgIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbcG9zLCBzZXRQb3NdID0gdXNlU3RhdGUoeyB4OiAwLCB5OiAwIH0pO1xuICAgIGNvbnN0IGhhbmRsZUNvbnRleHRNZW51ID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQcmV2ZW50IHRoZSBkZWZhdWx0IGNvbnRleHQgbWVudVxuICAgICAgICBzZXRTaG93KHRydWUpO1xuICAgICAgICBzZXRQb3MoeyB4OiBlLmNsaWVudFggLSB3aW5kb3cuaW5uZXJXaWR0aCwgeTogZS5jbGllbnRZIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhlLmNsaWVudFgsIGUuY2xpZW50WSk7XG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgb25Db250ZXh0TWVudT17aGFuZGxlQ29udGV4dE1lbnV9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17XG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0U2hvdyhmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNob3cgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICBjbGFzc05hbWU9e2BhYnNvbHV0ZSB3LVsxMjBweF0gZmxleCBmbGV4LWNvbCBnYXAtWzEwcHhdIHotWzEwMF0gYmctWyMwMzRCOEFdIHRyYW5zbGF0ZS1bJHtwb3MueH1weCwke3Bvcy55fXB4XSByaWdodC0wXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwSW5mbyB0ZXh0LXdoaXRlIHJvdW5kZWQtWzEwcHhdXG4gICAgICAgICAgICAgICAgICAgIGB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B5LVsxMHB4XSBweC1bMjBweF0gY3Vyc29yLXBvaW50ZXIgcmVsYXRpdmUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNdXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2Fic29sdXRlIHRvcC1bMHB4XSAtbGVmdC1bMTEwcHhdIGJnLVsjMDM0QjhBXSByb3VuZGVkLVsxMHB4XSBmbGV4IGZsZXgtY29sJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0ncHktWzEwcHhdIHB4LVsyMHB4XSBjdXJzb3ItcG9pbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1IHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0ncHktWzEwcHhdIHB4LVsyMHB4XSBjdXJzb3ItcG9pbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1IGhvdXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3B5LVsxMHB4XSBweC1bMjBweF0gY3Vyc29yLXBvaW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMSB3ZWVrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3B5LVsxMHB4XSBweC1bMjBweF0gY3Vyc29yLXBvaW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMSB5ZWFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3B5LVsxMHB4XSBweC1bMjBweF0gY3Vyc29yLXBvaW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRm9yZXZlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B5LVsxMHB4XSBweC1bMjBweF0gY3Vyc29yLXBvaW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHktWzEwcHhdIHB4LVsyMHB4XSBjdXJzb3ItcG9pbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgS2lja1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHktWzEwcHhdIHB4LVsyMHB4XSBjdXJzb3ItcG9pbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2V0IEFkbWluXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdweS1bMTBweF0gcHgtWzIwcHhdIGN1cnNvci1wb2ludGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXQgT3duZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7Y2hpbGRyZW5cbiAgICAgICAgfTwvZGl2PlxuICAgICAgICApXG4gICAgICAgIDtcbn1cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJIYW5kbFJpZ2h0Q2xpY2siLCJjaGlsZHJlbiIsInNob3ciLCJzZXRTaG93IiwicG9zIiwic2V0UG9zIiwieCIsInkiLCJoYW5kbGVDb250ZXh0TWVudSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNsaWVudFgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY2xpZW50WSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJvbkNvbnRleHRNZW51Iiwib25Nb3VzZUxlYXZlIiwiY2xhc3NOYW1lIiwicCIsInVsIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/Dashboard/Chat/Messages/HandlRightClick.tsx\n"));

/***/ })

});