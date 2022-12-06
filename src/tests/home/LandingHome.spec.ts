import { render, screen } from "@testing-library/vue";
import LandingHome from "../../features/home/LandingHome.vue";
import userEvent from "@testing-library/user-event";

describe("LandingHome", () => {
  it("Renders", () => {
    render(LandingHome);

    expect(screen.getByText(/At Home/i)).toBeInTheDocument();
  });

  it("Counter Works", async () => {
    render(LandingHome);

    const user = userEvent.setup();

    user.click(screen.getByText(/Increase/i));

    expect(await screen.findByText(/1/i)).toBeInTheDocument();
  });
});
