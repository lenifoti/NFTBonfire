const MemorialNFT = artifacts.require("MemorialNFT");
const KlimaToken = artifacts.require("KlimaToken");

module.exports = async function (deployer) {
  let Klima = await KlimaToken.deployed();
  await deployer.deploy(MemorialNFT, Klima.address);
};
