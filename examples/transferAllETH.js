const { ethers, provider, wallet, currentAccount } = require('../web3')
const { cBN } = require('../src/utils')


const main = async () => {
    const toAddress = '0xF66f4637610Ef5e78d963Ce2f0507423810e537f'
    const walletBalance = await wallet.getBalance()
    console.log('wallet balance', walletBalance.toString(), walletBalance)
    const remainingETH = new ethers.BigNumber.from(10).pow(17)
    const toSendValue = walletBalance.sub(remainingETH)
    console.log('To send value', toSendValue.toString())
    const tx = { to: toAddress, value: toSendValue }

    const signedTx = await wallet.signTransaction(tx)
    const result = await wallet.sendTransaction(tx)
    console.log("transfer from", wallet.address, "to", toAddress,
        "value:", toSendValue.toString(), "result:", result)
}

main()
