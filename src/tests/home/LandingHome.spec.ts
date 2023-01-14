import { render, screen } from "@testing-library/vue";
import LandingHome from "../../features/home/LandingHome.vue";
import userEvent from "@testing-library/user-event";

describe("landing home", () => {
  it("renders", () => {
    render(LandingHome);

    expect(screen.getByText(/at home/i)).toBeInTheDocument();
  });

  it("counter  works", async () => {
    render(LandingHome);

    const user = userEvent.setup();

    await user.click(screen.getByText(/increase/i));

    expect(await screen.findByText(/1/i)).toBeInTheDocument();
  });

  test("it works", () => {
    expect(1).toEqual(1);
  });
});
