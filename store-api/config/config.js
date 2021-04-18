const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.resolve(__dirname, "../../.env") });
const config = {
  xAuthTokenHeader: { "x-auth-token": process.env.XAUTHTOKEN },
  bf: process.env.BF_STORE_HASH,
  bsk: process.env.BSK_STORE_HASH,
  bs: process.env.BS_STORE_HASH,
  ah: process.env.AH_STORE_HASH,
  fs: process.env.FS_STORE_HASH,
};

module.exports = config;
