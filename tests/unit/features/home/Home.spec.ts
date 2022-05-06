import { render, screen } from "@testing-library/vue";
import HomeView from "@/features/home/HomeView.vue";
import { fireEvent } from "@testing-library/dom";

describe("Home", () => {
  it("Renders", () => {
    render(HomeView);

    expect(screen.getByText(/Hello There!/i)).toBeInTheDocument();
  });

  it("Counter", async () => {
    render(HomeView);

    await fireEvent.click(screen.getByText(/Increase/i));

    expect(await screen.findByText("1")).toBeVisible();
  });
});
