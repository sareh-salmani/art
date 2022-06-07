import { styled } from "@mui/system";
import { Typography, keyframes } from "@mui/material";

const keyframe = keyframes`
    0% {
      -webkit-transform: rotateX(0);
              transform: rotateX(0);
    }
    100% {
      -webkit-transform: rotateX(-360deg);
              transform: rotateX(-360deg);
    }
`;

export const FlipAnimation = styled(Typography)(({ action }) => ({
  // color: "withe",
  visibility: !action && "hidden",
  // animation:
  //   action &&
  //   `${trackingInExpand} 3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both`,
  "&:hover": {
    // color: "#fff",
    animation: `${keyframe} 3s cubic-bezier(0.455, 0.030, 0.515, 0.955) both`,
  },
}));
