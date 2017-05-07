const axios = require('axios');

API_BASE = 'https://api.are.na/v2';

module.exports = class Arena {
  url(path) {
    return [API_BASE, path].join('/');
  }

  channel(id) {
    return axios.get(this.url(`channels/${id}`))
      .then(({ data }) => data);
  }

  block(id) {
    return axios.get(this.url(`blocks/${id}`))
      .then(({ data }) => data);
  }
}
