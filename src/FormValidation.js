export default class FormValidation {
  constructor(form) {
    this.form = form;
    this.VirtualForm = {};
    this.validators = {
      isRequired: () => {
        return value => {
          let isValid;
          switch (typeof value) {
            case "boolean":
              isValid = value === true;
              break;
            default:
              isValid = value !== "";
          }
          return {
            isValid: isValid,
            errorMessage: "This field is required. "
          };
        };
      },
      isEmail: () => {
        return value => {
          const emailRegex = new RegExp(
            "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]{2,}$"
          );
          return {
            isValid: emailRegex.test(value),
            errorMessage: "Please provide a valid email. "
          };
        };
      },
      isLongerThan: minLength => {
        return value => {
          return {
            isValid: value.length >= minLength,
            errorMessage: `This value has to be at least ${minLength} characters long. `
          };
        };
      }
    };
    this.initValidation = function() {
      this.createVirtualForm().validate();
    };
    this.initValidation();
  }

  createVirtualForm() {
    this.form
      .querySelectorAll("[name]")
      .forEach(element => this.saveFormElement(element));
    console.log(this.VirtualForm);
    return this;
  }

  saveFormElement(element) {
    this.VirtualForm[element.name] = {
      element: element,
      isValid: false,
      isDirty: false,
      errorMessages: [],
      validationRules: this.getValidationRules(element),
      customValidators: [],
      value: element.value
    };
  }

  getValidationRules(element) {
    let validationRules = [];
    if (element.dataset.validators)
      validationRules = JSON.parse(element.dataset.validators);
    if (
      element.hasAttribute("required") &&
      validationRules.indexOf("isRequired") < 0
    ) {
      validationRules.push("isRequired");
    }
    return validationRules;
  }

  getValue(element) {
    switch (element.getAttribute("type")) {
      case "checkbox":
        return element.checked;
      default:
        return element.value;
    }
  }

  validateRule(rule, HTMLElement, FormElement) {
    FormElement.value = this.getValue(HTMLElement);
    const result = this.validators[rule]()(FormElement.value);

    result.isValid
      ? this.setValid(HTMLElement, FormElement)
      : this.setInvalid(HTMLElement, FormElement, result);

    HTMLElement.parentElement.nextElementSibling.innerHTML = FormElement.errorMessages.join(
      " "
    );
  }

  checkCustomValidators(HTMLElement) {
    const FormElement = this.VirtualForm[HTMLElement.name];
    FormElement.customValidators.forEach(validator => {
      if (validator) {
        FormElement.value = this.getValue(HTMLElement);
        const result = validator(FormElement.value);

        result.isValid
          ? this.setValid(HTMLElement, FormElement)
          : this.setInvalid(HTMLElement, FormElement, result);

        HTMLElement.parentElement.nextElementSibling.innerHTML = FormElement.errorMessages.join(
          " "
        );
      }
    });
  }

  checkValidity(HTMLElement) {
    const FormElement = this.VirtualForm[HTMLElement.name];
    FormElement.isDirty = true;
    FormElement.validationRules.forEach(rule => {
      this.validateRule(rule, HTMLElement, FormElement);
    });
    this.checkCustomValidators(HTMLElement);
  }

  setValid(HTMLElement, FormElement) {
    HTMLElement.classList.remove("invalid");
    FormElement.errorMessages = [];
    FormElement.isValid = true;
  }

  setInvalid(HTMLElement, FormElement, result) {
    HTMLElement.classList.add("invalid");
    if (FormElement.errorMessages.indexOf(result.errorMessage) < 0) {
      FormElement.errorMessages = FormElement.errorMessages.concat(
        result.errorMessage
      );
    }
    FormElement.isValid = false;
  }

  validate() {
    this.form.setAttribute("novalidate", true);
    const self = this;

    const types = ["file", "reset", "submit", "button"];

    this.form.addEventListener(
      "blur",
      event => {
        if (types.indexOf(event.target.type) > -1) return;
        this.checkValidity(event.target);
      },
      true
    );

    this.form.addEventListener(
      "input",
      event => {
        if (self.VirtualForm[event.target.name].isDirty) {
          this.checkValidity(event.target);
        }
      },
      true
    );

    // for checkboxes to dynamically validate on its 'checked' value change
    this.form.addEventListener(
      "change",
      event => {
        event.target.type === "checkbox" && this.checkValidity(event.target);
      },
      true
    );
  }

  validateAll(event) {
    event.preventDefault();
    const finalMessage = document.querySelector(".form__message");
    const requiredFields = Object.keys(this.VirtualForm).length - 1;
    let validFields = 0;
    let validForm = false;
    for (let key of Object.keys(this.VirtualForm)) {
      this.checkValidity(this.VirtualForm[key].element);
      this.VirtualForm[key].isValid && validFields++;
    }

    if (validFields === requiredFields) {
      validForm = true;
      finalMessage.innerHTML = "Form successfully submitted!";
      finalMessage.classList.add("successful");
    } else {
      finalMessage.innerHTML = "Almost there! Please update invalid fields!";
      finalMessage.classList.remove("successful");
    }

    return validForm;
  }

  setCustomValidators(customConfig = null) {
    const FormElements = Object.keys(customConfig);
    FormElements.forEach(element => {
      this.VirtualForm[element].customValidators = customConfig[element];
    });
    return this;
  }

  removeValidators(customRemoval = null) {
    const elementsNames = Object.keys(customRemoval);

    elementsNames.forEach(elementName => {
      const unneededValidators = customRemoval[elementName];
      unneededValidators.forEach(validator => {
        const FormElement = this.VirtualForm[elementName];
        const index = FormElement.validationRules.indexOf(validator.name);
        if (index > -1) {
          FormElement.validationRules.splice(index, 1);
          return FormElement.validationRules;
        }
      });
    });
    return this;
  }

  serialize() {
    let serialized = {};
    Object.keys(this.VirtualForm).forEach(key => {
      serialized[key] = this.VirtualForm[key].value;
    });
    return serialized;
  }
}
