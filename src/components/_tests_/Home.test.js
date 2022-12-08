import { render, screen, cleanup } from "@testing-library/react";
import Home from "../../pages/Home";

test("should render Home component", () => {
  render(<Home />);
  const element = screen.getByTestId("home");
  expect(element).toBeInTheDocument();
});
