const { provider, wallet, currentAccount } = require('../web3')
const { ethers } = require("ethers")
const { tokens, contracts } = require('../config')
const erc20ABI = require('../abi/ERC20.json')

const main = async () => {
    const usdt = new ethers.Contract(tokens.usdt, erc20ABI, provider);
    const usdtBalance = await usdt.balanceOf(currentAccount)
    console.log(currentAccount, usdtBalance.toString())
}

main()
