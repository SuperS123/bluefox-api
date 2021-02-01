const fetch = require('node-fetch');
const Error = require('../Errors/errors');

class CryptoAPI {

  constructor(key) {
    this.key = key;
  }

  async getCurrencies() {
    const url = new URL(`https://api.bluefoxhost.com/v1/coins`);

    const json = await fetch(url.toString(), {
      headers: {
        "Authorization": "Bearer " + this.key
      }
    }).then((response) => response.json());

    return json;
  }

  async getCurrenyData(symbol) {
    const url = new URL(`https://api.bluefoxhost.com/v1/coin/${symbol}`);

    const json = await fetch(url.toString(), {
      headers: {
        "Authorization": "Bearer " + this.key
      }
    }).then((response) => response.json());

    return json;
  }
}

module.exports = CryptoAPI
