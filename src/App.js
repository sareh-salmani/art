import "./App.css";
import { MainComponent } from "./MainComponent";
import ImagesList from "./ImagesList";
import ImagesList2 from "./ImagesList2";
import { Container } from "@mui/material";
import Nav from "./components/Nav";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// import { ThemeProvider } from "@emotion/react";
// import { ThemeProvider } from "@mui/material/styles";

import { theme } from "./Style";
import Footer from "./Footer";
import Calligraphy from "./Calligraphy";
import Intro from "./Intro";
import PoenOne from "./PoenOne";
import PoemNull from "./PoemNull";

// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <CssBaseline />
      {/* <Intro /> */}
      <Container>
        {/* <ImagesList /> */}
        <ImagesList2 />
      </Container>

      <PoemNull />
      <Calligraphy />
      <PoenOne />

      <Footer />
    </ThemeProvider>
  );
}

export default App;

// import logo from "./logo.svg";
// import "./App.css";
// import { MainComponent } from "./MainComponent";

// function App() {
//   return <MainComponent />;
// }

// export default App;
