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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HandlRightClick; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction HandlRightClick(param) {\n    let { children } = param;\n    _s();\n    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [pos, setPos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        x: 0,\n        y: 0\n    });\n    const handleContextMenu = (e)=>{\n        e.preventDefault(); // Prevent the default context menu\n        setShow(true);\n        setPos({\n            x: e.clientX - window.innerWidth,\n            y: e.clientY\n        });\n        console.log(e.clientX, e.clientY);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onContextMenu: handleContextMenu,\n        onMouseLeave: ()=>{\n            setShow(false);\n        },\n        children: [\n            show && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute w-[100px] flex flex-col gap-[10px] z-[100] bg-[#30C7EC] translate-[\".concat(pos.x, \"px,\").concat(pos.y, \"px] right-0\\n                    groupInfo text-white rounded-[10px]\\n                    \"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-[10px] px-[20px]\",\n                        children: \"Mute\"\n                    }, void 0, false, {\n                        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-[10px] px-[20px]\",\n                        children: \"Ban\"\n                    }, void 0, false, {\n                        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-[10px] px-[20px]\",\n                        children: \"Kick\"\n                    }, void 0, false, {\n                        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"py-[10px] px-[20px]\",\n                        children: \"set A\"\n                    }, void 0, false, {\n                        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n                lineNumber: 29,\n                columnNumber: 21\n            }, this),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/asabbar/Desktop/ft_git/components/Dashboard/Chat/Messages/HandlRightClick.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n_s(HandlRightClick, \"V/61R9ln9rRSaba6jqU72mlVhRg=\");\n_c = HandlRightClick;\nvar _c;\n$RefreshReg$(_c, \"HandlRightClick\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvQ2hhdC9NZXNzYWdlcy9IYW5kbFJpZ2h0Q2xpY2sudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUN5QztBQUNSO0FBTWxCLFNBQVNFLGdCQUFnQixLQUFrQztRQUFsQyxFQUFFQyxRQUFRLEVBQXdCLEdBQWxDOztJQUNwQyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDSyxLQUFLQyxPQUFPLEdBQUdOLCtDQUFRQSxDQUFDO1FBQUVPLEdBQUc7UUFBR0MsR0FBRztJQUFFO0lBQzVDLE1BQU1DLG9CQUFvQixDQUFDQztRQUN2QkEsRUFBRUMsa0JBQWtCLG1DQUFtQztRQUN2RFAsUUFBUTtRQUNSRSxPQUFPO1lBQUVDLEdBQUdHLEVBQUVFLFVBQVVDLE9BQU9DO1lBQVlOLEdBQUdFLEVBQUVLO1FBQVE7UUFDeERDLFFBQVFDLElBQUlQLEVBQUVFLFNBQVNGLEVBQUVLO0lBQzdCO0lBRUEscUJBQ0ksOERBQUNHO1FBQUlDLGVBQWVWO1FBQ3BCVyxjQUNJO1lBQ0loQixRQUFRO1FBQ1o7O1lBSUlELHNCQUNJLDhEQUFDZTtnQkFBS0csV0FBVywrRUFBMEZoQixPQUFYQSxJQUFJRSxHQUFFLE9BQVcsT0FBTkYsSUFBSUcsR0FBRTs7a0NBRzdHLDhEQUFDVTt3QkFBSUcsV0FBVTtrQ0FBc0I7Ozs7OztrQ0FHckMsOERBQUNIO3dCQUFJRyxXQUFVO2tDQUFzQjs7Ozs7O2tDQUdyQyw4REFBQ0g7d0JBQUlHLFdBQVU7a0NBQXNCOzs7Ozs7a0NBR3JDLDhEQUFDSDt3QkFBSUcsV0FBVTtrQ0FBc0I7Ozs7Ozs7Ozs7OztZQU1oRG5COzs7Ozs7O0FBSWI7R0ExQ3dCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0Rhc2hib2FyZC9DaGF0L01lc3NhZ2VzL0hhbmRsUmlnaHRDbGljay50c3g/YTYxMCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbnR5cGUgSGFuZGxSaWdodENsaWNrUHJvcHMgPXtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGFuZGxSaWdodENsaWNrKHsgY2hpbGRyZW4gfTogSGFuZGxSaWdodENsaWNrUHJvcHMpIHtcbiAgICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3Bvcywgc2V0UG9zXSA9IHVzZVN0YXRlKHsgeDogMCwgeTogMCB9KTtcbiAgICBjb25zdCBoYW5kbGVDb250ZXh0TWVudSA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gUHJldmVudCB0aGUgZGVmYXVsdCBjb250ZXh0IG1lbnVcbiAgICAgICAgc2V0U2hvdyh0cnVlKTtcbiAgICAgICAgc2V0UG9zKHsgeDogZS5jbGllbnRYIC0gd2luZG93LmlubmVyV2lkdGgsIHk6IGUuY2xpZW50WSB9KTtcbiAgICAgICAgY29uc29sZS5sb2coZS5jbGllbnRYLCBlLmNsaWVudFkpO1xuICAgIH07XG4gICAgXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IG9uQ29udGV4dE1lbnU9e2hhbmRsZUNvbnRleHRNZW51fVxuICAgICAgICBvbk1vdXNlTGVhdmU9e1xuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFNob3coZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzaG93ICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgdy1bMTAwcHhdIGZsZXggZmxleC1jb2wgZ2FwLVsxMHB4XSB6LVsxMDBdIGJnLVsjMzBDN0VDXSB0cmFuc2xhdGUtWyR7cG9zLnh9cHgsJHtwb3MueX1weF0gcmlnaHQtMFxuICAgICAgICAgICAgICAgICAgICBncm91cEluZm8gdGV4dC13aGl0ZSByb3VuZGVkLVsxMHB4XVxuICAgICAgICAgICAgICAgICAgICBgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdweS1bMTBweF0gcHgtWzIwcHhdJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNdXRlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdweS1bMTBweF0gcHgtWzIwcHhdJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBCYW5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B5LVsxMHB4XSBweC1bMjBweF0nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEtpY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B5LVsxMHB4XSBweC1bMjBweF0nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldCBBXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge2NoaWxkcmVuXG4gICAgICAgIH08L2Rpdj5cbiAgICAgICAgKVxuICAgICAgICA7XG59XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSGFuZGxSaWdodENsaWNrIiwiY2hpbGRyZW4iLCJzaG93Iiwic2V0U2hvdyIsInBvcyIsInNldFBvcyIsIngiLCJ5IiwiaGFuZGxlQ29udGV4dE1lbnUiLCJlIiwicHJldmVudERlZmF1bHQiLCJjbGllbnRYIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImNsaWVudFkiLCJjb25zb2xlIiwibG9nIiwiZGl2Iiwib25Db250ZXh0TWVudSIsIm9uTW91c2VMZWF2ZSIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/Dashboard/Chat/Messages/HandlRightClick.tsx\n"));

/***/ })

});