const{expect}=require("chai");
const{ethers}=require("hardhat");


// grouping test case on the basis of BDD
describe("Erc20 smart contract testing",function(){
    
    let tokens;
    let account;
    const amount=ethers.utils.parseEther("1")  // this convert str into wei

    before(async ()=>{
        account=await ethers.getSigners();
    })


})