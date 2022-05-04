import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import pic from "../assets/landingPic.png";

import { FaEthereum } from "react-icons/fa";

const Banner2 = () => {
  return (
    <Box sx={{ backgroundColor: "#b4b7bf", contain: "layout" }}>
      <Container maxWidth="xl" sx={{ paddingTop: "5%" }}>
        <Box
          sx={{
            backgroundColor: "#d1d3d7",
            borderRadius: "20px",
            position: "relative",
            //height: "400px",
          }}
        >
          <Grid container>
            <Grid item xs={12} md={4} sx={{ opacity: 0 }}>
              <Box>
                <Typography sx={{ fontSize: "48px", fontWeight: "bold" }}>
                  HEDGIE #789
                </Typography>
                <Typography sx={{ fontSize: "48px", fontWeight: "bold" }}>
                  HEDGIE #789
                </Typography>
                <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
                  Owned By Person X
                </Typography>
              </Box>
              <Box sx={{ marginTop: "15%" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <FaEthereum size={70} />
                  <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
                    987
                  </Typography>
                </Box>
                <Box sx={{ marginTop: "5%" }}>
                  <Typography sx={{ color: "#594D5B", letterSpacing: "7px" }}>
                    Some text
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4} sx={{ paddingTop: "5%" }}>
              <Box>
                <Typography sx={{ fontSize: "48px", fontWeight: "bold" }}>
                  HEDGIE #789
                </Typography>
                <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
                  Owned By Person X
                </Typography>
              </Box>
              <Box sx={{ marginTop: "15%" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <FaEthereum size={70} />
                  <Typography sx={{ fontSize: "24px", fontWeight: "bold" }}>
                    987
                  </Typography>
                </Box>
                <Box sx={{ marginTop: "5%", paddingBottom: "5%" }}>
                  <Typography sx={{ color: "#594D5B", letterSpacing: "7px" }}>
                    Some text
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{ paddingTop: "5%", display: "flex", alignItems: "center" }}
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "48px",
                    fontWeight: "bold",
                    color: "#0ce33",
                  }}
                >
                  I swear this is cool
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box
          sx={{
            paddingLeft: "5%",
            zIndex: 999,
            top: "10%",
            position: "absolute",
            borderRadius: "20px",
          }}
        >
          <img src={pic} alt="" height="300px" width="300px" />
        </Box>
      </Container>
    </Box>
  );
};

export default Banner2;
