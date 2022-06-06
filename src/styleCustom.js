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
    pb: { xs: 35, md: 50 },
    pt: { xs: 35, md: 50 },
    fontSize: { xs: "h7.fontSize", md: "h5.fontSize" },
    fontFamily: "Monospace",
    fontStyle: "italic",
    fontWeight: "light",
    letterSpacing: { xs: 0, md: 20 },
    // backgroundColor: "#2196f3",
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
};
