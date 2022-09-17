const BigNumber = require('bignumber.js')

const cBN = val => new BigNumber(val)
const AddressZero = '0x0000000000000000000000000000000000000000'

module.exports = {
    BigNumber,
    AddressZero,
    cBN
}