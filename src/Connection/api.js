const fetch = require('node-fetch');
const Error = require('../Errors/errors');

class API {

  constructor(key) {
    this.key = key;
    this.auth = "Bearer " + key
  }

  async getStatus() {
    const url = new URL(`https://api.bluefoxhost.com/v1/status`);

    const json = await fetch(url.toString(), {
      headers: {
        "Authorization": this.auth
      }
    }).then((response) => response.text());

    return json;
  }

  async getServerData(ip) {
    const url = new URL(`https://api.bluefoxhost.com/v1/minecraft/server/${ip}`);

    const json = await fetch(url.toString(), {
      headers: {
        "Authorization": this.auth
      }
    }).then((response) => response.json());

    return json;
  }

  async getPlayerData(username) {
    const url = new URL(`https://api.bluefoxhost.com/v1/minecraft/player/${username}`);

    const json = await fetch(url.toString(), {
      headers: {
        "Authorization": this.auth
      }
    }).then((response) => response.json());

    return json;
  }

  async getHypixelStats(username) {
    const url = new URL(`https://api.bluefoxhost.com/v1/minecraft/hypixel/player/${username}`);

    const json = await fetch(url.toString(), {
      headers: {
        "Authorization": this.auth
      }
    }).then((response) => response.json());

    return json;
  }

  async getHypixelFriends(username) {
    const url = new URL(`https://api.bluefoxhost.com/v1/minecraft/hypixel/friends/${username}`);

    const json = await fetch(url.toString(), {
      headers: {
        "Authorization": this.auth
      }
    }).then((response) => response.json());

    return json;
  }

  async getHostTeam() {
    const url = new URL("https://api.bluefoxhost.com/v1/host/team");

    const json = await fetch(url.toString(), {
      headers: {
        "Authorization": this.auth
      }
    }).then(response => response.json());

    return json;
  }

  async getTeamMember(name) {
    const url = new URL(`https://api.bluefoxhost.com/v1/host/team/${username}`);

    const json = await fetch(url.toString(), {
      headers: {
        "Authorization": this.auth
      }
    }).then(response => response.json());

    return json;
  }

  async getPanelStatus() {
    const url = new URL(`https://api.bluefoxhost.com/v1/host/panel/status`);

    const json = await fetch(url.toString(), {
      headers: {
        "Authorization": this.auth
      }
    }).then(response => response.json());

    return json;
  }

  async getIP() {
    const url = new URL(`https://api.bluefoxhost.com/v1/ip/me`);

    const json = await fetch(url.toString(), {
      headers: {
        "Authorization": this.auth
      }
    }).then(response => response.json());

    return json;
  }

  async getIpInformation(ip) {
    const url = new URL(`https://api.bluefoxhost.com/v1/ip/lookup/${ip}`);

    const json = await fetch(url.toString(), {
      headers: {
        "Authorization": this.auth
      }
    }).then(response => response.json());

    return json;
  }
}

module.exports = API