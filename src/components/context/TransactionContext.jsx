import React, { useEffect, useState, useRef } from "react";
import { providers, Contract } from "ethers";
import Web3Modal from "web3modal";

import {
  nftContractABI,
  nftContractAddress,
  marketPlaceContractAddress,
  marketPlaceContractABI,
} from "../../Constants/index";

export const TransactionContext = React.createContext();

export const TransactionProvider = ({ children }) => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(true);
  const [nft, setNFT] = useState({});
  const [marketplace, setMarketPlace] = useState({});
  const [items, setItems] = useState([]);
  // Create a reference to the Web3 Modal (used for connecting to Metamask) which persists as long as the page is open
  const web3ModalRef = useRef();

  const getProviderOrSigner = async (needSigner = false) => {
    // Connect to Metamask
    // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    //If user is not connected to the Goerli network let them know and throw and error
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 5) {
      window.alert("Change network to Goerli Network");
      throw new Error("Change network to Goerli");
    }

    let signer = web3Provider.getSigner();
    setAddress(await signer.getAddress());
    if (needSigner) {
      return signer;
    }

    return web3Provider;
  };

  const connectWallet = async () => {
    try {
      const provider = await getProviderOrSigner();

      setWalletConnected(true);
    } catch (error) {
      console.error(error);
    }
  };
  //loading contracts
  const loadcontracts = async () => {
    try {
      const signer = await getProviderOrSigner(true);
      //get deployed copies of contracts
      const marketplace = new Contract(
        marketPlaceContractAddress,
        marketPlaceContractABI,
        signer
      );
      setMarketPlace(marketplace);
      const nft = new Contract(nftContractAddress, nftContractABI, signer);
      setNFT(nft);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  //Loading marketplace Items
  const loadMarketPlaceItems = async () => {
    const provider = await getProviderOrSigner();
    const marketplace = new Contract(
      marketPlaceContractAddress,
      marketPlaceContractABI,
      provider
    );
    const nft = new Contract(nftContractAddress, nftContractABI, provider);
    const itemCount = await marketplace.itemCount();
    let items = [];
    for (let i = 1; (i = itemCount); i++) {
      const item = await marketplace.items(i);
      if (!item.sold) {
        //get uri url from nft contract
        const uri = await nft.tokenURI(item.tokenId);
        //use the above uri to fetch the nft metadata stored on IPFS
        const response = await fetch(uri);
        const metadata = await response.json();
        //get total price of item (item price + fee)
        const totalPrice = await marketplace.getTotalPrice(item.itemId);
        //Add item to items Array
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
    const signer = await getProviderOrSigner(true);
    const marketplace = new Contract(
      marketPlaceContractAddress,
      marketPlaceContractABI,
      signer
    );
    await (
      await marketplace.purchaseItem(item.itemId, { value: item.totalPrice })
    ).wait();
    loadMarketPlaceItems();
  };

  useEffect(() => {
    loadMarketPlaceItems();
  });

  useEffect(() => {
    if (!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: "goerli",
        providerOptions: {},
        disableInjectedProvider: false,
      });
      // connectWallet();
    }
  }, [walletConnected]);

  return (
    <TransactionContext.Provider
      value={{
        connectWallet,
        walletConnected,
        address,
        loading,
        marketplace,
        nft,
        items,
        buyMarketItem,
        loadcontracts,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
