import { getValue } from "./getValue.ts";

describe("getValue: ", () => {
  let checkbox;
  let textInput;

  beforeAll(() => {
    checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    textInput = document.createElement("input");
    textInput.type = "text";
    textInput.value = "hello world";
  });

  it("should return false for unchecked checkbox", () => {
    checkbox.checked = false;
    expect(getValue(checkbox)).toBe(false);
  });

  it("should return true for checked checkbox", () => {
    checkbox.checked = true;
    expect(getValue(checkbox)).toBe(true);
  });

  it("should return an input value", () => {
    expect(getValue(textInput)).toBe("hello world");
  });
});
