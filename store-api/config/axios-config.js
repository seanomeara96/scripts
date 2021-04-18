const axios = require("axios");
const config = require("./config");
const fstore = axios.create({
  baseURL: `https://api.bigcommerce.com/stores/${config.fs}/v3`,
  headers: config.xAuthTokenHeader,
});

module.exports = fstore;
