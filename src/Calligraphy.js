import { AppBar, Typography, Link } from "@mui/material";
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Grid";

import { theme } from "./Style";

const greyConst = grey[800];

const style = {
  centralizer: {
    m: 5,
    display: "flex",
    alignContent: "center",
    justifyContent: "space-around",
  },
  menuIcon: {
    bgcolor: "black",
    m: 5,
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 68,
    mr: 0.5,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  link: {
    display: "flex",
    direction: "column",
    // bgcolor: greyConst,
    bgcolor: "theme.primary.main",
    color: "white",
    fontSize: 14,
    m: 1,
  },
};

export default function Footer() {
  return (
    <AppBar
      position="static"
      sx={{
        mt: "10rem",
        mb: "10rem",
        bgcolor: "#90caf9",
        height: 1000,
      }}
    >
      <Grid
        container
        spacing={1}
        sx={{
          padding: "5rem",
          backgroundColor: "#90caf1",
          transition: "all 250ms ease",
          "&:hover": {
            boxShadow:
              "0 1.9rem 3.8rem rgba(0,0,0,0.3), 0 1,5rem 1.2rem rgba(0,0,0,0.1)",
            transform: "translate(0, -3rem)",
          },
        }}
      >
        <Grid item xs={12}>
          <Typography sx={style.title}>Calligraphy</Typography>
        </Grid>
        <Grid item xs={12}>
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
    </AppBar>
  );
}
