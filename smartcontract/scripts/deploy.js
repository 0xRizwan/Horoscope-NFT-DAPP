const hre = require("hardhat"); 
 
async function main() {  
 
    const horoscopeNFT = await hre.ethers.getContractFactory("horoscopeNFT");
    const hscp = await horoscopeNFT.deploy();   
    await hscp.deployed();
 
    //since we are testing, you should mention your own Eth wallet address
    const myAddress="0x9Ea3efa3F1145A46c4eEc34B5a995De570b8050b";
    console.log("horoscopeNFT deployed to:", hscp.address);   
 
    let txn = await hscp.mintNFT(myAddress, 'virgo');
    await txn.wait();
 
}
 
main()
    .then(() => process.exit(0))  
    .catch((error) => {    
    console.error(error);
    process.exit(1); 
 });