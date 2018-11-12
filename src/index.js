import FormValidation from "./FormValidation";
import { hasCapitalLetter, hasNumber } from "./newValidators";
import { isUnique } from "./async";
import "../css/style.scss";

const config = {
  errorClassName: "invalid"
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
  ],
  username: [isUnique("This username is already taken. ")]
});

form.addEventListener("submit", () => {
  const status = formValidation.validateAll(event);
  const serializedForm = formValidation.serialize();
  const finalMessage = document.querySelector(".form__message");

  if (status) {
    finalMessage.innerHTML = "Form successfully submitted!";
    finalMessage.classList.add("successful");
    // action on submit goes here
  } else {
    finalMessage.innerHTML =
      "Please update invalid fields and hit submit again";
    finalMessage.classList.remove("successful");
  }
  console.log(serializedForm);
});
