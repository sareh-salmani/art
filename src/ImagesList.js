// import * as React from "react";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
// import { SRLWrapper } from "simple-react-lightbox";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import ButtonBase from "@mui/material/ButtonBase";
// import { CardActionArea } from "@mui/material";
// import Button from "@mui/material/Button";
// import CardMedia from "@mui/material/CardMedia";
// import Skeleton from "@mui/material/Skeleton";

// function srcset(image, size, rows = 3, cols = 1) {
//   return {
//     src: `${image}?w=${size + cols}&h=${size - rows}&fit=crop&auto=format`,
//     srcSet: `${image}?w=${size * cols}&h=${1}&fit=crop&auto=format&dpr=2 2x`,
//   };
// }

// // function srcset(image, size, rows = 2, cols = 1) {
// //   return {
// //     src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
// //     srcSet: `${image}?w=${size * cols}&h=${
// //       size * rows
// //     }&fit=crop&auto=format&dpr=2 2x`,
// //   };
// // }

// export default function ImagesList() {
//   return (
//     <SRLWrapper>
//       <Box sx={{ pt: 20, width: "100%" }}>
//         <Typography
//           sx={{
//             p: 5,
//             fontFamily: "Monospace",
//             fontStyle: "italic",
//             fontWeight: "light",
//             letterSpacing: 6,
//             textAlign: "center",
//           }}
//         >
//           Digital Arts
//         </Typography>
//       </Box>
//       <ImageList variant="quilted" cols={4} rowHeight={121}>
//         {itemData.map((item) => (
//           <ImageListItem
//             key={item.img}
//             cols={item.cols || 1}
//             rows={item.rows || 1}
//             sx={{ m: 1 }}
//           >
//             <Box sx={{ width: 300 }}>
//               <Skeleton />
//               <Skeleton animation="wave" />
//               <Skeleton animation={false} />
//             </Box>

//             {/* <Box>
//               <img
//                 {...srcset(item.img, 121, item.rows, item.cols)}
//                 alt={item.title}
//                 loading="lazy"
//               />
//               <Skeleton />
//               <Skeleton animation="wave" />
//               <Skeleton animation={false} />
//             </Box> */}

//             {/* <Button> */}
//             <img
//               {...srcset(item.img, 121, item.rows, item.cols)}
//               alt={item.title}
//               loading="lazy"
//             />
//             {/* </Button> */}

//             {/* <img
//               {...srcset(item.img, 121, item.rows, item.cols)}
//               alt={item.title}
//               loading="lazy"
//             /> */}
//           </ImageListItem>
//         ))}
//       </ImageList>
//     </SRLWrapper>
//   );
// }

// const itemData = [
//   {
//     img: require("./images/01.jpg").default,
//     title: "Breakfast",
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: require("./images/02.png").default,
//     title: "Burger",
//   },
//   {
//     img: require("./images/03.png").default,
//     title: "Camera",
//   },
//   {
//     img: require("./images/04.png").default,
//     title: "Coffee",
//     cols: 2,
//   },
//   {
//     img: require("./images/05.png").default,
//     title: "Hats",
//     cols: 2,
//   },
//   {
//     img: require("./images/06.png").default,
//     title: "Honey",
//     author: "@arwinneil",
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: require("./images/07.jpeg").default,
//     title: "Honey",
//     author: "@arwinneil",
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: require("./images/08.jpeg").default,
//     title: "Honey",
//     author: "@arwinneil",
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: require("./images/09.jpeg").default,
//     title: "Honey",
//     author: "@arwinneil",
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: require("./images/10.jpeg").default,
//     title: "Honey",
//     author: "@arwinneil",
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: require("./images/11.jpeg").default,
//     title: "Honey",
//     author: "@arwinneil",
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: require("./images/12.jpeg").default,
//     title: "Honey",
//     author: "@arwinneil",
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: require("./images/13.jpeg").default,
//     title: "Honey",
//     author: "@arwinneil",
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: require("./images/14.jpeg").default,
//     title: "Honey",
//     author: "@arwinneil",
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: require("./images/15.jpeg").default,
//     title: "Honey",
//     author: "@arwinneil",
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: require("./images/16.jpeg").default,
//     title: "Honey",
//     author: "@arwinneil",
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: require("./images/17.jpeg").default,
//     title: "Honey",
//     author: "@arwinneil",
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: require("./images/18.jpeg").default,
//     title: "Honey",
//     author: "@arwinneil",
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: require("./images/19.jpeg").default,
//     title: "Honey",
//     author: "@arwinneil",
//     rows: 2,
//     cols: 2,
//   },
// ];
