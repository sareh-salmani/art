import * as React from "react";

import { Box, Grid } from "@mui/material";
import { style } from "../StyleCustom";
import { Typography } from "@mui/material";
import Rotate from "../animation/Rotate";

import { ScaleUpCenterAnimation } from "../animation/ScaleUpCenter";

export const localStyle = {
  gridContainer: {
    pb: { xs: "2rem", sm: "6rem" },
    backgroundColor: "#00acc1", // amber 700
  },
  gridContainerInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
  },
  box: {
    width: { xs: 350, sm: 500 },
    height: { xs: 450, sm: 700 },
    maxWidth: { xs: 350, sm: 500 },
    maxehight: { xs: 450, sm: 700 },
    // backgroundColor: "black",
    margin: ".5rem",

    "&:hover": {
      cursor: "pointer",
      // backgroundColor: "primary.main",
      // opacity: [0.1, 0.5, 0.9],
      // border: 35,
      // borderColor: "text.primary",
      // borderRadius: "5%",
    },
  },
  title: {
    display: "flex",
    justifyContent: "center",
    pt: { xs: "3rem", sm: "15rem" },
    pb: { xs: "3rem", sm: "15rem" },
    fontSize: { xs: "h5.fontSize", sm: "24px" },
    fontFamily: "Monospace",
    fontStyle: "italic",
    fontWeight: "light",
    letterSpacing: { xs: 0, sm: 12 },
    transition: "all 1.5s linear",

    // backgroundColor: "#2196f3",

    "&:hover": {
      // cursor: "pointer",
      // transition: "transform 1s cubic-bezier(.58,.12,.39,1.47)",
      // transform: "translateX(40%)",
      // transform: "translateX(10%)",
    },
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
      <Grid item xs={2} sm={2}></Grid>
      <Grid item xs={4} sm={4}>
        <Rotate />
      </Grid>

      <Grid item xs={12} sm={6}>
        <ScaleUpCenterAnimation action={action}>
          <Typography sx={localStyle.title}>Mixed Media</Typography>
        </ScaleUpCenterAnimation>
      </Grid>

      <Grid container xs={12} sm={12} sx={localStyle.gridContainerInner}>
        {itemData.map((image) => (
          <ScaleUpCenterAnimation action={action}>
            <Box
              component="img"
              sx={localStyle.box}
              src={`${image.img}`}
              // alt={`${image.title}`}
            />
          </ScaleUpCenterAnimation>
        ))}
      </Grid>
    </Grid>
  );
}

const itemData = [
  {
    img: require("../images/mixed_media/001.jpg").default,
    title: "Breakfast",
  },
  {
    img: require("../images/mixed_media/002.jpg").default,
    title: "Burger",
  },
  {
    img: require("../images/mixed_media/003.jpg").default,
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
