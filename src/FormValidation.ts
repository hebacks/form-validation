interface ValidatorsList {
  [key: string]: Function;
}

export interface ValidationResult {
  isValid: boolean;
  errorMessage: string;
}

interface NewValidatorsMap {
  [key: string]: Array<string>;
}

type ValidatableHTMLElement =
  | HTMLInputElement
  | HTMLSelectElement
  | HTMLTextAreaElement;

type FormChildHTMLElement = ValidatableHTMLElement | HTMLButtonElement;

interface FormElement {
  element: ValidatableHTMLElement;
  isValid: boolean;
  isDirty: boolean;
  errorMessages?: Array<string>;
  validationRules?: Array<string>;
  customValidators?: Array<Function>;
  validRules: number;
  value: any;
}

interface VirtualForm {
  [key: string]: FormElement;
}

interface SerializedForm {
  [key: string]: string | boolean;
}

interface Configuration {
  errorClassName?: string;
  successMessage?: string;
  errorMessage?: string;
  newValidators?: ValidatorsList;
  newValidatorsMap?: NewValidatorsMap;
}

interface CustomValidators {
  [key: string]: Array<Function>;
}

export default class FormValidation {
  private validators: ValidatorsList;
  private VirtualForm: VirtualForm;
  private form: HTMLElement;
  public errorMessage: string;
  private errorClassName: string;
  public successMessage: string;
  private newValidators: ValidatorsList;
  private newValidatorsMap: NewValidatorsMap;
  private initValidation: Function;

  constructor(form: HTMLElement, config: Configuration = {}) {
    this.form = form;
    this.VirtualForm = {};
    this.errorClassName = config.errorClassName || "invalid";
    this.successMessage =
      config.successMessage || "Form successfully submitted!";
    this.errorMessage =
      config.errorMessage ||
      "Please update invalid fields and hit submit again";
    this.newValidators = config.newValidators || {};
    this.newValidatorsMap = config.newValidatorsMap || {};
    this.validators = {
      isRequired: (customErrorMessage: string) => (
        value: any
      ): ValidationResult => {
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
          errorMessage: customErrorMessage || "This field is required. "
        };
      },
      isEmail: (customErrorMessage: string) => (
        value: any
      ): ValidationResult => {
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
      ): ValidationResult => {
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
      this.addNewValidators();
    };
    this.initValidation();
  }

  createVirtualForm() {
    this.form
      .querySelectorAll("[name]")
      .forEach((element: ValidatableHTMLElement) =>
        this.saveFormElement(element)
      );
    return this;
  }

  saveFormElement(element: ValidatableHTMLElement) {
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

  addNewValidators() {
    this.validators = {
      ...this.validators,
      ...this.newValidators
    };
  }

  getValidationRules(element: ValidatableHTMLElement): Array<string> {
    let validationRules: Array<string> = [];
    if (
      element.hasAttribute("required") &&
      validationRules.indexOf("isRequired") < 0
    ) {
      validationRules.push("isRequired");
    }
    if (element.dataset.validators)
      validationRules = JSON.parse(element.dataset.validators);

    if (this.newValidatorsMap.hasOwnProperty(element.name)) {
      validationRules.push(...this.newValidatorsMap[element.name]);
    }
    return validationRules;
  }

  static getValue(element: ValidatableHTMLElement): any {
    switch (element.getAttribute("type")) {
      case "checkbox":
        return (<HTMLInputElement>element).checked;
      default:
        return element.value;
    }
  }

  validateRule(
    rule: string,
    HTMLElement: ValidatableHTMLElement,
    FormElement: FormElement
  ) {
    FormElement.value = FormValidation.getValue(HTMLElement);
    const result = this.validators[rule]()(FormElement.value);

    result.isValid
      ? this.setValid(HTMLElement, FormElement, result)
      : this.setInvalid(HTMLElement, FormElement, result);

    HTMLElement.parentElement.nextElementSibling.innerHTML = FormElement.errorMessages.join(
      " "
    );
  }

  checkCustomValidators(HTMLElement: ValidatableHTMLElement) {
    const FormElement = this.VirtualForm[HTMLElement.name];
    FormElement.customValidators.forEach(validator => {
      if (validator) {
        FormElement.value = FormValidation.getValue(HTMLElement);
        const result = validator(FormElement.value);

        result.isValid
          ? this.setValid(HTMLElement, FormElement, result)
          : this.setInvalid(HTMLElement, FormElement, result);

        HTMLElement.parentElement.nextElementSibling.innerHTML = FormElement.errorMessages.join(
          " "
        );
      }
    });
  }

  checkValidity(HTMLElement: ValidatableHTMLElement) {
    const FormElement = this.VirtualForm[HTMLElement.name];

    FormElement.isDirty = true;
    this.checkCustomValidators(HTMLElement);
    FormElement.validationRules.forEach(rule => {
      this.validateRule(rule, HTMLElement, FormElement);
    });
  }

  setValid(
    HTMLElement: ValidatableHTMLElement,
    FormElement: FormElement,
    result: ValidationResult
  ) {
    HTMLElement.classList.remove(this.errorClassName);
    FormElement.errorMessages = FormElement.errorMessages.filter(
      message => message !== result.errorMessage
    );
    FormElement.isValid = true;
  }

  setInvalid(
    HTMLElement: ValidatableHTMLElement,
    FormElement: FormElement,
    result: ValidationResult
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
        if (types.indexOf((<FormChildHTMLElement>event.target).type) > -1)
          return;
        this.checkValidity(<ValidatableHTMLElement>event.target);
      },
      true
    );

    this.form.addEventListener(
      "input",
      (event: Event) => {
        if (self.VirtualForm[(<HTMLInputElement>event.target).name].isDirty) {
          this.checkValidity(<ValidatableHTMLElement>event.target);
        }
      },
      true
    );

    // for checkboxes to dynamically validate on its 'checked' value change
    this.form.addEventListener(
      "change",
      event => {
        (<HTMLInputElement>event.target).type === "checkbox" &&
          this.checkValidity(<ValidatableHTMLElement>event.target);
      },
      true
    );
  }

  validateAll(event: Event) {
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
      finalMessage.innerHTML = this.successMessage;
      finalMessage.classList.add("successful");
    } else {
      finalMessage.innerHTML = this.errorMessages.final;
      finalMessage.classList.remove("successful");
    }

    return validForm;
  }

  customizeValidators(customConfig: CustomValidators = null) {
    const FormElements = Object.keys(customConfig);
    FormElements.forEach(element => {
      this.VirtualForm[element].customValidators = customConfig[element];
    });
    return this;
  }

  removeValidators(customRemoval: CustomValidators = null) {
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
    let serialized: SerializedForm = {};
    Object.keys(this.VirtualForm).forEach(key => {
      serialized[key] = this.VirtualForm[key].value;
    });
    return serialized;
  }
}
