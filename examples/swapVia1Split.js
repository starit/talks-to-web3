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

const getSwapReturn = async (fromToken, toToken, amount, flags) => {
    // await checkBalances()
    // return
    // console.log('supported exchanges:', getSupportedExchangeNameList().toString())
    // const flag = getDisableAllFlags()
    // const flags = 0x1E000000 

    // console.log('getDisableAllFlags', getDisableAllFlags())

    // const fromToken = tokens.weth // ETH_ADDRESS //tokens.weth
    // const toToken = tokens.usdt
    // const fromDecimal = 18
    // const toDecimal = 6
    // const amount = cBN(1).shiftedBy(fromDecimal) // 1e18
    
    console.log('calc swap return - exchange: 1split', 'flags:', flags)
    const parts = 1
    const expectedReturn = await getExpectedReturn(fromToken, toToken, amount, parts, flags)
    // return: {returnAmount   uint256, distribution   uint256[]}
    
    console.log({
        'from:': fromToken,
        'to:': toToken,
        'expectedReturnAmountRaw:': expectedReturn.returnAmount.toString(),
        'expectedReturnAmountFormated:': cBN(expectedReturn.returnAmount.toString()).shiftedBy( -1 * 18).toString(),
        'expectedReturnDistribution:': expectedReturn.distribution.toString()
    })
    parseDistribution(expectedReturn.distribution)
    return expectedReturn
    // console.log('parsed distribution', parseDistribution(expectedReturn.distribution))
}

const getETHPrice = async () => {
    const fromToken = ETH_ADDRESS // tokens.weth // ETH_ADDRESS //tokens.weth
    const toToken = tokens.usdt
    const amount = ethers.BigNumber.from(10).pow(18) // 1e18

    return (await getSwapReturn(fromToken, toToken, amount, 0)).returnAmount
}

const doSwapToken = async (fromToken, toToken, amount, distribution, flags) => {
    const tokenContract = new ethers.Contract(fromToken, erc20ABI, wallet)
    const approved = await tokenContract.approve(oneSplit.ONE_SPLIT_ADDRESS, amount)
    console.log('approved', approved)

    const swapped = await oneSplit.swapToken(fromToken, toToken, amount, 0, distribution, flags)
    console.log('swapped', swapped)
}

const main = async () => {
    const toToken = ETH_ADDRESS
    let totalSwaped = 0
    const flags = getDefaultFlags()

    const ethPrice = await getETHPrice()
    console.log('eth price:', ethPrice.div(new ethers.BigNumber.from(10).pow(6)).toString())

    for (const token in tokens) {
        console.log('---------', token)        
        const tokenContract = new ethers.Contract(tokens[token], erc20ABI, wallet)
        const balance = await tokenContract.balanceOf(currentAccount)
        console.log('token', token, 'address', tokens[token], 'balance', balance.toString())

        if (balance.gt(0)) {
            const result = await getSwapReturn(tokens[token], toToken, balance, flags)
            totalSwaped = ethers.BigNumber.from(totalSwaped).add(result.returnAmount)
            if (result.returnAmount.gt(0)) {
                await doSwapToken(tokens[token], toToken, balance, result.distribution, flags)
            }
        } else {
            console.log('balance is zero, no need to swap')
        }
        console.log('---------')
    }
    console.log('total swapped', totalSwaped.toString(), totalSwaped.div(ethers.BigNumber.from(10).pow(18)).toString())
}

main()
