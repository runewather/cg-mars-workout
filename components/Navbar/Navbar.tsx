import { Container, AppBar } from "@mui/material";
import { styled } from "@mui/system";

const Navbar: React.FC = () => {
  return (
    <AppBar position="fixed">
      <Container>CG Mars Workout</Container>
    </AppBar>
  );
};

export default Navbar;
