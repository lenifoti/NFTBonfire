// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/introspection/ERC165.sol";

contract TestNFT is ERC721 {


    uint nextTokenId = 1; // count of reminted tokens is also used as the token ID

    constructor() ERC721("Test", "TTT"){

        for (uint8 i=1;i<=10;i++){
            _safeMint(msg.sender, nextTokenId++, "");
        }
    }

}