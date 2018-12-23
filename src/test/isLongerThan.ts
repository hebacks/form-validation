import { FV } from "../FormValidation.d";

export const isLongerThan = (minLength: number, error: string = null) => (
  value: any
): FV.Result => {
  return {
    isValid: value.length >= minLength,
    errorMessage:
      error || `This value has to be at least ${minLength} characters long. `
  };
};
