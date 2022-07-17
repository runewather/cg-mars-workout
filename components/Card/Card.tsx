import { Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

import Image from "next/image";
import Link from "next/link";

interface Props {
  id?: string | number | 0;
  title?: string | "";
  description?: string | "";
  thumbnail?: string | "";
  duration?: number | 0;
}

const CardBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "350px",
  padding: "16px",
});

const ImageBox = styled(Box)(({ theme }) => ({
  width: "350px",
  height: "400px",
  position: "relative",
  borderRadius: "10px",
  filter: "brightness(85%)",
  transition: "1s all",
  "&:hover": {
    filter: "brightness(100%)",
  },
  [theme.breakpoints.down("sm")]: {
    filter: "brightness(100%)",
  },
}));

const CardTitle = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "65px",
  marginTop: "16px",
});

const CardDuration = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "16px",
  marginBottom: "8px",
});

const CustomButtom = styled(Button)({
  color: "#C8102E",
  width: "200px",
  height: "40px",
  borderRadius: "30px",
  borderColor: "#c8102e",
  "&:Hover": {
    borderColor: "#c8102e",
    backgroundColor: "#FFFFFF",
  },
});

const Card: React.FC<Props> = ({
  id,
  title,
  description,
  thumbnail = "",
  duration,
}) => {
  return (
    <CardBox>
      <ImageBox>
        <Image
          src={thumbnail}
          alt={`${title} thumbnail`}
          layout="fill"
          style={{ borderRadius: "10px" }}
        />
      </ImageBox>
      <Box height="230px">
        <CardTitle>
          <Typography variant="h5" textAlign="center">
            {title}
          </Typography>
        </CardTitle>
        <Box mt={3}>
          <Typography variant="body1" style={{ textAlign: "center" }}>
            {description}
          </Typography>
        </Box>
        <CardDuration>
          <Typography
            variant="subtitle1"
            style={{ textAlign: "center", fontWeight: "bold" }}
          >
            Duration
          </Typography>
          <Typography variant="subtitle1" style={{ textAlign: "center" }}>
            {`: ${duration}min`}
          </Typography>
        </CardDuration>
      </Box>
      <Box mt={1}>
        <Link href={`/workout/${id}`}>
          <CustomButtom variant="outlined">Watch class</CustomButtom>
        </Link>
      </Box>
    </CardBox>
  );
};

export default Card;
