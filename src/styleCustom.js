export const style = {
  gridContainer: {
    pb: { xs: "2rem", md: "5rem" },
    // backgroundColor: "#42a5f5", // blue
    // backgroundColor: "#b39ddb", // deep purpule
    // backgroundColor: "#9575cd", // deep purpule
    backgroundColor: "#b388ff", // deep purpule
  },
  gridItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    display: "flex",
    justifyContent: "center",
    pt: { xs: 25, sm: 45 },
    pb: { xs: 25, sm: 45 },
    fontSize: { xs: "h5.fontSize", sm: "24px" },
    fontFamily: "Monospace",
    fontStyle: "italic",
    fontWeight: "light",
    letterSpacing: { xs: 0, sm: 12 },
    transition: "all 1.5s linear",

    // backgroundColor: "#2196f3",

    "&:hover": {
      // cursor: "pointer",
      // transition: "transform 1s cubic-bezier(.58,.12,.39,1.47)",
      // transform: "translateX(40%)",
      transform: "translateX(10%)",
    },
  },
  buttons: {
    backgroundColor: "#1b5245",
    iconColor: "rgba(245, 223, 39, 0.8)",
    showDownloadButton: false,
  },
  boxDigitalPainting: {
    width: 400,
    height: 500,
    backgroundColor: "primary.dark",
    margin: "1rem",
    border: 5,

    "&:hover": {
      cursor: "pointer",
      backgroundColor: "primary.main",
      opacity: [0.9, 0.8, 0.5],
      border: 15,
      borderColor: "text.primary",
      borderRadius: "10%",
    },
  },
  chalcographyBox: {
    width: 200,
    height: 300,
    backgroundColor: "black",
    margin: "1rem",
    border: 5,

    "&:hover": {
      cursor: "pointer",
      // backgroundColor: "primary.main",
      opacity: [0.1, 0.5, 0.5],
      border: 35,
      borderColor: "text.primary",
      borderRadius: "5%",
    },
  },
  poemTypography: {
    fontFamily: "Chilanka",
    color: "#FFFFFF",
    fontSize: { xs: 14, sm: 24 },
  },
  poemGridContainer: {
    pt: "2rem",
    pb: "2rem",
    mt: { xs: "1rem", sm: "2rem" },
    mb: { xs: "1rem", sm: "2rem" },
  },
  poemGridItem: {
    pt: "2rem",
    pb: "2rem",
    mt: { xs: 0, sm: "2rem" },
    mb: { xs: 0, sm: "2rem" },
  },
};
