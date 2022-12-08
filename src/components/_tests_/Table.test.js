import { render, screen, cleanup } from "@testing-library/react";
import Table from "../Table";
import data from "../../api/task.json";

test("should render Table component", () => {
  const task = [];
  const search = "";
  const deleteData = function () {};
  render(<Table task={task} search={search} deleteData={deleteData()} />);
  const element = screen.getByTestId("table");
  expect(element).toBeInTheDocument();
});

test("should render Table component", () => {
  const search = "";
  const deleteData = function () {};
  render(<Table task={data.task} search={search} deleteData={deleteData()} />);
  const element = screen.getByTestId("table");
  expect(element).toBeInTheDocument();
});
