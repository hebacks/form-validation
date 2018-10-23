export const hasCapitalLetter = (errorMessage: string) => (
  value: any
): FormValidation.Result => {
  const capitalLetterRegex = /[A-Z]/;
  return {
    isValid: capitalLetterRegex.test(value),
    errorMessage: errorMessage
  };
};

export const hasNumber = (errorMessage: string) => (
  value: any
): FormValidation.Result => {
  let hasNumber = [...value].find(letter => letter.trim() && !isNaN(letter));
  return {
    isValid: hasNumber !== undefined,
    errorMessage: errorMessage
  };
};
