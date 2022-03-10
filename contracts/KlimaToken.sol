// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract KlimaERC20 is ERC20 {
    constructor()  ERC20("burnable KLIMA", "bKLIMA")  {
        _mint(msg.sender, 1000000000000000000000);  // Mint 1000 KLIMA and give to constructor caller
    }
}