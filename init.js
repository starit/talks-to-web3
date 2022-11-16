// Make instances
const Token = require('./lib/ERC20.js')
const { web3, walletAddress } = require('./web3')
const { contracts, tokens } = require('./config')

const usdc = new Token(tokens.usdc, 6)
const comp = new Token(tokens.comp, 18)
const usdt = new Token(tokens.usdt, 6)
const dai = new Token(tokens.dai, 18)

module.exports = {
  dai,
  usdc,
  usdt,
  comp,
}
