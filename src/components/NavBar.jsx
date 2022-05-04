import React from "react";
import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import logo from "../assets/logo.svg";

const NavBar = () => {
  return (
    <Box>
      <AppBar sx={{ backgroundColor: "#000002" }}>
        <Toolbar>
          <Container maxWidth="xl" sx={{ display: "flex" }}>
            <Box sx={{ flex: 0.3, alignItems: "center", display: "flex" }}>
              <img src={logo} height="100px" alt="logo" />
            </Box>
            <Box
              sx={{
                flex: 0.5,
                justifyContent: "space-between",
                alignItems: "center",
                display: { xs: "none", sm: "flex" },
              }}
            >
              <Box sx={{ cursor: "pointer" }}>Explore</Box>
              <Box sx={{ cursor: "pointer" }}>Collectors</Box>
              <Box sx={{ cursor: "pointer" }}>Create</Box>
              <Box sx={{ cursor: "pointer" }}>Resources</Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                flex: 0.2,
                alignItems: "center",
              }}
            >
              <Button
                sx={{
                  border: "1px solid white",
                  color: "white",
                  borderRadius: "20px",
                  height: "50px",
                }}
              >
                Connect Wallet
              </Button>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
