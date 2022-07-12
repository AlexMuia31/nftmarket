import React,{useEffect, useState,useRef} from "react";
import { ethers,providers,Contract } from "ethers";
import Web3Modal from "web3modal";


import {nftContractABI,nftContractAddress,marketPlaceContractAddress,marketPlaceContractABI} from "../../Constants/index"


export const TransactionContext = React.createContext();





export const TransactionProvider =({children})=>{

// Create a reference to the Web3 Modal (used for connecting to Metamask) which persists as long as the page is open
const web3ModalRef = useRef();


    const getProviderOrSigner = async (needSigner = false)=>{
        // Connect to Metamask
        // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
    const provider = await web3ModalRef.current.connect();
        const web3Provider = new providers.Web3Provider(provider);
    
        //If user is not connected to the Goerli network let them know and throw and error
        const {chainId} = await web3Provider.getNetwork();
        if (chainId !=== 5){
            window.alert("Change network to Goerli Network");
            throw new Error("Change network to Goerli")
        }
        if (needSigner){
            const signer=web3Provider.getSigner();
            return signer;
        }
        return web3Provider;
    }
    return(
        <TransactionContext.Provider>
            {children}
        </TransactionContext.Provider>
    )
}