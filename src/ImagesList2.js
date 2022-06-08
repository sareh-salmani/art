import * as React from "react";

import { Typography, Link, Grid, Box, Avatar, Container } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

import { FlipAnimation } from "./animation/FlipAnimation";

import avatar from "./images/intro/0002.jpg";

const style = {
  gridContainer: {
    pb: { xs: "2rem", md: "5rem" },
    // mt: { xs: "10rem", sm: "35rem" },
    // mb: { xs: "10rem", sm: "35rem" },
    transition: "all 250ms ease",
    // backgroundColor: "#b2a429",
    // backgroundColor: "#bbdefb", // blue
    backgroundColor: "#64b5f6", // blue 300

    // "&:hover": {
    //   boxShadow:
    //     "0 1.9rem 3.8rem rgba(0,0,0,0.3), 0 1,5rem 1.2rem rgba(0,0,0,0.3)",
    //   transform: "translate(0, -1rem)",
    // },
  },
  gridContainerAvatar: {
    mt: { xs: "10rem", sm: "35rem" },
    mb: { xs: "10rem", sm: "35rem" },
    // backgroundColor: "red",
  },
  gridItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    backgroundColor: "#1b5245",
    iconColor: "rgba(245, 223, 39, 0.8)",
    showDownloadButton: false,
  },
  box: {
    // width: 400,
    // height: 500,
    maxWidth: { xs: 350, sm: 400 },
    maxehight: { xs: 450, sm: 500 },
    backgroundColor: "primary.dark",
    margin: "1rem",
    // border: "inset 1rem black",
    border: 5,
    // "box-shadow": "inset 4rem 4rem 4rem 4rem yellow",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "primary.main",
      opacity: [0.9, 0.8, 0.7],
      border: 5,
      borderColor: "text.primary",
      borderRadius: "40%",
    },
  },
  link: {
    target: "_blank",
  },
  icons: {
    color: "#283593",
    // color: "#ff6f00",
    fontSize: { xs: "28px", sm: "34px" },
    mt: "1rem",
    mr: ".3rem",
  },
};

export default function StandardImageList() {
  const [action, setAction] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      // animation
      setAction(true);
    }, 0);
  }, []);

  return (
    <Grid container sx={style.gridContainer}>
      <Container>
        {/* Avatar */}
        <FlipAnimation action={action}>
          <Grid container spacing={1} sx={style.gridContainerAvatar}>
            <Grid item xs={12} sm={4}>
              <Avatar
                src={avatar}
                alt="Sareh Salmani"
                sx={{
                  width: { xs: 100, sm: 350 },
                  height: { xs: 100, sm: 350 },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={8} sx={style.gridItem}>
              <Typography>
                <Link
                  sx={{ color: "#3f51b5", mr: 1 }}
                  href="https://www.instagram.com/sarehsalmani/"
                  target="_blank"
                >
                  Sareh Salmani
                </Link>
                is an Iranian painter and poet, who was born in Tehran. Her
                works include Digital Painting and Mixed Media.
                {icons}
              </Typography>
            </Grid>
          </Grid>
        </FlipAnimation>

        {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> */}
        {/* <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}> */}
        {/* Photos */}
        <Grid container>
          {itemData.map((image) => (
            <Grid
              item
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // margin: ".1rem",
              }}
            >
              <Box component="img" sx={style.box} src={`${image.img}`} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Grid>
  );
}

const icons = (
  <div>
    <Link href="https://www.instagram.com/sarehsalmani/" target="_blank">
      <InstagramIcon sx={style.icons} />
    </Link>
    <Link href="https://twitter.com/sarehsalmani" target="_blank">
      <TwitterIcon sx={style.icons} />
    </Link>
    <Link href="https://www.facebook.com/sareh.slm" target="_blank">
      <FacebookIcon sx={style.icons} />
    </Link>
    <Link href="mailto:sarehsalmani@gmail.com" target="_blank">
      <EmailIcon sx={style.icons} />
    </Link>
  </div>
);

const itemData = [
  {
    img: require("./images/painting_on_paper/0001.jpg").default,
    title: "Breakfast",
  },
  {
    img: require("./images/painting_on_paper/0002.jpg").default,
    title: "Burger",
  },
  {
    img: require("./images/painting_on_paper/0003.jpg").default,
    title: "Camera",
  },
  {
    img: require("./images/painting_on_paper/0004.jpg").default,
    title: "Coffee",
  },
  {
    img: require("./images/painting_on_paper/0005.jpg").default,
    title: "Hats",
  },
  {
    img: require("./images/painting_on_paper/0006.jpg").default,
    title: "Honey",
  },
  {
    img: require("./images/painting_on_paper/0007.jpg").default,
    title: "Basketball",
  },
  {
    img: require("./images/painting_on_paper/0008.jpg").default,
    title: "Fern",
  },
  {
    img: require("./images/painting_on_paper/0009.jpg").default,
    title: "Mushrooms",
  },
  {
    img: require("./images/painting_on_paper/0010.jpg").default,
    title: "Tomato basil",
  },
  {
    img: require("./images/painting_on_paper/0011.jpg").default,
    title: "Sea star",
  },
  {
    img: require("./images/painting_on_paper/0012.jpg").default,
    title: "Bike",
  },
  {
    img: require("./images/painting_on_paper/0013.jpg").default,
    title: "Mushrooms",
  },
  {
    img: require("./images/painting_on_paper/0014.jpg").default,
    title: "Tomato basil",
  },
  {
    img: require("./images/painting_on_paper/0015.jpg").default,
    title: "Sea star",
  },
  {
    img: require("./images/painting_on_paper/0016.jpg").default,
    title: "Bike",
  },
  {
    img: require("./images/painting_on_paper/0017.jpg").default,
    title: "Mushrooms",
  },
  {
    img: require("./images/painting_on_paper/0018.jpg").default,
    title: "Tomato basil",
  },
  {
    img: require("./images/painting_on_paper/0019.jpg").default,
    title: "Sea star",
  },
  {
    img: require("./images/painting_on_paper/0020.jpg").default,
    title: "Bike",
  },
  {
    img: require("./images/painting_on_paper/0021.jpg").default,
    title: "Bike",
  },
  {
    img: require("./images/painting_on_paper/0022.jpg").default,
    title: "Bike",
  },
  {
    img: require("./images/painting_on_paper/0023.jpg").default,
    title: "Bike",
  },
  {
    img: require("./images/painting_on_paper/0024.jpg").default,
    title: "Bike",
  },
];
