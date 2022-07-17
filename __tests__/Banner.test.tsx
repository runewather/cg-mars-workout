import React from "react";
import { render, screen } from "@testing-library/react";

import { Banner } from "../components/Banner";

test("Banner contains correct text", () => {
  render(<Banner />);
  const text = screen.getByText(
    "Find the best workouts online with the best professionals"
  );
  expect(text).toBeInTheDocument();
});
