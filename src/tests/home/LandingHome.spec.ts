import { render, screen } from "@testing-library/vue";
import LandingHome from "../../features/home/LandingHome.vue";

describe("LandingHome", () => {
  it("Renders", () => {
    render(LandingHome);

    screen.getByText(/At Home/i);
  });
});
