const { ethers, upgrades } = require("hardhat");

async function main() {
  
  const ERC20 = await ethers.getContractFactory("IncidentReporting");
  const erc20 = await upgrades.deployProxy(ERC20);

  await erc20.deployed();

  console.log("ERC20 contract deployed to:", erc20.address);
  console.log("Transaction Ojbect:", erc20);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
