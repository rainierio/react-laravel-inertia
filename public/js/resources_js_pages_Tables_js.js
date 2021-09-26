"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Tables_js"],{

/***/ "./resources/js/pages/Tables.js":
/*!**************************************!*\
  !*** ./resources/js/pages/Tables.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_Typography_PageTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Typography/PageTitle */ "./resources/js/components/Typography/PageTitle.js");
/* harmony import */ var _components_Typography_SectionTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Typography/SectionTitle */ "./resources/js/components/Typography/SectionTitle.js");
/* harmony import */ var _components_CTA__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/CTA */ "./resources/js/components/CTA.js");
/* harmony import */ var _windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @windmill/react-ui */ "./node_modules/@windmill/react-ui/dist/index.js");
/* harmony import */ var _windmill_react_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons */ "./resources/js/icons/index.js");
/* harmony import */ var _utils_demo_tableData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/demo/tableData */ "./resources/js/utils/demo/tableData.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







 // make a copy of the data, for the second table




var response2 = _utils_demo_tableData__WEBPACK_IMPORTED_MODULE_6__.default.concat([]);

function Tables() {
  /**
   * DISCLAIMER: This code could be badly improved, but for the sake of the example
   * and readability, all the logic for both table are here.
   * You would be better served by dividing each table in its own
   * component, like Table(?) and TableWithActions(?) hiding the
   * presentation details away from the page view.
   */
  // setup pages control for every table
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      pageTable1 = _useState2[0],
      setPageTable1 = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
      _useState4 = _slicedToArray(_useState3, 2),
      pageTable2 = _useState4[0],
      setPageTable2 = _useState4[1]; // setup data for every table


  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      dataTable1 = _useState6[0],
      setDataTable1 = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      dataTable2 = _useState8[0],
      setDataTable2 = _useState8[1]; // pagination setup


  var resultsPerPage = 10;
  var totalResults = _utils_demo_tableData__WEBPACK_IMPORTED_MODULE_6__.default.length; // pagination change control

  function onPageChangeTable1(p) {
    setPageTable1(p);
  } // pagination change control


  function onPageChangeTable2(p) {
    setPageTable2(p);
  } // on page change, load new sliced data
  // here you would make another server request for new data


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setDataTable1(_utils_demo_tableData__WEBPACK_IMPORTED_MODULE_6__.default.slice((pageTable1 - 1) * resultsPerPage, pageTable1 * resultsPerPage));
  }, [pageTable1]); // on page change, load new sliced data
  // here you would make another server request for new data

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setDataTable2(response2.slice((pageTable2 - 1) * resultsPerPage, pageTable2 * resultsPerPage));
  }, [pageTable2]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Typography_PageTitle__WEBPACK_IMPORTED_MODULE_1__.default, {
      children: "Tables"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_CTA__WEBPACK_IMPORTED_MODULE_3__.default, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Typography_SectionTitle__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: "Simple table"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.TableContainer, {
      className: "mb-8",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Table, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.TableHeader, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
              children: "Client"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
              children: "Amount"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
              children: "Status"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
              children: "Date"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.TableBody, {
          children: dataTable1.map(function (user, i) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.TableRow, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "flex items-center text-sm",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Avatar, {
                    className: "hidden mr-3 md:block",
                    src: user.avatar,
                    alt: "User avatar"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                      className: "font-semibold",
                      children: user.name
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                      className: "text-xs text-gray-600 dark:text-gray-400",
                      children: user.job
                    })]
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
                  className: "text-sm",
                  children: ["$ ", user.amount]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Badge, {
                  type: user.status,
                  children: user.status
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                  className: "text-sm",
                  children: new Date(user.date).toLocaleDateString()
                })
              })]
            }, i);
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.TableFooter, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Pagination, {
          totalResults: totalResults,
          resultsPerPage: resultsPerPage,
          onChange: onPageChangeTable1,
          label: "Table navigation"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Typography_SectionTitle__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: "Table with actions"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.TableContainer, {
      className: "mb-8",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Table, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.TableHeader, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
              children: "Client"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
              children: "Amount"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
              children: "Status"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
              children: "Date"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
              children: "Actions"
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.TableBody, {
          children: dataTable2.map(function (user, i) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.TableRow, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "flex items-center text-sm",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Avatar, {
                    className: "hidden mr-3 md:block",
                    src: user.avatar,
                    alt: "User avatar"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                      className: "font-semibold",
                      children: user.name
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
                      className: "text-xs text-gray-600 dark:text-gray-400",
                      children: user.job
                    })]
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
                  className: "text-sm",
                  children: ["$ ", user.amount]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Badge, {
                  type: user.status,
                  children: user.status
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
                  className: "text-sm",
                  children: new Date(user.date).toLocaleDateString()
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.TableCell, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                  className: "flex items-center space-x-4",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
                    layout: "link",
                    size: "icon",
                    "aria-label": "Edit",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_5__.EditIcon, {
                      className: "w-5 h-5",
                      "aria-hidden": "true"
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Button, {
                    layout: "link",
                    size: "icon",
                    "aria-label": "Delete",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_5__.TrashIcon, {
                      className: "w-5 h-5",
                      "aria-hidden": "true"
                    })
                  })]
                })
              })]
            }, i);
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.TableFooter, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Pagination, {
          totalResults: totalResults,
          resultsPerPage: resultsPerPage,
          onChange: onPageChangeTable2,
          label: "Table navigation"
        })
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tables);

/***/ })

}]);