const { ethers, provider, wallet, currentAccount } = require('../web3')
const { tokens, contracts } = require('../config')
const { cBN } = require('../src/utils')
const erc20ABI = require('../abi/ERC20.json')

const tokensToTransfer = tokens

const main = async () => {
    const toAddress = '0xcc1194930B624b94f0365143c18645a329794366'
    console.log('current account', wallet.address)

    // check balance, if balance > 0 then transfer
    for (const token in tokensToTransfer) {
        const tokenContract = new ethers.Contract(tokensToTransfer[token], erc20ABI, wallet)
        const tokenBalanceBN = await tokenContract.balanceOf(wallet.address)
        const tokenBalance = cBN(tokenBalanceBN.toString())
        if (tokenBalance.toFixed(0, 1) > 0) {
            console.log('token', token, 'balance', tokenBalance.toFixed(0, 1))
            // do transfer out
            // const transferred = await tokenContract.transfer(toAddress, tokenBalance.toFixed(0, 1))
            // console.log('transferred', transferred)
            // console.log('hash:', transferred.hash)
        } else {
            console.log('no balance for token', token, tokensToTransfer[token], tokenBalance.toString())
        }
    }
}

main()
