import { render, screen } from "@testing-library/vue";
import HomeView from "@/components/HomeView.vue";

describe("Home", () => {
  it("Renders", () => {
    render(HomeView);

    expect(screen.getByText(/Hello There!/i)).toBeInTheDocument();
  });
});
