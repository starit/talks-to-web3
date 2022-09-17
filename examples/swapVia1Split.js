const { ethers, provider, wallet, currentAccount } = require('../web3')
const { contracts, tokens } = require('../config')
const { getPriceFromOneSplit } = require('../src/agents/swap')
const { cBN } = require('../src/utils')

const main = async () => {
    const fromToken = tokens.weth
    const toToken = tokens.usdc
    const fromDecimal = 18
    const toDecimal = 6
    const amount = cBN(1).shiftedBy(fromDecimal) // 1e18
    console.log('calc swap price -  from:', fromToken, 'to:', toToken)
    const expectedReturn = await getPriceFromOneSplit(fromToken, toToken, amount.toFixed(0, 1))
    // return: {returnAmount   uint256, distribution   uint256[]}
    console.log({
        'from:': fromToken,
        'to:': toToken,
        'expectedReturnAmountRaw:': expectedReturn.returnAmount.toString(),
        'expectedReturnAmountFormated:': cBN(expectedReturn.returnAmount.toString()).shiftedBy( -1 * toDecimal).toString(),
        'expectedReturnDistribution:': expectedReturn.distribution.toString()
    })
}

main()
