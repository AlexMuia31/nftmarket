import React from "react";
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

const MyPurchases = () => {
  return (
    <Box sx={{ background: "#b4b7bf", minHeight: "100vh" }}>
      <Toolbar />
      <Toolbar />
      <Box sx={{ display: "flex", justifyContent: "center", margin: "2%" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
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
                >
                  Buy for price
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MyPurchases;
