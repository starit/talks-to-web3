const web3 = require('../web3').web3
const { walletAddress, EthAddress, account } = require('../web3')
const erc20ABI = require('../abi/IERC20.json')
const { getGas } = require('../gas')

function Erc20Token(contractAddress, decimal = 18) {
    const contract = new web3.eth.Contract(erc20ABI, contractAddress, {
        from: walletAddress
    });
    this.contract = contract
    
  // this.getBalanceWithUnit = async function (address) {
  //    let balanceInWei = await contract.methods.balanceOf(address).call()
  //   let balance = web3.utils.fromWei(balanceInWei, 'ether')
  //    return parseFloat(balance)
  // }

    this.getAddress = () => contractAddress 

    this.getBalance = async function (address) {
        let balanceInWei = await contract.methods.balanceOf(address).call()
        return balanceInWei
    }
     
    this.getDecimal = async function () {
      return decimal
      // let decimal = await contract.methods.decimal(address).call()
      // return decimal 
    }

    this.getAllowance = async function (address1, address2) {
        let balance = await contract.methods.allowance(address1, address2).call()
      // let balance = web3.utils.fromWei(balanceInWei, 'ether')
        return parseFloat(balance)
    }


    this.allowanceInWei= async function (address1, address2) {
        let balanceInWei = await contract.methods.allowance(address1, address2).call()
        return balanceInWei
    }

    this.totalSupply = async function () {
        let totalSupplyInWei = await contract.methods.totalSupply().call()
        let supplySupply = web3.utils.fromWei(totalSupplyInWei, 'ether')
        return parseFloat(supplySupply)
    }

}

module.exports = Erc20Token
