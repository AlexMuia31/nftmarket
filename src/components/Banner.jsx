import {
  Avatar,
  Box,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import logo from "../assets/logo.svg";
import React from "react";

const Banner = () => {
  return (
    <Box sx={{ backgroundColor: "#000002", paddingBottom: "2%" }}>
      <Toolbar />
      <Toolbar />
      <Container maxWidth="xl">
        <Grid container>
          <Grid item sx={{ color: "white", fontSize: "48px" }} md={5}>
            <Typography
              sx={{
                fontSize: "60px",
                fontWeight: "bold",
                letterSpacing: "10px",
              }}
            >
              Create{" "}
            </Typography>
            <Typography
              sx={{
                fontSize: "60px",
                fontWeight: "bold",
                letterSpacing: "10px",
              }}
            >
              {" "}
              Your Own{" "}
            </Typography>
            <Typography
              sx={{
                fontSize: "60px",
                fontWeight: "bold",
                color: "#0fe9ef",
                letterSpacing: "10px",
              }}
            >
              NFT Dream
            </Typography>
            <Typography
              sx={{
                fontSize: "60px",
                fontWeight: "bold",
                letterSpacing: "10px",
              }}
            >
              Gallery
            </Typography>
          </Grid>
          <Grid item md={7}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                border: "1px solid #0fe9ef",
                borderRadius: "20px",
                mt: "2%",
              }}
            >
              <Avatar />
              <Typography sx={{ color: "#0fe9ef" }}>
                Check out the artwork gallery
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "#0fe9ef",
                  margin: "2px",
                  borderRadius: "20px",
                  width: "5%",
                }}
              >
                <ArrowRightAltIcon />
              </Box>
            </Box>
            <Box sx={{ mt: "3%" }}>
              <Typography
                sx={{
                  color: "#707071 !important",
                  letterSpacing: "5px",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                Digital marketplace for crypto collectibles and non-fungible
                tokens (NFTs)
              </Typography>
            </Box>
            <Grid
              container
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: "3%",
              }}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid #0fe9ef",
                    height: "150px",
                    width: "150px",
                    borderRadius: "50%",
                  }}
                >
                  <img src={logo} alt="" />
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box sx={{ color: "white" }}>
                  <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
                    24.5M+
                  </Typography>
                  <Typography
                    sx={{ color: "grey !important", fontWeight: "bold" }}
                  >
                    Art Work
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box sx={{ color: "white" }}>
                  <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
                    24.5k
                  </Typography>
                  <Typography
                    sx={{ color: "grey !important", fontWeight: "bold" }}
                  >
                    Artists
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box sx={{ color: "white" }}>
                  <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
                    24.5k
                  </Typography>
                  <Typography>Art Work</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
