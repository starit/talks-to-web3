'use strict';

const axio = require('axios');

const axios = axio.create({
  baseURL: 'https://openapi.debank.com',
});

async function tokenList(address, chainId) {
  const res = await axios.get('/v1/user/token_list', {
    params: {
      id: address,
      chain_id: chainId,
    },
  });
  return res.data;
}

// Get user total balance on all supported chains	
async function totalBalance(address) {
  const res = await axios.get('/v1/user/total_balance', {
    params: {
      id: address
    }
  });
  return res.data;
}


// Get the balance on a chain
async function chainBalance(address, chainId) {
  const res = await axios.get('/v1/user/chain_balance', {
    params: {
      id: address,
      chain_id: chainId,
    },
  });
  return res.data;
}

async function complexProtocolList(address, chainId) {
  const res = await axios.get('/v1/user/complex_protocol_list', {
    params: {
      id: address,
      chain_id: chainId,
    },
  });
  return res.data;
}

// https://docs.open.debank.com/en/reference/api-pro-reference/wallet#get-gas-price
async function getGasPrice (chainId) {
  const res = await axios.get('v1/wallet/gas_market', {
    params: {
      chain_id: chainId,
    },
  });
  return res.data;
}


module.exports = {
  tokenList,
  totalBalance,
  chainBalance,
  complexProtocolList,
  getGasPrice
};

