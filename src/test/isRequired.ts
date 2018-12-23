import { FV } from "../FormValidation.d";

export const isRequired = (
  errorMessage: string = "This field is required. "
) => (value: any): FV.Result => {
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
};
