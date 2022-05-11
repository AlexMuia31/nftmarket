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
import CircularProgress from "@mui/material/CircularProgress";

const Explore = ({ marketplace, nft }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadMarketplaceItems = async () => {
    const itemCount = await marketplace.itemCount();
    let items = [];
    for (let i = 1; i <= itemCount; i++) {
      const item = await marketplace.items(i);
      if (!items.sold) {
        //get url from nft contract
        const uri = await nft.tokenURI(item.tokenId);
        //use uri to fetch the nft metadata stored on ipfs
        const response = await fetch(uri);
        const metadata = await response.json();
        //get total price of item (item price + fee)
        const totalPrice = await marketplace.getTotalPrice(item.itemId);
        //Add item to items array
        items.push({
          totalPrice,
          itemId: item.itemId,
          seller: item.seller,
          name: metadata.name,
          description: metadata.description,
          image: metadata.image,
        });
      }
    }
    setItems(items);
    setLoading(false);
  };
  const buyMarketItem = async (item) => {
    await (
      await marketplace.purchaseItem(item.itemId, { value: item.totalPrice })
    ).await();
    loadMarketplaceItems();
  };
  useEffect(() => {
    loadMarketplaceItems();
  });

  if (loading)
    return (
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          background: "#b4b7bf",
        }}
      >
        <CircularProgress />
        <Typography sx={{ mt: "2%" }}>
          Connect your metamask to continue...
        </Typography>
      </Box>
    );

  return (
    <Box sx={{ background: "#b4b7bf", minHeight: "100vh" }}>
      <Toolbar />
      <Toolbar />

      <Box sx={{ display: "flex", justifyContent: "center", margin: "2%" }}>
        {items.length > 0 ? (
          <Grid container spacing={2}>
            {items.map((item, idx) => (
              <Grid item key={idx} xs={12} sm={6} md={3}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="200"
                      image={item.image}
                      alt="green iguana"
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
                      size="small"
                      sx={{
                        background: "#000002",
                        color: "white",
                        "&:hover, &:focus": { background: "#000002" },
                      }}
                      onClick={() => buyMarketItem(item)}
                    >
                      Buy for {ethers.utils.formatEther(item.totalPrice)} ETH
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
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
