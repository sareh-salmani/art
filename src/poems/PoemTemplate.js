import * as React from "react";
import { Typography } from "@mui/material";

const style = {
  typography: {
    fontFamily: "Chilanka",
    color: "#FFFFFF",
    fontSize: { xs: 14, sm: 24 },
  },
  poet: {
    pt: { xs: "2rem", sm: "3rem" },
  },
};

export default function Poem(props) {
  return (
    <Typography sx={style.typography}>
      {props.text}
      <Typography sx={style.poet}>ساره سلمانی</Typography>
    </Typography>
  );
}
