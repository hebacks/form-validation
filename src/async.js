export const isUnique = errorMessage => (value, field) => {
  const usernames = ["Baks", "Baksik", "HebX"];
  field.element.parentElement.classList.add("loader");
  return new Promise(resolve => {
    setTimeout(() => {
      let isTaken = usernames.indexOf(value) > -1;
      field.element.parentElement.classList.remove("loader");
      resolve({
        isValid: !isTaken,
        errorMessage: errorMessage
      });
    }, 2000);
  });
};
