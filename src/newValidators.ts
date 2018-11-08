import { FV } from "./FormValidation.d";

export const hasCapitalLetter = (
  errorMessage: string = "It has to contain a capital letter."
) => (value: any): FV.Result => {
  const capitalLetterRegex = /[A-Z]/;
  return {
    isValid: capitalLetterRegex.test(value),
    errorMessage: errorMessage
  };
};

export const hasNumber = (
  errorMessage: string = "It has to contain a number"
) => (value: any): FV.Result => {
  let hasNumber = [...value].find(letter => letter.trim() && !isNaN(letter));
  return {
    isValid: hasNumber !== undefined,
    errorMessage: errorMessage
  };
};
