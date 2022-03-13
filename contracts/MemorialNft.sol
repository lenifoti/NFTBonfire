// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/introspection/ERC165.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

//import "./KlimaERC20.sol";

contract MemorialNFT is ERC721 {

    uint nextTokenId = 1; // count of reminted tokens is also used as the token ID
    address public kt;

    constructor(address _k) ERC721("Memorial NFT", "MN") public {

        // Create KLIMA ERC20 tokens by call ing the constructor
        kt = _k;
    } 

/*
*   remint() takes an existing ERC721 and a Donation.
*   The function then:
*      - mints a new NFT
*      - transfers it back tio the message sender
*      - transfers the existing NFT to 'this'.
*      - sends an amount of KLIMA to the msg.sender based on msg.value (1:1)
* 
*   Assumption: The sender must approve this contract to transfer the old token.
*      function approve(address to, uint256 tokenId) public virtual override
*/

    function remint(address _oldNFT, uint256 _id, uint256 tokensToSend) public returns (bool)  {
        //require(ERC721(_oldNFT).ownerOf(_id) == msg.sender,"Not owner");
        //require(msg.value >= 1, "Insufficient funds");
        require(supportsInterface( type(IERC721).interfaceId), "Must be ERC721");

        // Mint the NFT (needs to randomise)
        _safeMint(msg.sender, nextTokenId++, "");

        // Transfer the NFT to us. Assume it has been 'allowed'
        // IERC721(_oldNFT).transferFrom(msg.sender, address(this), _id);

        // Send KLIMA tokens to the msg.sender
        // IERC20(kt).transfer(msg.sender, tokensToSend);

        return (true);
    }

}
