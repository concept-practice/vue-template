import { ValueDefaults } from "./ValueDefaults";

describe("value defaults", () => {
  it("string has correct value", () => {
    expect(ValueDefaults.String).toStrictEqual("");
  });

  it("boolean has correct value", () => {
    expect(ValueDefaults.Boolean).toStrictEqual(false);
  });

  it("number has correct value", () => {
    expect(ValueDefaults.Number).toStrictEqual(0);
  });
});
