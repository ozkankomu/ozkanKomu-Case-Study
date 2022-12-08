import { render, screen, cleanup } from "@testing-library/react";
import Modal from "../Modal";

test("should render Modal component", () => {
  render(<Modal />);
  const element = screen.getByTestId("modal");
  expect(element).toBeInTheDocument();
});
