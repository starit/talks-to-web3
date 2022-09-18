const contractsMainnet = {
  multicall: '',
  uniswapV2Factory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  uniswapV2Route02: '0x7a250d5630b4cf539739df2c5dacb4c659f2488d',
  oneSplit: '0xC586BeF4a0992C495Cf22e1aeEE4E446CECDee0E',
}

// token list resource:
//  1. https://tokenlists.org/
//  2. https://wispy-bird-88a7.uniswap.workers.dev/?url=http://tokens.1inch.eth.link

const tokensMainnet = {
  // eth: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
  usdc: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  usdt: '0xdac17f958d2ee523a2206206994597c13d831ec7',
  dai: '0x6b175474e89094c44da98b954eedeac495271d0f',
  weth: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  wbtc: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
  seth: '0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb',
  // renBTC: '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
  ald: '0xb26C4B3Ca601136Daf98593feAeff9E0CA702a8D',
  ens: '0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72',
  dydx: '0x92D6C1e31e14520e676a687F0a93788B716BEff5',
  tribe: '0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B',
  // ldo: '0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32',
  // hot: '',
  wpc: '0x6F620EC89B8479e97A6985792d0c64F237566746',
  bit: '0x1A4b46696b2bB4794Eb3D4c26f1c55F9170fa4C5',
  dodo: '0x43dfc4159d86f3a37a5a4b3d4580b888ad7d4ddd',
  // dddd: '0x8ca9a0fbd8db501f013f2e9e33a1b9dc129a48e0',
  ring: '0x9469d013805bffb7d3debe5e7839237e535ec483',
  torn: '0x77777FeDdddFfC19Ff86DB637967013e6C6A116C',
  rfuel: '0xaf9f549774ecEDbD0966C52f250aCc548D3F36E5',

  // crvRenWBTC: '0x49849C98ae39Fff122806C06791Fa73784FB3675',
  // eCRV: '0xA3D87FffcE63B53E0d54fAa1cc983B7eB0b74A9c', // Curve.fi ETH/sETH
  // threeCRV: '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490', // 3pool
  // a3CRV: '0xFd2a8fA60Abd58Efe3EeE34dd494cD491dC14900', // aave3pool

  // slpETHUSDC: '0x397ff1542f962076d0bfe58ea045ffa2d347aca0',
  // slpETHWBTC: '0xceff51756c56ceffca006cd410b03ffc46dd3a58',
  // slpETHDai: '0xc3d03e4f041fd4cd388c549ee2a29a9e5075882f',
  // slpETHUSDT: '0x06da0fd433c1a5d7a4faa01111c044910a184553',

  // comp: '0xc00e94cb662c3520282e6f5717214004a7f26888',
  // crv: '0xD533a949740bb3306d119CC777fa900bA034cd52',
  sushi: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
}

module.exports = {
  contracts: contractsMainnet,
  tokens: tokensMainnet
}
