import { Container, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

import Image from "next/image";

const BannerBox = styled(Box)({
  position: "relative",
  width: "100%",
  height: "300px",
});

const BannerContentContainer = styled(Container)({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  height: "100%",
  zIndex: 999,
});

const BannerTitle = styled(Typography)({
  color: "white",
  fontSize: "2.25rem",
  fontWeight: "bold",
  width: "75%",
});

const Banner: React.FC = () => {
  return (
    <BannerBox>
      <Image
        src="/banner.jpeg"
        alt="Banner photo"
        layout="fill"
        style={{ zIndex: -1 }}
      />
      <BannerContentContainer>
        <BannerTitle variant="h1" color="white">
          Find the best workouts online with the best professionals
        </BannerTitle>
      </BannerContentContainer>
    </BannerBox>
  );
};

export default Banner;
