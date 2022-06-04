import * as React from "react";

import { SRLWrapper } from "simple-react-lightbox";
import { styled } from "@mui/system";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Avatar from "@mui/material/Avatar";
import avatar from "./images/intro/0002-bw.jpg";
import { AppBar, Typography, Link } from "@mui/material";

const options = {
  buttons: {
    backgroundColor: "#1b5245",
    iconColor: "rgba(126, 172, 139, 0.8)",
    showDownloadButton: false,
  },
};

export default function StandardImageList() {
  return (
    <Grid
      container
      spacing={0}
      sx={{
        // mt: { xs: "10rem", sm: "35rem" },
        // mb: { xs: "10rem", sm: "35rem" },
        // backgroundColor: "#4dabf5", //blue
        backgroundColor: "#311b92",
        transition: "all 250ms ease",

        "&:hover": {
          boxShadow:
            "0 1.9rem 3.8rem rgba(0,0,0,0.3), 0 1,5rem 1.2rem rgba(0,0,0,0.3)",
          transform: "translate(0, -1rem)",
        },
      }}
    >
      <Grid item xs={5} sm={6}></Grid>
      <Grid
        item
        xs={6}
        sm={4}
        sx={{
          pt: "10rem",
          pb: "10rem",
          mt: { xs: 0, sm: "8rem" },
          mb: { xs: 0, sm: "8rem" },
        }}
      >
        <Typography
          display="inline"
          sx={{
            fontFamily: "Chilanka",
            color: "#FFFFFF",
            fontSize: { xs: 14, sm: 24 },
          }}
        >
          دامن کشان چنان زیبا در حال پروازم که تمام قناری های کنج دلی را می بینم
          که می تابند که می سازند و می فهمند طلوع نفس را به هر صبح همچون شبنمک
          های شفاف آغوش به دلبری به نرمی لبخند سازگار سار و علف های نرم و خنک
          انزلی و تا هیجان های پر رونق ریمایی عبور کردیم از آبشار واژه ها تا صبح
          تا دریا تا کناره ی قایق مستی به ذوق لب ها که سرخ تر از رخ ارغوانی
          انگور شراب مزه می شود من را چه ناز دلبرانه تر از تن صدف ها آنگاه که
          کژال وار مثال دخترکی زیبا رو به دنیا نگاه میکنم . شنیدن را آموختم در
          کنارشان و صبوری درک سختی را به لبخندی به نگاهی به پنجره ی کنج خانه از
          آرامش و به زیبایی طلوع در ساحل پی بردم که چه زیباست دلتنگی در آغوش
          کشیدن هر چند به فکری به ذوقی به
          <br />
          <br />
          ساره سلمانی
        </Typography>
      </Grid>
    </Grid>
  );
}
