require("@nomicfoundation/hardhat-toolbox");

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");
require('@nomiclabs/hardhat-ethers')

/** @type import('hardhat/config').HardhatUserConfig */

const API_URL = "https://eth-goerli.g.alchemy.com/v2/";
const PRIVATE_KEY = "336e3610778729105b91d2d5419c8e68"
const PUBLIC_KEY = "0x36D22f8c3b043C716d903EE767D1337fAEDc3fA8";

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "goerli",
  networks: {
    hardhat:{},
    goerli:{
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
