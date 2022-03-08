// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract KlimaToken {


mapping(address => uint256) public balances;

uint256 allTokens;
string private name;
string private symbol;


constructor(string memory _name, string memory _symbol)  {
    name = _name;
    symbol = _symbol;
    allTokens = 1000;  
}

function totalSupply() external view returns(uint256){
    return allTokens;
}

function balanceOf() external view returns(uint256){
    return balances[msg.sender];
}

function transfer(uint256 amount) external returns(bool){
    _transfer(address(this), msg.sender, amount);
    return true;
}

function _transfer(address _from, address _to, uint256 _amount) private returns(bool){
    require(_from != address(0), "ERC20: transfer from the zero address");
    require(_to != address(0), "ERC20: transfer to the zero address");
    require(allTokens > 0, "There must be tokenBalance left in the contract in order to send KLIMA tokens");
    require(_amount < allTokens, "Contract does not have this much token number left");

    allTokens -= _amount;
    balances[_to] += _amount;

    return true;
}



}