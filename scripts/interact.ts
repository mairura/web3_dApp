const ALCHEMY_URL = process.env.ALCHEMY_URL;
const API_KEY = process.env.ALCHEMY_API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;
const network = "goerli";

const contractABI = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");
// console.log(JSON.stringify(contractABI.abi));

//Provider - gives access to the blockchain nodes
const alchemyProvider = new ethers.providers.AlchemyProvider(network, API_KEY);

//Signer - represents account that signs off transactions
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

//Contract
const helloWorldContract = new ethers.Contract(
  CONTRACT_ADDRESS,
  contractABI.abi,
  signer
);

async function interact() {
  const message = await helloWorldContract.message();
  console.log("The message is: ", message);

  console.log("Updating the message...");
  const tx = await helloWorldContract.update("This is the new message.");
  await tx.wait();
  console.log(tx);

  const newMessage = await helloWorldContract.message();
  console.log("The new message: " + newMessage);
}
interact();
