import { render, screen } from "@testing-library/react";
import Home from "../../pages/Home";
import userEvent from "@testing-library/user-event";
import data from "../../api/task.json";

test("should render Home component", () => {
  render(<Home />);
  const element = screen.getByTestId("home");
  expect(element).toBeInTheDocument();
});

test("Button test", () => {
  render(<Home />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toHaveTextContent("Add Cargo");
});

test("Input test", () => {
  render(<Home />);
  const buttonEl = screen.getByTestId("searchInput");
  expect(buttonEl).toHaveClass("searchInput");
});
