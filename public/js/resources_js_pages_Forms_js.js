"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Forms_js"],{

/***/ "./resources/js/Pages/Forms.js":
/*!*************************************!*\
  !*** ./resources/js/Pages/Forms.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_CTA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/CTA */ "./resources/js/Pages/components/CTA.js");
/* harmony import */ var _components_Typography_PageTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Typography/PageTitle */ "./resources/js/Pages/components/Typography/PageTitle.js");
/* harmony import */ var _components_Typography_SectionTitle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Typography/SectionTitle */ "./resources/js/Pages/components/Typography/SectionTitle.js");
/* harmony import */ var _windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @windmill/react-ui */ "./node_modules/@windmill/react-ui/dist/index.js");
/* harmony import */ var _windmill_react_ui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons */ "./resources/js/icons/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










function Forms() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Typography_PageTitle__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: "Forms"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_CTA__WEBPACK_IMPORTED_MODULE_1__.default, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Typography_SectionTitle__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: "Elements"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Label, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          children: "Name"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Input, {
          className: "mt-1",
          placeholder: "Jane Doe"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Label, {
        className: "mt-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          children: "Disabled"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Input, {
          disabled: true,
          className: "mt-1",
          placeholder: "Jane Doe"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "mt-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Label, {
          children: "Account Type"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "mt-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Label, {
            radio: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Input, {
              type: "radio",
              value: "personal",
              name: "accountType"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "ml-2",
              children: "Personal"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Label, {
            className: "ml-6",
            radio: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Input, {
              type: "radio",
              value: "business",
              name: "accountType"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "ml-2",
              children: "Business"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Label, {
            disabled: true,
            className: "ml-6",
            radio: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Input, {
              disabled: true,
              type: "radio",
              value: "disabled",
              name: "accountType"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "ml-2",
              children: "Disabled"
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Label, {
        className: "mt-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          children: "Requested Limit"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Select, {
          className: "mt-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
            children: "$1,000"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
            children: "$5,000"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
            children: "$10,000"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
            children: "$25,000"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Label, {
        className: "mt-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          children: "Multiselect"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Select, {
          className: "mt-1",
          multiple: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
            children: "Option 1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
            children: "Option 2"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
            children: "Option 3"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
            children: "Option 4"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("option", {
            children: "Option 5"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Label, {
        className: "mt-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          children: "Message"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Textarea, {
          className: "mt-1",
          rows: "3",
          placeholder: "Enter some long form content."
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Label, {
        className: "mt-6",
        check: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Input, {
          type: "checkbox"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
          className: "ml-2",
          children: ["I agree to the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
            className: "underline",
            children: "privacy policy"
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Typography_SectionTitle__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: "Validation"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Label, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          children: "Invalid input"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Input, {
          className: "mt-1",
          valid: false,
          placeholder: "Jane Doe"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.HelperText, {
          valid: false,
          children: "Your password is too short."
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Label, {
        className: "mt-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          children: "Valid input"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Input, {
          className: "mt-1",
          valid: true,
          placeholder: "Jane Doe"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.HelperText, {
          valid: true,
          children: "Your password is strong."
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Label, {
        className: "mt-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          children: "Helper text"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Input, {
          className: "mt-1",
          placeholder: "Jane Doe"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.HelperText, {
          children: "Your password must be at least 6 characters long."
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Typography_SectionTitle__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: "Icons"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Label, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          children: "Icon left"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
            className: "block w-full pl-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",
            placeholder: "Jane Doe"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "absolute inset-y-0 flex items-center ml-3 pointer-events-none",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_5__.MailIcon, {
              className: "w-5 h-5",
              "aria-hidden": "true"
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Label, {
        className: "mt-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          className: "text-gray-700 dark:text-gray-400",
          children: "Icon right"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "relative text-gray-500 focus-within:text-purple-600 dark:focus-within:text-purple-400",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
            className: "block w-full pr-10 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",
            placeholder: "Jane Doe"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_5__.MailIcon, {
              className: "w-5 h-5",
              "aria-hidden": "true"
            })
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Typography_SectionTitle__WEBPACK_IMPORTED_MODULE_3__.default, {
      children: "Buttons"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Label, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          children: "Button left"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "relative",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
            className: "block w-full pl-20 mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",
            placeholder: "Jane Doe"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
            className: "absolute inset-y-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-l-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray",
            children: "Click"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_windmill_react_ui__WEBPACK_IMPORTED_MODULE_4__.Label, {
        className: "mt-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
          children: "Button right"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "relative text-gray-500 focus-within:text-purple-600",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
            className: "block w-full pr-20 mt-1 text-sm text-black dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input",
            placeholder: "Jane Doe"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
            className: "absolute inset-y-0 right-0 px-4 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-r-md active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple",
            children: "Click"
          })]
        })]
      })]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Forms);

/***/ })

}]);