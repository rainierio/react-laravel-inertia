"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Charts_js"],{

/***/ "./resources/js/pages/Charts.js":
/*!**************************************!*\
  !*** ./resources/js/pages/Charts.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Chart_ChartCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Chart/ChartCard */ "./resources/js/components/Chart/ChartCard.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/dist/index.modern.js");
/* harmony import */ var _components_Chart_ChartLegend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Chart/ChartLegend */ "./resources/js/components/Chart/ChartLegend.js");
/* harmony import */ var _components_Typography_PageTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Typography/PageTitle */ "./resources/js/components/Typography/PageTitle.js");
/* harmony import */ var _utils_demo_chartsData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/demo/chartsData */ "./resources/js/utils/demo/chartsData.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function Charts() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Typography_PageTitle__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: "Charts"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "grid gap-6 mb-8 md:grid-cols-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_Chart_ChartCard__WEBPACK_IMPORTED_MODULE_1__.default, {
        title: "Doughnut",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Doughnut, _objectSpread({}, _utils_demo_chartsData__WEBPACK_IMPORTED_MODULE_5__.doughnutOptions)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Chart_ChartLegend__WEBPACK_IMPORTED_MODULE_3__.default, {
          legends: _utils_demo_chartsData__WEBPACK_IMPORTED_MODULE_5__.doughnutLegends
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_Chart_ChartCard__WEBPACK_IMPORTED_MODULE_1__.default, {
        title: "Lines",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Line, _objectSpread({}, _utils_demo_chartsData__WEBPACK_IMPORTED_MODULE_5__.lineOptions)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Chart_ChartLegend__WEBPACK_IMPORTED_MODULE_3__.default, {
          legends: _utils_demo_chartsData__WEBPACK_IMPORTED_MODULE_5__.lineLegends
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_components_Chart_ChartCard__WEBPACK_IMPORTED_MODULE_1__.default, {
        title: "Bars",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Bar, _objectSpread({}, _utils_demo_chartsData__WEBPACK_IMPORTED_MODULE_5__.barOptions)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Chart_ChartLegend__WEBPACK_IMPORTED_MODULE_3__.default, {
          legends: _utils_demo_chartsData__WEBPACK_IMPORTED_MODULE_5__.barLegends
        })]
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Charts);

/***/ })

}]);