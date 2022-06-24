import BasicComponent from "@/features/basic-component/BasicComponent.vue";
import { render, screen } from "@testing-library/vue";

describe("Basic Component", () => {
  it("Shows proper text when logged in", () => {
    render(BasicComponent, { props: { showText: true } });

    expect(screen.getByText(/hello michael/iu)).toBeInTheDocument();
  });

  it("Show proper text when logged out", () => {
    render(BasicComponent, { props: { showText: false } });

    expect(screen.getByText(/sign in/iu)).toBeInTheDocument();
  });
});
