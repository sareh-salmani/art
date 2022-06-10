import * as React from "react";

import { Grid } from "@mui/material";
import PoemTemplate from "./PoemTemplate";
import { poems } from "./Poems";

const style = {
  gridContainer: {
    pt: { xs: "2rem", sm: "4rem" },
    pb: { xs: "2rem", sm: "4rem" },
    backgroundColor: "#1a237e",
  },
};

export default function Poem() {
  return (
    <Grid container sx={style.gridContainer}>
      <Grid item xs={1} sm={1}></Grid>

      <Grid item xs={8} sm={6}>
        <PoemTemplate text={poems.poem01} />
      </Grid>
    </Grid>
  );
}
