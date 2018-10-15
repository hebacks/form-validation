interface ValidationResut {
  isValid: boolean;
  errorMessage: string;
}

export const hasCapitalLetter = () => (value: any): ValidationResut => {
  const capitalLetterRegex = /[A-Z]/;
  return {
    isValid: capitalLetterRegex.test(value),
    errorMessage: "This value has to contain at least one capital letter. "
  };
};

export const hasNumber = () => (value: any): ValidationResut => {
  let hasNumber = [...value].find(letter => letter.trim() && !isNaN(letter));
  return {
    isValid: hasNumber !== undefined,
    errorMessage: "This value has to contain at least one number. "
  };
};
