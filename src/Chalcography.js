import * as React from "react";

import { Box, Grid } from "@mui/material";
import { style } from "./StyleCustom";
import Grow from "@mui/material/Grow";

import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

import { TextAnimation } from "./TextAnimation";
import Rotate from "./animation/Rotate";
import { Container } from "@mui/material";

export const localStyle = {
  gridContainer: {
    pb: { xs: "2rem", md: "5rem" },
    backgroundColor: "#ffa000", // amber 700
  },
  gridContainer02: {
    // width: "90%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pb: { xs: "2rem", md: "5rem" },
    // backgroundColor: "#ffa000", // amber 700
    // backgroundColor: "red",
  },
};

export default function ImageList() {
  return (
    <Grid container sx={localStyle.gridContainer}>
      <Grid item xs={2} sm={2}></Grid>
      <Grid item xs={4} sm={4}>
        <Rotate />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography sx={style.title}>
          Chalcography
          <h6>Coming soon...</h6>
        </Typography>
      </Grid>

      {/*  */}
      {/* <Container sx={{ backgroundColor: "red" }}> */}
      <Grid item xs={12} sm={2}>
        {/* QQQQQQ */}
      </Grid>
      <Grid container item xs={12} sm={8} sx={localStyle.gridContainer02}>
        {itemData.map((image) => (
          // <Grid item xs={12} sm={3}>
          <Grid item>
            <Box
              component="img"
              sx={style.chalcographyBox}
              src={`${image.img}`}

              // alt={`${image.title}`}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
    //  {/* </Container> */}
  );
}

const itemData = [
  {
    img: require("./images/digital_painting/001.jpg").default,
    title: "Breakfast",
  },
  {
    img: require("./images/digital_painting/002.jpg").default,
    title: "Burger",
  },
  {
    img: require("./images/digital_painting/003.jpg").default,
    title: "Camera",
  },
  {
    img: require("./images/digital_painting/004.jpg").default,
    title: "Coffee",
  },
  {
    img: require("./images/digital_painting/005.jpg").default,
    title: "Hats",
  },
  {
    img: require("./images/digital_painting/006.jpg").default,
    title: "Honey",
  },
  {
    img: require("./images/digital_painting/007.jpg").default,
    title: "Basketball",
  },
  {
    img: require("./images/digital_painting/008.jpg").default,
    title: "Fern",
  },
  {
    img: require("./images/digital_painting/009.jpg").default,
    title: "Mushrooms",
  },
  {
    img: require("./images/digital_painting/010.jpg").default,
    title: "Tomato basil",
  },
  {
    img: require("./images/digital_painting/011.jpg").default,
    title: "Sea star",
  },
  {
    img: require("./images/digital_painting/012.jpg").default,
    title: "Bike",
  },
  {
    img: require("./images/digital_painting/013.jpg").default,
    title: "Mushrooms",
  },
  {
    img: require("./images/digital_painting/014.jpg").default,
    title: "Tomato basil",
  },
  {
    img: require("./images/digital_painting/015.jpg").default,
    title: "Sea star",
  },
  {
    img: require("./images/digital_painting/016.jpg").default,
    title: "Bike",
  },
  // {
  //   img: require("./images/digital_painting/0017.jpg").default,
  //   title: "Mushrooms",
  // },
  // {
  //   img: require("./images/digital_painting/0018.jpg").default,
  //   title: "Tomato basil",
  // },
  // {
  //   img: require("./images/digital_painting/0019.jpg").default,
  //   title: "Sea star",
  // },
  // {
  //   img: require("./images/digital_painting/0020.jpg").default,
  //   title: "Bike",
  // },
  // {
  //   img: require("./images/digital_painting/0021.jpg").default,
  //   title: "Bike",
  // },
  // {
  //   img: require("./images/digital_painting/0022.jpg").default,
  //   title: "Bike",
  // },
  // {
  //   img: require("./images/digital_painting/0023.jpg").default,
  //   title: "Bike",
  // },
  // {
  //   img: require("./images/digital_painting/0024.jpg").default,
  //   title: "Bike",
  // },
];
