import * as React from "react";
import Box from "@mui/material/Box";

import { styled } from "@mui/system";
import { Typography, keyframes } from "@mui/material";

const style = {
  typography: {
    alignItems: "center",
    fontSize: { xs: "h7.fontSize", md: "h5.fontSize" },
    fontFamily: "Monospace",
    fontStyle: "italic",
    fontWeight: "light",
    letterSpacing: { xs: 0, md: 20 },
    width: "100%",
    textAlign: "center",
    backgroundColor: "primary.main",
    height: 300,
  },
  typography_2: {
    alignItems: "center",
    fontSize: { xs: "h7.fontSize", md: "h5.fontSize" },
    fontFamily: "Monospace",
    fontStyle: "italic",
    fontWeight: "light",
    letterSpacing: { xs: 0, md: 20 },
  },
  box: {
    flexGrow: 1,
    display: { xs: "flex", md: "none" },
  },
  box_2: {
    minHeight: "100vh",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "primary.main",

    // font
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#424242",
    fontSize: "4rem",
  },
  toolbar: {
    minHeight: 360,
  },
};

const trackingInExpand = keyframes`
/* ----------------------------------------------
 * Generated by Animista on 2022-6-5 14:54:2
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */
      0% {
        letter-spacing: -0.5em;
        opacity: 0;
      }
      40% {
        opacity: 0.6;
      }
      100% {
        opacity: 1;
      }
`;

const TextAnimation = styled(Typography)(({ action }) => ({
  color: "#311b92",
  visibility: !action && "hidden",
  animation:
    action &&
    `${trackingInExpand} 3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both`,

  // "&:hover": {
  //   color: "#fff",
  //   animation: `${trackingInExpand} 3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both`,
  // },
}));

const Nav = () => {
  const [action, setAction] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      // animation
      setAction(true);
    }, 100);
  }, []);

  return (
    <Box sx={style.box_2}>
      <TextAnimation action={action} sx={style.typography_2} component="div">
        Sareh Salmani's Art works
      </TextAnimation>
      <Box></Box>
    </Box>
  );
};

export default Nav;