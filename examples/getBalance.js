const { ethers, provider, wallet, currentAccount } = require('../web3')

const main = async () => {
  const balance = await wallet.getBalance()
  console.log(currentAccount, balance.toString())
}

main()
