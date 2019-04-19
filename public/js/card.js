
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

async function card_do() {

  const contract = await card_init();
  let currentAccount = await getAccount();

  //仮のトークン、固定でまずは、、
  //let token_id_tmp = "0x0000000000000000000000000000000000000000000000000000000000000001"

  contract.name.call((err, res) => {
      console.log('name:' + res);
  });

  var tmp1;
  contract.mint.call( (err, res) => {
      tmp1 = res;
      console.log('============================== mint');
      console.log(res);
  });

}
