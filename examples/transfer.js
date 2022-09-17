const { provider, wallet, currentAccount } = require('../web3')
const { ethers } = require("ethers");


const main = async () => {
    const toAddress = wallet.address
    const toSendValue = ethers.utils.parseEther("0.1")
    const tx = { to: toAddress, value: toSendValue }
    const signedTx = await wallet.signTransaction(tx)
    const result = await wallet.sendTransaction(tx)
    console.log("transfer from", wallet.address, "to", toAddress, 
    "value:", toSendValue.toString(), "result:", result)
}

main()
