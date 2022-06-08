import { render, screen } from "@testing-library/vue";
import HomeView from "@/features/home/HomeView.vue";
import userEvent from "@testing-library/user-event";

describe("Home", () => {
  it("Renders", () => {
    render(HomeView);

    expect(screen.getByText(/Hello There!/i)).toBeInTheDocument();
  });

  it("Counter", async () => {
    render(HomeView);

    const user = userEvent.setup();

    await user.click(screen.getByText(/Increase/i));

    expect(await screen.findByText("1")).toBeVisible();
  });
});
