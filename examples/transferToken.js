const { ethers, provider, wallet, currentAccount } = require('../web3')
const { tokens, contracts } = require('../config')
const erc20ABI = require('../abi/ERC20.json')

const main = async () => {
    const toAddress = wallet.address
    const toSendValue = ethers.utils.parseEther('1.0') // 1 token
    const tokenContractAddr = '0xe1c3cECF36a8f9fCd11Cc6Ec1Cc391C213089Aff'
    const token = new ethers.Contract(tokenContractAddr, erc20ABI, wallet)
    const tokenBalance = await token.balanceOf(wallet.address)
    console.log(currentAccount, 'token balance: ', tokenBalance.toString())
    const transferred = await token.transfer(toAddress, toSendValue)
    console.log('transfer token from ', wallet.address, 'to', toAddress, 'value:', toSendValue.toString())
    console.log('transferred: ', transferred.hash)
}

main()
