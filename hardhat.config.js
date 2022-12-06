require("@nomiclabs/hardhat-waffle");
// add as per guide
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("@openzeppelin/hardhat-upgrades");
require('dotenv').config();


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: "0.8.13",
  networks: {
    goerli: {
        url: `https://goerli.infura.io/v3/${process.env.INFURA_API_KEY}`,
        accounts: [process.env.PRI_KEY],
      },
    mumbai: {
        url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
        accounts: [process.env.PRI_KEY],
      },    
  },
  etherscan: {
      apiKey: process.env.ETHERSCAN_API_KEY,
  },
  polyscan: {
    apiKey: process.env.POLYSCAN_API_KEY,
},
};




