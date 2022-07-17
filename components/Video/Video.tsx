import { Container, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

interface Props {
  url?: string | "";
  title: string | "";
  description: string | "";
}

const VideoContainer = styled(Container)({
  position: "relative",
  width: "100%",
  paddingTop: "16px",
  paddingBottom: "16px",
});

const Video: React.FC<Props> = ({ url, title, description }) => {
  return (
    <VideoContainer>
      <video width="100%" height="500px" autoPlay controls>
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Box mt={2}>
        <Typography variant="h5">{title}</Typography>
      </Box>
      <Box mt={2}>
        <Typography variant="body1">{description}</Typography>
      </Box>
    </VideoContainer>
  );
};

export default Video;
