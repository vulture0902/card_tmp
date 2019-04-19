/*
const Card = artifacts.require('./Card.sol')

module.exports = (deployer) => {
  deployer.deploy(Card)
};
*/

const Card = artifacts.require('./Card.sol')

module.exports = (deployer) => {
  deployer.deploy(Card, "HOGE").then((instance) => {
    // ここでデプロイ後のインスタンスの関数を呼び出せる。
    //instance.function();
    });
};
