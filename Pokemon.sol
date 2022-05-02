//SPDX-License-Identifier: MIT

pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract Pokemon is ERC1155{
    uint256 public constant CHARMANDER = 0;
    uint256 public constant PIKACHU = 1;
    uint256 public constant BULBASAUR = 2;
    uint256 public constant EVEE = 3;
    uint256 public constant MACHAMP = 4;
    uint256 public constant SQUIRTLE = 5;

    

    mapping(uint => uint) public maxSupply;
    mapping(uint => uint) public currentSupply;
    mapping(address => mapping(uint256 => uint256)) public NFTBalance;
    
    

    constructor()  ERC1155("https://QmaKrcfPc7ykB7hC6XPBMDNje9riKyHabKdRyBAL2xX8eA/0.png"){
        maxSupply[CHARMANDER] = 100;
        maxSupply[PIKACHU] = 100;
        maxSupply[BULBASAUR] = 100;
        maxSupply[EVEE] = 100;
        maxSupply[MACHAMP] = 100;
        maxSupply[SQUIRTLE] = 100;
        
    }

    function uri(uint256 _tokenId) override public  pure returns(string memory){
        return string(
            abi.encodePacked(
                "https://gateway.pinata.cloud/ipfs/QmSavot3YiETNh4zs3TGZq3wMjSqhFjE77Jd4VamNp354Y/",
                Strings.toString(_tokenId),
                ".json"
            )
        );
    }

    function mintNFT (uint256 id) public returns(bool){
        require(NFTBalance[msg.sender][id] == 0, "You can only Mint One of Each Pokemon!");
        require(currentSupply[id] < maxSupply[id], "Max mint reached for this NFT!");
        _mint(msg.sender, id, 1, "");
        NFTBalance[msg.sender][id] += 1;
        currentSupply[id] += 1;

        return true;
    }
    function supplyRemaining(uint256 _id) public view  returns(uint256){
        uint remaining = maxSupply[_id] - currentSupply[_id];
        return remaining;
    }


}
