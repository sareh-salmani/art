import "./App.css";

import { SRLWrapper } from "simple-react-lightbox";

import ImagesList2 from "./categories/ImagesList2";
import Nav from "./categories/Nav";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { theme } from "./Style";
import Footer from "./categories/Footer";
import Drawing from "./categories/Drawing";
import Poem01 from "./poems/Poem01";
import Poem00 from "./poems/Poem00";
import Poem02 from "./poems/Poem02";
import DigitalPainting from "./categories/DigitalPainting";
import Chalcography from "./categories/Chalcography";
import SimpleGrow from "./SimpleGrow";
import MixedMedia from "./categories/MixedMedia";

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

          <Poem00 />
          <Drawing />
          <Poem01 />
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
