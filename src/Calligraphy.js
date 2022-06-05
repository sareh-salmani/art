import { AppBar, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

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
    pt: 8,
    mr: 0.5,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    textAlign: "center",
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
        // mt: "10rem",
        // mb: "10rem",
        bgcolor: "#90caf9",
        height: 1000,
      }}
    >
      <Grid
        container
        spacing={1}
        sx={{
          // padding: "5rem",
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
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          Coming soon...
        </Grid>
      </Grid>
    </AppBar>
  );
}
