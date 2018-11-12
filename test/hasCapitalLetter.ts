import { FV } from "../src/FormValidation.d";

export const hasCapitalLetter = (
  errorMessage: string = "It has to contain a capital letter."
) => (value: any): FV.Result => {
  const capitalLetterRegex = /[A-Z]/;
  return {
    isValid: capitalLetterRegex.test(value),
    errorMessage: errorMessage
  };
};
