import { FV } from "../FormValidation.d";

export const hasNumber = (
  errorMessage: string = "It has to contain a number"
) => (value: any): FV.Result => {
  let hasNumber = [...value].find(letter => letter.trim() && !isNaN(letter));
  return {
    isValid: hasNumber !== undefined,
    errorMessage: errorMessage
  };
};
