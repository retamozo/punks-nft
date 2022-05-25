const path = require("path");
require("@nomiclabs/hardhat-waffle");
require("dotenv").config({
  path: path.resolve(__dirname, "./.env.project"),
});

const { RINKEBY_RPC_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: `${RINKEBY_RPC_URL}`,
      accounts: [PRIVATE_KEY],
    },
  },
};
