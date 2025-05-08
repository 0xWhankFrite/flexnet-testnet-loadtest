require("@nomiclabs/hardhat-waffle");

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

require("@nomiclabs/hardhat-etherscan");
require('dotenv').config()
module.exports = {
  solidity: "0.8.13",
  defaultNetwork: "FlexNet Testnet",
  networks: {
    testnet: {
      chainId: 281329,
      url: "https://rpc-testnet.flexnet.tech",
      accounts: (process.env.PKEYS || '').split(','),
      gasPrice: 8000000000,
    }
  },
  etherscan: {
     apiKey: {
        testnet: '0',
     }
  }
};

const { chainConfig } = require("@nomiclabs/hardhat-etherscan/dist/src/ChainConfig");
chainConfig['testnet'] = {
  chainId: 281329,
  urls: {
    apiURL: "https://scan-testnet.flexnet.tech/api",
    browserURL: "https://scan-testnet.flexnet.tech",
  },
}
