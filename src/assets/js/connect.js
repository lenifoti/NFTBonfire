Moralis.initialize("5ZAEqifKLbhQ54QMheGJmlxf0s6i4LzfBAOVB8IH"); // Application id from moralis.io
Moralis.serverURL = "https://8tqclpjg9xnj.usemoralis.com:2053/server"; //Server url from moralis.io

const testNftContract = "0xFf9b41e55415c16E6f5E3237406C52910F2E6deC";
const klimaTokenContract = "0x16330C6a96E165080A584e62e3F4723FC82324aB";
const MemorialNFTContract = "0x1438da940af1af284d8175098060EEAE6F4858e7";



initalizeWeb3();
prtTestNfts();
const web3 = new Web3(window.ethereum);

async function initalizeWeb3(){
    Moralis.authenticate();
}


async function prtTestNfts(){
    await Moralis.start({
        serverUrl: "https://8tqclpjg9xnj.usemoralis.com:2053/server",
        appId: "5ZAEqifKLbhQ54QMheGJmlxf0s6i4LzfBAOVB8IH"
    })

    var ABI = [
        {
            "inputs": [
              {
                "internalType": "address",
                "name": "owner",
                "type": "address"
              }
            ],
            "name": "balanceOf",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function",
            "constant": true
          }
        ];

        const options = {
            chain: "rinkeby",
            address: testNftContract, 
            function_name: "balanceOf",
            abi: ABI,
            params: {owner: "0xe256760b2554AC5950a676cCF3455E4De6ab98aE"}
        }

        const balanceOfTestNft = await Moralis.Web3API.native.runContractFunction(options);
        //console.log(balanceOfTestNft);
        document.getElementById("oldNftBalance").innerHTML = `<div>You have ${balanceOfTestNft} Test Nfts to Remint </div>`;     
}

async function approveForRemint(){
    let idForApproval = document.getElementById("testNftId").value;
    console.log("Your ID you clicked to be approved is:" + idForApproval);

    const options1 = {
       // chain: "rinkeby",
        contractAddress: testNftContract, 
        functionName: "approve",
        abi: [   {
            "inputs": [
              {
                "internalType": "address",
                "name": "to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              }
            ],
            "name": "approve",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          }],
        params: { to: MemorialNFTContract, tokenId: idForApproval},
      };

      const approve = await Moralis.executeFunction(options1);
      console.log(approve);
}

async function sendKlima(){
    let klimaNumbers = document.getElementById("klimaToken").value;
    //console.log(klimaNumbers);

    const options = {
        contractAddress: klimaTokenContract,
        functionName: "transfer",
        abi: [{
            "inputs": [
              {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
              }
            ],
            "name": "transfer",
            "outputs": [
              {
                "internalType": "bool",
                "name": "",
                "type": "bool"
              }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
          }],
          params: {to: MemorialNFTContract, amount: klimaNumbers}
    }

    const send = await Moralis.executeFunction(options);
    console.log(send);
}

async function reMint(){
    let NftToMint = document.getElementById("nftID").value;
    let Klimas = document.getElementById("klimaNumbers").value;
    //console.log(NftToMint);
    //console.log(Klimas);

    const options = {
        contractAddress: klimaTokenContract,
        functionName: "remint",
        abi: [
            {
                "inputs": [
                  {
                    "internalType": "address",
                    "name": "_oldNFT",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_id",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "tokensToSend",
                    "type": "uint256"
                  }
                ],
                "name": "remint",
                "outputs": [
                  {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                  }
                ],
                "stateMutability": "payable",
                "type": "function",
                "payable": true
              }
        ],
        params: {_oldNFT: testNftContract,
                 _id: NftToMint, tokensToSend: Klimas}     
    }
    const mint = await Moralis.executeFunction(options);
    console.log(mint);
}
