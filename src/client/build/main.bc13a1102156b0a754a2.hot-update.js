exports.id = "main";
exports.modules = {

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _deity_falcon_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @deity/falcon-ui */ "./node_modules/@deity/falcon-ui/dist/index.js");
/* harmony import */ var _deity_falcon_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @deity/falcon-i18n */ "./node_modules/@deity/falcon-i18n/dist/index.js");
/* harmony import */ var _deity_falcon_ecommerce_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @deity/falcon-ecommerce-uikit */ "./node_modules/@deity/falcon-ecommerce-uikit/dist/index.js");
var _jsxFileName = "C:\\Users\\Ronin Richman\\kind-foundation\\src\\client\\src\\pages\\Home.js";




const HOMEPAGE_PRODUCTS_QUERY = {
  "kind": "Document",
  "definitions": [{
    "kind": "OperationDefinition",
    "operation": "query",
    "name": {
      "kind": "Name",
      "value": "HomepageProducts"
    },
    "variableDefinitions": [{
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "categoryId"
        }
      },
      "type": {
        "kind": "NonNullType",
        "type": {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "String"
          }
        }
      },
      "directives": []
    }, {
      "kind": "VariableDefinition",
      "variable": {
        "kind": "Variable",
        "name": {
          "kind": "Name",
          "value": "amount"
        }
      },
      "type": {
        "kind": "NamedType",
        "name": {
          "kind": "Name",
          "value": "Int"
        }
      },
      "directives": []
    }],
    "directives": [],
    "selectionSet": {
      "kind": "SelectionSet",
      "selections": [{
        "kind": "Field",
        "name": {
          "kind": "Name",
          "value": "category"
        },
        "arguments": [{
          "kind": "Argument",
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "value": {
            "kind": "Variable",
            "name": {
              "kind": "Name",
              "value": "categoryId"
            }
          }
        }],
        "directives": [],
        "selectionSet": {
          "kind": "SelectionSet",
          "selections": [{
            "kind": "Field",
            "name": {
              "kind": "Name",
              "value": "products"
            },
            "arguments": [{
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "pagination"
              },
              "value": {
                "kind": "ObjectValue",
                "fields": [{
                  "kind": "ObjectField",
                  "name": {
                    "kind": "Name",
                    "value": "perPage"
                  },
                  "value": {
                    "kind": "Variable",
                    "name": {
                      "kind": "Name",
                      "value": "amount"
                    }
                  }
                }, {
                  "kind": "ObjectField",
                  "name": {
                    "kind": "Name",
                    "value": "page"
                  },
                  "value": {
                    "kind": "IntValue",
                    "value": "1"
                  }
                }]
              }
            }],
            "directives": [],
            "selectionSet": {
              "kind": "SelectionSet",
              "selections": [{
                "kind": "Field",
                "name": {
                  "kind": "Name",
                  "value": "items"
                },
                "arguments": [],
                "directives": [],
                "selectionSet": {
                  "kind": "SelectionSet",
                  "selections": [{
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "id"
                    },
                    "arguments": [],
                    "directives": []
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "name"
                    },
                    "arguments": [],
                    "directives": []
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "price"
                    },
                    "arguments": [],
                    "directives": [],
                    "selectionSet": {
                      "kind": "SelectionSet",
                      "selections": [{
                        "kind": "Field",
                        "name": {
                          "kind": "Name",
                          "value": "regular"
                        },
                        "arguments": [],
                        "directives": []
                      }, {
                        "kind": "Field",
                        "name": {
                          "kind": "Name",
                          "value": "special"
                        },
                        "arguments": [],
                        "directives": []
                      }, {
                        "kind": "Field",
                        "name": {
                          "kind": "Name",
                          "value": "minTier"
                        },
                        "arguments": [],
                        "directives": []
                      }]
                    }
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "thumbnail"
                    },
                    "arguments": [],
                    "directives": []
                  }, {
                    "kind": "Field",
                    "name": {
                      "kind": "Name",
                      "value": "urlPath"
                    },
                    "arguments": [],
                    "directives": []
                  }]
                }
              }]
            }
          }]
        }
      }]
    }
  }],
  "loc": {
    "start": 0,
    "end": 356,
    "source": {
      "body": "\n  query HomepageProducts($categoryId: String!, $amount: Int) {\n    category(id: $categoryId) {\n      products(pagination: { perPage: $amount, page: 1 }) {\n        items {\n          id\n          name\n          price {\n            regular\n            special\n            minTier\n          }\n          thumbnail\n          urlPath\n        }\n      }\n    }\n  }\n",
      "name": "GraphQL request",
      "locationOffset": {
        "line": 1,
        "column": 1
      }
    }
  }
};

const Home = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_deity_falcon_ui__WEBPACK_IMPORTED_MODULE_1__["GridLayout"], {
  gridGap: "md",
  py: "ld",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  }
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_deity_falcon_ecommerce_uikit__WEBPACK_IMPORTED_MODULE_3__["Query"], {
  query: HOMEPAGE_PRODUCTS_QUERY,
  variables: {
    categoryId: 'computers',
    amount: 10
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  }
}, ({
  category
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_deity_falcon_ecommerce_uikit__WEBPACK_IMPORTED_MODULE_3__["ProductList"], {
  products: category.products.items,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

};
//# sourceMappingURL=main.bc13a1102156b0a754a2.hot-update.js.map