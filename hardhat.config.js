require("@nomicfoundation/hardhat-toolbox");

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
require("./tasks/faucet");
require('@nomiclabs/hardhat-ethers')

/** @type import('hardhat/config').HardhatUserConfig */

const API_URL = "https://ropsten.infura.io/v3/041cd61ca4474f298e33d2e5ebeb2d00";
const PRIVATE_KEY = "ed9ecbb246462ee1a7880279faeb06af336e3610778729105b91d2d5419c8e68"
const PUBLIC_KEY = "0x36D22f8c3b043C716d903EE767D1337fAEDc3fA8";

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "ropsten",
  networks: {
    hardhat:{},
    ropsten:{
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};
