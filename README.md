## talk-to-web3.js

When building a dApp, there are multiple data sources to be consumed. It could be from decentralized data source, like on-chain data. Or it can be from some centralized products, like Etherscan, DeBank.

The integration of those data can be complex sometimes. `talks-to-web3.js` is aimed to simplify this.

It will provide the following functions:

  1. Integrated common used on-chain data provider and operations.
  2. Integrated multiple centralized existing products and services.
  3. Modularized Scability

## Folder Structure

* `src/protocols`: wrap operation that interact with smart contracts
* `src/products`: wrap operation that intereact with third-party products  
* `src/agents`: wrap operations based on `protocols` and `products`

## Data flow

Usually, the data requested from on-chain is current and direct data. It cannot get the accumulated data unless the protocol has recorded it as a smart contract variable.

For some complex data, multiple on-chain data source and some calculations are required. Usually it uses `multicall` contract to get all the required data at once.

For some other data, retrival may be required. In this kind of situation, a centralized service is necessary.


Generally, there are three kinds of data when building a dapp.
  1. Data without connecting to a wallet
  2. Data after connecting to a wallet(specifily related to one connected wallet)
  3. Operate a transation

For the first kind of data, it's usually protocol level data. For example, the general APY, TVL etc...

For the second kind of data, it's usually strong related to one specific account. It will be used only after a wallet has been connected.

For the third kind of data, sign a message or transaction is required. It will be used only after a wallet has been connected.


## Usage

1. run `cp .env.example .env` and fill out related info in `.env`
2. try `node examples/welcome.js`
3. write your own scripts with your own requirements

## Stack

## Todo

1. add more common used abis

## network data

can be found here: `https://chainid.network/chains.json`



<https://docs.ethers.io/v5/api-keys/>
