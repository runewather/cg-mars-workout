import React from "react";
import { render, screen } from "@testing-library/react";

import { Workout } from "../interfaces/workout";

import { Card } from "../components/Card";

const workout: Workout = {
  description:
    "Enjoy a fun and low impact workout with Kelsey. We will engage a full body workout and get your heart rate up!",
  thumbnail:
    "https://cgcdn.s3.amazonaws.com/nation/users/UID-V1421773844UID-54be8c1417ad6.png",
  levelTag: "beginner",
  media: "https://virtual-library.s3.amazonaws.com/Week1-KelseySage.mp4",
  title: "Endurance by Kelsey Sage",
  impactTag: "low",
  id: "1",
  trainerId: "1",
  duration: 60,
};

test("Card show all contents correctly", () => {
  render(
    <Card
      id={workout.id}
      title={workout.title}
      description={workout.description}
      duration={workout.duration}
      thumbnail={workout.thumbnail}
    />
  );

  const title = screen.getByText(workout.title as string);
  expect(title).toBeInTheDocument();

  const description = screen.getByText(workout.description as string);
  expect(description).toBeInTheDocument();

  const duration = screen.getByText(`: ${workout.duration}min`);
  expect(duration).toBeInTheDocument();
});
