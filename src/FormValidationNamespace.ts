declare namespace FormValidation {
  export interface Validators {
    [key: string]: Function;
  }

  export interface Result {
    isValid: boolean;
    errorMessage: string;
  }

  export type Element =
    | HTMLInputElement
    | HTMLSelectElement
    | HTMLTextAreaElement;

  export type FormChildElement = Element | HTMLButtonElement;

  export interface Field {
    element: Element;
    isValid: boolean;
    isDirty: boolean;
    errorMessages?: Array<string>;
    validationRules?: Array<string>;
    customValidators?: Array<Function>;
    validRules: number;
    value: any;
  }

  export interface VirtualForm {
    [key: string]: Field;
  }

  export interface Serialized {
    [key: string]: string | boolean;
  }

  export interface Configuration {
    errorClassName?: string;
    successMessage?: string;
    errorMessage?: string;
  }

  export interface CustomValidators {
    [key: string]: Array<Function>;
  }
}
