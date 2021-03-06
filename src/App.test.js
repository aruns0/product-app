import { render, screen } from "@testing-library/react";
import App from "./App";

test("render the title of an application", () => {
  render(<App />);

  const title = screen.getByText(/Fast Shoes/);
  expect(title).toBeInTheDocument();
});
