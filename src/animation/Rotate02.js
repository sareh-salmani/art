import { Box, styled } from "@mui/system";
import { keyframes } from "@mui/material";

const keyframe = keyframes`
0.0%{
  transform: rotate(0deg);
  right: 0%;
}
49.6%{
  transform: rotate(180deg);
  right: 0%;
}
99.5%{
  transform: rotate(360deg);
  right: 0%;
}
`;

const RotatedBox = styled(Box)({
  // visibility: !action && "hidden",
  backgroundColor: "#80deea",
  width: 20,
  height: 20,
  animation: `${keyframe} 4s linear 0s 5 normal none`,
  "&:hover": {
    // animation: `${keyframe} 8s linear 0s 5 normal none`,
    // animation: `${keyframe} 8s infinite ease`,
  },
});

export default function BasicUsage() {
  return <RotatedBox />;
}

// export const Rotate02 = styled(Box)(({ action }) => ({
//   visibility: !action && "hidden",
//   animation: `${keyframe} 4s linear 0s 5 normal none`,
//   // visibility: !action && "hidden",
//   "&:hover": {
//     // animation: `${keyframe} 8s linear 0s 5 normal none`,
//     // animation: `${keyframe} 8s infinite ease`,
//   },
// }));
