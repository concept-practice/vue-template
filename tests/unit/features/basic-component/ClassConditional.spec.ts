import ClassConditional from "@/features/basic-component/ClassConditional.vue";
import { render, screen } from "@testing-library/vue";

describe("Class conditional", () => {
  it("Has correct class when blue", () => {
    render(ClassConditional, { props: { isBlue: true } });

    expect(screen.getByText(/hello there/iu)).toHaveClass("is-blue");
  });

  it("Has correct class when not blue", () => {
    render(ClassConditional, { props: { isBlue: false } });

    expect(screen.getByText(/hello there/iu)).toHaveClass("is-red");
  });
});
