import { Box } from "@mui/material";
import { styled } from "@mui/system";

import { Card } from "../Card";

import data from "../../data/workouts.json";

const WorkoutsWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-around",
  gap: "16px",
  marginTop: "32px",
  marginBottom: "32px",
});

const Workouts: React.FC = () => {
  return (
    <WorkoutsWrapper>
      {data.map((d) => (
        <Card
          key={d.title}
          title={d.title}
          description={d.description}
          thumbnail={d.thumbnail}
          duration={d.duration}
        />
      ))}
    </WorkoutsWrapper>
  );
};

export default Workouts;
