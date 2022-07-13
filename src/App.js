import { Container } from "@mui/material";
import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import Home from "./components/Home";
import Explore from "./components/Explore";
import MyPurchases from "./components/MyPurchases";
import { ethers } from "ethers";
import { useState } from "react";

function App() {
  return (
    <Container maxWidth="xxl" disableGutters={true}>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/myPurchases" element={<MyPurchases />} />
      </Routes>
    </Container>
  );
}

export default App;
