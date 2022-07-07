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

//Marketplace deployed to: 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
//NFT deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3