import { Box, Typography } from '@mui/material'
import CircularProgress from "@mui/material/CircularProgress";
import React from 'react'

const Loader = () => {
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
  )
}

export default Loader