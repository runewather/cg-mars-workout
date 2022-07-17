import { Container, AppBar, Box } from "@mui/material";
import { styled } from "@mui/system";

import Image from "next/image";
import Link from "next/link";

const CustomNavbar = styled(AppBar)({
  height: "80px",
  backgroundColor: "#FFFFFF",
  boxShadow: "none",
});

const NavbarContainer = styled(Container)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  height: "100%",
});

const ImageBox = styled(Box)({
  width: "190px",
  height: "40px",
  position: "relative",
  cursor: "pointer",
});

const Navbar: React.FC = () => {
  return (
    <CustomNavbar position="fixed">
      <NavbarContainer>
        <Link href="/">
          <ImageBox>
            <Image src="/logo.svg" alt="Camp gladiators logo" layout="fill" />
          </ImageBox>
        </Link>
      </NavbarContainer>
    </CustomNavbar>
  );
};

export default Navbar;
