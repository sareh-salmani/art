import * as React from "react";

import { SRLWrapper } from "simple-react-lightbox";
import { styled } from "@mui/system";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";

const StyledButton = styled("dev")`
  background-color: black;
  color: black;
  margin: auto;
  width: 100%:
  // width: {
  //    {
  //     xs: 100%;
  //   }
  // }
  // border: 3px solid green;
  padding: 10px;
  &:hover {
    background-color: yellow;
    // border-radius: 25rem;
    box-shadow: inset 4rem 4rem 4rem 4rem yellow;
  }
  &:focus {
    background-color: green;
  }
`;

const options = {
  buttons: {
    backgroundColor: "#1b5245",
    iconColor: "rgba(126, 172, 139, 0.8)",
    showDownloadButton: false,
  },
};

export default function StandardImageList() {
  return (
    <SRLWrapper options={options}>
      <Grid
        container
        spacing={2}
        sx={{
          padding: "5rem",
          transition: "all 250ms ease",
          "&:hover": {
            boxShadow:
              "0 1.9rem 3.8rem rgba(0,0,0,0.3), 0 1,5rem 1.2rem rgba(0,0,0,0.3)",
            transform: "translate(0, -1rem)",
          },
        }}
      >
        <Grid item xs={6}>
          Sareh Salmani is an iranian Artist burn in Tehran.
        </Grid>
        <Grid item xs={6}>
          زلف آشفته و خِوی کرده و خندان لب و مست پیرهن چاک و غزل خوان و صُراحی
          در دست نرگسش عربده جوی و لبش افسوس کنان نیم شب دوش به بالین من آمد
          بنشست سر فرا گوش من آورد به آواز حزین گفت ای عاشق دیرینهٔ من خوابت
          هست؟ عاشقی را که چنین بادهٔ شبگیر دهند کافر عشق بود، گر نشود باده پرست
          برو ای زاهد و بر دُردکشان خرده مگیر که ندادند جز این تحفه به ما روز
          الست آن چه او ریخت به پیمانه ما نوشیدیم اگر از خَمر بهشت است وگر بادهٔ
          مست خنده جامِ می و زلفِ گره گیر نگار ای بسا توبه که چون توبه حافظ
          بشکست
        </Grid>
      </Grid>

      {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> */}
      {/* <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}> */}
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
              // backgroundColor: "red",
            }}
          >
            <Box
              component="img"
              sx={{
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
              }}
              // sx={[
              //   {
              //     width: "50%",
              //     height: "100%",
              //     backgroundColor: "pink",
              //     // "box-shadow": "inset 0 0 0 1rem yellow",
              //   },
              //   {
              //     "&:hover": {
              //       color: "red",
              //       backgroundColor: "black",
              //     },
              //   },
              // ]}

              // alt="The house from the offer."
              src={`${image.img}`}
            />
          </Grid>
        ))}
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
