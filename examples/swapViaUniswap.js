const { ethers, provider, wallet, currentAccount } = require('../web3')
const erc20ABI = require('../abi/ERC20.json')
const { contracts, tokens } = require('../config')
const { getPriceFromOneSplit } = require('../src/agents/swap')
const { ETH_ADDRESS, getDisableAllFlags, getDefaultFlags, getExpectedReturn, getSupportedExchangeNameList, parseDistribution } = require('../src/protocols/1inch/oneSplit')
const { cBN } = require('../src/utils')
const oneSplit = require('../src/protocols/1inch/oneSplit')

const checkBalances = async () => {
    console.log('check balances')
    console.log('current account:', currentAccount)
    for (const token in tokens) {
        // console.log('token', token, 'address', tokens[token], 'balance')
        const tokenContract = new ethers.Contract(tokens[token], erc20ABI, wallet)
        const balance = await tokenContract.balanceOf(currentAccount)
        // if (cBN(balance).toFixed(0, 1) <= 0) return
        console.log('token', token, 'balance', balance.toString())
    }
}
