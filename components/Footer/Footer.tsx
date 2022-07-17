import { Container, AppBar, Box } from "@mui/material";
import { styled } from "@mui/system";

import Image from "next/image";
import Link from "next/link";

const FooterWrapper = styled(Box)({
  width: "100%",
  height: "200px",
  backgroundColor: "#333333",
});

const Footer: React.FC = () => {
  return <FooterWrapper></FooterWrapper>;
};

export default Footer;
