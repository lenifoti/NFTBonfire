const KlimaToken = artifacts.require("KlimaToken");

module.exports = async function (deployer) {
  let tokenName = "KlimaToken";
  let tokenSymbol = "KT";
  await deployer.deploy(KlimaToken);
};
