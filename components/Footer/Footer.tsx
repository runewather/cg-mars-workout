import { Container, AppBar, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

import Image from "next/image";
import Link from "next/link";

const FooterWrapper = styled(Box)({
  width: "100%",
  height: "200px",
  backgroundColor: "#333333",
});

const FooterContent = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
});

const ImageBox = styled(Box)({
  width: "190px",
  height: "40px",
  position: "relative",
  cursor: "pointer",
});

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <Link href="/">
          <ImageBox>
            <Image
              src="/logo-white.svg"
              alt="Camp gladiators logo"
              layout="fill"
            />
          </ImageBox>
        </Link>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
