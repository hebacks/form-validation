import { FV } from "./FormValidation.d";

export default class FormValidation {
  private validators: FV.Validators;
  private VirtualForm: FV.VirtualForm;
  private form: HTMLElement;
  private errorClassName: string;
  private initValidation: Function;

  constructor(form: HTMLElement, config: FV.Configuration = {}) {
    this.form = form;
    this.VirtualForm = {};
    this.errorClassName = config.errorClassName || "invalid";
    this.validators = {
      isRequired: (errorMessage: string = "This field is required. ") => (
        value: any
      ): FV.Result => {
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
          errorMessage
        };
      },
      isEmail: (customErrorMessage: string) => (value: any): FV.Result => {
        const emailRegex = new RegExp(
          "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]{2,}$"
        );
        return {
          isValid: emailRegex.test(value),
          errorMessage: customErrorMessage || "Please enter a valid email. "
        };
      },
      isLongerThan: (minLength: number, error: string = null) => (
        value: any
      ): FV.Result => {
        return {
          isValid: value.length >= minLength,
          errorMessage:
            error ||
            `This value has to be at least ${minLength} characters long. `
        };
      }
    };
    this.initValidation = function(): void {
      this.createVirtualForm().validate();
    };
    this.initValidation();
  }

  createVirtualForm() {
    this.form
      .querySelectorAll("[name]")
      .forEach((element: FV.Element) => this.saveFormElement(element));
    return this;
  }

  saveFormElement(element: FV.Element) {
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
  }

  getValidationRules(element: FV.Element): Array<string> {
    let validationRules: Array<string> = [];
    if (
      element.hasAttribute("required") &&
      validationRules.indexOf("isRequired") < 0
    ) {
      validationRules.push("isRequired");
    }
    if (element.dataset.validators)
      validationRules = JSON.parse(element.dataset.validators);
    return validationRules;
  }

  static getValue(element: FV.Element): any {
    switch (element.getAttribute("type")) {
      case "checkbox":
        return (<HTMLInputElement>element).checked;
      default:
        return element.value;
    }
  }

  validateRule(rule: string, HTMLElement: FV.Element, FormElement: FV.Field) {
    FormElement.value = FormValidation.getValue(HTMLElement);
    const result = this.validators[rule]()(FormElement.value);

    result.isValid
      ? this.setValid(HTMLElement, FormElement, result)
      : this.setInvalid(HTMLElement, FormElement, result);

    HTMLElement.parentElement.nextElementSibling.innerHTML = FormElement.errorMessages.join(
      " "
    );
  }

  checkCustomValidators(HTMLElement: FV.Element) {
    const FormElement = this.VirtualForm[HTMLElement.name];
    FormElement.customValidators.forEach(async validator => {
      if (validator) {
        FormElement.value = FormValidation.getValue(HTMLElement);
        const result = await validator(FormElement.value, FormElement);

        result.isValid
          ? this.setValid(HTMLElement, FormElement, result)
          : this.setInvalid(HTMLElement, FormElement, result);

        HTMLElement.parentElement.nextElementSibling.innerHTML = FormElement.errorMessages.join(
          " "
        );
      }
    });
  }

  checkValidity(HTMLElement: FV.Element) {
    const FormElement = this.VirtualForm[HTMLElement.name];

    FormElement.isDirty = true;
    this.checkCustomValidators(HTMLElement);
    FormElement.validationRules.forEach(rule => {
      this.validateRule(rule, HTMLElement, FormElement);
    });
  }

  setValid(HTMLElement: FV.Element, FormElement: FV.Field, result: FV.Result) {
    HTMLElement.classList.remove(this.errorClassName);
    FormElement.errorMessages = FormElement.errorMessages.filter(
      message => message !== result.errorMessage
    );
    FormElement.isValid = true;
  }

  setInvalid(
    HTMLElement: FV.Element,
    FormElement: FV.Field,
    result: FV.Result
  ) {
    HTMLElement.classList.add(this.errorClassName);
    if (FormElement.errorMessages.indexOf(result.errorMessage) < 0) {
      FormElement.errorMessages.push(result.errorMessage);
    }
    FormElement.isValid = false;
  }

  validate() {
    this.form.setAttribute("novalidate", true.toString());
    const self = this;

    const types = ["file", "reset", "submit", "button"];

    this.form.addEventListener(
      "blur",
      (event: Event) => {
        if (types.indexOf((<FV.FormChildElement>event.target).type) > -1)
          return;
        this.checkValidity(<FV.Element>event.target);
      },
      true
    );

    this.form.addEventListener(
      "input",
      (event: Event) => {
        const FormElement =
          self.VirtualForm[(<HTMLInputElement>event.target).name];
        FormElement.value = FormValidation.getValue(<FV.Element>event.target);
        if (FormElement.isDirty) {
          this.checkValidity(<FV.Element>event.target);
        }
      },
      true
    );

    // for checkboxes to dynamically validate on its 'checked' value change
    this.form.addEventListener(
      "change",
      event => {
        (<HTMLInputElement>event.target).type === "checkbox" &&
          this.checkValidity(<FV.Element>event.target);
      },
      true
    );
  }

  validateAll(event: Event) {
    event.preventDefault();

    let requiredFields = [];
    for (let key of Object.keys(this.VirtualForm)) {
      if (
        this.VirtualForm[key].validationRules.length > 0 ||
        this.VirtualForm[key].customValidators.length > 0
      ) {
        requiredFields.push(this.VirtualForm[key]);
      }
    }
    let validFields = 0;
    let validForm = false;
    for (let key of Object.keys(this.VirtualForm)) {
      this.checkValidity(this.VirtualForm[key].element);
      this.VirtualForm[key].isValid && validFields++;
    }

    if (validFields === requiredFields.length) {
      validForm = true;
    }

    return validForm;
  }

  customizeValidators(customConfig: FV.CustomValidators = null) {
    const FormElements = Object.keys(customConfig);
    FormElements.forEach(element => {
      this.VirtualForm[element].customValidators = customConfig[element];
    });
    return this;
  }

  removeValidators(customRemoval: FV.CustomValidators = null) {
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
    let serialized: FV.Serialized = {};
    Object.keys(this.VirtualForm).forEach(key => {
      serialized[key] = this.VirtualForm[key].value;
    });
    return serialized;
  }
}
