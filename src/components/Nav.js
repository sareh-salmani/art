import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/system";
import CssBaseline from "@mui/material/CssBaseline";
import { Typography, Link, keyframes } from "@mui/material";

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

const trackingInExpand = keyframes`
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

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Nav = () => {
  const [action, setAction] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      // animation
      setAction(true);
    }, 500);
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
