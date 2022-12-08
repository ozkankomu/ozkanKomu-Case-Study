import { render, screen, cleanup } from "@testing-library/react";
import App from "../../App";

test("should render App component", () => {
  render(<App />);
  const element = screen.getByTestId("app");
  expect(element).toBeInTheDocument();
});
