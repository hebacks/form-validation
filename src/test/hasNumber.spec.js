import { hasNumber } from "./hasNumber.ts";

describe("hasNumber: ", () => {
  it("should return an invalid result if value contains only letters", () => {
    expect(hasNumber()("value without a number").isValid).toBe(false);
  });
  it("should return an invalid result if value contains special characters", () => {
    expect(hasNumber()("!@#$% ").isValid).toBe(false);
  });
  it("should return a valid result if value contains both string and a number", () => {
    expect(hasNumber()("   value with 123   ").isValid).toBe(true);
  });
  it("should return a valid result if value contains only numbers", () => {
    expect(hasNumber()("123").isValid).toBe(true);
  });
});
