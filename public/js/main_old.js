contract.mint((err, tokenId) => {
    token_id_main = tokenId;
});

var tmp3;
contract.getBalance(currentAccount, token_id_main, (err, res) => {
    tmp3 = res;
    console.log('============================== getBalance');
    console.log(res);
});

contract.mintToken.call(token_id_main, 2000, (err, res) => {
    console.log('============================== mintToken');
    console.log(res);
});
