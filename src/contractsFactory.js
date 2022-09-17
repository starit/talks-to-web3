const { ethers, provider, wallet, currentAccount } = require('../web3')
const { contracts, tokens } = require('../config')
const erc20ABI = require('../abi/ERC20.json')
// const erc721ABI = require('../abi/ERC721.json')
const uniswapV2Route2ABI = require('../abi/uniswap/uniswapV2Route2.json')
const uniswapV2FactoryABI = require('../abi/uniswap/uniswapV2Factory.json')
const oneSplitABI = require('../abi/1inch/oneSplit.json')

// todo:: cache to improve performance

const erc20TokenList = {
    'usdt': [tokens.usdt, erc20ABI],
    'usdc': [tokens.usdc, erc20ABI],
    'dai': [tokens.dai, erc20ABI]
}

const contractList = {
    'uniswapV2Factory': [contracts.uniswapV2Factory, uniswapV2FactoryABI],
    'uniswapV2Route2': [contracts.uniswapV2Route02, uniswapV2Route2ABI],
    'oneSplit': [contracts.oneSplit, oneSplitABI]
}

// todo:: auto generate by list
const generateContracts = () => {
    for (const contract of contractList) {
        console.log(contract)
    }
    for (const token of erc20TokenList) {
        console.log(token)
    }
}

const getAllContracts = () => {
    const uniswapV2Factory = new ethers.Contract(contracts.uniswapV2Factory, uniswapV2FactoryABI, wallet)
    const uniswapV2Route2 = new ethers.Contract(contracts.uniswapV2Route02, uniswapV2Route2ABI, wallet)

    const oneSplit = new ethers.Contract(contracts.oneSplit, oneSplitABI, wallet)

    return {
        'uniswapV2Factory': uniswapV2Factory,
        'uniswapV2Route2': uniswapV2Route2,
        'oneSplit': oneSplit
    }
}

const getContract = (contractName) => {
    return getAllContracts()[contractName]
}

module.exports = {
    getAllContracts,
    getContract
}