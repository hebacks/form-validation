import { FV } from "../src/FormValidation.d";

export const getValue = (element: FV.Element) => {
  switch (element.getAttribute("type")) {
    case "checkbox":
      return (<HTMLInputElement>element).checked;
    default:
      return element.value;
  }
};
