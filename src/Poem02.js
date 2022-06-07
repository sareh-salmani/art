import * as React from "react";

import Grid from "@mui/material/Grid";

import { Typography } from "@mui/material";
import { style } from "./StyleCustom";

export default function StandardImageList() {
  return (
    <Grid
      container
      spacing={0}
      sx={{
        pt: { xs: "2rem", sm: "4rem" },
        pb: { xs: "2rem", sm: "4rem" },
        backgroundColor: "#311b92",
        transition: "all 250ms ease",

        "&:hover": {
          //   boxShadow:
          //     "0 1.9rem 3.8rem rgba(0,0,0,0.3), 0 1,5rem 1.2rem rgba(0,0,0,0.3)",
          //   transform: "translate(0, -1rem)",
        },
      }}
    >
      <Grid item xs={3} sm={4}></Grid>
      <Grid item xs={6} sm={4}>
        <Typography display="inline" sx={style.poemTypography}>
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
