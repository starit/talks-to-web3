const { getContract } = require('../../contractsFactory')
const weth = getContract('weth')


const deposit = async (amount) => {
    await weth.deposit({value: amount})
}

const withdraw = async (amount) => {
    await weth.withdraw(amount)
}

module.exports = {
    deposit,
    withdraw
}