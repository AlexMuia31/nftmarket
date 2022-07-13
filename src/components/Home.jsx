import { Box } from "@mui/material";
import React from "react";
import Banner from "./Banner";
import Banner2 from "./Banner2";

const Home = () => {
  return (
    <Box sx={{ height: "100vh" }}>
      <Banner />
      <Banner2 />
    </Box>
  );
};

export default Home;
