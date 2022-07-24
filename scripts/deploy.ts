const { ethers } = require("hardhat");

async function main() {
  const HelloWorld = await ethers.getContractFactory("HelloWorld");

  const hellow_world = await HelloWorld.deploy("Hellow World");
  console.log("Contract delpoed on address: ", hellow_world.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
