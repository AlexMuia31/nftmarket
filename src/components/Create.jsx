import React from "react";
import { Box, Button, Container, Toolbar } from "@mui/material";
import { CssTextField } from "./TextField";
import Upload from "./upload";
import { ethers } from "ethers";
import { create as ipfsHttpClient } from "ipfs-http-client";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

const Create = () => {
  return (
    <Box sx={{ backgroundColor: "#b4b7bf" }}>
      <Toolbar />
      <Toolbar />
      <Container sx={{ minHeight: "100vh" }}>
        <Box
          component="form"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Button
            component="label"
            startIcon={<UploadFileIcon />}
            sx={{ color: "black", bgcolor: "#0fe9ef" }}
          >
            <input type="file" />
          </Button>
          <CssTextField label="Name" sx={{ width: "80%", mt: "2%" }} />
          <CssTextField
            multiline
            minRows={4}
            sx={{ width: "80%", mt: "4%" }}
            placeholder="Add a Description"
          />
          <CssTextField label="Price in ETH" sx={{ width: "80%", mt: "4%" }} />
          <Button
            sx={{
              backgroundColor: "#000002",
              color: "white",
              width: "80%",
              mt: "4%",
              "&:hover,&:focus": {
                background: "#000002",
              },
            }}
          >
            Create & List NFT !
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Create;
