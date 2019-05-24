var app = new Vue({
  el: '#app',
  data: {
    current_address: '',
    user01: '',
    user02: '',
    user03: '',
    user04: '',
    user05: '',
    user06: '',
    user07: '',
    user08: '',
    user09: '',
    user10: '',
    token_id_1: '',
    item_supply: '',
    card_value: '',
  },
  created() {
    current_state();
    card_do();
  }

});

var tmp1;
async function card_mint() {
  var resp = await fetch('/src/Card.json');
  var respJson = await resp.json();
  var contract = web3.eth.contract(respJson.abi).at(respJson.networks[5778].address);
  var token_id = contract.mint();
  //contract.mintToken(token_id, 1000);

  var event = contract.Transfer();
  event.watch(function (error, result) {
    if (!error){
      console.log(result);
      tmp1 = result;
      document.getElementById("card_address").innerHTML = "1枚発行<br>address:<br>" + result.address;
    }
  });
}

// == mint ==
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById("mint_token_btn").addEventListener("click", function(){
    card_mint();
  });
});
