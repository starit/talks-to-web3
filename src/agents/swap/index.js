const { getExpectedReturn } = require('../../protocols/1inch/oneSplit')

const getPriceFromOneSplit = async (fromToken, toToken, amount) => {
    const expectedReturn = await getExpectedReturn(fromToken, toToken, amount, 1, 0)
    // console.log('from:', fromToken, 'to:', toToken, 'expectedReturn:', expectedReturn)
    return expectedReturn
}


module.exports = {
    getPriceFromOneSplit
}