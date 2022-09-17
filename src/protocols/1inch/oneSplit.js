const { getContract } = require('../../contractsFactory')

const oneSplit = getContract('oneSplit')

const getExpectedReturn = async (fromToken, toToken, amount, parts, flags) => {
    console.log('getExpectedReturn params:', fromToken, toToken, amount, parts, flags)
    return await oneSplit.getExpectedReturn(fromToken, toToken, amount, parts, flags)
}

const getExpectedReturnDefault = async (fromToken, toToken, amount) => {
    const parts = 1
    const flags = 0
    return await oneSplit.getExpectedReturn(fromToken, toToken, amount, parts, flags)
}

module.exports = {
    getExpectedReturn,
    getExpectedReturnDefault
}