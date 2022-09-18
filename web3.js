require('dotenv-flow').config();
const { ethers } = require("ethers");
const pkProvider = require('./pkProvider')
const networkProvider = require('./networkProvider')
const network = process.env.NETWORK_NAME || networkProvider.currentNetwork.rpc
// For more info, visit: https://docs.ethers.io/v5/api/providers/#providers-getDefaultProvider
const provider = ethers.getDefaultProvider(network, {
  etherscan: process.env.YOUR_ETHERSCAN_API_KEY,
  infura: process.env.YOUR_INFURA_PROJECT_ID,
  // Or if using a project secret:
  // infura: {
  //   projectId: YOUR_INFURA_PROJECT_ID,
  //   projectSecret: YOUR_INFURA_PROJECT_SECRET,
  // },
  // alchemy: process.env.YOUR_ALCHEMY_API_KEY,
  // pocket: process.env.YOUR_POCKET_APPLICATION_KEY,
  //   // Or if using an application secret key:
  //   // pocket: {
  //   //   applicationId: ,
  //   //   applicationSecretKey:
  //   // },
  // ankr: process.env.YOUR_ANKR_API_KEY
});

if (!pkProvider.currentPk) {
  throw new Error('Empty pk')
}

const pk = pkProvider.currentPk // process.env.DEVELOPER_ACCOUNT_PK

const wallet = new ethers.Wallet(pk, provider)

let account = ethers.utils.computeAddress(pk)

let currentAccount = wallet.address

if (account != currentAccount) {
  throw new Error('Computed account does not match')
}

let walletAddress = account.address

module.exports = {
  ethers,
  provider,
  wallet,
  currentAccount,
}
