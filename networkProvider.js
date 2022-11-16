// More network info can be found here: 
//   * https://chainid.network/chains.json
const networks = {
  mainnet: {
    rpc: 'https://mainnet.infura.io/v3/' + process.env.INFURA_API_KEY
  },
  flashbots: {
    rpc: 'https://rpc.flashbots.net'
  },
  flashbotsFast: {
    rpc: 'https://rpc.flashbots.net/fast',
  },
  kovan: {
    rpc: 'https://kovan.infura.io/v3/' + process.env.INFURA_API_KEY
  },
  mainnetFork: {
    rpc: 'http://127.0.0.1:7545'
  },
  local: {
    rpc: 'http://127.0.0.1:7545'
  },
  arbitrum: {
    rpc: 'https://arbitrum-mainnet.infura.io/v3/' + process.env.INFURA_API_KEY,
    // rpc: 'https://arb1.arbitrum.io/rpc'
  },
  optimism: {
    rpc: 'https://mainnet.optimism.io/'
  },
  ETHW: {
    rpc: 'https://mainnet.ethereumpow.org'
  },
  ETHFair: {
    rpc: 'https://rpc.etherfair.org'
  }
}


module.exports = {
  currentNetwork: networks.mainnet
}
