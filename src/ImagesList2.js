import * as React from "react";

import { SRLWrapper } from "simple-react-lightbox";
import { Typography, Link, Grid, Box, Avatar, Container } from "@mui/material";

import avatar from "./images/intro/0002.jpg";

const style = {
  gridContainer: {
    pb: { xs: "2rem", md: "5rem" },
    // mt: { xs: "10rem", sm: "35rem" },
    // mb: { xs: "10rem", sm: "35rem" },
    transition: "all 250ms ease",
    // backgroundColor: "#b2a429",
    backgroundColor: "#bbdefb", // blue

    // "&:hover": {
    //   boxShadow:
    //     "0 1.9rem 3.8rem rgba(0,0,0,0.3), 0 1,5rem 1.2rem rgba(0,0,0,0.3)",
    //   transform: "translate(0, -1rem)",
    // },
  },
  gridContainerAvatar: {
    mt: { xs: "10rem", sm: "35rem" },
    mb: { xs: "10rem", sm: "35rem" },
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
    width: 400,
    height: 500,
    backgroundColor: "primary.dark",
    margin: "1rem",
    // border: "inset 1rem black",
    border: 5,
    // "box-shadow": "inset 4rem 4rem 4rem 4rem yellow",
    "&:hover": {
      backgroundColor: "primary.main",
      opacity: [0.9, 0.8, 0.7],
      border: 5,
      borderColor: "text.primary",
      borderRadius: "50%",
    },
  },
};

export default function StandardImageList() {
  return (
    <SRLWrapper options={style}>
      <Grid container sx={style.gridContainer}>
        {/* Avatar */}
        <Container>
          <Grid container spacing={1} sx={style.gridContainerAvatar}>
            <Grid item xs={8} sm={4}>
              <Avatar
                src={avatar}
                alt="Sareh Salmani"
                sx={{
                  width: { xs: 100, sm: 350 },
                  height: { xs: 100, sm: 350 },
                }}
              />
            </Grid>
            <Grid item xs={11} sm={8} sx={style.gridItem}>
              <Typography>
                <Link
                  sx={{ color: "#4fc3f7", mr: 1 }}
                  href="https://www.instagram.com/sarehsalmani/"
                  target="_blank"
                >
                  Sareh Salmani
                </Link>
                is an Iranian painter and poet, who was born in Tehran. Her
                works include Digital Painting and Mixed Media.
              </Typography>
            </Grid>
          </Grid>

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
    </SRLWrapper>
  );
}

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
