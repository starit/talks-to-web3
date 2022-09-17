const splitExchanges = [
    {
        name: 'Uniswap',
        distribution: 0,
        disableValue: 0x01,
    },
    // 这个的 disableValue
    {
        name: 'Kyber',
        distribution: 0,
        disableValue: 0x02,
    },
    {
        name: 'Bancor',
        distribution: 0,
        disableValue: 0x04,
    },
    {
        name: 'Oasis',
        distribution: 0,
        disableValue: 0x08,
    },
    {
        name: 'Curve Compound',
        distribution: 0,
        disableValue: 0x1000,
    },
    {
        name: 'Curve USDT',
        distribution: 0,
        disableValue: 0x2000,
    },
    {
        name: 'Curve Y',
        distribution: 0,
        disableValue: 0x4000,
    },
    {
        name: 'Curve Binance',
        distribution: 0,
        disableValue: 0x8000,
    },
    {
        name: 'Curve Synthetix',
        distribution: 0,
        disableValue: 0x40000,
    },
    {
        name: 'Uniswap Compound',
        distribution: 0,
        disableValue: 0x100000,
    },
    {
        name: 'Uniswap CHAI',
        distribution: 0,
        disableValue: 0x200000,
    },
    {
        name: 'Uniswap Aave',
        distribution: 0,
        disableValue: 0x400000,
    },
    {
        name: 'Mooniswap',
        distribution: 0,
        disableValue: 0x1000000,
    },
    {
        name: 'Uniswap V2',
        distribution: 0,
        disableValue: 0x2000000,
    },
    {
        name: 'Uniswap V2 ETH',
        distribution: 0,
        disableValue: 0x4000000,
    },
    {
        name: 'Uniswap V2 DAI',
        distribution: 0,
        disableValue: 0x8000000,
    },
    {
        name: 'Uniswap V2 USDC',
        distribution: 0,
        disableValue: 0x10000000,
    },
    {
        name: 'Curve Pax',
        distribution: 0,
        disableValue: 0x80000000,
    },
    {
        name: 'Curve renBTC',
        distribution: 0,
        disableValue: 0x100000000,
    },
    {
        name: 'Curve tBTC',
        distribution: 0,
        disableValue: 0x200000000,
    },
    {
        name: 'Dforce XSwap',
        distribution: 0,
        disableValue: 0x4000000000,
    },
    {
        name: 'Shell',
        distribution: 0,
        disableValue: 0x8000000000,
    },
    {
        name: 'mStable mUSD',
        distribution: 0,
        disableValue: 0x20000000000,
    },
]

const splitWrapExchanges = ['CHAI', 'BDAI', 'Aave', 'Fulcrum', 'Compound', 'Iearn', 'Idle', 'WETH']

module.exports = {
    splitExchanges,
    splitWrapExchanges,
}