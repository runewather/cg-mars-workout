import React from "react";
import { render, screen } from "@testing-library/react";

import { Workouts } from "../components/Workouts";

import data from "../data/workouts.json";

import { Workout } from "../interfaces/workout";

test("Should render all workouts", () => {
  render(<Workouts />);

  data.forEach((d: Workout) => {
    expect(screen.getByText(d.title as string)).toBeInTheDocument();
  });
});
