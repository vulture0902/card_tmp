//const Tmp = artifacts.require('./Hello.sol')

var Hello          = artifacts.require("Hello");
//var MappingExample = artifacts.require("MappingExample");
//var MappingUser    = artifacts.require("MappingUser");

module.exports = (deployer) => {
  deployer.deploy(Hello, "HOGE")
  //deployer.deploy(MappingExample, "HOGE")
  //deployer.deploy(MappingUser, "HOGE")
};
