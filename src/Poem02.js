import * as React from "react";

import Grid from "@mui/material/Grid";

import { Typography } from "@mui/material";

export default function StandardImageList() {
  return (
    <Grid
      container
      spacing={0}
      sx={{
        // mt: { xs: "10rem", sm: "35rem" },
        // mb: { xs: "10rem", sm: "35rem" },
        // backgroundColor: "#4dabf5", //blue
        backgroundColor: "#303f9f",
        transition: "all 250ms ease",

        // "&:hover": {
        //   boxShadow:
        //     "0 1.9rem 3.8rem rgba(0,0,0,0.3), 0 1,5rem 1.2rem rgba(0,0,0,0.3)",
        //   transform: "translate(0, -1rem)",
        // },
      }}
    >
      {/* <Grid item xs={5} sm={4}></Grid> */}
      <Grid item xs={3} sm={4}></Grid>
      <Grid
        item
        xs={6}
        sm={4}
        sx={{
          pt: "5rem",
          pb: "5rem",
          mt: { xs: 0, sm: "3rem" },
          mb: { xs: 0, sm: "3rem" },
        }}
      >
        <Typography
          display="inline"
          sx={{
            fontFamily: "Chilanka",
            color: "#FFFFFF",
            fontSize: { xs: 15, sm: 28 },
          }}
        >
          امروز به نرمی تن پر انحنای هوس انگیز زمان و لایه های نرم پر تحرک مکان
          (به سطح یک ماهگی و یک روزگی عمر پر از لذتم) به قصد بوسه بر لبان میان
          خواب این خزان گدازه وار به یاد تن دوباره می شوم جوان به اوج تاب ناب تک
          تک نفس ها میان لرز پر استعاره ی بدن ها
          <br />
          <br />
          ساره سلمانی
          <br /> مهر ۱۴۰۰
        </Typography>
      </Grid>
    </Grid>
  );
}
