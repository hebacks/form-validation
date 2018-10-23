interface ValidationResut {
  isValid: boolean;
  errorMessage: string;
}

export const hasCapitalLetter = (errorMessage: string) => (
  value: any
): ValidationResut => {
  const capitalLetterRegex = /[A-Z]/;
  return {
    isValid: capitalLetterRegex.test(value),
    errorMessage: errorMessage
  };
};

export const hasNumber = (errorMessage: string) => (
  value: any
): ValidationResut => {
  let hasNumber = [...value].find(letter => letter.trim() && !isNaN(letter));
  return {
    isValid: hasNumber !== undefined,
    errorMessage: errorMessage
  };
};
