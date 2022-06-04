import { createTheme } from "@mui/material/styles";

// Create a theme instance.
export const theme = createTheme({
  palette: {
    background: {
      //   default: "#212121",
      //   default: "#263238",
      default: "#fafafa",
      //   default: "#607d8b",
      //   default: "#222222",
      //   paper: "#222222",
      paper: "#607d8b",
    },
    primary: {
      //   main: "#263238",
      //   main: "#ffd600", // gelb
      main: "#ffeb3b", // gelb
      //   main: "#ffc107", // gelb
      //   bgcolor: "#222222",
      bgcolor: "#607d8b",
    },
    secondary: {
      main: "#0f0",
    },
  },
});

// export const theme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });
