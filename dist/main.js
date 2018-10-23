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
        this.successMessage =
            config.successMessage || "Form successfully submitted!";
        this.errorMessage =
            config.errorMessage ||
                "Please update invalid fields and hit submit again";
        this.validators = {
            isRequired: function (customErrorMessage) { return function (value) {
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
                    errorMessage: customErrorMessage || "This field is required. "
                };
            }; },
            isEmail: function (customErrorMessage) { return function (value) {
                var emailRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]{2,}$");
                return {
                    isValid: emailRegex.test(value),
                    errorMessage: customErrorMessage || "Please enter a valid email. "
                };
            }; },
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
            .forEach(function (element) {
            return _this.saveFormElement(element);
        });
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
                        console.log(validator(FormElement.value));
                        return [4 /*yield*/, validator(FormElement.value)];
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
            if (types.indexOf(event.target.type) >
                -1)
                return;
            _this.checkValidity(event.target);
        }, true);
        this.form.addEventListener("input", function (event) {
            var FormElement = self.VirtualForm[event.target.name];
            FormElement.value = FormValidation.getValue((event.target));
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
const isUnique = errorMessage => value => {
  const usernames = ["Baks", "Baksik", "HebX"];
  return new Promise(resolve => {
    setTimeout(() => {
      let isTaken = usernames.indexOf(value) > -1;
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
  errorClassName: "invalid",
  successMessage: "Form successfully submitted!",
  errorMessage: "Please update invalid fields and hit submit again"
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
    finalMessage.innerHTML = formValidation.successMessage;
    finalMessage.classList.add("successful");
    // action on submit goes here
  } else {
    finalMessage.innerHTML = formValidation.errorMessage;
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
var hasCapitalLetter = function (errorMessage) { return function (value) {
    var capitalLetterRegex = /[A-Z]/;
    return {
        isValid: capitalLetterRegex.test(value),
        errorMessage: errorMessage
    };
}; };
var hasNumber = function (errorMessage) { return function (value) {
    var hasNumber = __spread(value).find(function (letter) { return letter.trim() && !isNaN(letter); });
    return {
        isValid: hasNumber !== undefined,
        errorMessage: errorMessage
    };
}; };


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zvcm1WYWxpZGF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9hc3luYy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ld1ZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLHlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7SUFTRSx3QkFBWSxJQUFpQixFQUFFLE1BQXlDO1FBQXpDLG9DQUF5QztRQUN0RSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsV0FBVyxHQUFH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dURBQWM7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdUVBQWdCO0FBQ3BCLElBQUksZ0VBQVM7QUFDYjtBQUNBO0FBQ0EsYUFBYSx1REFBUTtBQUNyQixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNNLElBQU0sZ0JBQWdCLEdBQUcsVUFBQyxZQUFvQixJQUFLLGlCQUN4RCxLQUFVO0lBRVYsSUFBTSxrQkFBa0IsR0FBRyxPQUFPLENBQUM7SUFDbkMsT0FBTztRQUNMLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3ZDLFlBQVksRUFBRSxZQUFZO0tBQzNCLENBQUM7QUFDSixDQUFDLEVBUnlELENBUXpELENBQUM7QUFFSyxJQUFNLFNBQVMsR0FBRyxVQUFDLFlBQW9CLElBQUssaUJBQ2pELEtBQVU7SUFFVixJQUFJLFNBQVMsR0FBRyxTQUFJLEtBQUssRUFBRSxJQUFJLENBQUMsZ0JBQU0sSUFBSSxhQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FBQztJQUMzRSxPQUFPO1FBQ0wsT0FBTyxFQUFFLFNBQVMsS0FBSyxTQUFTO1FBQ2hDLFlBQVksRUFBRSxZQUFZO0tBQzNCLENBQUM7QUFDSixDQUFDLEVBUmtELENBUWxELENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3RcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm1WYWxpZGF0aW9uIHtcbiAgcHJpdmF0ZSB2YWxpZGF0b3JzOiBGb3JtVmFsaWRhdGlvbi5WYWxpZGF0b3JzO1xuICBwcml2YXRlIFZpcnR1YWxGb3JtOiBGb3JtVmFsaWRhdGlvbi5WaXJ0dWFsRm9ybTtcbiAgcHJpdmF0ZSBmb3JtOiBIVE1MRWxlbWVudDtcbiAgcHVibGljIGVycm9yTWVzc2FnZTogc3RyaW5nO1xuICBwcml2YXRlIGVycm9yQ2xhc3NOYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyBzdWNjZXNzTWVzc2FnZTogc3RyaW5nO1xuICBwcml2YXRlIGluaXRWYWxpZGF0aW9uOiBGdW5jdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihmb3JtOiBIVE1MRWxlbWVudCwgY29uZmlnOiBGb3JtVmFsaWRhdGlvbi5Db25maWd1cmF0aW9uID0ge30pIHtcbiAgICB0aGlzLmZvcm0gPSBmb3JtO1xuICAgIHRoaXMuVmlydHVhbEZvcm0gPSB7fTtcbiAgICB0aGlzLmVycm9yQ2xhc3NOYW1lID0gY29uZmlnLmVycm9yQ2xhc3NOYW1lIHx8IFwiaW52YWxpZFwiO1xuICAgIHRoaXMuc3VjY2Vzc01lc3NhZ2UgPVxuICAgICAgY29uZmlnLnN1Y2Nlc3NNZXNzYWdlIHx8IFwiRm9ybSBzdWNjZXNzZnVsbHkgc3VibWl0dGVkIVwiO1xuICAgIHRoaXMuZXJyb3JNZXNzYWdlID1cbiAgICAgIGNvbmZpZy5lcnJvck1lc3NhZ2UgfHxcbiAgICAgIFwiUGxlYXNlIHVwZGF0ZSBpbnZhbGlkIGZpZWxkcyBhbmQgaGl0IHN1Ym1pdCBhZ2FpblwiO1xuICAgIHRoaXMudmFsaWRhdG9ycyA9IHtcbiAgICAgIGlzUmVxdWlyZWQ6IChjdXN0b21FcnJvck1lc3NhZ2U6IHN0cmluZykgPT4gKFxuICAgICAgICB2YWx1ZTogYW55XG4gICAgICApOiBGb3JtVmFsaWRhdGlvbi5SZXN1bHQgPT4ge1xuICAgICAgICBsZXQgaXNWYWxpZDtcbiAgICAgICAgc3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcbiAgICAgICAgICBjYXNlIFwiYm9vbGVhblwiOlxuICAgICAgICAgICAgaXNWYWxpZCA9IHZhbHVlID09PSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGlzVmFsaWQgPSB2YWx1ZSAhPT0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlzVmFsaWQ6IGlzVmFsaWQsXG4gICAgICAgICAgZXJyb3JNZXNzYWdlOiBjdXN0b21FcnJvck1lc3NhZ2UgfHwgXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkLiBcIlxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGlzRW1haWw6IChjdXN0b21FcnJvck1lc3NhZ2U6IHN0cmluZykgPT4gKFxuICAgICAgICB2YWx1ZTogYW55XG4gICAgICApOiBGb3JtVmFsaWRhdGlvbi5SZXN1bHQgPT4ge1xuICAgICAgICBjb25zdCBlbWFpbFJlZ2V4ID0gbmV3IFJlZ0V4cChcbiAgICAgICAgICBcIl5bYS16QS1aMC05Xy4rLV0rQFthLXpBLVowLTktXStcXFxcLlthLXpBLVowLTktLl17Mix9JFwiXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaXNWYWxpZDogZW1haWxSZWdleC50ZXN0KHZhbHVlKSxcbiAgICAgICAgICBlcnJvck1lc3NhZ2U6IGN1c3RvbUVycm9yTWVzc2FnZSB8fCBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsLiBcIlxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGlzTG9uZ2VyVGhhbjogKG1pbkxlbmd0aDogbnVtYmVyLCBlcnJvcjogc3RyaW5nID0gbnVsbCkgPT4gKFxuICAgICAgICB2YWx1ZTogYW55XG4gICAgICApOiBGb3JtVmFsaWRhdGlvbi5SZXN1bHQgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGlzVmFsaWQ6IHZhbHVlLmxlbmd0aCA+PSBtaW5MZW5ndGgsXG4gICAgICAgICAgZXJyb3JNZXNzYWdlOlxuICAgICAgICAgICAgZXJyb3IgfHxcbiAgICAgICAgICAgIGBUaGlzIHZhbHVlIGhhcyB0byBiZSBhdCBsZWFzdCAke21pbkxlbmd0aH0gY2hhcmFjdGVycyBsb25nLiBgXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLmluaXRWYWxpZGF0aW9uID0gZnVuY3Rpb24oKTogdm9pZCB7XG4gICAgICB0aGlzLmNyZWF0ZVZpcnR1YWxGb3JtKCkudmFsaWRhdGUoKTtcbiAgICB9O1xuICAgIHRoaXMuaW5pdFZhbGlkYXRpb24oKTtcbiAgfVxuXG4gIGNyZWF0ZVZpcnR1YWxGb3JtKCkge1xuICAgIHRoaXMuZm9ybVxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmFtZV1cIilcbiAgICAgIC5mb3JFYWNoKChlbGVtZW50OiBGb3JtVmFsaWRhdGlvbi5FbGVtZW50KSA9PlxuICAgICAgICB0aGlzLnNhdmVGb3JtRWxlbWVudChlbGVtZW50KVxuICAgICAgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNhdmVGb3JtRWxlbWVudChlbGVtZW50OiBGb3JtVmFsaWRhdGlvbi5FbGVtZW50KSB7XG4gICAgdGhpcy5WaXJ0dWFsRm9ybVtlbGVtZW50Lm5hbWVdID0ge1xuICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgIGlzVmFsaWQ6IGZhbHNlLFxuICAgICAgaXNEaXJ0eTogZmFsc2UsXG4gICAgICBlcnJvck1lc3NhZ2VzOiBbXSxcbiAgICAgIHZhbGlkYXRpb25SdWxlczogdGhpcy5nZXRWYWxpZGF0aW9uUnVsZXMoZWxlbWVudCksXG4gICAgICBjdXN0b21WYWxpZGF0b3JzOiBbXSxcbiAgICAgIHZhbGlkUnVsZXM6IDAsXG4gICAgICB2YWx1ZTogZWxlbWVudC52YWx1ZVxuICAgIH07XG4gIH1cblxuICBnZXRWYWxpZGF0aW9uUnVsZXMoZWxlbWVudDogRm9ybVZhbGlkYXRpb24uRWxlbWVudCk6IEFycmF5PHN0cmluZz4ge1xuICAgIGxldCB2YWxpZGF0aW9uUnVsZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICBpZiAoXG4gICAgICBlbGVtZW50Lmhhc0F0dHJpYnV0ZShcInJlcXVpcmVkXCIpICYmXG4gICAgICB2YWxpZGF0aW9uUnVsZXMuaW5kZXhPZihcImlzUmVxdWlyZWRcIikgPCAwXG4gICAgKSB7XG4gICAgICB2YWxpZGF0aW9uUnVsZXMucHVzaChcImlzUmVxdWlyZWRcIik7XG4gICAgfVxuICAgIGlmIChlbGVtZW50LmRhdGFzZXQudmFsaWRhdG9ycylcbiAgICAgIHZhbGlkYXRpb25SdWxlcyA9IEpTT04ucGFyc2UoZWxlbWVudC5kYXRhc2V0LnZhbGlkYXRvcnMpO1xuICAgIHJldHVybiB2YWxpZGF0aW9uUnVsZXM7XG4gIH1cblxuICBzdGF0aWMgZ2V0VmFsdWUoZWxlbWVudDogRm9ybVZhbGlkYXRpb24uRWxlbWVudCk6IGFueSB7XG4gICAgc3dpdGNoIChlbGVtZW50LmdldEF0dHJpYnV0ZShcInR5cGVcIikpIHtcbiAgICAgIGNhc2UgXCJjaGVja2JveFwiOlxuICAgICAgICByZXR1cm4gKDxIVE1MSW5wdXRFbGVtZW50PmVsZW1lbnQpLmNoZWNrZWQ7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZWxlbWVudC52YWx1ZTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZVJ1bGUoXG4gICAgcnVsZTogc3RyaW5nLFxuICAgIEhUTUxFbGVtZW50OiBGb3JtVmFsaWRhdGlvbi5FbGVtZW50LFxuICAgIEZvcm1FbGVtZW50OiBGb3JtVmFsaWRhdGlvbi5GaWVsZFxuICApIHtcbiAgICBGb3JtRWxlbWVudC52YWx1ZSA9IEZvcm1WYWxpZGF0aW9uLmdldFZhbHVlKEhUTUxFbGVtZW50KTtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLnZhbGlkYXRvcnNbcnVsZV0oKShGb3JtRWxlbWVudC52YWx1ZSk7XG5cbiAgICByZXN1bHQuaXNWYWxpZFxuICAgICAgPyB0aGlzLnNldFZhbGlkKEhUTUxFbGVtZW50LCBGb3JtRWxlbWVudCwgcmVzdWx0KVxuICAgICAgOiB0aGlzLnNldEludmFsaWQoSFRNTEVsZW1lbnQsIEZvcm1FbGVtZW50LCByZXN1bHQpO1xuXG4gICAgSFRNTEVsZW1lbnQucGFyZW50RWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MID0gRm9ybUVsZW1lbnQuZXJyb3JNZXNzYWdlcy5qb2luKFxuICAgICAgXCIgXCJcbiAgICApO1xuICB9XG5cbiAgY2hlY2tDdXN0b21WYWxpZGF0b3JzKEhUTUxFbGVtZW50OiBGb3JtVmFsaWRhdGlvbi5FbGVtZW50KSB7XG4gICAgY29uc3QgRm9ybUVsZW1lbnQgPSB0aGlzLlZpcnR1YWxGb3JtW0hUTUxFbGVtZW50Lm5hbWVdO1xuICAgIEZvcm1FbGVtZW50LmN1c3RvbVZhbGlkYXRvcnMuZm9yRWFjaChhc3luYyB2YWxpZGF0b3IgPT4ge1xuICAgICAgaWYgKHZhbGlkYXRvcikge1xuICAgICAgICBGb3JtRWxlbWVudC52YWx1ZSA9IEZvcm1WYWxpZGF0aW9uLmdldFZhbHVlKEhUTUxFbGVtZW50KTtcbiAgICAgICAgY29uc29sZS5sb2codmFsaWRhdG9yKEZvcm1FbGVtZW50LnZhbHVlKSk7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHZhbGlkYXRvcihGb3JtRWxlbWVudC52YWx1ZSk7XG5cbiAgICAgICAgcmVzdWx0LmlzVmFsaWRcbiAgICAgICAgICA/IHRoaXMuc2V0VmFsaWQoSFRNTEVsZW1lbnQsIEZvcm1FbGVtZW50LCByZXN1bHQpXG4gICAgICAgICAgOiB0aGlzLnNldEludmFsaWQoSFRNTEVsZW1lbnQsIEZvcm1FbGVtZW50LCByZXN1bHQpO1xuXG4gICAgICAgIEhUTUxFbGVtZW50LnBhcmVudEVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nLmlubmVySFRNTCA9IEZvcm1FbGVtZW50LmVycm9yTWVzc2FnZXMuam9pbihcbiAgICAgICAgICBcIiBcIlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2hlY2tWYWxpZGl0eShIVE1MRWxlbWVudDogRm9ybVZhbGlkYXRpb24uRWxlbWVudCkge1xuICAgIGNvbnN0IEZvcm1FbGVtZW50ID0gdGhpcy5WaXJ0dWFsRm9ybVtIVE1MRWxlbWVudC5uYW1lXTtcblxuICAgIEZvcm1FbGVtZW50LmlzRGlydHkgPSB0cnVlO1xuICAgIHRoaXMuY2hlY2tDdXN0b21WYWxpZGF0b3JzKEhUTUxFbGVtZW50KTtcbiAgICBGb3JtRWxlbWVudC52YWxpZGF0aW9uUnVsZXMuZm9yRWFjaChydWxlID0+IHtcbiAgICAgIHRoaXMudmFsaWRhdGVSdWxlKHJ1bGUsIEhUTUxFbGVtZW50LCBGb3JtRWxlbWVudCk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRWYWxpZChcbiAgICBIVE1MRWxlbWVudDogRm9ybVZhbGlkYXRpb24uRWxlbWVudCxcbiAgICBGb3JtRWxlbWVudDogRm9ybVZhbGlkYXRpb24uRmllbGQsXG4gICAgcmVzdWx0OiBGb3JtVmFsaWRhdGlvbi5SZXN1bHRcbiAgKSB7XG4gICAgSFRNTEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmVycm9yQ2xhc3NOYW1lKTtcbiAgICBGb3JtRWxlbWVudC5lcnJvck1lc3NhZ2VzID0gRm9ybUVsZW1lbnQuZXJyb3JNZXNzYWdlcy5maWx0ZXIoXG4gICAgICBtZXNzYWdlID0+IG1lc3NhZ2UgIT09IHJlc3VsdC5lcnJvck1lc3NhZ2VcbiAgICApO1xuICAgIEZvcm1FbGVtZW50LmlzVmFsaWQgPSB0cnVlO1xuICB9XG5cbiAgc2V0SW52YWxpZChcbiAgICBIVE1MRWxlbWVudDogRm9ybVZhbGlkYXRpb24uRWxlbWVudCxcbiAgICBGb3JtRWxlbWVudDogRm9ybVZhbGlkYXRpb24uRmllbGQsXG4gICAgcmVzdWx0OiBGb3JtVmFsaWRhdGlvbi5SZXN1bHRcbiAgKSB7XG4gICAgSFRNTEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmVycm9yQ2xhc3NOYW1lKTtcbiAgICBpZiAoRm9ybUVsZW1lbnQuZXJyb3JNZXNzYWdlcy5pbmRleE9mKHJlc3VsdC5lcnJvck1lc3NhZ2UpIDwgMCkge1xuICAgICAgRm9ybUVsZW1lbnQuZXJyb3JNZXNzYWdlcy5wdXNoKHJlc3VsdC5lcnJvck1lc3NhZ2UpO1xuICAgIH1cbiAgICBGb3JtRWxlbWVudC5pc1ZhbGlkID0gZmFsc2U7XG4gIH1cblxuICB2YWxpZGF0ZSgpIHtcbiAgICB0aGlzLmZvcm0uc2V0QXR0cmlidXRlKFwibm92YWxpZGF0ZVwiLCB0cnVlLnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgY29uc3QgdHlwZXMgPSBbXCJmaWxlXCIsIFwicmVzZXRcIiwgXCJzdWJtaXRcIiwgXCJidXR0b25cIl07XG5cbiAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiYmx1clwiLFxuICAgICAgKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdHlwZXMuaW5kZXhPZigoPEZvcm1WYWxpZGF0aW9uLkZvcm1DaGlsZEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KS50eXBlKSA+XG4gICAgICAgICAgLTFcbiAgICAgICAgKVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy5jaGVja1ZhbGlkaXR5KDxGb3JtVmFsaWRhdGlvbi5FbGVtZW50PmV2ZW50LnRhcmdldCk7XG4gICAgICB9LFxuICAgICAgdHJ1ZVxuICAgICk7XG5cbiAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiaW5wdXRcIixcbiAgICAgIChldmVudDogRXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgRm9ybUVsZW1lbnQgPVxuICAgICAgICAgIHNlbGYuVmlydHVhbEZvcm1bKDxIVE1MSW5wdXRFbGVtZW50PmV2ZW50LnRhcmdldCkubmFtZV07XG4gICAgICAgIEZvcm1FbGVtZW50LnZhbHVlID0gRm9ybVZhbGlkYXRpb24uZ2V0VmFsdWUoPEZvcm1WYWxpZGF0aW9uLkVsZW1lbnQ+KFxuICAgICAgICAgIGV2ZW50LnRhcmdldFxuICAgICAgICApKTtcbiAgICAgICAgaWYgKEZvcm1FbGVtZW50LmlzRGlydHkpIHtcbiAgICAgICAgICB0aGlzLmNoZWNrVmFsaWRpdHkoPEZvcm1WYWxpZGF0aW9uLkVsZW1lbnQ+ZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHRydWVcbiAgICApO1xuXG4gICAgLy8gZm9yIGNoZWNrYm94ZXMgdG8gZHluYW1pY2FsbHkgdmFsaWRhdGUgb24gaXRzICdjaGVja2VkJyB2YWx1ZSBjaGFuZ2VcbiAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2hhbmdlXCIsXG4gICAgICBldmVudCA9PiB7XG4gICAgICAgICg8SFRNTElucHV0RWxlbWVudD5ldmVudC50YXJnZXQpLnR5cGUgPT09IFwiY2hlY2tib3hcIiAmJlxuICAgICAgICAgIHRoaXMuY2hlY2tWYWxpZGl0eSg8Rm9ybVZhbGlkYXRpb24uRWxlbWVudD5ldmVudC50YXJnZXQpO1xuICAgICAgfSxcbiAgICAgIHRydWVcbiAgICApO1xuICB9XG5cbiAgdmFsaWRhdGVBbGwoZXZlbnQ6IEV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCByZXF1aXJlZEZpZWxkcyA9IFtdO1xuICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLlZpcnR1YWxGb3JtKSkge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLlZpcnR1YWxGb3JtW2tleV0udmFsaWRhdGlvblJ1bGVzLmxlbmd0aCA+IDAgfHxcbiAgICAgICAgdGhpcy5WaXJ0dWFsRm9ybVtrZXldLmN1c3RvbVZhbGlkYXRvcnMubGVuZ3RoID4gMFxuICAgICAgKSB7XG4gICAgICAgIHJlcXVpcmVkRmllbGRzLnB1c2godGhpcy5WaXJ0dWFsRm9ybVtrZXldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IHZhbGlkRmllbGRzID0gMDtcbiAgICBsZXQgdmFsaWRGb3JtID0gZmFsc2U7XG4gICAgZm9yIChsZXQga2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuVmlydHVhbEZvcm0pKSB7XG4gICAgICB0aGlzLmNoZWNrVmFsaWRpdHkodGhpcy5WaXJ0dWFsRm9ybVtrZXldLmVsZW1lbnQpO1xuICAgICAgdGhpcy5WaXJ0dWFsRm9ybVtrZXldLmlzVmFsaWQgJiYgdmFsaWRGaWVsZHMrKztcbiAgICB9XG5cbiAgICBpZiAodmFsaWRGaWVsZHMgPT09IHJlcXVpcmVkRmllbGRzLmxlbmd0aCkge1xuICAgICAgdmFsaWRGb3JtID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRGb3JtO1xuICB9XG5cbiAgY3VzdG9taXplVmFsaWRhdG9ycyhjdXN0b21Db25maWc6IEZvcm1WYWxpZGF0aW9uLkN1c3RvbVZhbGlkYXRvcnMgPSBudWxsKSB7XG4gICAgY29uc3QgRm9ybUVsZW1lbnRzID0gT2JqZWN0LmtleXMoY3VzdG9tQ29uZmlnKTtcbiAgICBGb3JtRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgIHRoaXMuVmlydHVhbEZvcm1bZWxlbWVudF0uY3VzdG9tVmFsaWRhdG9ycyA9IGN1c3RvbUNvbmZpZ1tlbGVtZW50XTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJlbW92ZVZhbGlkYXRvcnMoY3VzdG9tUmVtb3ZhbDogRm9ybVZhbGlkYXRpb24uQ3VzdG9tVmFsaWRhdG9ycyA9IG51bGwpIHtcbiAgICBjb25zdCBlbGVtZW50c05hbWVzID0gT2JqZWN0LmtleXMoY3VzdG9tUmVtb3ZhbCk7XG5cbiAgICBlbGVtZW50c05hbWVzLmZvckVhY2goZWxlbWVudE5hbWUgPT4ge1xuICAgICAgY29uc3QgdW5uZWVkZWRWYWxpZGF0b3JzID0gY3VzdG9tUmVtb3ZhbFtlbGVtZW50TmFtZV07XG4gICAgICB1bm5lZWRlZFZhbGlkYXRvcnMuZm9yRWFjaCh2YWxpZGF0b3IgPT4ge1xuICAgICAgICBjb25zdCBGb3JtRWxlbWVudCA9IHRoaXMuVmlydHVhbEZvcm1bZWxlbWVudE5hbWVdO1xuICAgICAgICBjb25zdCBpbmRleCA9IEZvcm1FbGVtZW50LnZhbGlkYXRpb25SdWxlcy5pbmRleE9mKHZhbGlkYXRvci5uYW1lKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICBGb3JtRWxlbWVudC52YWxpZGF0aW9uUnVsZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICByZXR1cm4gRm9ybUVsZW1lbnQudmFsaWRhdGlvblJ1bGVzO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNlcmlhbGl6ZSgpIHtcbiAgICBsZXQgc2VyaWFsaXplZDogRm9ybVZhbGlkYXRpb24uU2VyaWFsaXplZCA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHRoaXMuVmlydHVhbEZvcm0pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIHNlcmlhbGl6ZWRba2V5XSA9IHRoaXMuVmlydHVhbEZvcm1ba2V5XS52YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VyaWFsaXplZDtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGlzVW5pcXVlID0gZXJyb3JNZXNzYWdlID0+IHZhbHVlID0+IHtcbiAgY29uc3QgdXNlcm5hbWVzID0gW1wiQmFrc1wiLCBcIkJha3Npa1wiLCBcIkhlYlhcIl07XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCBpc1Rha2VuID0gdXNlcm5hbWVzLmluZGV4T2YodmFsdWUpID4gLTE7XG4gICAgICByZXNvbHZlKHtcbiAgICAgICAgaXNWYWxpZDogIWlzVGFrZW4sXG4gICAgICAgIGVycm9yTWVzc2FnZTogZXJyb3JNZXNzYWdlXG4gICAgICB9KTtcbiAgICB9LCAyMDAwKTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IEZvcm1WYWxpZGF0aW9uIGZyb20gXCIuL0Zvcm1WYWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBoYXNDYXBpdGFsTGV0dGVyLCBoYXNOdW1iZXIgfSBmcm9tIFwiLi9uZXdWYWxpZGF0b3JzXCI7XG5pbXBvcnQgeyBpc1VuaXF1ZSB9IGZyb20gXCIuL2FzeW5jXCI7XG5pbXBvcnQgXCIuLi9jc3Mvc3R5bGUuc2Nzc1wiO1xuXG5jb25zdCBjb25maWcgPSB7XG4gIGVycm9yQ2xhc3NOYW1lOiBcImludmFsaWRcIixcbiAgc3VjY2Vzc01lc3NhZ2U6IFwiRm9ybSBzdWNjZXNzZnVsbHkgc3VibWl0dGVkIVwiLFxuICBlcnJvck1lc3NhZ2U6IFwiUGxlYXNlIHVwZGF0ZSBpbnZhbGlkIGZpZWxkcyBhbmQgaGl0IHN1Ym1pdCBhZ2FpblwiXG59O1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsb2dpblwiKTtcblxuY29uc3QgZm9ybVZhbGlkYXRpb24gPSBuZXcgRm9ybVZhbGlkYXRpb24oZm9ybSwgY29uZmlnKTtcblxuZm9ybVZhbGlkYXRpb24uY3VzdG9taXplVmFsaWRhdG9ycyh7XG4gIG5hbWU6IFtcbiAgICBmb3JtVmFsaWRhdGlvbi52YWxpZGF0b3JzLmlzUmVxdWlyZWQoKSxcbiAgICBmb3JtVmFsaWRhdGlvbi52YWxpZGF0b3JzLmlzTG9uZ2VyVGhhbigyKVxuICBdLFxuICBtZXNzYWdlOiBbXG4gICAgaGFzQ2FwaXRhbExldHRlcihcIlRoaXMgdmFsdWUgaGFzIHRvIGNvbnRhaW4gYXQgbGVhc3Qgb25lIGNhcGl0YWwgbGV0dGVyLiBcIiksXG4gICAgaGFzTnVtYmVyKFwiVGhpcyB2YWx1ZSBoYXMgdG8gY29udGFpbiBhdCBsZWFzdCBvbmUgbnVtYmVyLiBcIiksXG4gICAgZm9ybVZhbGlkYXRpb24udmFsaWRhdG9ycy5pc0xvbmdlclRoYW4oMywgXCJNaW4uIDMgY2hhcmFjdGVycyByZXF1aXJlZC4gXCIpXG4gIF0sXG4gIHVzZXJuYW1lOiBbaXNVbmlxdWUoXCJUaGlzIHVzZXJuYW1lIGlzIGFscmVhZHkgdGFrZW4uIFwiKV1cbn0pO1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKCkgPT4ge1xuICBjb25zdCBzdGF0dXMgPSBmb3JtVmFsaWRhdGlvbi52YWxpZGF0ZUFsbChldmVudCk7XG4gIGNvbnN0IHNlcmlhbGl6ZWRGb3JtID0gZm9ybVZhbGlkYXRpb24uc2VyaWFsaXplKCk7XG4gIGNvbnN0IGZpbmFsTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybV9fbWVzc2FnZVwiKTtcblxuICBpZiAoc3RhdHVzKSB7XG4gICAgZmluYWxNZXNzYWdlLmlubmVySFRNTCA9IGZvcm1WYWxpZGF0aW9uLnN1Y2Nlc3NNZXNzYWdlO1xuICAgIGZpbmFsTWVzc2FnZS5jbGFzc0xpc3QuYWRkKFwic3VjY2Vzc2Z1bFwiKTtcbiAgICAvLyBhY3Rpb24gb24gc3VibWl0IGdvZXMgaGVyZVxuICB9IGVsc2Uge1xuICAgIGZpbmFsTWVzc2FnZS5pbm5lckhUTUwgPSBmb3JtVmFsaWRhdGlvbi5lcnJvck1lc3NhZ2U7XG4gICAgZmluYWxNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJzdWNjZXNzZnVsXCIpO1xuICB9XG4gIGNvbnNvbGUubG9nKHNlcmlhbGl6ZWRGb3JtKTtcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IGhhc0NhcGl0YWxMZXR0ZXIgPSAoZXJyb3JNZXNzYWdlOiBzdHJpbmcpID0+IChcbiAgdmFsdWU6IGFueVxuKTogRm9ybVZhbGlkYXRpb24uUmVzdWx0ID0+IHtcbiAgY29uc3QgY2FwaXRhbExldHRlclJlZ2V4ID0gL1tBLVpdLztcbiAgcmV0dXJuIHtcbiAgICBpc1ZhbGlkOiBjYXBpdGFsTGV0dGVyUmVnZXgudGVzdCh2YWx1ZSksXG4gICAgZXJyb3JNZXNzYWdlOiBlcnJvck1lc3NhZ2VcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYXNOdW1iZXIgPSAoZXJyb3JNZXNzYWdlOiBzdHJpbmcpID0+IChcbiAgdmFsdWU6IGFueVxuKTogRm9ybVZhbGlkYXRpb24uUmVzdWx0ID0+IHtcbiAgbGV0IGhhc051bWJlciA9IFsuLi52YWx1ZV0uZmluZChsZXR0ZXIgPT4gbGV0dGVyLnRyaW0oKSAmJiAhaXNOYU4obGV0dGVyKSk7XG4gIHJldHVybiB7XG4gICAgaXNWYWxpZDogaGFzTnVtYmVyICE9PSB1bmRlZmluZWQsXG4gICAgZXJyb3JNZXNzYWdlOiBlcnJvck1lc3NhZ2VcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9