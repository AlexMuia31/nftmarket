import React from "react";
import { Box, Button, Container, Toolbar } from "@mui/material";
import { CssTextField } from "./TextField";
import Upload from "./upload";

const Create = () => {
  return (
    <Box sx={{ backgroundColor: "#b4b7bf", minHeight: "100vh" }}>
      <Toolbar />
      <Toolbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Upload />
        <CssTextField label="Name" sx={{ width: "50%" }} />
        <CssTextField
          sx={{
            width: "50%",
            mt: "2%",
          }}
          multiline
          minRows={5}
          placeholder="Add a description"
        />
        <CssTextField label="Price in ETH" sx={{ width: "50%", mt: "2%" }} />
        <Button
          sx={{
            backgroundColor: "#000002",
            color: "white",
            width: "50%",
            mt: "2%",
            "&:hover,&:focus": {
              background: "#000002",
            },
          }}
        >
          Create & List NFT !
        </Button>
      </Box>
    </Box>
  );
};

export default Create;
