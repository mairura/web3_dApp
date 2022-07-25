import { ethers} from "hardhat";

async function main() {
  const factory = await ethers.getContractFactory("HelloWorld");

  const helloContract = await factory.deploy("Welcome Mairura")
  await helloContract.deployed()
  console.log("Contract deployed on address: ", helloContract.address);

  
  console.log(helloContract.interface)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
 