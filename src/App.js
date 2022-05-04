import { Container, Toolbar } from "@mui/material";
import "./App.css";
import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Container maxWidth="xxl" disableGutters={true}>
      <NavBar />
      <Banner />
      <Banner2 />
    </Container>
  );
}

export default App;
