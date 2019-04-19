pragma solidity ^0.5.6 <0.7.0;

import "./ERC721X/ERC721XToken.sol";
import "./Ownable.sol";

contract Card is ERC721XToken {

    uint256 internal nextTokenId = 0;
    address private _owner;
    int tmp_int = 123;
    //int public cardSupply;

    modifier onlyOwner() {
      require(isOwner());
      _;
    }

    mapping(uint => uint) internal tokenIdToIndividualSupply;
    constructor(string memory _baseTokenURI) public ERC721XToken(_baseTokenURI) {}
    //event TokenAwarded(uint indexed tokenId, address claimer, uint amount);

    function isOwner() public view returns(bool) {
      return msg.sender == _owner;
    }

    function name() public view returns (string memory) {
        return "Card";
    }

    function symbol() public view returns (string memory) {
        return "CRD";
    }

    function getBalance(address _from, uint256 _tokenId) public view returns (uint256){
        return balanceOf(_from, _tokenId);
    }

    function individualSupply(uint _tokenId) public view returns (uint) {
        return tokenIdToIndividualSupply[_tokenId];
    }

    function mint() public {
        uint256 tokenId = nextTokenId;
        nextTokenId = nextTokenId.add(1);
        super._mint(msg.sender, tokenId);
    }

    function mintToken(uint _tokenId, uint _supply) public returns (string memory){
      //require(!exists(_tokenId), "Error: Tried to mint duplicate token id");
        super._mint(_tokenId, msg.sender, _supply);
        tokenIdToIndividualSupply[_tokenId] = _supply;
        return "mintToken";
    }

    //function getCardSupply() public returns (int) {
    //    cardSupply = cardSupply + 1;
    //    return cardSupply;
    //}

    //function awardToken(uint _tokenId, address _toAddress, uint _amount) public onlyOwner {
    //    require(exists(_tokenId), "TokenID has not been minted");
    //    if (individualSupply[_tokenId] > 0) {
    //        require(_amount <= balanceOf(msg.sender, _tokenId), "Quantity greater than remaining cards");
    //        _updateTokenBalance(msg.sender, _tokenId, _amount, ObjectLib.Operations.SUB);
    //    }
    //    _updateTokenBalance(_toAddress, _tokenId, _amount, ObjectLib.Operations.ADD);
    //    emit TokenAwarded(_tokenId, _toAddress, _amount);
    //}

}
