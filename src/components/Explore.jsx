import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import Loader from "./Loader";

const Explore = () => {
  return (
    <Box sx={{ background: "#b4b7bf", minHeight: "100vh" }}>
      <Toolbar />
      <Toolbar />

      <Box sx={{ display: "flex", justifyContent: "center", margin: "2%" }}>
        <Grid container spacing={2}>
          <Grid xs={12} sm={6} md={3}>
            <Card>
              <CardActionArea>
                <CardMedia component="img" height="200" alt="green iguana" />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                  ></Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  sx={{
                    background: "#000002",
                    color: "white",
                    "&:hover, &:focus": { background: "#000002" },
                  }}
                >
                  Buy for
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <Box>
          <Typography>No Listed Items</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Explore;
