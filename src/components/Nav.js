import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";

const style = {
  typography: {
    alignItems: "center",
    // pb: { xs: 45, md: 60 },
    // pt: { xs: 45, md: 60 },
    // lineHeight: "100%",
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
    // pb: { xs: 45, md: 60 },
    // pt: { xs: 45, md: 60 },
    // lineHeight: "100%",
    fontSize: { xs: "h7.fontSize", md: "h5.fontSize" },
    fontFamily: "Monospace",
    fontStyle: "italic",
    fontWeight: "light",
    letterSpacing: { xs: 0, md: 20 },
    // width: "100%",
    // textAlign: "center",
    // backgroundColor: "primary.main",
    // height: 300,
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

    // backgroundPosition: "center",
    // position: "relative",

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

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Nav = () => {
  return (
    <Box sx={style.box_2}>
      <Typography sx={style.typography_2} component="div">
        Sareh Salmani's Art works
      </Typography>
      <Box></Box>
    </Box>
  );
};

// const Nav = () => {
//   return (
//     <AppBar position="static">
//       <Container>
//         <Toolbar disableGutters sx={style.toolbar}>
//           <Typography component="div" sx={style.typography}>
//             Sareh Salmani's Art works
//           </Typography>
//           <Box sx={style.box}></Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

export default Nav;
