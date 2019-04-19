interface ERC721 /* is ERC165 */ {
X-function balanceOf(address _owner) external view returns (uint256);
X-function ownerOf(uint256 _tokenId) external view returns (address);
X-function safeTransferFrom(address _from, address _to, uint256 _tokenId, bytes data) external payable;
X-function safeTransferFrom(address _from, address _to, uint256 _tokenId) external payable;
X-function transferFrom(address _from, address _to, uint256 _tokenId) external payable;
  function approve(address _approved, uint256 _tokenId) external payable;
  function setApprovalForAll(address _operator, bool _approved) external;
  function getApproved(uint256 _tokenId) external view returns (address);
  function isApprovedForAll(address _owner, address _operator) external view returns (bool);

  event Transfer(address indexed _from, address indexed _to, uint256 indexed _tokenId);
  event Approval(address indexed _owner, address indexed _approved, uint256 indexed _tokenId);
  event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved);
}

contract ERC721X {
  function implementsERC721X() public pure returns (bool);
X-function ownerOf(uint256 _tokenId) public view returns (address _owner);
X-function balanceOf(address owner) public view returns (uint256);
X-function balanceOf(address owner, uint256 tokenId) public view returns (uint256);
  function tokensOwned(address owner) public view returns (uint256[], uint256[]);

  function transfer(address to, uint256 tokenId, uint256 quantity) public;
X-function transferFrom(address from, address to, uint256 tokenId, uint256 quantity) public;
X-function safeTransferFrom(address from, address to, uint256 tokenId, uint256 _amount) public;
X-function safeTransferFrom(address from, address to, uint256 tokenId, uint256 _amount, bytes data) public;
  function safeBatchTransferFrom(address _from, address _to, uint256[] tokenIds, uint256[] _amounts, bytes _data) public;
  function name() external view returns (string);
  function symbol() external view returns (string);

  // Required Events
  event TransferWithQuantity(address indexed from, address indexed to, uint256 indexed tokenId, uint256 quantity);
|-event TransferToken(address indexed from, address indexed to, uint256 indexed tokenId, uint256 quantity);
X-event ApprovalForAll(address indexed _owner, address indexed _operator, bool _approved);
|-event BatchTransfer(address indexed from, address indexed to, uint256[] tokenTypes, uint256[] amounts);
}
