import * as React from "react";

import { Box, Grid } from "@mui/material";
import { style } from "./styleCustom";
import { TextAnimation } from "./TextAnimation";

export const localStyle = {
  gridContainer: {
    pb: { xs: "2rem", md: "5rem" },
    // backgroundColor: "#b388ff", // deep purpule
    backgroundColor: "#ffca28", // amber 400
  },
};

export default function ImageList() {
  const [action, setAction] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      // animation
      setAction(true);
    }, 0);
  }, []);

  return (
    <Grid container sx={localStyle.gridContainer}>
      <Grid item xs={12} sm={2}></Grid>
      <Grid item xs={12} sm={4}>
        <TextAnimation action={action} sx={style.title}>
          Digital Painting
        </TextAnimation>
      </Grid>
      {itemData.map((image) => (
        <Grid item xs={12} sm={4} sx={style.gridItem}>
          <Box
            component="img"
            sx={style.boxDigitalPainting}
            src={`${image.img}`}
            // alt={`${image.title}`}
          />
        </Grid>
      ))}
    </Grid>
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
