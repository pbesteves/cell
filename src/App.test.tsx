import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const paragraphElement = screen.getByText(/run the commmand/i);
  expect(paragraphElement).toBeInTheDocument();
});
