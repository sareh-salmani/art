import { Typography } from "@mui/material";

function PoemTemplate({ text }) {
  return (
    <Typography
      display="inline"
      sx={{
        fontFamily: "Chilanka",
        color: "#FFFFFF",
        fontSize: { xs: 14, sm: 28 },
      }}
    >
      {text}
    </Typography>
  );
}

export default PoemTemplate;
