import { isLongerThan } from "./isLongerThan.ts";

describe("isLongerThan: ", () => {
  it("should return an invalid result for value shorter than the parameter expects", () => {
    expect(isLongerThan(3)("ab").isValid).toBe(false);
    expect(isLongerThan(3)("ab").errorMessage).toBe(
      "This value has to be at least 3 characters long. "
    );
  });
  it("should return an valid result for value at least as long as the parameter expects", () => {
    expect(isLongerThan(3)("abc").isValid).toBe(true);
  });
});
