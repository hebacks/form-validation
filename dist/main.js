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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/style.scss":
/*!************************!*\
  !*** ./css/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/FormValidation.ts":
/*!*******************************!*\
  !*** ./src/FormValidation.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var FormValidation = /** @class */ (function () {
    function FormValidation(form, config) {
        if (config === void 0) { config = {}; }
        this.form = form;
        this.VirtualForm = {};
        this.errorClassName = config.errorClassName || "invalid";
        this.validators = {
            isRequired: function (errorMessage) {
                if (errorMessage === void 0) { errorMessage = "This field is required. "; }
                return function (value) {
                    var isValid;
                    switch (typeof value) {
                        case "boolean":
                            isValid = value === true;
                            break;
                        default:
                            isValid = value !== "";
                    }
                    return {
                        isValid: isValid,
                        errorMessage: errorMessage
                    };
                };
            },
            isEmail: function (errorMessage) {
                if (errorMessage === void 0) { errorMessage = "Please enter a valid email. "; }
                return function (value) {
                    var emailRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]{2,}$");
                    return {
                        isValid: emailRegex.test(value),
                        errorMessage: errorMessage
                    };
                };
            },
            isLongerThan: function (minLength, error) {
                if (error === void 0) { error = null; }
                return function (value) {
                    return {
                        isValid: value.length >= minLength,
                        errorMessage: error ||
                            "This value has to be at least " + minLength + " characters long. "
                    };
                };
            }
        };
        this.initValidation = function () {
            this.createVirtualForm().validate();
        };
        this.initValidation();
    }
    FormValidation.prototype.createVirtualForm = function () {
        var _this = this;
        this.form
            .querySelectorAll("[name]")
            .forEach(function (element) { return _this.saveFormElement(element); });
        return this;
    };
    FormValidation.prototype.saveFormElement = function (element) {
        this.VirtualForm[element.name] = {
            element: element,
            isValid: false,
            isDirty: false,
            errorMessages: [],
            validationRules: this.getValidationRules(element),
            customValidators: [],
            validRules: 0,
            value: element.value
        };
    };
    FormValidation.prototype.getValidationRules = function (element) {
        var validationRules = [];
        if (element.hasAttribute("required") &&
            validationRules.indexOf("isRequired") < 0) {
            validationRules.push("isRequired");
        }
        if (element.dataset.validators)
            validationRules = JSON.parse(element.dataset.validators);
        return validationRules;
    };
    FormValidation.getValue = function (element) {
        switch (element.getAttribute("type")) {
            case "checkbox":
                return element.checked;
            default:
                return element.value;
        }
    };
    FormValidation.prototype.validateRule = function (rule, HTMLElement, FormElement) {
        FormElement.value = FormValidation.getValue(HTMLElement);
        var result = this.validators[rule]()(FormElement.value);
        result.isValid
            ? this.setValid(HTMLElement, FormElement, result)
            : this.setInvalid(HTMLElement, FormElement, result);
        HTMLElement.parentElement.nextElementSibling.innerHTML = FormElement.errorMessages.join(" ");
    };
    FormValidation.prototype.checkCustomValidators = function (HTMLElement) {
        var _this = this;
        var FormElement = this.VirtualForm[HTMLElement.name];
        FormElement.customValidators.forEach(function (validator) { return __awaiter(_this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!validator) return [3 /*break*/, 2];
                        FormElement.value = FormValidation.getValue(HTMLElement);
                        return [4 /*yield*/, validator(FormElement.value, FormElement)];
                    case 1:
                        result = _a.sent();
                        result.isValid
                            ? this.setValid(HTMLElement, FormElement, result)
                            : this.setInvalid(HTMLElement, FormElement, result);
                        HTMLElement.parentElement.nextElementSibling.innerHTML = FormElement.errorMessages.join(" ");
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); });
    };
    FormValidation.prototype.checkValidity = function (HTMLElement) {
        var _this = this;
        var FormElement = this.VirtualForm[HTMLElement.name];
        FormElement.isDirty = true;
        this.checkCustomValidators(HTMLElement);
        FormElement.validationRules.forEach(function (rule) {
            _this.validateRule(rule, HTMLElement, FormElement);
        });
    };
    FormValidation.prototype.setValid = function (HTMLElement, FormElement, result) {
        HTMLElement.classList.remove(this.errorClassName);
        FormElement.errorMessages = FormElement.errorMessages.filter(function (message) { return message !== result.errorMessage; });
        FormElement.isValid = true;
    };
    FormValidation.prototype.setInvalid = function (HTMLElement, FormElement, result) {
        HTMLElement.classList.add(this.errorClassName);
        if (FormElement.errorMessages.indexOf(result.errorMessage) < 0) {
            FormElement.errorMessages.push(result.errorMessage);
        }
        FormElement.isValid = false;
    };
    FormValidation.prototype.validate = function () {
        var _this = this;
        this.form.setAttribute("novalidate", true.toString());
        var self = this;
        var types = ["file", "reset", "submit", "button"];
        this.form.addEventListener("blur", function (event) {
            if (types.indexOf(event.target.type) > -1)
                return;
            _this.checkValidity(event.target);
        }, true);
        this.form.addEventListener("input", function (event) {
            var FormElement = self.VirtualForm[event.target.name];
            FormElement.value = FormValidation.getValue(event.target);
            if (FormElement.isDirty) {
                _this.checkValidity(event.target);
            }
        }, true);
        // for checkboxes to dynamically validate on its 'checked' value change
        this.form.addEventListener("change", function (event) {
            event.target.type === "checkbox" &&
                _this.checkValidity(event.target);
        }, true);
    };
    FormValidation.prototype.validateAll = function (event) {
        var e_1, _a, e_2, _b;
        event.preventDefault();
        var requiredFields = [];
        try {
            for (var _c = __values(Object.keys(this.VirtualForm)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var key = _d.value;
                if (this.VirtualForm[key].validationRules.length > 0 ||
                    this.VirtualForm[key].customValidators.length > 0) {
                    requiredFields.push(this.VirtualForm[key]);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var validFields = 0;
        var validForm = false;
        try {
            for (var _e = __values(Object.keys(this.VirtualForm)), _f = _e.next(); !_f.done; _f = _e.next()) {
                var key = _f.value;
                this.checkValidity(this.VirtualForm[key].element);
                this.VirtualForm[key].isValid && validFields++;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_2) throw e_2.error; }
        }
        if (validFields === requiredFields.length) {
            validForm = true;
        }
        return validForm;
    };
    FormValidation.prototype.customizeValidators = function (customConfig) {
        var _this = this;
        if (customConfig === void 0) { customConfig = null; }
        var FormElements = Object.keys(customConfig);
        FormElements.forEach(function (element) {
            _this.VirtualForm[element].customValidators = customConfig[element];
        });
        return this;
    };
    FormValidation.prototype.removeValidators = function (customRemoval) {
        var _this = this;
        if (customRemoval === void 0) { customRemoval = null; }
        var elementsNames = Object.keys(customRemoval);
        elementsNames.forEach(function (elementName) {
            var unneededValidators = customRemoval[elementName];
            unneededValidators.forEach(function (validator) {
                var FormElement = _this.VirtualForm[elementName];
                var index = FormElement.validationRules.indexOf(validator.name);
                if (index > -1) {
                    FormElement.validationRules.splice(index, 1);
                    return FormElement.validationRules;
                }
            });
        });
        return this;
    };
    FormValidation.prototype.serialize = function () {
        var _this = this;
        var serialized = {};
        Object.keys(this.VirtualForm).forEach(function (key) {
            serialized[key] = _this.VirtualForm[key].value;
        });
        return serialized;
    };
    return FormValidation;
}());
/* harmony default export */ __webpack_exports__["default"] = (FormValidation);


/***/ }),

/***/ "./src/async.js":
/*!**********************!*\
  !*** ./src/async.js ***!
  \**********************/
/*! exports provided: isUnique */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUnique", function() { return isUnique; });
const isUnique = errorMessage => (value, field) => {
  const usernames = ["Baks", "Baksik", "HebX"];
  field.element.parentElement.classList.add("loader");
  return new Promise(resolve => {
    setTimeout(() => {
      let isTaken = usernames.indexOf(value) > -1;
      field.element.parentElement.classList.remove("loader");
      resolve({
        isValid: !isTaken,
        errorMessage: errorMessage
      });
    }, 2000);
  });
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormValidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormValidation */ "./src/FormValidation.ts");
/* harmony import */ var _newValidators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newValidators */ "./src/newValidators.ts");
/* harmony import */ var _async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./async */ "./src/async.js");
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/style.scss */ "./css/style.scss");
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_style_scss__WEBPACK_IMPORTED_MODULE_3__);





const config = {
  errorClassName: "invalid"
};

const form = document.querySelector("#login");

const formValidation = new _FormValidation__WEBPACK_IMPORTED_MODULE_0__["default"](form, config);

formValidation.customizeValidators({
  name: [
    formValidation.validators.isRequired(),
    formValidation.validators.isLongerThan(2)
  ],
  message: [
    Object(_newValidators__WEBPACK_IMPORTED_MODULE_1__["hasCapitalLetter"])("This value has to contain at least one capital letter. "),
    Object(_newValidators__WEBPACK_IMPORTED_MODULE_1__["hasNumber"])("This value has to contain at least one number. "),
    formValidation.validators.isLongerThan(3, "Min. 3 characters required. ")
  ],
  username: [Object(_async__WEBPACK_IMPORTED_MODULE_2__["isUnique"])("This username is already taken. ")]
});

form.addEventListener("submit", () => {
  const status = formValidation.validateAll(event);
  const serializedForm = formValidation.serialize();
  const finalMessage = document.querySelector(".form__message");

  if (status) {
    finalMessage.innerHTML = "Form successfully submitted!";
    finalMessage.classList.add("successful");
    // action on submit goes here
  } else {
    finalMessage.innerHTML =
      "Please update invalid fields and hit submit again";
    finalMessage.classList.remove("successful");
  }
  console.log(serializedForm);
});


/***/ }),

/***/ "./src/newValidators.ts":
/*!******************************!*\
  !*** ./src/newValidators.ts ***!
  \******************************/
/*! exports provided: hasCapitalLetter, hasNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasCapitalLetter", function() { return hasCapitalLetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasNumber", function() { return hasNumber; });
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var hasCapitalLetter = function (errorMessage) {
    if (errorMessage === void 0) { errorMessage = "It has to contain a capital letter."; }
    return function (value) {
        var capitalLetterRegex = /[A-Z]/;
        return {
            isValid: capitalLetterRegex.test(value),
            errorMessage: errorMessage
        };
    };
};
var hasNumber = function (errorMessage) {
    if (errorMessage === void 0) { errorMessage = "It has to contain a number"; }
    return function (value) {
        var hasNumber = __spread(value).find(function (letter) { return letter.trim() && !isNaN(letter); });
        return {
            isValid: hasNumber !== undefined,
            errorMessage: errorMessage
        };
    };
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm1WYWxpZGF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9hc3luYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ld1ZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLHlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRUE7SUFPRSx3QkFBWSxJQUFpQixFQUFFLE1BQTZCO1FBQTdCLG9DQUE2QjtRQUMxRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsV0FBVyxHQUFH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Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q00sSUFBTSxnQkFBZ0IsR0FBRyxVQUM5QixZQUE0RDtJQUE1RCxtRkFBNEQ7SUFDekQsaUJBQUMsS0FBVTtRQUNkLElBQU0sa0JBQWtCLEdBQUcsT0FBTyxDQUFDO1FBQ25DLE9BQU87WUFDTCxPQUFPLEVBQUUsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN2QyxZQUFZLEVBQUUsWUFBWTtTQUMzQixDQUFDO0lBQ0osQ0FBQztBQU5JLENBTUosQ0FBQztBQUVLLElBQU0sU0FBUyxHQUFHLFVBQ3ZCLFlBQW1EO0lBQW5ELDBFQUFtRDtJQUNoRCxpQkFBQyxLQUFVO1FBQ2QsSUFBSSxTQUFTLEdBQUcsU0FBSSxLQUFLLEVBQUUsSUFBSSxDQUFDLGdCQUFNLElBQUksYUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUEvQixDQUErQixDQUFDLENBQUM7UUFDM0UsT0FBTztZQUNMLE9BQU8sRUFBRSxTQUFTLEtBQUssU0FBUztZQUNoQyxZQUFZLEVBQUUsWUFBWTtTQUMzQixDQUFDO0lBQ0osQ0FBQztBQU5JLENBTUosQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdFwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiaW1wb3J0IHsgRlYgfSBmcm9tIFwiLi9Gb3JtVmFsaWRhdGlvbi5kXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1WYWxpZGF0aW9uIHtcbiAgcHJpdmF0ZSB2YWxpZGF0b3JzOiBGVi5WYWxpZGF0b3JzO1xuICBwcml2YXRlIFZpcnR1YWxGb3JtOiBGVi5WaXJ0dWFsRm9ybTtcbiAgcHJpdmF0ZSBmb3JtOiBIVE1MRWxlbWVudDtcbiAgcHJpdmF0ZSBlcnJvckNsYXNzTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIGluaXRWYWxpZGF0aW9uOiBGdW5jdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihmb3JtOiBIVE1MRWxlbWVudCwgY29uZmlnOiBGVi5Db25maWd1cmF0aW9uID0ge30pIHtcbiAgICB0aGlzLmZvcm0gPSBmb3JtO1xuICAgIHRoaXMuVmlydHVhbEZvcm0gPSB7fTtcbiAgICB0aGlzLmVycm9yQ2xhc3NOYW1lID0gY29uZmlnLmVycm9yQ2xhc3NOYW1lIHx8IFwiaW52YWxpZFwiO1xuICAgIHRoaXMudmFsaWRhdG9ycyA9IHtcbiAgICAgIGlzUmVxdWlyZWQ6IChlcnJvck1lc3NhZ2U6IHN0cmluZyA9IFwiVGhpcyBmaWVsZCBpcyByZXF1aXJlZC4gXCIpID0+IChcbiAgICAgICAgdmFsdWU6IGFueVxuICAgICAgKTogRlYuUmVzdWx0ID0+IHtcbiAgICAgICAgbGV0IGlzVmFsaWQ7XG4gICAgICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICAgICAgY2FzZSBcImJvb2xlYW5cIjpcbiAgICAgICAgICAgIGlzVmFsaWQgPSB2YWx1ZSA9PT0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBpc1ZhbGlkID0gdmFsdWUgIT09IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpc1ZhbGlkOiBpc1ZhbGlkLFxuICAgICAgICAgIGVycm9yTWVzc2FnZVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGlzRW1haWw6IChlcnJvck1lc3NhZ2U6IHN0cmluZyA9IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwuIFwiKSA9PiAoXG4gICAgICAgIHZhbHVlOiBhbnlcbiAgICAgICk6IEZWLlJlc3VsdCA9PiB7XG4gICAgICAgIGNvbnN0IGVtYWlsUmVnZXggPSBuZXcgUmVnRXhwKFxuICAgICAgICAgIFwiXlthLXpBLVowLTlfListXStAW2EtekEtWjAtOS1dK1xcXFwuW2EtekEtWjAtOS0uXXsyLH0kXCJcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpc1ZhbGlkOiBlbWFpbFJlZ2V4LnRlc3QodmFsdWUpLFxuICAgICAgICAgIGVycm9yTWVzc2FnZVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGlzTG9uZ2VyVGhhbjogKG1pbkxlbmd0aDogbnVtYmVyLCBlcnJvcjogc3RyaW5nID0gbnVsbCkgPT4gKFxuICAgICAgICB2YWx1ZTogYW55XG4gICAgICApOiBGVi5SZXN1bHQgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlzVmFsaWQ6IHZhbHVlLmxlbmd0aCA+PSBtaW5MZW5ndGgsXG4gICAgICAgICAgZXJyb3JNZXNzYWdlOlxuICAgICAgICAgICAgZXJyb3IgfHxcbiAgICAgICAgICAgIGBUaGlzIHZhbHVlIGhhcyB0byBiZSBhdCBsZWFzdCAke21pbkxlbmd0aH0gY2hhcmFjdGVycyBsb25nLiBgXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmluaXRWYWxpZGF0aW9uID0gZnVuY3Rpb24oKTogdm9pZCB7XG4gICAgICB0aGlzLmNyZWF0ZVZpcnR1YWxGb3JtKCkudmFsaWRhdGUoKTtcbiAgICB9O1xuICAgIHRoaXMuaW5pdFZhbGlkYXRpb24oKTtcbiAgfVxuXG4gIGNyZWF0ZVZpcnR1YWxGb3JtKCkge1xuICAgIHRoaXMuZm9ybVxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZV1cIilcbiAgICAgIC5mb3JFYWNoKChlbGVtZW50OiBGVi5FbGVtZW50KSA9PiB0aGlzLnNhdmVGb3JtRWxlbWVudChlbGVtZW50KSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzYXZlRm9ybUVsZW1lbnQoZWxlbWVudDogRlYuRWxlbWVudCkge1xuICAgIHRoaXMuVmlydHVhbEZvcm1bZWxlbWVudC5uYW1lXSA9IHtcbiAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICBpc1ZhbGlkOiBmYWxzZSxcbiAgICAgIGlzRGlydHk6IGZhbHNlLFxuICAgICAgZXJyb3JNZXNzYWdlczogW10sXG4gICAgICB2YWxpZGF0aW9uUnVsZXM6IHRoaXMuZ2V0VmFsaWRhdGlvblJ1bGVzKGVsZW1lbnQpLFxuICAgICAgY3VzdG9tVmFsaWRhdG9yczogW10sXG4gICAgICB2YWxpZFJ1bGVzOiAwLFxuICAgICAgdmFsdWU6IGVsZW1lbnQudmFsdWVcbiAgICB9O1xuICB9XG5cbiAgZ2V0VmFsaWRhdGlvblJ1bGVzKGVsZW1lbnQ6IEZWLkVsZW1lbnQpOiBBcnJheTxzdHJpbmc+IHtcbiAgICBsZXQgdmFsaWRhdGlvblJ1bGVzOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgaWYgKFxuICAgICAgZWxlbWVudC5oYXNBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiKSAmJlxuICAgICAgdmFsaWRhdGlvblJ1bGVzLmluZGV4T2YoXCJpc1JlcXVpcmVkXCIpIDwgMFxuICAgICkge1xuICAgICAgdmFsaWRhdGlvblJ1bGVzLnB1c2goXCJpc1JlcXVpcmVkXCIpO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5kYXRhc2V0LnZhbGlkYXRvcnMpXG4gICAgICB2YWxpZGF0aW9uUnVsZXMgPSBKU09OLnBhcnNlKGVsZW1lbnQuZGF0YXNldC52YWxpZGF0b3JzKTtcbiAgICByZXR1cm4gdmFsaWRhdGlvblJ1bGVzO1xuICB9XG5cbiAgc3RhdGljIGdldFZhbHVlKGVsZW1lbnQ6IEZWLkVsZW1lbnQpOiBhbnkge1xuICAgIHN3aXRjaCAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKSB7XG4gICAgICBjYXNlIFwiY2hlY2tib3hcIjpcbiAgICAgICAgcmV0dXJuICg8SFRNTElucHV0RWxlbWVudD5lbGVtZW50KS5jaGVja2VkO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQudmFsdWU7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGVSdWxlKHJ1bGU6IHN0cmluZywgSFRNTEVsZW1lbnQ6IEZWLkVsZW1lbnQsIEZvcm1FbGVtZW50OiBGVi5GaWVsZCkge1xuICAgIEZvcm1FbGVtZW50LnZhbHVlID0gRm9ybVZhbGlkYXRpb24uZ2V0VmFsdWUoSFRNTEVsZW1lbnQpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMudmFsaWRhdG9yc1tydWxlXSgpKEZvcm1FbGVtZW50LnZhbHVlKTtcblxuICAgIHJlc3VsdC5pc1ZhbGlkXG4gICAgICA/IHRoaXMuc2V0VmFsaWQoSFRNTEVsZW1lbnQsIEZvcm1FbGVtZW50LCByZXN1bHQpXG4gICAgICA6IHRoaXMuc2V0SW52YWxpZChIVE1MRWxlbWVudCwgRm9ybUVsZW1lbnQsIHJlc3VsdCk7XG5cbiAgICBIVE1MRWxlbWVudC5wYXJlbnRFbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5pbm5lckhUTUwgPSBGb3JtRWxlbWVudC5lcnJvck1lc3NhZ2VzLmpvaW4oXG4gICAgICBcIiBcIlxuICAgICk7XG4gIH1cblxuICBjaGVja0N1c3RvbVZhbGlkYXRvcnMoSFRNTEVsZW1lbnQ6IEZWLkVsZW1lbnQpIHtcbiAgICBjb25zdCBGb3JtRWxlbWVudCA9IHRoaXMuVmlydHVhbEZvcm1bSFRNTEVsZW1lbnQubmFtZV07XG4gICAgRm9ybUVsZW1lbnQuY3VzdG9tVmFsaWRhdG9ycy5mb3JFYWNoKGFzeW5jIHZhbGlkYXRvciA9PiB7XG4gICAgICBpZiAodmFsaWRhdG9yKSB7XG4gICAgICAgIEZvcm1FbGVtZW50LnZhbHVlID0gRm9ybVZhbGlkYXRpb24uZ2V0VmFsdWUoSFRNTEVsZW1lbnQpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB2YWxpZGF0b3IoRm9ybUVsZW1lbnQudmFsdWUsIEZvcm1FbGVtZW50KTtcblxuICAgICAgICByZXN1bHQuaXNWYWxpZFxuICAgICAgICAgID8gdGhpcy5zZXRWYWxpZChIVE1MRWxlbWVudCwgRm9ybUVsZW1lbnQsIHJlc3VsdClcbiAgICAgICAgICA6IHRoaXMuc2V0SW52YWxpZChIVE1MRWxlbWVudCwgRm9ybUVsZW1lbnQsIHJlc3VsdCk7XG5cbiAgICAgICAgSFRNTEVsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MID0gRm9ybUVsZW1lbnQuZXJyb3JNZXNzYWdlcy5qb2luKFxuICAgICAgICAgIFwiIFwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjaGVja1ZhbGlkaXR5KEhUTUxFbGVtZW50OiBGVi5FbGVtZW50KSB7XG4gICAgY29uc3QgRm9ybUVsZW1lbnQgPSB0aGlzLlZpcnR1YWxGb3JtW0hUTUxFbGVtZW50Lm5hbWVdO1xuXG4gICAgRm9ybUVsZW1lbnQuaXNEaXJ0eSA9IHRydWU7XG4gICAgdGhpcy5jaGVja0N1c3RvbVZhbGlkYXRvcnMoSFRNTEVsZW1lbnQpO1xuICAgIEZvcm1FbGVtZW50LnZhbGlkYXRpb25SdWxlcy5mb3JFYWNoKHJ1bGUgPT4ge1xuICAgICAgdGhpcy52YWxpZGF0ZVJ1bGUocnVsZSwgSFRNTEVsZW1lbnQsIEZvcm1FbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldFZhbGlkKEhUTUxFbGVtZW50OiBGVi5FbGVtZW50LCBGb3JtRWxlbWVudDogRlYuRmllbGQsIHJlc3VsdDogRlYuUmVzdWx0KSB7XG4gICAgSFRNTEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmVycm9yQ2xhc3NOYW1lKTtcbiAgICBGb3JtRWxlbWVudC5lcnJvck1lc3NhZ2VzID0gRm9ybUVsZW1lbnQuZXJyb3JNZXNzYWdlcy5maWx0ZXIoXG4gICAgICBtZXNzYWdlID0+IG1lc3NhZ2UgIT09IHJlc3VsdC5lcnJvck1lc3NhZ2VcbiAgICApO1xuICAgIEZvcm1FbGVtZW50LmlzVmFsaWQgPSB0cnVlO1xuICB9XG5cbiAgc2V0SW52YWxpZChcbiAgICBIVE1MRWxlbWVudDogRlYuRWxlbWVudCxcbiAgICBGb3JtRWxlbWVudDogRlYuRmllbGQsXG4gICAgcmVzdWx0OiBGVi5SZXN1bHRcbiAgKSB7XG4gICAgSFRNTEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmVycm9yQ2xhc3NOYW1lKTtcbiAgICBpZiAoRm9ybUVsZW1lbnQuZXJyb3JNZXNzYWdlcy5pbmRleE9mKHJlc3VsdC5lcnJvck1lc3NhZ2UpIDwgMCkge1xuICAgICAgRm9ybUVsZW1lbnQuZXJyb3JNZXNzYWdlcy5wdXNoKHJlc3VsdC5lcnJvck1lc3NhZ2UpO1xuICAgIH1cbiAgICBGb3JtRWxlbWVudC5pc1ZhbGlkID0gZmFsc2U7XG4gIH1cblxuICB2YWxpZGF0ZSgpIHtcbiAgICB0aGlzLmZvcm0uc2V0QXR0cmlidXRlKFwibm92YWxpZGF0ZVwiLCB0cnVlLnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgY29uc3QgdHlwZXMgPSBbXCJmaWxlXCIsIFwicmVzZXRcIiwgXCJzdWJtaXRcIiwgXCJidXR0b25cIl07XG5cbiAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiYmx1clwiLFxuICAgICAgKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICBpZiAodHlwZXMuaW5kZXhPZigoPEZWLkZvcm1DaGlsZEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS50eXBlKSA+IC0xKVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5jaGVja1ZhbGlkaXR5KDxGVi5FbGVtZW50PmV2ZW50LnRhcmdldCk7XG4gICAgICB9LFxuICAgICAgdHJ1ZVxuICAgICk7XG5cbiAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiaW5wdXRcIixcbiAgICAgIChldmVudDogRXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgRm9ybUVsZW1lbnQgPVxuICAgICAgICAgIHNlbGYuVmlydHVhbEZvcm1bKDxIVE1MSW5wdXRFbGVtZW50PmV2ZW50LnRhcmdldCkubmFtZV07XG4gICAgICAgIEZvcm1FbGVtZW50LnZhbHVlID0gRm9ybVZhbGlkYXRpb24uZ2V0VmFsdWUoPEZWLkVsZW1lbnQ+ZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgaWYgKEZvcm1FbGVtZW50LmlzRGlydHkpIHtcbiAgICAgICAgICB0aGlzLmNoZWNrVmFsaWRpdHkoPEZWLkVsZW1lbnQ+ZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRydWVcbiAgICApO1xuXG4gICAgLy8gZm9yIGNoZWNrYm94ZXMgdG8gZHluYW1pY2FsbHkgdmFsaWRhdGUgb24gaXRzICdjaGVja2VkJyB2YWx1ZSBjaGFuZ2VcbiAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2hhbmdlXCIsXG4gICAgICBldmVudCA9PiB7XG4gICAgICAgICg8SFRNTElucHV0RWxlbWVudD5ldmVudC50YXJnZXQpLnR5cGUgPT09IFwiY2hlY2tib3hcIiAmJlxuICAgICAgICAgIHRoaXMuY2hlY2tWYWxpZGl0eSg8RlYuRWxlbWVudD5ldmVudC50YXJnZXQpO1xuICAgICAgfSxcbiAgICAgIHRydWVcbiAgICApO1xuICB9XG5cbiAgdmFsaWRhdGVBbGwoZXZlbnQ6IEV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCByZXF1aXJlZEZpZWxkcyA9IFtdO1xuICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLlZpcnR1YWxGb3JtKSkge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLlZpcnR1YWxGb3JtW2tleV0udmFsaWRhdGlvblJ1bGVzLmxlbmd0aCA+IDAgfHxcbiAgICAgICAgdGhpcy5WaXJ0dWFsRm9ybVtrZXldLmN1c3RvbVZhbGlkYXRvcnMubGVuZ3RoID4gMFxuICAgICAgKSB7XG4gICAgICAgIHJlcXVpcmVkRmllbGRzLnB1c2godGhpcy5WaXJ0dWFsRm9ybVtrZXldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHZhbGlkRmllbGRzID0gMDtcbiAgICBsZXQgdmFsaWRGb3JtID0gZmFsc2U7XG4gICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuVmlydHVhbEZvcm0pKSB7XG4gICAgICB0aGlzLmNoZWNrVmFsaWRpdHkodGhpcy5WaXJ0dWFsRm9ybVtrZXldLmVsZW1lbnQpO1xuICAgICAgdGhpcy5WaXJ0dWFsRm9ybVtrZXldLmlzVmFsaWQgJiYgdmFsaWRGaWVsZHMrKztcbiAgICB9XG5cbiAgICBpZiAodmFsaWRGaWVsZHMgPT09IHJlcXVpcmVkRmllbGRzLmxlbmd0aCkge1xuICAgICAgdmFsaWRGb3JtID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRGb3JtO1xuICB9XG5cbiAgY3VzdG9taXplVmFsaWRhdG9ycyhjdXN0b21Db25maWc6IEZWLkN1c3RvbVZhbGlkYXRvcnMgPSBudWxsKSB7XG4gICAgY29uc3QgRm9ybUVsZW1lbnRzID0gT2JqZWN0LmtleXMoY3VzdG9tQ29uZmlnKTtcbiAgICBGb3JtRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIHRoaXMuVmlydHVhbEZvcm1bZWxlbWVudF0uY3VzdG9tVmFsaWRhdG9ycyA9IGN1c3RvbUNvbmZpZ1tlbGVtZW50XTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbW92ZVZhbGlkYXRvcnMoY3VzdG9tUmVtb3ZhbDogRlYuQ3VzdG9tVmFsaWRhdG9ycyA9IG51bGwpIHtcbiAgICBjb25zdCBlbGVtZW50c05hbWVzID0gT2JqZWN0LmtleXMoY3VzdG9tUmVtb3ZhbCk7XG5cbiAgICBlbGVtZW50c05hbWVzLmZvckVhY2goZWxlbWVudE5hbWUgPT4ge1xuICAgICAgY29uc3QgdW5uZWVkZWRWYWxpZGF0b3JzID0gY3VzdG9tUmVtb3ZhbFtlbGVtZW50TmFtZV07XG4gICAgICB1bm5lZWRlZFZhbGlkYXRvcnMuZm9yRWFjaCh2YWxpZGF0b3IgPT4ge1xuICAgICAgICBjb25zdCBGb3JtRWxlbWVudCA9IHRoaXMuVmlydHVhbEZvcm1bZWxlbWVudE5hbWVdO1xuICAgICAgICBjb25zdCBpbmRleCA9IEZvcm1FbGVtZW50LnZhbGlkYXRpb25SdWxlcy5pbmRleE9mKHZhbGlkYXRvci5uYW1lKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICBGb3JtRWxlbWVudC52YWxpZGF0aW9uUnVsZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICByZXR1cm4gRm9ybUVsZW1lbnQudmFsaWRhdGlvblJ1bGVzO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNlcmlhbGl6ZSgpIHtcbiAgICBsZXQgc2VyaWFsaXplZDogRlYuU2VyaWFsaXplZCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHRoaXMuVmlydHVhbEZvcm0pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHNlcmlhbGl6ZWRba2V5XSA9IHRoaXMuVmlydHVhbEZvcm1ba2V5XS52YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VyaWFsaXplZDtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGlzVW5pcXVlID0gZXJyb3JNZXNzYWdlID0+ICh2YWx1ZSwgZmllbGQpID0+IHtcbiAgY29uc3QgdXNlcm5hbWVzID0gW1wiQmFrc1wiLCBcIkJha3Npa1wiLCBcIkhlYlhcIl07XG4gIGZpZWxkLmVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibG9hZGVyXCIpO1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXQgaXNUYWtlbiA9IHVzZXJuYW1lcy5pbmRleE9mKHZhbHVlKSA+IC0xO1xuICAgICAgZmllbGQuZWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2FkZXJcIik7XG4gICAgICByZXNvbHZlKHtcbiAgICAgICAgaXNWYWxpZDogIWlzVGFrZW4sXG4gICAgICAgIGVycm9yTWVzc2FnZTogZXJyb3JNZXNzYWdlXG4gICAgICB9KTtcbiAgICB9LCAyMDAwKTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IEZvcm1WYWxpZGF0aW9uIGZyb20gXCIuL0Zvcm1WYWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBoYXNDYXBpdGFsTGV0dGVyLCBoYXNOdW1iZXIgfSBmcm9tIFwiLi9uZXdWYWxpZGF0b3JzXCI7XG5pbXBvcnQgeyBpc1VuaXF1ZSB9IGZyb20gXCIuL2FzeW5jXCI7XG5pbXBvcnQgXCIuLi9jc3Mvc3R5bGUuc2Nzc1wiO1xuXG5jb25zdCBjb25maWcgPSB7XG4gIGVycm9yQ2xhc3NOYW1lOiBcImludmFsaWRcIlxufTtcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbG9naW5cIik7XG5cbmNvbnN0IGZvcm1WYWxpZGF0aW9uID0gbmV3IEZvcm1WYWxpZGF0aW9uKGZvcm0sIGNvbmZpZyk7XG5cbmZvcm1WYWxpZGF0aW9uLmN1c3RvbWl6ZVZhbGlkYXRvcnMoe1xuICBuYW1lOiBbXG4gICAgZm9ybVZhbGlkYXRpb24udmFsaWRhdG9ycy5pc1JlcXVpcmVkKCksXG4gICAgZm9ybVZhbGlkYXRpb24udmFsaWRhdG9ycy5pc0xvbmdlclRoYW4oMilcbiAgXSxcbiAgbWVzc2FnZTogW1xuICAgIGhhc0NhcGl0YWxMZXR0ZXIoXCJUaGlzIHZhbHVlIGhhcyB0byBjb250YWluIGF0IGxlYXN0IG9uZSBjYXBpdGFsIGxldHRlci4gXCIpLFxuICAgIGhhc051bWJlcihcIlRoaXMgdmFsdWUgaGFzIHRvIGNvbnRhaW4gYXQgbGVhc3Qgb25lIG51bWJlci4gXCIpLFxuICAgIGZvcm1WYWxpZGF0aW9uLnZhbGlkYXRvcnMuaXNMb25nZXJUaGFuKDMsIFwiTWluLiAzIGNoYXJhY3RlcnMgcmVxdWlyZWQuIFwiKVxuICBdLFxuICB1c2VybmFtZTogW2lzVW5pcXVlKFwiVGhpcyB1c2VybmFtZSBpcyBhbHJlYWR5IHRha2VuLiBcIildXG59KTtcblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsICgpID0+IHtcbiAgY29uc3Qgc3RhdHVzID0gZm9ybVZhbGlkYXRpb24udmFsaWRhdGVBbGwoZXZlbnQpO1xuICBjb25zdCBzZXJpYWxpemVkRm9ybSA9IGZvcm1WYWxpZGF0aW9uLnNlcmlhbGl6ZSgpO1xuICBjb25zdCBmaW5hbE1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm1fX21lc3NhZ2VcIik7XG5cbiAgaWYgKHN0YXR1cykge1xuICAgIGZpbmFsTWVzc2FnZS5pbm5lckhUTUwgPSBcIkZvcm0gc3VjY2Vzc2Z1bGx5IHN1Ym1pdHRlZCFcIjtcbiAgICBmaW5hbE1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcInN1Y2Nlc3NmdWxcIik7XG4gICAgLy8gYWN0aW9uIG9uIHN1Ym1pdCBnb2VzIGhlcmVcbiAgfSBlbHNlIHtcbiAgICBmaW5hbE1lc3NhZ2UuaW5uZXJIVE1MID1cbiAgICAgIFwiUGxlYXNlIHVwZGF0ZSBpbnZhbGlkIGZpZWxkcyBhbmQgaGl0IHN1Ym1pdCBhZ2FpblwiO1xuICAgIGZpbmFsTWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKFwic3VjY2Vzc2Z1bFwiKTtcbiAgfVxuICBjb25zb2xlLmxvZyhzZXJpYWxpemVkRm9ybSk7XG59KTtcbiIsImltcG9ydCB7IEZWIH0gZnJvbSBcIi4vRm9ybVZhbGlkYXRpb24uZFwiO1xuXG5leHBvcnQgY29uc3QgaGFzQ2FwaXRhbExldHRlciA9IChcbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSBcIkl0IGhhcyB0byBjb250YWluIGEgY2FwaXRhbCBsZXR0ZXIuXCJcbikgPT4gKHZhbHVlOiBhbnkpOiBGVi5SZXN1bHQgPT4ge1xuICBjb25zdCBjYXBpdGFsTGV0dGVyUmVnZXggPSAvW0EtWl0vO1xuICByZXR1cm4ge1xuICAgIGlzVmFsaWQ6IGNhcGl0YWxMZXR0ZXJSZWdleC50ZXN0KHZhbHVlKSxcbiAgICBlcnJvck1lc3NhZ2U6IGVycm9yTWVzc2FnZVxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGhhc051bWJlciA9IChcbiAgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSBcIkl0IGhhcyB0byBjb250YWluIGEgbnVtYmVyXCJcbikgPT4gKHZhbHVlOiBhbnkpOiBGVi5SZXN1bHQgPT4ge1xuICBsZXQgaGFzTnVtYmVyID0gWy4uLnZhbHVlXS5maW5kKGxldHRlciA9PiBsZXR0ZXIudHJpbSgpICYmICFpc05hTihsZXR0ZXIpKTtcbiAgcmV0dXJuIHtcbiAgICBpc1ZhbGlkOiBoYXNOdW1iZXIgIT09IHVuZGVmaW5lZCxcbiAgICBlcnJvck1lc3NhZ2U6IGVycm9yTWVzc2FnZVxuICB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=