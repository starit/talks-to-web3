const { ethers, currentAccount } = require('../web3')
const debank = require('../src/products/debank')
const BigNumber = require('bignumber.js');

const welcomeMsg = `
  Welcome to web3 world!
  Your Address: 
    * DeBank Total Assets Value: 
`

const showFirstMsg = () => {
  console.log('Welcome to the Web3 world!')
  console.log('  Your current address:', currentAccount)
}

const showTotalAssetsValue = async () => {
  const totalBalance = await debank.totalBalance(currentAccount)
  console.log('    * Your Total USD Value (DeBank): ', totalBalance.total_usd_value)
}

const showMajorMarketInfo = async () => {
  // const marketInfo = 
  console.log('---- Major Market Info ---- ')
  console.log(' * BTC USD Price: ', 38000)
  console.log(' * ETH USD Price: ', 3000)
  console.log('---- Major Market End  ---- ')
}

const formatGasPrice = (gasPrice) => {
  return new BigNumber(gasPrice).div(1e9).toFormat()
  // return ethers.utils.fromWei(gasPrice, 'gwei').toString()
}

const showGasPrice = async () => {
  const gasPrice = await debank.getGasPrice('eth')
  console.log('ETH Gas Price (Normal):', formatGasPrice(gasPrice[1].price), 'gwei')
  console.log('ETH Gas Price (Fast):  ', formatGasPrice(gasPrice[2].price), 'gwei')
}

const main = async () => {
  showFirstMsg()
  // await showTotalAssetsValue()
  await showMajorMarketInfo()
  // await showGasPrice()
}

main()
