// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/introspection/ERC165.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

//import "./KlimaERC20.sol";

contract MemorialNFT is ERC721URIStorage {

    uint nextTokenId = 1; // count of reminted tokens is also used as the token ID
    address kt;

    constructor(address _k) ERC721("Memorial NFT", "MN"){
        kt = _k;
     //   KlimaToken(kt).SendKlima(address(this), 1000000000000);
    }

    function retrieveKT()public view returns(address){
        return kt;
    }

    function remint(address _oldNFT, uint256 amountToSend, uint256 _id)  public {
        //require(ERC721(_oldNFT).ownerOf(_id) == msg.sender,"Not owner");
        //require(msg.value >= 1, "Insufficient funds");
        require(supportsInterface(type(IERC721).interfaceId), "Must be ERC721");
        string memory newTokenURI1 = "ipfs://bafkreiaxyl6t6r54bi3gzazmsfogeejn5jag2bkti5pm2hbiyzwifwydxi";
        string memory newTokenURI2 = "ipfs://bafkreib5ytewrvh3od6tp5adqzje4dz3cdsh5zzveslz2s3wwloeop4b2e";
        string memory newTokenURI3 = "ipfs://bafkreidwsapojs2ds7owdn5f32lx6lph4xvfq7a2d2ev3dmrvxgvt4lrqy";
        
        // Mint the NFT (needs to randomise)
        _safeMint(msg.sender, nextTokenId, "");
        if(nextTokenId == 2){
        _setTokenURI(nextTokenId, newTokenURI2);
        }
        else if(nextTokenId == 3){
        _setTokenURI(nextTokenId, newTokenURI3);
        }
        else {
        _setTokenURI(nextTokenId, newTokenURI1);
        }


        // Transfer the NFT to us. Assume it has been 'allowed'
        IERC721(_oldNFT).transferFrom(msg.sender, address(this), _id);

        // Send KLIMA tokens to the msg.sender
        IERC20(kt).transfer(msg.sender, amountToSend);

        nextTokenId++;
    }

} 