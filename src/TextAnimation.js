import { styled } from "@mui/system";
import { Typography, keyframes } from "@mui/material";

const trackingInExpand = keyframes`
      0% {
        letter-spacing: -0.5em;
        opacity: 0;
      }
      40% {
        opacity: 0.6;
      }
      100% {
        opacity: 1;
      }
`;

export const TextAnimation = styled(Typography)(({ action }) => ({
  // color: "#311b92",
  color: "withe",
  visibility: !action && "hidden",
  // animation:
  //   action &&
  //   `${trackingInExpand} 3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both`,
  "&:hover": {
    color: "#fff",
    animation: `${trackingInExpand} 3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both`,
  },
}));
