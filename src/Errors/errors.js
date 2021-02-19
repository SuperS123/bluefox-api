'use strict';

class Error {

  constructor(err) {
    this.err = err;
    switch(this.err.toString().toLowerCase()) {
      case "unauthorized":
        console.error(`[AUTHORIZATION ERROR] An invalid authorization key was provided`)
        break;
      case "failedconnection":
        console.error("[CONNECTION ERROR] Failed to connect to https://api.bluefoxhost.com")
        break;
      case "default":
        console.error(`There was an error: ${this.err.toString()}`)
    }
  }

}

module.exports = Error