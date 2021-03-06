require("@nomiclabs/hardhat-waffle");
const dotenv = require("dotenv");

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: process.env.REACT_ALCHEMY_RPC_URL,
      accounts: [process.env.GOERLI_PRIVATE_KEY],
    },
  },
};

// Marketplace deployed to: 0x66773e73C0B5Edc5dc4FeD51b582d24559d13F01
// NFT deployed to: 0x2BafFdff25Ab94591A8A05c606bbbCFE3733b4f8