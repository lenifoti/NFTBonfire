// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

 contract OldNft is ERC721  {

    constructor() ERC721("OldNft", "ON")  {

    }
    uint256 tokenId = 0;

    function ownerOf(uint256 _tokenId) public override view returns (address) {
        return _owners[_tokenId];
    }

    function balanceOf(address _owner) public view override returns(uint256){
        return _balances[_owner];
    }

    function mintOldToken() public {
        _safeMint(msg.sender, tokenId);
        tokenId++;
    }

    function _burnOldToken(uint256 _tokenId) private {
        _burn(_tokenId);
    }

    
}