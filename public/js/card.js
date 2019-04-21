
// 読み込んだ時の、token_idをグローバルで管理する
var token_id_main = '';

//現在のDappsにアクセスしているアドレスを取得する
async function getAccount() {
  return web3.eth.defaultAccount;
}

async function card_init() {
  const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545")); //Ganacheのポート番号は7545
  const resp = await fetch('/src/Card.json');
  const respJson = await resp.json();
  const contract = web3.eth.contract(respJson.abi).at(respJson.networks[5778].address);
  console.log('contract_address:' + respJson.networks[5778].address);
  return contract
}

function card_mint_first_time(contract) {
  return new Promise(resolve => {
    var token_id = localStorage.getItem("token_id_card");
    console.log(token_id);
    if (token_id == null){
      var token_id = contract.mint();
      localStorage.setItem("token_id_card", token_id);
      console.log(token_id);
    }
    resolve(token_id);
  })
}

async function card_do() {

  const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545")); //Ganacheのポート番号は7545
  const contract = await card_init();
  let currentAccount = await getAccount();
  let account_list = await web3.eth.accounts;
  var token_id = await card_mint_first_time(contract);
  var token_id = '0x7C4fF18eDeDfaD5D3360B8102e435198231A2964';

  $("#token_id_1").text(token_id);
  //var address = '0x77d5a03b6ab7ed7a33c8f31a94128bda862364af' // オーナー

  //mint_token
  $("#mint_token_btn").click(function(){
    var value = $('#card_value').val();
    console.log("button!");
    console.log(value);
    contract.mintToken(token_id, value);
  });

  //return (_ownedTokensIndexes, _ownedTokens);
  //var tmp = contract.tokensOwned(account_list[0])
  //console.log('============================== tokensOwned');
  //console.log(tmp);

  contract.individualSupply.call(token_id, (err, res) => {
      console.log('============================== individualSupply');
      console.log(res.c[0]);
      $("#item_supply").text(res.c[0]);
  });

  // == user01 ==
  contract.balanceOf.call(account_list[0], token_id, (err, res) => {
    console.log('============================== balanceOf address1');
    console.log(res.c[0]);
    $("#item01").text(res.c[0]);
  });

  // == user02 ==
  contract.balanceOf.call(account_list[1], token_id, (err, res) => {
    console.log('============================== balanceOf address2');
    console.log(res.c[0]);
    $("#item02").text(res.c[0]);
  });

  // == user03 ==
  contract.balanceOf.call(account_list[2], token_id, (err, res) => {
    console.log('============================== balanceOf address3');
    console.log(res.c[0]);
    $("#item03").text(res.c[0]);
  });

  // == user04 ==
  contract.balanceOf.call(account_list[3], token_id, (err, res) => {
    console.log('============================== balanceOf address4');
    console.log(res.c[0]);
    $("#item04").text(res.c[0]);
  });

  // == user05 ==
  contract.balanceOf.call(account_list[4], token_id, (err, res) => {
    console.log('============================== balanceOf address5');
    console.log(res.c[0]);
    $("#item05").text(res.c[0]);
  });

  // == user06 ==
  contract.balanceOf.call(account_list[5], token_id, (err, res) => {
    console.log('============================== balanceOf address6');
    console.log(res.c[0]);
    $("#item06").text(res.c[0]);
  });

  // == user07 ==
  contract.balanceOf.call(account_list[6], token_id, (err, res) => {
    console.log('============================== balanceOf address7');
    console.log(res.c[0]);
    $("#item07").text(res.c[0]);
  });

  // == user08 ==
  contract.balanceOf.call(account_list[7], token_id, (err, res) => {
    console.log('============================== balanceOf address8');
    console.log(res.c[0]);
    $("#item08").text(res.c[0]);
  });

  // == user09 ==
  contract.balanceOf.call(account_list[8], token_id, (err, res) => {
    console.log('============================== balanceOf address9');
    console.log(res.c[0]);
    $("#item09").text(res.c[0]);
  });

  // == user10 ==
  contract.balanceOf.call(account_list[9], token_id, (err, res) => {
    console.log('============================== balanceOf address10');
    console.log(res.c[0]);
    $("#item10").text(res.c[0]);
  });

}
