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
          // boxShadow:
          //   "0 1.9rem 3.8rem rgba(0,0,0,0.3), 0 1,5rem 1.2rem rgba(0,0,0,0.3)",
          // transform: "translate(0, -1rem)",
        },
      }}
    >
      <Grid item xs={5} sm={6}></Grid>
      <Grid item xs={6} sm={4}>
        <Typography sx={style.poemTypography}>
          دامن کشان چنان زیبا در حال پروازم که تمام قناری های کنج دلی را می بینم
          که می تابند که می سازند و می فهمند طلوع نفس را به هر صبح همچون شبنمک
          های شفاف آغوش به دلبری به نرمی لبخند سازگار سار و علف های نرم و خنک
          انزلی و تا هیجان های پر رونق ریمایی عبور کردیم از آبشار واژه ها تا صبح
          تا دریا تا کناره ی قایق مستی به ذوق لب ها که سرخ تر از رخ ارغوانی
          انگور شراب مزه می شود من را چه ناز دلبرانه تر از تن صدف ها آنگاه که
          کژال وار مثال دخترکی زیبا رو به دنیا نگاه میکنم . شنیدن را آموختم در
          کنارشان و صبوری درک سختی را به لبخندی به نگاهی به پنجره ی کنج خانه از
          آرامش و به زیبایی طلوع در ساحل پی بردم که چه زیباست دلتنگی در آغوش
          کشیدن هر چند به فکری به ذوقی به نازی
          <br />
          <br />
          ساره سلمانی
        </Typography>
      </Grid>
    </Grid>
  );
}
