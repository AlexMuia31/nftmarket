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
import MarketplaceAbi from "./Marketplace.json";
import NFTAbi from "./NFT.json";

const MarketplaceAddress = "0xa005fDf3A53AddcB80b041B0A3a018d8B381aC1a";
const NFTAddress = "0xD5896f1F9DC8B98e84c30a2aC559d63Eba4dD1bd";

function App() {
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [nft, setNFT] = useState({});
  const [marketplace, setMarketplace] = useState({});
  //MetaMask login/Connect
  const web3Handler = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    }); //getting accounts from metamask
    setAccount(accounts[0]);
    //Get provider from Metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    //Set signer
    const signer = provider.getSigner();
    loadContracts(signer);
  };
  const loadContracts = async (signer) => {
    //Get deployed copies of contracts
    const marketplace = new ethers.Contract(
      MarketplaceAddress,
      MarketplaceAbi.abi,
      signer
    );
    setMarketplace(marketplace);
    const nft = new ethers.Contract(NFTAddress, NFTAbi.abi, signer);
    setNFT(nft);
    //set loading to false when the contract loads
    setLoading(false);
  };

  return (
    <Container maxWidth="xxl" disableGutters={true}>
      <NavBar account={account} web3Handler={web3Handler} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route
          path="/explore"
          element={<Explore marketplace={marketplace} nft={nft} />}
        />
        <Route path="/myPurchases" element={<MyPurchases />} />
      </Routes>
    </Container>
  );
}

export default App;
