import React,{useEffect, useState} from "react";
import { ethers } from "ethers";


import {nftContractABI,nftContractAddress,marketPlaceContractAddress,marketPlaceContractABI} from "../../Constants/index"


export const TransactionContext = React.createContext();



export const TransactionProvider =({children})=>{
    return(
        <TransactionContext.Provider>
            {children}
        </TransactionContext.Provider>
    )
}