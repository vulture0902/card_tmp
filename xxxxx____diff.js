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

// ================================================================================================================
// ================================================================================================================


// 引数一覧
let uint = 123;
let string = 'abc';
let bool = true;
let address = '0xca35b7d915458ef540ade6068dfe2f44e8fa733c';
let uintArr = [123,234,345];

//　第1引数のuint
let uintHex = web3.toHex(uint)                                          // 値をHexへ変換
let uintValue = uintHex.slice(2)                                        // 先頭の0xを削除
let uintResult =  '0'.repeat(64 - uintValue.length) + uintValue         // 左側を0で埋めて合計64文字(32byte)にする

// 第2引数のoffsetを取得
let offset1 = web3.toHex(5 * 32)                                        // offsetの計算方法は省略
let offset1Value = offset1.slice(2)                                     // 先頭の0xを削除
let offset1Result = '0'.repeat(64 - offset1Value.length) + offset1Value // 左側を0で埋めて合計64文字(32byte)にする

//　第3引数のboolean
let flg = bool ? 1 : 0
let booleanHex = web3.toHex(flg)                                        // 値をHexへ変換
let booleanValue = booleanHex.slice(2)                                  // 先頭の0xを削除
let booleanResult = '0'.repeat(64 - booleanValue.length) + booleanValue // 右側を0で埋めて合計64文字(32byte)にする

//　第4引数のaddress
let addressValue = address.slice(2)                                     // 先頭の0xを削除
let addressResult = '0'.repeat(64 - addressValue.length) + addressValue // 左側を0で埋めて合計64文字(32byte)にする

// 第5引数のoffsetを取得
let offset2 = web3.toHex((5 + 2) * 32)                                  // offsetの計算方法は省略
let offset2Value = offset2.slice(2)                                     // 先頭の0xを削除
let offset2Result = '0'.repeat(64 - offset2Value.length) + offset2Value // 左側を0で埋めて合計64文字(32byte)にする

//　第2引数のstring
let stringHex = web3.toHex(string)                                      // 値をHexへ変換
let stringValue = intHex.slice(2)                                       // 先頭の0xを削除
let stringResult = stringValue + '0'.repeat(64 - stringValue.length)    // 右側を0で埋めて合計64文字(32byte)にする

//　第5引数のuint[]
let uintCount = uintArr.length
let uintArrValue = uintArr.map((item)=>{
    let itemHex = web3.toHex(item)                                      // 値をHexへ変換
    let itemValue = itemHex.slice(2)                                    // 先頭の0xを削除
    let itemResult = '0'.repeat(64 - itemValue.length) + itemValue      // 左側を0で埋めて合計64文字(32byte)にする
    return itemResult
})
