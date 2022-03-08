const OldNft = artifacts.require("OldNft");

module.exports = function (deployer) {
  deployer.deploy(OldNft);
};
