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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HandlRightClick; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction HandlRightClick(param) {\n    let { children, id, name, type, mytype } = param;\n    _s();\n    const [showMenu, setShowMenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [showMutemenu, setShowMutemenu] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [pos, setPos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const handleContextMenu = (e)=>{\n        e.preventDefault(); // Prevent the default context menu\n        setShowMenu(true);\n        setPos({\n            x: e.clientX - window.innerWidth,\n            y: e.clientY\n        });\n        console.log(e.clientX, e.clientY);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onContextMenu: handleContextMenu,\n        onMouseLeave: ()=>{\n            setShowMenu(false);\n        },\n        children: [\n            showMenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute w-[120px] flex flex-col gap-[10px] z-[100] bg-[#034B8A] translate-[\".concat(pos.x, \"px,\").concat(pos.y, \"px] right-0\\n                    groupInfo text-white rounded-[10px]\\n                    \"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" cursor-pointer relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"py-[10px] px-[20px]\",\n                                onClick: ()=>{\n                                    setShowMutemenu(!showMutemenu);\n                                },\n                                children: \"Mute\"\n                            }, void 0, false, {\n                                fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 33\n                            }, this),\n                            showMutemenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"absolute top-[0px] -left-[110px] bg-[#034B8A] rounded-[10px] flex flex-col\",\n                                onMouseLeave: ()=>{\n                                    setShowMutemenu(false);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"py-[10px] px-[20px] cursor-pointer\",\n                                        children: \"5 sec\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 41\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"py-[10px] px-[20px] cursor-pointer\",\n                                        children: \"5 min\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 41\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"py-[10px] px-[20px] cursor-pointer\",\n                                        children: \"1 hour\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 41\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"py-[10px] px-[20px] cursor-pointer\",\n                                        children: \"1 year\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 41\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 37\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 29\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-[10px] px-[20px] cursor-pointer\",\n                        children: \"Ban\"\n                    }, void 0, false, {\n                        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-[10px] px-[20px] cursor-pointer\",\n                        children: \"Kick\"\n                    }, void 0, false, {\n                        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-[10px] px-[20px] cursor-pointer\",\n                        children: \"Set Admin\"\n                    }, void 0, false, {\n                        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-[10px] px-[20px] cursor-pointer\",\n                        children: \"Set Owner\"\n                    }, void 0, false, {\n                        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                lineNumber: 35,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClinck: ()=>{\n                    setShowMenu(false);\n                },\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, this);\n}\n_s(HandlRightClick, \"1qzGwtbJHAJNMiRTHHjzNhFipCw=\");\n_c = HandlRightClick;\nvar _c;\n$RefreshReg$(_c, \"HandlRightClick\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvQ2hhdC9NZXNzYWdlcy9IYW5kbFJpZ2h0Q2xpY2sudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUN5QztBQUNSO0FBVWxCLFNBQVNFLGdCQUFnQixLQUE4RDtRQUE5RCxFQUFFQyxRQUFRLEVBQUdDLEVBQUUsRUFBR0MsSUFBSSxFQUFHQyxJQUFJLEVBQUdDLE1BQU0sRUFBd0IsR0FBOUQ7O0lBQ3BDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNTLGNBQWNDLGdCQUFnQixHQUFHViwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNXLEtBQUtDLE9BQU8sR0FBR1osK0NBQVFBLENBQUM7UUFBRWEsR0FBRztRQUFHQyxHQUFHO0lBQUU7SUFDNUMsTUFBTUMsb0JBQW9CLENBQUNDO1FBQ3ZCQSxFQUFFQyxrQkFBa0IsbUNBQW1DO1FBQ3ZEVCxZQUFZO1FBQ1pJLE9BQU87WUFBRUMsR0FBR0csRUFBRUUsVUFBVUMsT0FBT0M7WUFBWU4sR0FBR0UsRUFBRUs7UUFBUTtRQUN4REMsUUFBUUMsSUFBSVAsRUFBRUUsU0FBU0YsRUFBRUs7SUFDN0I7SUFFQSxxQkFDSSw4REFBQ0c7UUFBSUMsZUFBZVY7UUFFcEJXLGNBQ0k7WUFDSWxCLFlBQVk7UUFDaEI7O1lBSUlELDBCQUNJLDhEQUFDaUI7Z0JBQUtHLFdBQVcsK0VBQTBGaEIsT0FBWEEsSUFBSUUsR0FBRSxPQUFXLE9BQU5GLElBQUlHLEdBQUU7O2tDQUt6Ryw4REFBQ1U7d0JBQUlHLFdBQVU7OzBDQUNYLDhEQUFDQztnQ0FBRUQsV0FBVTtnQ0FBc0JFLFNBQy9CO29DQUNJbkIsZ0JBQWdCLENBQUNEO2dDQUNyQjswQ0FDRjs7Ozs7OzRCQUlFQSw4QkFDQSw4REFBQ3FCO2dDQUFHSCxXQUFVO2dDQUE2RUQsY0FDdkY7b0NBQ0loQixnQkFBZ0I7Z0NBQ3BCOztrREFFQSw4REFBQ3FCO3dDQUFHSixXQUFVO2tEQUFxQzs7Ozs7O2tEQUduRCw4REFBQ0k7d0NBQUdKLFdBQVU7a0RBQXFDOzs7Ozs7a0RBR25ELDhEQUFDSTt3Q0FBR0osV0FBVTtrREFBcUM7Ozs7OztrREFHbkQsOERBQUNJO3dDQUFHSixXQUFVO2tEQUFxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQVFuRSw4REFBQ0g7d0JBQUlHLFdBQVU7a0NBQXFDOzs7Ozs7a0NBR3BELDhEQUFDSDt3QkFBSUcsV0FBVTtrQ0FBcUM7Ozs7OztrQ0FHcEQsOERBQUNIO3dCQUFJRyxXQUFVO2tDQUFxQzs7Ozs7O2tDQUdwRCw4REFBQ0g7d0JBQUlHLFdBQVU7a0NBQXFDOzs7Ozs7Ozs7Ozs7MEJBTWhFLDhEQUFDSDtnQkFBWVEsVUFDYjtvQkFDSXhCLFlBQVk7Z0JBQ2hCOzBCQUVLTjs7Ozs7Ozs7Ozs7O0FBS2pCO0dBcEZ3QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvQ2hhdC9NZXNzYWdlcy9IYW5kbFJpZ2h0Q2xpY2sudHN4P2E2MTAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG50eXBlIEhhbmRsUmlnaHRDbGlja1Byb3BzID17XG4gICAgY2hpbGRyZW46IFJlYWN0Tm9kZSxcbiAgICBpZCA/OiBudW1iZXIsXG4gICAgbmFtZSA/OiBzdHJpbmcsXG4gICAgdHlwZSA/OiBzdHJpbmcsXG4gICAgbXl0eXBlID86IHN0cmluZyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGFuZGxSaWdodENsaWNrKHsgY2hpbGRyZW4gLCBpZCAsIG5hbWUgLCB0eXBlICwgbXl0eXBlIH06IEhhbmRsUmlnaHRDbGlja1Byb3BzKSB7XG4gICAgY29uc3QgW3Nob3dNZW51LCBzZXRTaG93TWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3Nob3dNdXRlbWVudSwgc2V0U2hvd011dGVtZW51XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbcG9zLCBzZXRQb3NdID0gdXNlU3RhdGUoeyB4OiAwLCB5OiAwIH0pO1xuICAgIGNvbnN0IGhhbmRsZUNvbnRleHRNZW51ID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQcmV2ZW50IHRoZSBkZWZhdWx0IGNvbnRleHQgbWVudVxuICAgICAgICBzZXRTaG93TWVudSh0cnVlKTtcbiAgICAgICAgc2V0UG9zKHsgeDogZS5jbGllbnRYIC0gd2luZG93LmlubmVyV2lkdGgsIHk6IGUuY2xpZW50WSB9KTtcbiAgICAgICAgY29uc29sZS5sb2coZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuICAgIH07XG4gICAgXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IG9uQ29udGV4dE1lbnU9e2hhbmRsZUNvbnRleHRNZW51fVxuXG4gICAgICAgIG9uTW91c2VMZWF2ZT17XG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0U2hvd01lbnUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzaG93TWVudSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT17YGFic29sdXRlIHctWzEyMHB4XSBmbGV4IGZsZXgtY29sIGdhcC1bMTBweF0gei1bMTAwXSBiZy1bIzAzNEI4QV0gdHJhbnNsYXRlLVske3Bvcy54fXB4LCR7cG9zLnl9cHhdIHJpZ2h0LTBcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBJbmZvIHRleHQtd2hpdGUgcm91bmRlZC1bMTBweF1cbiAgICAgICAgICAgICAgICAgICAgYH0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBjdXJzb3ItcG9pbnRlciByZWxhdGl2ZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ncHktWzEwcHhdIHB4LVsyMHB4XScgb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd011dGVtZW51KCFzaG93TXV0ZW1lbnUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTXV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dNdXRlbWVudSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdhYnNvbHV0ZSB0b3AtWzBweF0gLWxlZnQtWzExMHB4XSBiZy1bIzAzNEI4QV0gcm91bmRlZC1bMTBweF0gZmxleCBmbGV4LWNvbCcgb25Nb3VzZUxlYXZlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dNdXRlbWVudShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdweS1bMTBweF0gcHgtWzIwcHhdIGN1cnNvci1wb2ludGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgNSBzZWNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3B5LVsxMHB4XSBweC1bMjBweF0gY3Vyc29yLXBvaW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1IG1pblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0ncHktWzEwcHhdIHB4LVsyMHB4XSBjdXJzb3ItcG9pbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEgaG91clxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0ncHktWzEwcHhdIHB4LVsyMHB4XSBjdXJzb3ItcG9pbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEgeWVhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHktWzEwcHhdIHB4LVsyMHB4XSBjdXJzb3ItcG9pbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQmFuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdweS1bMTBweF0gcHgtWzIwcHhdIGN1cnNvci1wb2ludGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBLaWNrXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdweS1bMTBweF0gcHgtWzIwcHhdIGN1cnNvci1wb2ludGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZXQgQWRtaW5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B5LVsxMHB4XSBweC1bMjBweF0gY3Vyc29yLXBvaW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldCBPd25lclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxkaXYgICAgICAgICBvbkNsaW5jaz17XG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0U2hvd01lbnUoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9PlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgICAgO1xufVxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkhhbmRsUmlnaHRDbGljayIsImNoaWxkcmVuIiwiaWQiLCJuYW1lIiwidHlwZSIsIm15dHlwZSIsInNob3dNZW51Iiwic2V0U2hvd01lbnUiLCJzaG93TXV0ZW1lbnUiLCJzZXRTaG93TXV0ZW1lbnUiLCJwb3MiLCJzZXRQb3MiLCJ4IiwieSIsImhhbmRsZUNvbnRleHRNZW51IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2xpZW50WCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJjbGllbnRZIiwiY29uc29sZSIsImxvZyIsImRpdiIsIm9uQ29udGV4dE1lbnUiLCJvbk1vdXNlTGVhdmUiLCJjbGFzc05hbWUiLCJwIiwib25DbGljayIsInVsIiwibGkiLCJvbkNsaW5jayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/Dashboard/Chat/Messages/HandlRightClick.tsx\n"));

/***/ })

});