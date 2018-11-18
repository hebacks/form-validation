import { FV } from "../src/FormValidation.d";

export const isEmail = (
  errorMessage: string = "Please enter a valid email. "
) => (value: any): FV.Result => {
  const emailRegex = new RegExp(
    "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]{2,}$"
  );
  return {
    isValid: emailRegex.test(value),
    errorMessage: errorMessage
  };
};
