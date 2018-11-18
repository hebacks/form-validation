import { isRequired } from "./isRequired.ts";

describe("isRequired: ", () => {
  it("should return a valid result if value contains any character", () => {
    expect(isRequired()("a").isValid).toBe(true);
  });
  it("should return a valid result if value is true", () => {
    expect(isRequired()(true).isValid).toBe(true);
  });
  it("should return an invalid result for an empty string", () => {
    expect(isRequired()("").isValid).toBe(false);
  });
  it("should return an invalid result if value is false", () => {
    expect(isRequired()(false).isValid).toBe(false);
  });
});
