/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/
(() => { // webpackBootstrap
    /******/
    var __webpack_modules__ = ({

        /***/
        "./src/components/App.js":
        /*!*******************************!*\
          !*** ./src/components/App.js ***!
          \*******************************/
        /***/
            (() => {

            eval("throw new Error(\"Module parse failed: Unexpected token (10:12)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n| \\n|   render() {\\n>     return (<div>Testing React Code</div>);\\n|   }\\n| }\");\n\n//# sourceURL=webpack://frontend/./src/components/App.js?");

            /***/
        }),

        /***/
        "./src/index.js":
        /*!**********************!*\
          !*** ./src/index.js ***!
          \**********************/
        /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

            "use strict";
            eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App */ \"./src/components/App.js\");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_App__WEBPACK_IMPORTED_MODULE_0__);\n/*import React from 'react';\r\nimport ReactDOM from 'react-dom';\r\nimport './index.css';\r\nimport App from './App';\r\nimport reportWebVitals from './reportWebVitals';\r\n\r\nReactDOM.render(\r\n  <React.StrictMode>\r\n    <App />\r\n  </React.StrictMode>,\r\n  document.getElementById('app')\r\n);\r\n\r\n// If you want to start measuring performance in your app, pass a function\r\n// to log results (for example: reportWebVitals(console.log))\r\n// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals\r\nreportWebVitals();\r\n*/\r\n\r\n\n\n//# sourceURL=webpack://frontend/./src/index.js?");

            /***/
        })

        /******/
    });
    /************************************************************************/
    /******/ // The module cache
    /******/
    var __webpack_module_cache__ = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/
        if (__webpack_module_cache__[moduleId]) {
            /******/
            return __webpack_module_cache__[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = __webpack_module_cache__[moduleId] = {
            /******/ // no module.id needed
            /******/ // no module.loaded needed
            /******/
            exports: {}
            /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /************************************************************************/
    /******/
    /* webpack/runtime/compat get default export */
    /******/
    (() => {
        /******/ // getDefaultExport function for compatibility with non-harmony modules
        /******/
        __webpack_require__.n = (module) => {
            /******/
            var getter = module && module.__esModule ?
                /******/
                () => module['default'] :
                /******/
                () => module;
            /******/
            __webpack_require__.d(getter, { a: getter });
            /******/
            return getter;
            /******/
        };
        /******/
    })();
    /******/
    /******/
    /* webpack/runtime/define property getters */
    /******/
    (() => {
        /******/ // define getter functions for harmony exports
        /******/
        __webpack_require__.d = (exports, definition) => {
            /******/
            for (var key in definition) {
                /******/
                if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
                    /******/
                    Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                    /******/
                }
                /******/
            }
            /******/
        };
        /******/
    })();
    /******/
    /******/
    /* webpack/runtime/hasOwnProperty shorthand */
    /******/
    (() => {
        /******/
        __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
            /******/
    })();
    /******/
    /******/
    /* webpack/runtime/make namespace object */
    /******/
    (() => {
        /******/ // define __esModule on exports
        /******/
        __webpack_require__.r = (exports) => {
            /******/
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/
                Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                /******/
            }
            /******/
            Object.defineProperty(exports, '__esModule', { value: true });
            /******/
        };
        /******/
    })();
    /******/
    /************************************************************************/
    /******/ // startup
    /******/ // Load entry module
    /******/
    __webpack_require__("./src/index.js");
    /******/ // This entry module used 'exports' so it can't be inlined
    /******/
})();