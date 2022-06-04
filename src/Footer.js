import { AppBar, Typography, Link } from "@mui/material";
import { Box } from "@mui/system";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { grey } from "@mui/material/colors";
// import Links from "./Links";

import { theme } from "./Style";

const greyConst = grey[800];

const style = {
  centralizer: {
    m: 5,
    display: "flex",
    alignContent: "center",
    justifyContent: "space-around",
  },
  menuIcon: {
    bgcolor: "black",
    m: 5,
  },
  typography: {
    fontSize: 14,
    mr: 0.5,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  link: {
    display: "flex",
    direction: "column",
    // bgcolor: greyConst,
    bgcolor: "theme.primary.main",
    color: "white",
    fontSize: 14,
    m: 1,
  },
};

export default function Footer() {
  return (
    <AppBar position="static" sx={{ bgcolor: "theme.primary.main" }}>
      {/* Copyright (c) */}
      <Box sx={style.centralizer}>
        <Box>
          <Box sx={{ display: "flex" }}>
            <CopyrightIcon sx={{ fontSize: "medium", mr: 0.5 }} />
            <Typography sx={style.typography}>
              All rights reserved by Sareh Salmani
            </Typography>
          </Box>

          <Typography sx={style.typography}>
            created by&nbsp;
            <Link
              sx={{ color: "#4fc3f7", mr: 1 }}
              href="http://instagram.com/ehsan.pd_?r=nametag"
              target="_blank"
            >
              Ehsan Salmani
            </Link>
            | 2022
          </Typography>
        </Box>
      </Box>
    </AppBar>
  );
}

// export default function Footer() {
//   return (
//     <AppBar position="static" sx={{ bgcolor: "theme.primary.main" }}>
//       {/* Copyright (c) */}
//       <Box sx={style.centralizer}>
//         <Box sx={{ display: "flex" }}>
//           <Typography sx={style.typography}>
//             All rights reserved by Sareh Salmani
//           </Typography>
//           <CopyrightIcon sx={{ fontSize: "medium", mr: 0.5 }} />
//           <Typography sx={style.typography}>
//             <Link
//               sx={{ color: "#4fc3f7", mr: 1 }}
//               href="http://instagram.com/ehsan.pd_?r=nametag"
//               target="_blank"
//             >
//               created by Ehsan Salmani
//             </Link>
//             | 2021
//           </Typography>
//         </Box>
//       </Box>
//     </AppBar>
//   );
// }
