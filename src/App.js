import "./App.css";
import ImagesList2 from "./ImagesList2";
import Nav from "./components/Nav";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { theme } from "./Style";
import Footer from "./Footer";
import Calligraphy from "./Calligraphy";
import PoemOne from "./PoemOne";
import PoemNull from "./PoemNull";
import DigitalPainting from "./DigitalPainting";

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
      {/* <Container> */}
      {/* <ImagesList /> */}
      <ImagesList2 />
      {/* </Container> */}

      <PoemNull />
      <Calligraphy />
      <PoemOne />

      <DigitalPainting />

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
