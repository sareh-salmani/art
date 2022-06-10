import { Box, styled } from "@mui/system";
import { keyframes } from "@mui/material";

const keyframe = keyframes`
0.0%{
    opacity: 0;
  }
40.0%{
   opacity: 1;
}
`;

export const BlinkAnimation = styled(Box)(({ action }) => ({
  visibility: !action && "hidden",
  animation: `${keyframe} 3s ease 0s infinite normal none`,
  //   action &&
  //   `${trackingInExpand} 3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both`,

  "&:hover": {
    // animation: `${keyframe} 3s ease 0s infinite normal none`,
  },
}));
