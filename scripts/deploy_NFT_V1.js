const { ethers, upgrades } = require("hardhat");

async function main() {
  
  const ERC721= await ethers.getContractFactory("IRTNFTV1");
  const erc721 = await upgrades.deployProxy(ERC721);

  await erc721.deployed();

  console.log("ERC721 contract deployed to:", erc721.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });