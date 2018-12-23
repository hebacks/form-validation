import { hasCapitalLetter } from "./hasCapitalLetter";

describe("hasCapitalLetter: ", () => {
  it("should return an invalid result if value contains only lowercase letters", () => {
    expect(hasCapitalLetter()("only lowercase").isValid).toBe(false);
  });
  it("should return an invalid result if value contains special characters", () => {
    expect(hasCapitalLetter()("!@#$% ").isValid).toBe(false);
  });
  it("should return an invalid result if value contains only numbers", () => {
    expect(hasCapitalLetter()("123").isValid).toBe(false);
  });
  it("should return a valid result if value contains at least one capital letter", () => {
    expect(hasCapitalLetter()("   with Capital Letters   ").isValid).toBe(true);
  });
});
