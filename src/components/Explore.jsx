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
import { useContext } from "react";
import { TransactionContext } from "./context/TransactionContext";

const Explore = () => {
  const { items, loading, buyMarketItem } = useContext(TransactionContext);
  // if (loading) return <Loader />;
  return (
    <Box sx={{ background: "#b4b7bf", minHeight: "100vh" }}>
      <Toolbar />
      <Toolbar />

      <Box sx={{ display: "flex", justifyContent: "center", margin: "2%" }}>
        {items.length > 0 ? (
          <Grid container spacing={2}>
            {items.map((item, idx) => {
              <Grid key={idx} xs={12} sm={6} md={3}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      alt="nft"
                      image={item.image}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      onClick={() => buyMarketItem(item)}
                      size="small"
                      sx={{
                        background: "#000002",
                        color: "white",
                        "&:hover, &:focus": { background: "#000002" },
                      }}
                    >
                      Buy for {ethers.utils.formatEther(item.totalPrice)} ETH
                    </Button>
                  </CardActions>
                </Card>
              </Grid>;
            })}
          </Grid>
        ) : (
          <Box>
            <Typography>No Listed Items</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Explore;
