/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "../../../../../DevEcoStudioProjects/Nested_Tabs_Library/entry/src/main/js/default/pages/index/index.hml?entry");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../DevEcoStudioProjects/Nested_Tabs_Library/entry/src/main/js/default/pages/index/index.hml?entry":
/*!*********************************************************************************************************************************************************!*\
  !*** /Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/entry/src/main/js/default/pages/index/index.hml?entry ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! !../../../../../../../../../SDK/js/2.2.0.3/build-tools/ace-loader/lib/loader.js!../../../../../../node_modules/dS_nested_tabs/lib/dS_nest/ds_nest.hml?name=ds_nested_tabs */ "./lib/loader.js!../../../../../DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest.hml?name=ds_nested_tabs")
var $app_template$ = __webpack_require__(/*! !../../../../../../../../../SDK/js/2.2.0.3/build-tools/ace-loader/lib/json.js!../../../../../../../../../SDK/js/2.2.0.3/build-tools/ace-loader/lib/template.js!./index.hml */ "./lib/json.js!./lib/template.js!../../../../../DevEcoStudioProjects/Nested_Tabs_Library/entry/src/main/js/default/pages/index/index.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../../../../../SDK/js/2.2.0.3/build-tools/ace-loader/lib/json.js!../../../../../../../../../SDK/js/2.2.0.3/build-tools/ace-loader/lib/style.js!./index.css */ "./lib/json.js!./lib/style.js!../../../../../DevEcoStudioProjects/Nested_Tabs_Library/entry/src/main/js/default/pages/index/index.css")
var $app_script$ = __webpack_require__(/*! !../../../../../../../../../SDK/js/2.2.0.3/build-tools/ace-loader/lib/script.js!../../../../../../../../../SDK/js/2.2.0.3/build-tools/ace-loader/node_modules/babel-loader?presets[]=/Users/devashishkumar/DevelopmentFrameworks/Huawei/SDK/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/devashishkumar/DevelopmentFrameworks/Huawei/SDK/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../../../../../SDK/js/2.2.0.3/build-tools/ace-loader/lib/resource-reference-script.js!./index.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/devashishkumar/DevelopmentFrameworks/Huawei/SDK/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/devashishkumar/DevelopmentFrameworks/Huawei/SDK/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../DevEcoStudioProjects/Nested_Tabs_Library/entry/src/main/js/default/pages/index/index.js")

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})
$app_bootstrap$('@app-component/index',undefined,undefined)

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest.css":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!/Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest.css ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "flexGrow": 1,
    "marginTop": "40px"
  },
  ".tab_bar1": {
    "flexDirection": "column",
    "width": "80px",
    "fontSize": "15px",
    "textAlign": "center",
    "height": "100%"
  },
  ".tab_bar": {
    "flexDirection": "column",
    "width": "120px",
    "fontSize": "30px",
    "textAlign": "center",
    "height": "100px"
  },
  ".nested_div": {
    "marginLeft": "10px",
    "marginRight": "10px",
    "marginBottom": "10px",
    "height": "100%",
    "width": "100%"
  },
  ".tabs": {
    "flexGrow": 1,
    "marginTop": "10px",
    "marginBottom": "10px",
    "marginLeft": "10px",
    "marginRight": "10px"
  },
  ".timg": {
    "height": "40px",
    "width": "70px"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/style.js!../../../../../DevEcoStudioProjects/Nested_Tabs_Library/entry/src/main/js/default/pages/index/index.css":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/style.js!/Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/entry/src/main/js/default/pages/index/index.css ***!
  \********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "width": "100%",
    "height": "100%"
  }
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest.hml":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!/Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest.hml ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:1",
    "className": "container"
  },
  "type": "div",
  "classList": [
    "container"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:2",
        "className": "tabs"
      },
      "type": "tabs",
      "classList": [
        "tabs"
      ],
      "children": [
        {
          "attr": {
            "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:3"
          },
          "type": "tab-bar",
          "children": [
            {
              "attr": {
                "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:4",
                "className": "tab_bar1"
              },
              "type": "div",
              "classList": [
                "tab_bar1"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:5",
                    "className": "timg",
                    "src": function () {return this.img1}
                  },
                  "type": "image",
                  "classList": [
                    "timg"
                  ]
                },
                {
                  "attr": {
                    "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:6",
                    "value": function () {return this.txt1}
                  },
                  "type": "text"
                }
              ]
            },
            {
              "attr": {
                "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:8",
                "className": "tab_bar1"
              },
              "type": "div",
              "classList": [
                "tab_bar1"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:9",
                    "className": "timg",
                    "src": function () {return this.img2}
                  },
                  "type": "image",
                  "classList": [
                    "timg"
                  ]
                },
                {
                  "attr": {
                    "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:10",
                    "value": function () {return this.txt2}
                  },
                  "type": "text"
                }
              ]
            },
            {
              "attr": {
                "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:12",
                "className": "tab_bar1"
              },
              "type": "div",
              "classList": [
                "tab_bar1"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:13",
                    "className": "timg",
                    "src": function () {return this.img3}
                  },
                  "type": "image",
                  "classList": [
                    "timg"
                  ]
                },
                {
                  "attr": {
                    "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:14",
                    "value": function () {return this.txt3}
                  },
                  "type": "text"
                }
              ]
            },
            {
              "attr": {
                "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:16",
                "className": "tab_bar1"
              },
              "type": "div",
              "classList": [
                "tab_bar1"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:17",
                    "className": "timg",
                    "src": function () {return this.img4}
                  },
                  "type": "image",
                  "classList": [
                    "timg"
                  ]
                },
                {
                  "attr": {
                    "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:18",
                    "value": function () {return this.txt4}
                  },
                  "type": "text"
                }
              ]
            }
          ]
        },
        {
          "attr": {
            "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:21",
            "scrollable": "true"
          },
          "type": "tab-content",
          "children": [
            {
              "attr": {
                "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:23",
                "className": "nested_div"
              },
              "type": "div",
              "classList": [
                "nested_div"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:24"
                  },
                  "type": "tabs",
                  "style": {
                    "flexGrow": "1",
                    "marginTop": "10%",
                    "marginBottom": "10px",
                    "marginLeft": "10px",
                    "marginRight": "10px"
                  },
                  "children": [
                    {
                      "attr": {
                        "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:25"
                      },
                      "type": "tab-bar",
                      "children": [
                        {
                          "attr": {
                            "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:26",
                            "className": "tab_bar",
                            "value": function () {return this.atxt1}
                          },
                          "type": "text",
                          "classList": [
                            "tab_bar"
                          ]
                        },
                        {
                          "attr": {
                            "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:27",
                            "className": "tab_bar",
                            "value": function () {return this.atxt2}
                          },
                          "type": "text",
                          "classList": [
                            "tab_bar"
                          ]
                        },
                        {
                          "attr": {
                            "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:28",
                            "className": "tab_bar",
                            "value": function () {return this.atxt3}
                          },
                          "type": "text",
                          "classList": [
                            "tab_bar"
                          ]
                        },
                        {
                          "attr": {
                            "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:29",
                            "className": "tab_bar",
                            "value": function () {return this.atxt4}
                          },
                          "type": "text",
                          "classList": [
                            "tab_bar"
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "attr": {
                "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:34",
                "className": "nested_div"
              },
              "type": "div",
              "classList": [
                "nested_div"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:35"
                  },
                  "type": "tabs",
                  "style": {
                    "flexGrow": "1",
                    "marginTop": "10%",
                    "marginBottom": "10px",
                    "marginLeft": "10px",
                    "marginRight": "10px"
                  },
                  "children": [
                    {
                      "attr": {
                        "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:36"
                      },
                      "type": "tab-bar",
                      "children": [
                        {
                          "attr": {
                            "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:37",
                            "className": "tab_bar",
                            "value": function () {return this.btxt1}
                          },
                          "type": "text",
                          "classList": [
                            "tab_bar"
                          ]
                        },
                        {
                          "attr": {
                            "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:38",
                            "className": "tab_bar",
                            "value": function () {return this.btxt2}
                          },
                          "type": "text",
                          "classList": [
                            "tab_bar"
                          ]
                        },
                        {
                          "attr": {
                            "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:39",
                            "className": "tab_bar",
                            "value": function () {return this.btxt3}
                          },
                          "type": "text",
                          "classList": [
                            "tab_bar"
                          ]
                        },
                        {
                          "attr": {
                            "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:40",
                            "className": "tab_bar",
                            "value": function () {return this.btxt4}
                          },
                          "type": "text",
                          "classList": [
                            "tab_bar"
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "attr": {
                "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:45",
                "className": "nested_div"
              },
              "type": "div",
              "classList": [
                "nested_div"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:46"
                  },
                  "type": "tabs",
                  "style": {
                    "flexGrow": "1",
                    "marginTop": "10%",
                    "marginBottom": "10px",
                    "marginLeft": "10px",
                    "marginRight": "10px"
                  },
                  "children": [
                    {
                      "attr": {
                        "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:47"
                      },
                      "type": "tab-bar",
                      "children": [
                        {
                          "attr": {
                            "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:48",
                            "className": "tab_bar",
                            "value": function () {return this.ctxt1}
                          },
                          "type": "text",
                          "classList": [
                            "tab_bar"
                          ]
                        },
                        {
                          "attr": {
                            "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:49",
                            "className": "tab_bar",
                            "value": function () {return this.ctxt2}
                          },
                          "type": "text",
                          "classList": [
                            "tab_bar"
                          ]
                        },
                        {
                          "attr": {
                            "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:50",
                            "className": "tab_bar",
                            "value": function () {return this.ctxt3}
                          },
                          "type": "text",
                          "classList": [
                            "tab_bar"
                          ]
                        },
                        {
                          "attr": {
                            "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:51",
                            "className": "tab_bar",
                            "value": function () {return this.ctxt4}
                          },
                          "type": "text",
                          "classList": [
                            "tab_bar"
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "attr": {
                "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:56",
                "className": "nested_div"
              },
              "type": "div",
              "classList": [
                "nested_div"
              ],
              "children": [
                {
                  "attr": {
                    "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:57"
                  },
                  "type": "tabs",
                  "style": {
                    "flexGrow": "1",
                    "marginTop": "10%",
                    "marginBottom": "10px",
                    "marginLeft": "10px",
                    "marginRight": "10px"
                  },
                  "children": [
                    {
                      "attr": {
                        "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:58"
                      },
                      "type": "tab-bar",
                      "children": [
                        {
                          "attr": {
                            "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:59",
                            "className": "tab_bar",
                            "value": function () {return this.dtxt1}
                          },
                          "type": "text",
                          "classList": [
                            "tab_bar"
                          ]
                        },
                        {
                          "attr": {
                            "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:60",
                            "className": "tab_bar",
                            "value": function () {return this.dtxt2}
                          },
                          "type": "text",
                          "classList": [
                            "tab_bar"
                          ]
                        },
                        {
                          "attr": {
                            "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:61",
                            "className": "tab_bar",
                            "value": function () {return this.dtxt3}
                          },
                          "type": "text",
                          "classList": [
                            "tab_bar"
                          ]
                        },
                        {
                          "attr": {
                            "debugLine": "Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest:62",
                            "className": "tab_bar",
                            "value": function () {return this.dtxt4}
                          },
                          "type": "text",
                          "classList": [
                            "tab_bar"
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ "./lib/json.js!./lib/template.js!../../../../../DevEcoStudioProjects/Nested_Tabs_Library/entry/src/main/js/default/pages/index/index.hml":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./lib/json.js!./lib/template.js!/Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/entry/src/main/js/default/pages/index/index.hml ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "attr": {
    "debugLine": "pages/index/index:2",
    "className": "container"
  },
  "type": "div",
  "classList": [
    "container"
  ],
  "children": [
    {
      "attr": {
        "debugLine": "pages/index/index:3",
        "img1": "common/images/console.png",
        "img2": "common/images/book-stack.png",
        "img3": "common/images/music.png",
        "img4": "common/images/video.png",
        "txt1": "Games",
        "txt2": "Books",
        "txt3": "Songs",
        "txt4": "Video",
        "atxt1": "Game1",
        "atxt2": "Game2",
        "atxt3": "Game3",
        "atxt4": "Game4",
        "btxt1": "Book1",
        "btxt2": "Book2",
        "btxt3": "Book3",
        "btxt4": "Book4",
        "ctxt1": "Song1",
        "ctxt2": "Song2",
        "ctxt3": "Song3",
        "ctxt4": "Song4",
        "dtxt1": "Video1",
        "dtxt2": "Video2",
        "dtxt3": "Video3",
        "dtxt4": "Video4"
      },
      "type": "ds_nested_tabs"
    }
  ]
}

/***/ }),

/***/ "./lib/loader.js!../../../../../DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest.hml?name=ds_nested_tabs":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./lib/loader.js!/Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest.hml?name=ds_nested_tabs ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(/*! !../../../../../SDK/js/2.2.0.3/build-tools/ace-loader/lib/json.js!../../../../../SDK/js/2.2.0.3/build-tools/ace-loader/lib/template.js!./ds_nest.hml */ "./lib/json.js!./lib/template.js!../../../../../DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest.hml")
var $app_style$ = __webpack_require__(/*! !../../../../../SDK/js/2.2.0.3/build-tools/ace-loader/lib/json.js!../../../../../SDK/js/2.2.0.3/build-tools/ace-loader/lib/style.js!./ds_nest.css */ "./lib/json.js!./lib/style.js!../../../../../DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest.css")
var $app_script$ = __webpack_require__(/*! !../../../../../SDK/js/2.2.0.3/build-tools/ace-loader/lib/script.js!../../../../../SDK/js/2.2.0.3/build-tools/ace-loader/node_modules/babel-loader?presets[]=/Users/devashishkumar/DevelopmentFrameworks/Huawei/SDK/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/devashishkumar/DevelopmentFrameworks/Huawei/SDK/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!../../../../../SDK/js/2.2.0.3/build-tools/ace-loader/lib/resource-reference-script.js!./ds_nest.js */ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/devashishkumar/DevelopmentFrameworks/Huawei/SDK/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/devashishkumar/DevelopmentFrameworks/Huawei/SDK/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest.js")

$app_define$('@app-component/ds_nested_tabs', [], function($app_require$, $app_exports$, $app_module$) {

$app_script$($app_module$, $app_exports$, $app_require$)
if ($app_exports$.__esModule && $app_exports$.default) {
$app_module$.exports = $app_exports$.default
}

$app_module$.exports.template = $app_template$

$app_module$.exports.style = $app_style$

})


/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/devashishkumar/DevelopmentFrameworks/Huawei/SDK/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/devashishkumar/DevelopmentFrameworks/Huawei/SDK/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest.js":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=/Users/devashishkumar/DevelopmentFrameworks/Huawei/SDK/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/devashishkumar/DevelopmentFrameworks/Huawei/SDK/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!/Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/dS_nested_tabs/lib/dS_nest/ds_nest.js ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  data: {},
  props: {
    img1: '',
    img2: '',
    img3: '',
    img4: '',
    txt1: '',
    txt2: '',
    txt3: '',
    txt4: '',
    atxt1: '',
    atxt2: '',
    atxt3: '',
    atxt4: '',
    btxt1: "",
    btxt2: "",
    btxt3: "",
    btxt4: "",
    ctxt1: "",
    ctxt2: "",
    ctxt3: "",
    ctxt4: "",
    dtxt1: "",
    dtxt2: "",
    dtxt3: "",
    dtxt4: ""
  }
};
exports["default"] = _default;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}

var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}
/* generated by ace-loader */


/***/ }),

/***/ "./lib/script.js!./node_modules/babel-loader/lib/index.js?presets[]=/Users/devashishkumar/DevelopmentFrameworks/Huawei/SDK/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/devashishkumar/DevelopmentFrameworks/Huawei/SDK/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!../../../../../DevEcoStudioProjects/Nested_Tabs_Library/entry/src/main/js/default/pages/index/index.js":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./lib/script.js!./node_modules/babel-loader/lib?presets[]=/Users/devashishkumar/DevelopmentFrameworks/Huawei/SDK/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/preset-env&plugins[]=/Users/devashishkumar/DevelopmentFrameworks/Huawei/SDK/js/2.2.0.3/build-tools/ace-loader/node_modules/@babel/plugin-transform-modules-commonjs&comments=false!./lib/resource-reference-script.js!/Users/devashishkumar/DevelopmentFrameworks/Huawei/DevEcoStudioProjects/Nested_Tabs_Library/entry/src/main/js/default/pages/index/index.js ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  data: {
    title: ""
  }
};
exports["default"] = _default;

function requireModule(moduleName) {
  const systemList = ['system.router', 'system.app', 'system.prompt', 'system.configuration',
  'system.image', 'system.device', 'system.mediaquery', 'ohos.animator', 'system.grid', 'system.resource']
  var target = ''
  if (systemList.includes(moduleName.replace('@', ''))) {
    target = $app_require$('@app-module/' + moduleName.substring(1));
    return target;
  }
  var shortName = moduleName.replace(/@[^.]+.([^.]+)/, '$1');
  if (typeof ohosplugin !== 'undefined' && /@ohos/.test(moduleName)) {
    target = ohosplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  if (typeof systemplugin !== 'undefined') {
    target = systemplugin;
    for (let key of shortName.split('.')) {
      target = target[key];
      if(!target) {
        break;
      }
    }
    if (typeof target !== 'undefined') {
      return target;
    }
  }
  target = requireNapi(shortName);
  return target;
}

var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}
/* generated by ace-loader */


/***/ })

/******/ });
//# sourceMappingURL=index.js.map