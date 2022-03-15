// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract KlimaToken is ERC20 {
    constructor()  ERC20("burnable KLIMA", "bKLIMA")  {
        _mint(address(this), 1000000000000000000000);  // Mint 1000 KLIMA and give to constructor caller
    }

    function sendKlima(address to, uint256 amount) public {
        _mint(address(this), 1000000000000000000000);
       _transfer(address(this), to, amount);
    }
}