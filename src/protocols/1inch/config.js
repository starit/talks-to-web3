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

let splitExchangeList = [
    "Uniswap",
    "Kyber",
    "Bancor",
    "Oasis",
    "Curve Compound",
    "Curve USDT",
    "Curve Y",
    "Curve Binance",
    "Curve Synthetix",
    "Uniswap Compound",
    "Uniswap CHAI",
    "Uniswap Aave",
    "Mooniswap",
    "Uniswap V2",
    "Uniswap V2 ETH",
    "Uniswap V2 DAI",
    "Uniswap V2 USDC",
    "Curve Pax",
    "Curve renBTC",
    "Curve tBTC",
    "Dforce XSwap",
    "Shell",
    "mStable mUSD",
    "Curve sBTC",
    "Balancer 1",
    "Balancer 2",
    "Balancer 3",
    "Kyber 1",
    "Kyber 2",
    "Kyber 3",
    "Kyber 4"
]

const splitWrapExchanges = ['CHAI', 'BDAI', 'Aave', 'Fulcrum', 'Compound', 'Iearn', 'Idle', 'WETH']

const FLAG_DISABLE_UNISWAP = 0x01;
const FLAG_DISABLE_KYBER = 0x02;
const FLAG_ENABLE_KYBER_UNISWAP_RESERVE = 0x100000000; // Turned off by default
const FLAG_ENABLE_KYBER_OASIS_RESERVE = 0x200000000; // Turned off by default
const FLAG_ENABLE_KYBER_BANCOR_RESERVE = 0x400000000; // Turned off by default
const FLAG_DISABLE_BANCOR = 0x04;
const FLAG_DISABLE_OASIS = 0x08;
const FLAG_DISABLE_COMPOUND = 0x10;
const FLAG_DISABLE_FULCRUM = 0x20;
const FLAG_DISABLE_CHAI = 0x40;
const FLAG_DISABLE_AAVE = 0x80;
const FLAG_DISABLE_SMART_TOKEN = 0x100;
const FLAG_ENABLE_MULTI_PATH_ETH = 0x200; // Turned off by default
const FLAG_DISABLE_BDAI = 0x400;
const FLAG_DISABLE_IEARN = 0x800;
const FLAG_DISABLE_CURVE_COMPOUND = 0x1000;
const FLAG_DISABLE_CURVE_USDT = 0x2000;
const FLAG_DISABLE_CURVE_Y = 0x4000;
const FLAG_DISABLE_CURVE_BINANCE = 0x8000;
const FLAG_ENABLE_MULTI_PATH_DAI = 0x10000; // Turned off by default
const FLAG_ENABLE_MULTI_PATH_USDC = 0x20000; // Turned off by default
const FLAG_DISABLE_CURVE_SYNTHETIX = 0x40000;
const FLAG_DISABLE_WETH = 0x80000;
const FLAG_ENABLE_UNISWAP_COMPOUND = 0x100000; // Works only with FLAG_ENABLE_MULTI_PATH_ETH

const disableFlags = [
    FLAG_DISABLE_UNISWAP,
    FLAG_DISABLE_KYBER,
    FLAG_DISABLE_BANCOR,
    FLAG_DISABLE_OASIS,
    FLAG_DISABLE_COMPOUND,
    FLAG_DISABLE_FULCRUM,
    FLAG_DISABLE_CHAI,
    FLAG_DISABLE_AAVE,
    FLAG_DISABLE_SMART_TOKEN,
    FLAG_DISABLE_BDAI,
    FLAG_DISABLE_IEARN,
    FLAG_DISABLE_CURVE_COMPOUND,
    FLAG_DISABLE_CURVE_USDT,
    FLAG_DISABLE_CURVE_Y,
    FLAG_DISABLE_CURVE_BINANCE,
    FLAG_DISABLE_CURVE_SYNTHETIX,
    FLAG_DISABLE_WETH
]

const enableFlags = [
    FLAG_ENABLE_KYBER_UNISWAP_RESERVE,
    FLAG_ENABLE_KYBER_OASIS_RESERVE,
    FLAG_ENABLE_KYBER_BANCOR_RESERVE,
    FLAG_ENABLE_MULTI_PATH_ETH,
    FLAG_ENABLE_MULTI_PATH_DAI,
    FLAG_ENABLE_MULTI_PATH_USDC,
    FLAG_ENABLE_UNISWAP_COMPOUND
]

const flags = [
    FLAG_DISABLE_UNISWAP,
    FLAG_DISABLE_KYBER,
    FLAG_ENABLE_KYBER_UNISWAP_RESERVE,
    FLAG_ENABLE_KYBER_OASIS_RESERVE,
    FLAG_ENABLE_KYBER_BANCOR_RESERVE,
    FLAG_DISABLE_BANCOR,
    FLAG_DISABLE_OASIS,
    FLAG_DISABLE_COMPOUND,
    FLAG_DISABLE_FULCRUM,
    FLAG_DISABLE_CHAI,
    FLAG_DISABLE_AAVE,
    FLAG_DISABLE_SMART_TOKEN,
    FLAG_ENABLE_MULTI_PATH_ETH,
    FLAG_DISABLE_BDAI,
    FLAG_DISABLE_IEARN,
    FLAG_DISABLE_CURVE_COMPOUND,
    FLAG_DISABLE_CURVE_USDT,
    FLAG_DISABLE_CURVE_Y,
    FLAG_DISABLE_CURVE_BINANCE,
    FLAG_ENABLE_MULTI_PATH_DAI,
    FLAG_ENABLE_MULTI_PATH_USDC,
    FLAG_DISABLE_CURVE_SYNTHETIX,
    FLAG_DISABLE_WETH,
    FLAG_ENABLE_UNISWAP_COMPOUND
]

const ETH_ADDRESS = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'

module.exports = {
    ETH_ADDRESS,
    splitExchanges,
    splitExchangeList,
    splitWrapExchanges,
    flags,
    disableFlags,
    enableFlags,
    ...flags
}