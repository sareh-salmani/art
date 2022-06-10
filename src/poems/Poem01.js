import * as React from "react";

import Grid from "@mui/material/Grid";

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
      <Grid item xs={5} sm={6}></Grid>

      <Grid item xs={6} sm={4}>
        <PoemTemplate text={poems.poem02} />
      </Grid>
    </Grid>
  );
}
