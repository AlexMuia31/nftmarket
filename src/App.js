import { Container } from "@mui/material";
import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import Home from "./components/Home";
import Explore from "./components/Explore";

function App() {
  return (
    <Container maxWidth="xxl" disableGutters={true}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </Container>
  );
}

export default App;
