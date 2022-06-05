import * as React from "react";

import Grid from "@mui/material/Grid";

import { Typography } from "@mui/material";

export default function StandardImageList() {
  return (
    <Grid
      container
      spacing={0}
      sx={{
        pt: "10rem",
        pb: "10rem",
        backgroundColor: "#1a237e",
        transition: "all 250ms ease",

        // "&:hover": {
        //   boxShadow:
        //     "0 1.9rem 3.8rem rgba(0,0,0,0.3), 0 1,5rem 1.2rem rgba(0,0,0,0.3)",
        //   transform: "translate(0, -1rem)",
        // },
      }}
    >
      <Grid item xs={1} sm={1}></Grid>
      <Grid item xs={8} sm={6}>
        <Typography
          display="inline"
          sx={{
            fontFamily: "Chilanka",
            color: "#FFFFFF",
            fontSize: { xs: 14, sm: 24 },
          }}
        >
          به مستی رخساره وار رقصید زمین و عبور کرد تا کرانه های خودکامگی. ستاره
          شد زمین و به درخشش شامگاه بوسه وار چرخید و چرخید. نقش شد تا ابد محکوم
          شد اما در کنار خیال نرم باران محو شد. صدا که از خموشی سکوت یاد گرفته
          بود نظاره گر شود صبور شد. آفتاب که تابش نورش نشان هستی بود به شب پیاله
          شد روانه شد. و امروز به ناز روز تازه ای هوای جان به جان و روح باده ای
          حواله شد. زمان ؛ که پنج حالت جهان را به پنج ساعت و پنج دقیقه اش اشاره
          بود میان رعد سرخ بی مکانی عالم سکوت شد .
          <br />
          <br />
          ساره سلمانی
        </Typography>
      </Grid>
      <Grid item xs={6} sm={4} sx={{}}></Grid>
    </Grid>
  );
}
