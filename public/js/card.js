const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545")); //Ganacheのポート番号は7545

// 読み込んだ時の、token_idをグローバルで管理する
var token_id_main = '';
var address_tmp   = '';
var tmp1          = '';

//現在のDappsにアクセスしているアドレスを取得する
async function getAccount() {
  return web3.eth.defaultAccount;
}

async function card_init() {
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

  var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545")); //Ganacheのポート番号は7545
  var contract = await card_init();
  var currentAccount = await getAccount();
  var account_list = await web3.eth.accounts;
  var token_id = await card_mint_first_time(contract);
  //var token_id = '0x7C4fF18eDeDfaD5D3360B8102e435198231A2964';

  app.token_id_1 = token_id;
  //$("#token_id_1").text(token_id);
  //var address = '0x77d5a03b6ab7ed7a33c8f31a94128bda862364af' // オーナー

  contract.individualSupply.call(token_id, (err, res) => {
    console.log('============================== individualSupply');
    console.log(res.c[0]);
    //$("#item_supply").text(res.c[0]);
    app.item_supply = token_id;
  });

  // == user01 ==
  contract.balanceOf.call(account_list[0], token_id, (err, res) => {
    console.log('============================== balanceOf address1');
    console.log(res.c[0]);
    //$("#item01").text(res.c[0]);
    app.item01 = token_id;
  });

  // == user02 ==
  contract.balanceOf.call(account_list[1], token_id, (err, res) => {
    console.log('============================== balanceOf address2');
    console.log(res.c[0]);
    //$("#item02").text(res.c[0]);
    app.item02 = token_id;
  });

  // == user03 ==
  contract.balanceOf.call(account_list[2], token_id, (err, res) => {
    console.log('============================== balanceOf address3');
    console.log(res.c[0]);
    //$("#item03").text(res.c[0]);
    app.item03 = token_id;
  });

  // == user04 ==
  contract.balanceOf.call(account_list[3], token_id, (err, res) => {
    console.log('============================== balanceOf address4');
    console.log(res.c[0]);
    //$("#item04").text(res.c[0]);
    app.item04 = token_id;
  });

  // == user05 ==
  contract.balanceOf.call(account_list[4], token_id, (err, res) => {
    console.log('============================== balanceOf address5');
    console.log(res.c[0]);
    //$("#item04").text(res.c[0]);
    app.item04 = token_id;
  });

  // == user06 ==
  contract.balanceOf.call(account_list[5], token_id, (err, res) => {
    console.log('============================== balanceOf address6');
    console.log(res.c[0]);
    //$("#item04").text(res.c[0]);
    app.item04 = token_id;
  });

  // == user07 ==
  contract.balanceOf.call(account_list[6], token_id, (err, res) => {
    console.log('============================== balanceOf address7');
    console.log(res.c[0]);
    //$("#item07").text(res.c[0]);
    app.item07 = token_id;
  });

  // == user08 ==
  contract.balanceOf.call(account_list[7], token_id, (err, res) => {
    console.log('============================== balanceOf address8');
    console.log(res.c[0]);
    //$("#item08").text(res.c[0]);
    app.item08 = token_id;
  });

  // == user09 ==
  contract.balanceOf.call(account_list[8], token_id, (err, res) => {
    console.log('============================== balanceOf address9');
    console.log(res.c[0]);
    //$("#item09").text(res.c[0]);
    app.item09 = token_id;
  });

  // == user10 ==
  contract.balanceOf.call(account_list[9], token_id, (err, res) => {
    console.log('============================== balanceOf address10');
    console.log(res.c[0]);
    //$("#item10").text(res.c[0]);
    app.item10 = token_id;
  });

}
