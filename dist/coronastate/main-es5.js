function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <div class=\"clr-row clr-align-items-center\">\n\n    <div class=\"clr-col-lg-8 clr-col-md-12 clr-col-sm-12 resize\">\n\n      <div class=\"clr-col-lg-3 clr-col-md-6 clr-col-sm-12\">\n        <div class=\"clr-row\">\n          <div class=\"clr-col-lg-10 clr-col-12\">\n            <a href=\"...\" class=\"card clickable\">\n              <div class=\"card-img\">\n              </div>\n              <div class=\"card-block\" style=\"display: flex;\">\n\n                <div class=\"clr-col\">\n                  <div class=\"clr-row\" style=\"color: rgb(140, 149, 170) ; font-weight: bold;\">Cases Today</div>\n                  <div class=\"clr-row\" style=\"color: #36373F; font-weight: bold;\">\n                    {{allInformation.todayCases | number:'':''}}</div>\n                </div>\n\n                <div class=\"clr-col\">\n                  <img src=\"../assets/calendar.png\" style=\"width: 2rem; height: 2rem;\" />\n                </div>\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"clr-col-lg-3 clr-col-md-6 clr-col-sm-12\">\n        <div class=\"clr-row\">\n          <div class=\"clr-col-lg-10 clr-col-12\">\n            <a href=\"...\" class=\"card clickable\">\n              <div class=\"card-img\">\n              </div>\n              <div class=\"card-block\" style=\"display: flex;\">\n\n                <div class=\"clr-col\">\n                  <div class=\"clr-row\" style=\"color: #C1C5CF; font-weight: bold;\">Recovered</div>\n                  <div class=\"clr-row\" style=\"color: #36373F; font-weight: bold;\">\n                    {{allInformation.recovered | number:'':''}}</div>\n                </div>\n\n                <div class=\"clr-col\">\n                  <img src=\"../assets/recovered.png\" style=\"width: 2rem; height: 2rem;\" />\n                </div>\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"clr-col-lg-3 clr-col-md-6 clr-col-sm-12\">\n        <div class=\"clr-row\">\n          <div class=\"clr-col-lg-10 clr-col-12\">\n            <a href=\"...\" class=\"card clickable\">\n              <div class=\"card-img\">\n              </div>\n              <div class=\"card-block\" style=\"display: flex;\">\n\n                <div class=\"clr-col\">\n                  <div class=\"clr-row\" style=\"color: #C1C5CF; font-weight: bold;\">Active Cases</div>\n                  <div class=\"clr-row\" style=\"color: #36373F; font-weight: bold;\">\n                    {{allInformation.active | number:'':''}}</div>\n                </div>\n\n                <div class=\"clr-col\">\n                  <img src=\"../assets/on.png\" style=\"width: 2rem; height: 2rem;\" />\n                </div>\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"clr-col-lg-3 clr-col-md-6 clr-col-sm-12\">\n        <div class=\"clr-row\">\n          <div class=\"clr-col-lg-10 clr-col-12\">\n            <a href=\"...\" class=\"card clickable\">\n              <div class=\"card-img\">\n              </div>\n              <div class=\"card-block\" style=\"display: flex;\">\n\n                <div class=\"clr-col\">\n                  <div class=\"clr-row\" style=\"color: #C1C5CF; font-weight: bold;\">Death Today</div>\n                  <div class=\"clr-row\" style=\"color: #36373F; font-weight: bold;\">\n                    {{allInformation.deaths | number:'':''}}</div>\n                </div>\n\n                <div class=\"clr-col\">\n                  <img src=\"../assets/death.png\" style=\"width: 2rem; height: 2rem;\" />\n                </div>\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"clr-col-lg-4 clr-col-md-12 clr-col-sm-12\" style=\"display: flex;\">\n\n      <div class=\"clr-col-12\">\n        <div class=\"clr-row\">\n          <div class=\"clr-col-lg-10 clr-col-12\">\n            <a href=\"...\" class=\"card clickable\">\n\n              <div class=\"card-block\" style=\"height: 10rem;\">\n\n                <div class=\"clr-row\">\n                  <h3 style=\"color: #36373F; font-weight: bold;\">Ratio of recovery</h3>\n                </div>\n\n                <div class=\"clr-row\">\n                  <img src=\"../assets/connected.png\" style=\"width: 7rem; height: 5rem;\" />\n\n                </div>\n\n                <div class=\"clr-row\">\n                  <div class=\"clr-col\">\n                    <div class=\"clr-row\" style=\"color: #36373F; font-weight: bold;\">\n                      {{allInformation.cases | number:'':''}} Affected\n                    </div>\n                  </div>\n\n                  <div class=\"clr-col\">\n                    <div class=\"clr-row\" style=\"color: #36373F; font-weight: bold;\">\n                      {{allInformation.recovered | number:'':''}}\n                      Recovered\n                    </div>\n\n                  </div>\n                </div>\n\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"clr-row clr-align-items-center\">\n    <div class=\"clr-col-lg-6 clr-col-md-12 clr-col-sm-12\">\n      <div class=\"clr-row\">\n        <div class=\"clr-col-8\" style=\"font-weight: bold; padding-left: 50px;\">\n          COVID - 19 Affected Areas\n        </div>\n        <div class=\"clr-col-2\" style=\"color: #C1C5CF; font-weight: bold;\">\n          Most Affected\n        </div>\n        <div class=\"clr-col-2\" style=\"color: #C1C5CF; font-weight: bold;\">\n          Less Affected\n        </div>\n      </div>\n\n      <div class=\"clr-row\">\n        <p>Map of the world</p>\n      </div>\n    </div>\n\n    <div class=\"clr-col-lg-6 clr-col-md-12 clr-col-sm-12 resize\" style=\"margin-top: 4.5rem; flex-direction: row;\">\n\n      <div class=\"clr-col-lg-6 clr-col-md-12 clr-col-sm-12\">\n        <div class=\"clr-row\">\n          <div class=\"clr-col-12\" style=\"font-weight: bold;\">\n            Top Countries\n          </div>\n        </div>\n\n        <div class=\"clr-row\" style=\"justify-content: flex-start;\"\n          *ngFor=\"let country of allCountries | slice:0:3; let i=index\">\n\n          <div class=\"clr-col-12\">\n            <a href=\"...\" class=\"card clickable\">\n              <div class=\"card-img\">\n              </div>\n              <div class=\"card-block\" style=\"display: flex;\">\n\n                <div class=\"clr-col\" style=\"text-align: left;\">\n                  <div class=\"clr-row\" style=\"color: #C1C5CF; font-weight: bold; justify-content: left;\">\n                    {{country.country}}</div>\n                  <div class=\"clr-row\" style=\"color: #36373F; font-weight: bold; justify-content: left;\">\n                    {{country.cases | number:'':''}} - Affected </div>\n                  <div class=\"clr-row\" style=\"color: #36373F; font-weight: bold; justify-content: left;\">\n                    {{country.recovered | number:'':''}} - Recovered\n                  </div>\n                </div>\n\n                <div class=\"clr-col\">\n                  <img src=\"https://img.icons8.com/nolan/64/bullish.png\" />\n                </div>\n              </div>\n            </a>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"clr-col-lg-6 clr-col-md-12 clr-col-sm-12\">\n        <div class=\"clr-col-11\">\n\n          <div class=\"clr-row\">\n            <div class=\"clr-col-12\" style=\"font-weight: bold;\">\n              Live Reports\n            </div>\n          </div>\n\n          <clr-datagrid>\n            <clr-dg-column>Flag</clr-dg-column>\n            <clr-dg-column>Country</clr-dg-column>\n            <clr-dg-column>Case</clr-dg-column>\n            <clr-dg-column>Critical</clr-dg-column>\n\n            <clr-dg-row *clrDgItems=\"let country of allCountries\">\n              <clr-dg-cell><img src=\"{{country.countryInfo.flag}}\" alt=\"{{country.country}}\"\n                  style=\"width: 1rem; height: 1rem;\"></clr-dg-cell>\n              <clr-dg-cell>{{country.country}}</clr-dg-cell>\n              <clr-dg-cell>{{country.cases}}</clr-dg-cell>\n              <clr-dg-cell>{{country.critical}}</clr-dg-cell>\n            </clr-dg-row>\n\n            <!-- <clr-dg-footer>{{country.length}} countries</clr-dg-footer> -->\n            <clr-dg-footer>\n              <clr-dg-pagination #pagination [clrDgPageSize]=\"8\">\n                <clr-dg-page-size [clrPageSizeOptions]=\"[10,20,50,100]\">Countries per page</clr-dg-page-size>\n                {{pagination.firstItem + 1}} - {{pagination.lastItem + 1}}\n                of {{pagination.totalItems}} countries\n              </clr-dg-pagination>\n            </clr-dg-footer>\n          </clr-datagrid>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class=\"clr-row\" style=\"margin: 1rem;\">\n    <div class=\"clr-row\">\n\n      <div class=\"clr-col\">\n        <img src=\"../assets/medicine.png\" style=\"width: 15rem; height: 10rem;\" />\n      </div>\n      <div class=\"clr-col\">\n        <div class=\"clr-row\"><button class=\"btn btn-primary\">News & Update</button></div>\n        <div class=\"clr-row\">\n          <h4 style=\"bold\">5 Symptoms of Corona Virus that you should know</h4>\n        </div>\n        <div class=\"clr-row\"><button class=\"btn btn-link\">Read More <clr-icon shape=\"arrow\"></clr-icon></button></div>\n      </div>\n\n    </div>\n    <div class=\"clr-row\">\n\n      <div class=\"clr-col\">\n        <img src=\"../assets/gift.png\" style=\"width: 15rem; height: 10rem;\" />\n      </div>\n      <div class=\"clr-col\">\n        <div class=\"clr-row\"><button class=\"btn btn-primary\">Donate</button></div>\n        <div class=\"clr-row\">\n          <h4 style=\"bold\">Donate to 3rd world countries which are suffering</h4>\n        </div>\n        <div class=\"clr-row\"><button class=\"btn btn-link\">Donate Now <clr-icon shape=\"arrow\"></clr-icon></button></div>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".clr-row {\n  justify-content: center;\n}\n\n/* Extra small devices (phones, 600px and down) */\n\n@media only screen and (max-width: 600px) {\n  .resize {\n    display: block;\n  }\n\n  clr-datagrid {\n    width: 110%;\n  }\n}\n\n/* Small devices (portrait tablets and large phones, 600px and up) */\n\n@media only screen and (min-width: 600px) {\n  .resize {\n    display: block;\n  }\n\n  clr-datagrid {\n    width: 100%;\n  }\n}\n\n/* Medium devices (landscape tablets, 768px and up) */\n\n@media only screen and (min-width: 768px) {\n  .resize {\n    display: flex;\n  }\n}\n\n/* Large devices (laptops/desktops, 992px and up) */\n\n@media only screen and (min-width: 992px) {\n  .resize {\n    display: flex;\n  }\n}\n\n/* Extra large devices (large laptops and desktops, 1200px and up) */\n\n@media only screen and (min-width: 1200px) {\n  .resize {\n    display: flex;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxRWFowQ1VUXFxEZXNrdG9wXFxMZWFybmluZ1xcUHJvZHVjdHNcXGNvcm9uYXN0YXRlL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLHVCQUFBO0FDQUY7O0FESUEsaURBQUE7O0FBQ0E7RUFDRTtJQUNFLGNBQUE7RUNERjs7RURJQTtJQUNFLFdBQUE7RUNERjtBQUNGOztBRElBLG9FQUFBOztBQUNBO0VBQ0U7SUFDRSxjQUFBO0VDRkY7O0VES0E7SUFDRSxXQUFBO0VDRkY7QUFDRjs7QURLQSxxREFBQTs7QUFDQTtFQUNFO0lBQ0UsYUFBQTtFQ0hGO0FBQ0Y7O0FETUEsbURBQUE7O0FBQ0E7RUFDRTtJQUNFLGFBQUE7RUNKRjtBQUNGOztBRE9BLG9FQUFBOztBQUNBO0VBQ0U7SUFDRSxhQUFBO0VDTEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbHItcm93IHtcclxuICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC8vIHBhZGRpbmctbGVmdDogMXJlbTtcclxufVxyXG5cclxuLyogRXh0cmEgc21hbGwgZGV2aWNlcyAocGhvbmVzLCA2MDBweCBhbmQgZG93bikgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5yZXNpemUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICBjbHItZGF0YWdyaWQge1xyXG4gICAgd2lkdGg6IDExMCU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTbWFsbCBkZXZpY2VzIChwb3J0cmFpdCB0YWJsZXRzIGFuZCBsYXJnZSBwaG9uZXMsIDYwMHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xyXG4gIC5yZXNpemUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICBjbHItZGF0YWdyaWQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBNZWRpdW0gZGV2aWNlcyAobGFuZHNjYXBlIHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5yZXNpemUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbn1cclxuXHJcbi8qIExhcmdlIGRldmljZXMgKGxhcHRvcHMvZGVza3RvcHMsIDk5MnB4IGFuZCB1cCkgKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gIC5yZXNpemUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbn1cclxuXHJcbi8qIEV4dHJhIGxhcmdlIGRldmljZXMgKGxhcmdlIGxhcHRvcHMgYW5kIGRlc2t0b3BzLCAxMjAwcHggYW5kIHVwKSAqL1xyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5yZXNpemUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbn1cclxuIiwiLmNsci1yb3cge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLyogRXh0cmEgc21hbGwgZGV2aWNlcyAocGhvbmVzLCA2MDBweCBhbmQgZG93bikgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnJlc2l6ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICBjbHItZGF0YWdyaWQge1xuICAgIHdpZHRoOiAxMTAlO1xuICB9XG59XG4vKiBTbWFsbCBkZXZpY2VzIChwb3J0cmFpdCB0YWJsZXRzIGFuZCBsYXJnZSBwaG9uZXMsIDYwMHB4IGFuZCB1cCkgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLnJlc2l6ZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICBjbHItZGF0YWdyaWQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4vKiBNZWRpdW0gZGV2aWNlcyAobGFuZHNjYXBlIHRhYmxldHMsIDc2OHB4IGFuZCB1cCkgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnJlc2l6ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxufVxuLyogTGFyZ2UgZGV2aWNlcyAobGFwdG9wcy9kZXNrdG9wcywgOTkycHggYW5kIHVwKSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCkge1xuICAucmVzaXplIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59XG4vKiBFeHRyYSBsYXJnZSBkZXZpY2VzIChsYXJnZSBsYXB0b3BzIGFuZCBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5yZXNpemUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _corona_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./corona.service */
    "./src/app/corona.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(http, coronaService, sanitizer) {
        _classCallCheck(this, AppComponent);

        this.http = http;
        this.coronaService = coronaService;
        this.sanitizer = sanitizer;
        this.title = 'corona state';
        this.getInformation();
        this.getCountries();
      }

      _createClass(AppComponent, [{
        key: "getInformation",
        value: function getInformation() {
          var _this = this;

          this.coronaService.getInformation().subscribe(function (allInformation) {
            if (allInformation) {
              _this.allInformation = allInformation;
              console.log('All information: ', allInformation);
            }
          });
        }
      }, {
        key: "getCountries",
        value: function getCountries() {
          var _this2 = this;

          this.coronaService.getCountries().subscribe(function (allCountries) {
            if (allCountries) {
              _this2.allCountries = allCountries;
              console.log('All countries: ', allCountries);
              allCountries.sort(function (a, b) {
                return a.cases < b.cases ? 1 : -1;
              });
            }
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _corona_service__WEBPACK_IMPORTED_MODULE_4__["CoronaService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @clr/angular */
    "./node_modules/@clr/angular/fesm2015/clr-angular.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/corona.service.ts":
  /*!***********************************!*\
    !*** ./src/app/corona.service.ts ***!
    \***********************************/

  /*! exports provided: CoronaService */

  /***/
  function srcAppCoronaServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoronaService", function () {
      return CoronaService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var CoronaService = /*#__PURE__*/function () {
      function CoronaService(http) {
        _classCallCheck(this, CoronaService);

        this.http = http;
      }

      _createClass(CoronaService, [{
        key: "getInformation",
        value: function getInformation() {
          var _this3 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this3.http.get("https://corona.lmao.ninja/all").subscribe(function (games) {
              observer.next(games);
            }, function (error) {
              observer.error('Could not get all information');
            });
          });
        }
      }, {
        key: "getCountries",
        value: function getCountries() {
          var _this4 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this4.http.get("https://corona.lmao.ninja/countries").subscribe(function (games) {
              observer.next(games);
            }, function (error) {
              observer.error('Could not get countries');
            });
          });
        }
      }]);

      return CoronaService;
    }();

    CoronaService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CoronaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CoronaService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\QXZ0CUT\Desktop\Learning\Products\coronastate\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map