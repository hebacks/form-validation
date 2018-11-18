import { isEmail } from "./isEmail.ts";

describe("isEmail: ", () => {
  it("should return an invalid result for incorrect email format", () => {
    expect(isEmail()("foo@com").isValid).toBe(false);
    expect(isEmail()("foo@b.c").isValid).toBe(false);
    expect(isEmail()("foo!@b.c").isValid).toBe(false);
  });
  it("should return an invalid result for empty string", () => {
    expect(isEmail()("").isValid).toBe(false);
  });
  it("should return a valid result for correct email format", () => {
    expect(isEmail()("foo@bar.com").isValid).toBe(true);
    expect(isEmail()("foo+1@bar.com").isValid).toBe(true);
  });
});
