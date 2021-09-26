"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Dashboard_js"],{

/***/ "./resources/js/pages/Dashboard.js":
/*!*****************************************!*\
  !*** ./resources/js/pages/Dashboard.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_CTA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CTA */ "./resources/js/components/CTA.js");
/* harmony import */ var _components_Cards_InfoCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Cards/InfoCard */ "./resources/js/components/Cards/InfoCard.js");
/* harmony import */ var _components_Chart_ChartCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Chart/ChartCard */ "./resources/js/components/Chart/ChartCard.js");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/dist/index.modern.js");
/* harmony import */ var _components_Chart_ChartLegend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Chart/ChartLegend */ "./resources/js/components/Chart/ChartLegend.js");
/* harmony import */ var _components_Typography_PageTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Typography/PageTitle */ "./resources/js/components/Typography/PageTitle.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icons */ "./resources/js/icons/index.js");
/* harmony import */ var _components_RoundIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/RoundIcon */ "./resources/js/components/RoundIcon.js");
/* harmony import */ var _utils_demo_tableData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/demo/tableData */ "./resources/js/utils/demo/tableData.js");
/* harmony import */ var _windmill_react_ui__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @windmill/react-ui */ "./node_modules/@windmill/react-ui/dist/index.js");
/* harmony import */ var _windmill_react_ui__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_demo_chartsData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/demo/chartsData */ "./resources/js/utils/demo/chartsData.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

















function Dashboard() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1]; // pagination setup


  var resultsPerPage = 10;
  var totalResults = _utils_demo_tableData__WEBPACK_IMPORTED_MODULE_9__.default.length; // pagination change control

  function onPageChange(p) {
    setPage(p);
  } // on page change, load new sliced data
  // here you would make another server request for new data


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setData(_utils_demo_tableData__WEBPACK_IMPORTED_MODULE_9__.default.slice((page - 1) * resultsPerPage, page * resultsPerPage));
  }, [page]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Typography_PageTitle__WEBPACK_IMPORTED_MODULE_6__.default, {
      children: "Dashboard"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_CTA__WEBPACK_IMPORTED_MODULE_1__.default, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
      className: "grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Cards_InfoCard__WEBPACK_IMPORTED_MODULE_2__.default, {
        title: "Total clients",
        value: "6389",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_RoundIcon__WEBPACK_IMPORTED_MODULE_8__.default, {
          icon: _icons__WEBPACK_IMPORTED_MODULE_7__.PeopleIcon,
          iconColorClass: "text-orange-500 dark:text-orange-100",
          bgColorClass: "bg-orange-100 dark:bg-orange-500",
          className: "mr-4"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Cards_InfoCard__WEBPACK_IMPORTED_MODULE_2__.default, {
        title: "Account balance",
        value: "$ 46,760.89",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_RoundIcon__WEBPACK_IMPORTED_MODULE_8__.default, {
          icon: _icons__WEBPACK_IMPORTED_MODULE_7__.MoneyIcon,
          iconColorClass: "text-green-500 dark:text-green-100",
          bgColorClass: "bg-green-100 dark:bg-green-500",
          className: "mr-4"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Cards_InfoCard__WEBPACK_IMPORTED_MODULE_2__.default, {
        title: "New sales",
        value: "376",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_RoundIcon__WEBPACK_IMPORTED_MODULE_8__.default, {
          icon: _icons__WEBPACK_IMPORTED_MODULE_7__.CartIcon,
          iconColorClass: "text-blue-500 dark:text-blue-100",
          bgColorClass: "bg-blue-100 dark:bg-blue-500",
          className: "mr-4"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Cards_InfoCard__WEBPACK_IMPORTED_MODULE_2__.default, {
        title: "Pending contacts",
        value: "35",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_RoundIcon__WEBPACK_IMPORTED_MODULE_8__.default, {
          icon: _icons__WEBPACK_IMPORTED_MODULE_7__.ChatIcon,
          iconColorClass: "text-teal-500 dark:text-teal-100",
          bgColorClass: "bg-teal-100 dark:bg-teal-500",
          className: "mr-4"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_10__.TableContainer, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_10__.Table, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_10__.TableHeader, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_10__.TableCell, {
              children: "Client"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_10__.TableCell, {
              children: "Amount"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_10__.TableCell, {
              children: "Status"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_10__.TableCell, {
              children: "Date"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_10__.TableBody, {
          children: data.map(function (user, i) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_10__.TableRow, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_10__.TableCell, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                  className: "flex items-center text-sm",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_10__.Avatar, {
                    className: "hidden mr-3 md:block",
                    src: user.avatar,
                    alt: "User image"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
                      className: "font-semibold",
                      children: user.name
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("p", {
                      className: "text-xs text-gray-600 dark:text-gray-400",
                      children: user.job
                    })]
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_10__.TableCell, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("span", {
                  className: "text-sm",
                  children: ["$ ", user.amount]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_10__.TableCell, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_10__.Badge, {
                  type: user.status,
                  children: user.status
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_10__.TableCell, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("span", {
                  className: "text-sm",
                  children: new Date(user.date).toLocaleDateString()
                })
              })]
            }, i);
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_10__.TableFooter, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_10__.Pagination, {
          totalResults: totalResults,
          resultsPerPage: resultsPerPage,
          label: "Table navigation",
          onChange: onPageChange
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Typography_PageTitle__WEBPACK_IMPORTED_MODULE_6__.default, {
      children: "Charts"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
      className: "grid gap-6 mb-8 md:grid-cols-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_components_Chart_ChartCard__WEBPACK_IMPORTED_MODULE_3__.default, {
        title: "Revenue",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Doughnut, _objectSpread({}, _utils_demo_chartsData__WEBPACK_IMPORTED_MODULE_11__.doughnutOptions)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Chart_ChartLegend__WEBPACK_IMPORTED_MODULE_5__.default, {
          legends: _utils_demo_chartsData__WEBPACK_IMPORTED_MODULE_11__.doughnutLegends
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_components_Chart_ChartCard__WEBPACK_IMPORTED_MODULE_3__.default, {
        title: "Traffic",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Line, _objectSpread({}, _utils_demo_chartsData__WEBPACK_IMPORTED_MODULE_11__.lineOptions)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Chart_ChartLegend__WEBPACK_IMPORTED_MODULE_5__.default, {
          legends: _utils_demo_chartsData__WEBPACK_IMPORTED_MODULE_11__.lineLegends
        })]
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ })

}]);