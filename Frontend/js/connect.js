Moralis.initialize("5ZAEqifKLbhQ54QMheGJmlxf0s6i4LzfBAOVB8IH"); // Application id from moralis.io
Moralis.serverURL = "https://8tqclpjg9xnj.usemoralis.com:2053/server"; //Server url from moralis.io

initalizeWeb3();
const web3 = new Web3(window.ethereum);

async function initalizeWeb3(){
    Moralis.authenticate();

}
