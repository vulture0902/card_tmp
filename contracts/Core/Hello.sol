pragma solidity ^0.5.6;

contract Hello {

  string greeting = "hello solidity!!";

  function say() public pure returns (string memory) {
      return 'Hello, world!';
  }

  function say2() public view returns (string memory) {
      return greeting;
  }

}
