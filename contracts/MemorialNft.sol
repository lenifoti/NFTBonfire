// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "./KlimaToken.sol";

abstract contract MemorialNft is ERC721, KlimaToken{

constructor() ERC721 ("MemorialNft", "MT")  {
    
}

    function reMint(uint256 tokenId, address contractId) public {
        
        // toDo:
        // check the sender == owner of tokenId
        // transfer the tokenId to this address
        // Then we actually do the real Safemint
        // When we do the safemint we actually the transfer memorial nft to the one who sent us the oldNFT ( which will be msg.sender )
        // Then we transfer KLIMA 
        // require a minimum number of MATIC // ETH 
    }


}