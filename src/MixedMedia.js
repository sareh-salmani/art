import * as React from "react";

import { Box, Grid } from "@mui/material";
import { style } from "./StyleCustom";
import { Typography } from "@mui/material";

export const localStyle = {
  gridContainer: {
    pb: { xs: "2rem", md: "5rem" },
    backgroundColor: "#ffa000", // amber 700
  },
  gridContainer02: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pb: { xs: "2rem", md: "5rem" },
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
        <Typography sx={style.title}>Mixed Media</Typography>
      </Grid>

      {/* <Container sx={{ backgroundColor: "red" }}> */}
      <Grid item xs={12} sm={2}></Grid>
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
    img: require("./images/mixed_media/001.jpg").default,
    title: "Breakfast",
  },
  {
    img: require("./images/mixed_media/002.jpg").default,
    title: "Burger",
  },
  {
    img: require("./images/mixed_media/003.jpg").default,
    title: "Camera",
  },
  // {
  //   img: require("./images/mixed_media/004.jpg").default,
  //   title: "Coffee",
  // },
  // {
  //   img: require("./images/mixed_media/005.jpg").default,
  //   title: "Hats",
  // },
  // {
  //   img: require("./images/mixed_media/006.jpg").default,
  //   title: "Honey",
  // },
  // {
  //   img: require("./images/mixed_media/007.jpg").default,
  //   title: "Basketball",
  // },
  // {
  //   img: require("./images/mixed_media/008.jpg").default,
  //   title: "Fern",
  // },
  // {
  //   img: require("./images/mixed_media/009.jpg").default,
  //   title: "Mushrooms",
  // },
  // {
  //   img: require("./images/mixed_media/010.jpg").default,
  //   title: "Tomato basil",
  // },
  // {
  //   img: require("./images/mixed_media/011.jpg").default,
  //   title: "Sea star",
  // },
  // {
  //   img: require("./images/mixed_media/012.jpg").default,
  //   title: "Bike",
  // },
  // {
  //   img: require("./images/mixed_media/013.jpg").default,
  //   title: "Mushrooms",
  // },
  // {
  //   img: require("./images/mixed_media/014.jpg").default,
  //   title: "Tomato basil",
  // },
  // {
  //   img: require("./images/mixed_media/015.jpg").default,
  //   title: "Sea star",
  // },
  // {
  //   img: require("./images/mixed_media/016.jpg").default,
  //   title: "Bike",
  // },
  // {
  //   img: require("./images/mixed_media/0017.jpg").default,
  //   title: "Mushrooms",
  // },
  // {
  //   img: require("./images/mixed_media/0018.jpg").default,
  //   title: "Tomato basil",
  // },
  // {
  //   img: require("./images/mixed_media/0019.jpg").default,
  //   title: "Sea star",
  // },
  // {
  //   img: require("./images/mixed_media/0020.jpg").default,
  //   title: "Bike",
  // },
  // {
  //   img: require("./images/mixed_media/0021.jpg").default,
  //   title: "Bike",
  // },
  // {
  //   img: require("./images/mixed_media/0022.jpg").default,
  //   title: "Bike",
  // },
  // {
  //   img: require("./images/mixed_media/0023.jpg").default,
  //   title: "Bike",
  // },
  // {
  //   img: require("./images/mixed_media/0024.jpg").default,
  //   title: "Bike",
  // },
];
