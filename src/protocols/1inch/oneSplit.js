const { getContract } = require('../../contractsFactory')
const config = require('./config')
const oneSplit = getContract('oneSplit')

const getExpectedReturn = async (fromToken, toToken, amount, parts, flags) => {
    console.log('getExpectedReturn params:', fromToken, toToken, amount.toString(), parts, flags)
    return await oneSplit.getExpectedReturn(fromToken, toToken, amount, parts, flags)
}

const getExpectedReturnDefault = async (fromToken, toToken, amount) => {
    const parts = 1
    const flags = 0
    return await oneSplit.getExpectedReturn(fromToken, toToken, amount, parts, flags)
}

const getSupportedExchangeNameList = () => {
    return config.splitExchanges.map((item) => item.name)
}

const getDisableAllFlags = () => {
    let flags = 0x0
    for (const flag of config.disableFlags) {
        flags = flags + flag
    }
    // console.log('all disabled flags', defaultFlag)
    return flags
}

const getDefaultFlags = () => {
    return 0
}

const getExpectedReturnFromExchanges = async(fromToken, toToken, amount) => {
    let flags = getDisableAllFlags()
    const parts = 1
    // const exchanges = getSupportedExchangeNameList()
    for (const exchange of config.splitExchanges) {
        console.log('exchange name', exchange.name)
        console.log('disableFlag', exchange.disableValue)
    }

    return await getExpectedReturn(fromToken, toToken, amount, parts, flags)
}

const parseDistribution = (distribution) => {
    const parts = distribution.reduce((a, b) => +a + (+b))
    // console.log('parts', parts)
    distribution.forEach((value, index) => {
        if (value <=0) return
        console.log(`${config.splitExchangeList[index]}: ${value * 100 / parts}%`)
    })
}

const swapToken = async (fromToken, toToken, amount, minReturn, distribution, flags) => {
    return await oneSplit.swap(fromToken, toToken, amount, minReturn, distribution, flags)
} 


module.exports = {
    ETH_ADDRESS: config.ETH_ADDRESS,
    ONE_SPLIT_ADDRESS: oneSplit.address,
    getExpectedReturn,
    getExpectedReturnDefault,
    getSupportedExchangeNameList,
    getDisableAllFlags,
    getDefaultFlags,
    splitExchangeList: config.splitExchangeList,
    parseDistribution,
    swapToken
}