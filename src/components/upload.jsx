import { Box, Typography } from "@mui/material";
import React from "react";

import { FaUpload } from "react-icons/fa";

const Upload = () => {
  return (
    <Box
      sx={{
        border: "1px solid grey",
        display: "flex",
        width: "50%",
        mb: "2%",
        mt: "1%",
        height: "20px",
      }}
    >
      <Box
        sx={{
          background: "grey",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography>Choose File</Typography>
        <FaUpload />
      </Box>
      <Box sx={{}}>
        <Typography></Typography>
      </Box>
    </Box>
  );
};

export default Upload;
