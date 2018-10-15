import "../css/style.css";

import FormValidation from "./FormValidation";
import { hasCapitalLetter, hasNumber } from "./newValidators";

const config = {
  errorMessages: {
    isRequired: "This field is required. ",
    isEmail: "Please enter a valid email. ",
    final: "Please update invalid fields and hit submit again"
  },
  errorClassName: "invalid",
  successMessage: "Form successfully submitted!",

  newValidators: { hasCapitalLetter: hasCapitalLetter, hasNumber: hasNumber },
  newValidatorsMap: {
    message: ["hasCapitalLetter", "hasNumber"]
  }
};

const form = document.querySelector("#login");
const formValidation = new FormValidation(form, config);

formValidation.setCustomValidators({
  name: [
    formValidation.validators.isRequired(),
    formValidation.validators.isLongerThan(2),
    hasCapitalLetter()
  ],
  message: [formValidation.validators.isLongerThan(3)]
});

form.addEventListener("submit", () => {
  const status = formValidation.validateAll(event);
  const serializedForm = formValidation.serialize();
  if (status) {
    // action on submit goes here
  }
  console.log(serializedForm);
});
