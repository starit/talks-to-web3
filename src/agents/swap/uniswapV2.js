const { ethers } = require("../../../web3.js");
const { getContract } = require('../../contractsFactory')
const { getPrice, swapViaPaths } = require('../../protocols/uniswap/index')

// agents will do things that required invoke of combination of protocols, products etc...

