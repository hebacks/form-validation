export const hasCapitalLetter = () => value => {
  let hasCapitalLetter = [...value].find(
    letter => letter === letter.toUpperCase() && isNaN(letter)
  );
  return {
    isValid: hasCapitalLetter !== undefined,
    errorMessage: "This value has to contain at least one capital letter. "
  };
};

export const hasNumber = () => value => {
  let hasNumber = [...value].find(letter => letter.trim() && !isNaN(letter));
  return {
    isValid: hasNumber !== undefined,
    errorMessage: "This value has to contain at least one number. "
  };
};
