import { Box, styled } from "@mui/system";
import { keyframes } from "@mui/material";

const keyframe = keyframes`
0.0%{
  right: 0%;
}
50.2%{
  transform: translate(50px);
  right: 0%;
}
99.5%{
  transform: translate(0px);
  right: 0%;
}
`;

export const TransformRightAndBack = styled(Box)(({ action }) => ({
  visibility: !action && "hidden",
  // animation:
  //   action &&
  //   `${trackingInExpand} 3s cubic-bezier(0.215, 0.610, 0.355, 1.000) both`,
  "&:hover": {
    animation: `${keyframe} 3s ease 0s 1 normal none`,
  },
}));
