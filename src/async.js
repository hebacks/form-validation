export const isUnique = errorMessage => value => {
  const usernames = ["Baks", "Baksik", "HebX"];
  return new Promise(resolve => {
    setTimeout(() => {
      let isTaken = usernames.indexOf(value) > -1;
      resolve({
        isValid: !isTaken,
        errorMessage: errorMessage
      });
    }, 2000);
  });
};
