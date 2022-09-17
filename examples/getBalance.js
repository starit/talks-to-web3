const { provider, wallet, currentAccount } = require('../web3')
const { ethers } = require("ethers");å

const main = async () => {
  const balance = await wallet.getBalance()
  console.log(currentAccount, balance.toString())
}

main()
