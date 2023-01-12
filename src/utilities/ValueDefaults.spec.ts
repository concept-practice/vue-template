import { ValueDefaults } from "./ValueDefaults";

describe("ValueDefaults", () => {
  it("String has correct value", () => {
    expect(ValueDefaults.String).toStrictEqual("");
  });

  it("Boolean has correct value", () => {
    expect(ValueDefaults.Boolean).toStrictEqual(false);
  });

  it("Number has correct value", () => {
    expect(ValueDefaults.Number).toStrictEqual(0);
  });
});
