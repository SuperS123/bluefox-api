# Bluefox-API

![NPM Info](https://nodei.co/npm/bluefox-api.png?downloads=true&stars=true)

Bluefox-API is a [npm](https://npmjs.org/) library to access the (upcoming) Bluefox-API easily.

## Installation

Use the package manager [npm](https://npmjs.org/) to install the Bluefox-API module.

```bash
npm install bluefox-api
```

## Usage

### Main API

```javascript
const Bluefox = require('bluefox-api');
const api = new Bluefox.API("API KEY");

api.status().then(res => {
  console.log(res);
}).catch(err => {
  throw err;
});
```

Find all functions [here](https://github.com/SuperS123/bluefox-api/blob/main/FUNCTIONS.md#main-api)

### Crypto API
```javascript
const Bluefox = require('bluefox-api);
const cryptoApi = new Bluefox.CryptoAPI("API KEY");

crpytoApi.getCurrencies().then(res => {
  console.log(res);
}).catch(err => {
  throw err;
});
```

Find all functions [here](https://github.com/SuperS123/bluefox-api/blob/main/FUNCTIONS.md#crypto-api)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
