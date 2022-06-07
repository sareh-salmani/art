import * as React from "react";
import { styled } from "@mui/material/styles";
import { keyframes } from "@mui/system";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const RotatedBox = styled(Typography)({
  backgroundColor: "#f57c00",
  width: 20,
  height: 20,
  animation: `${spin} 3s infinite ease`,
});

const RotatedBox2 = styled("div")({
  backgroundColor: "#e65100",
  width: 20,
  height: 20,
  animation: `${spin} 2s infinite ease`,
});

export default function BasicUsage(Typography) {
  return (
    <Box sx={{ mt: "2rem" }}>
      <RotatedBox Typography />
      <RotatedBox2 />
    </Box>
  );
}
