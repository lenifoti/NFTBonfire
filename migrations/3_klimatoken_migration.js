const KlimaToken = artifacts.require("KlimaToken");

module.exports = function (deployer) {
  let tokenName = "KlimaToken";
  let tokenSymbol = "KT";
  deployer.deploy(KlimaToken, tokenName, tokenSymbol);
};
