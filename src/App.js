import "./App.css";

import { SRLWrapper } from "simple-react-lightbox";

import ImagesList2 from "./ImagesList2";
import Nav from "./components/Nav";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { theme } from "./Style";
import Footer from "./Footer";
import Drawing from "./Drawing";
import PoemOne from "./PoemOne";
import PoemNull from "./PoemNull";
import Poem02 from "./Poem02";
import DigitalPainting from "./DigitalPainting";
import Chalcography from "./Chalcography";
import SimpleGrow from "./SimpleGrow";
import MixedMedia from "./MixedMedia";

const style = {
  buttons: {
    backgroundColor: "#1b5245",
    iconColor: "rgba(245, 223, 39, 0.8)",
    showDownloadButton: false,
  },
};

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Nav />
        <CssBaseline />
        {/* <Intro /> */}
        {/* <Container> */}
        {/* <ImagesList /> */}
        <SRLWrapper options={style}>
          <ImagesList2 />
          {/* </Container> */}

          <PoemNull />
          <Drawing />
          <PoemOne />
          <DigitalPainting />
          <Poem02 />
          <MixedMedia />
          {/* <Chalcography /> */}
          {/* <SimpleGrow /> */}

          <Footer />
        </SRLWrapper>
      </ThemeProvider>
    </div>
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
