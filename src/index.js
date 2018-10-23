import FormValidation from "./FormValidation";
import { hasCapitalLetter, hasNumber } from "./newValidators";
import "../css/style.scss";

const config = {
  errorClassName: "invalid",
  successMessage: "Form successfully submitted!",
  errorMessage: "Please update invalid fields and hit submit again"
};

const form = document.querySelector("#login");

const formValidation = new FormValidation(form, config);

formValidation.customizeValidators({
  name: [
    formValidation.validators.isRequired(),
    formValidation.validators.isLongerThan(2)
  ],
  message: [
    hasCapitalLetter("This value has to contain at least one capital letter. "),
    hasNumber("This value has to contain at least one number. "),
    formValidation.validators.isLongerThan(3, "Min. 3 characters required. ")
  ]
});

form.addEventListener("submit", () => {
  const status = formValidation.validateAll(event);
  const serializedForm = formValidation.serialize();
  if (status) {
    // action on submit goes here
  }
  console.log(serializedForm);
});
