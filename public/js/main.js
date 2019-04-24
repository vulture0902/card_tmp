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
  },
  methods: {
    mint_token_btn: function () {
      var value = this.card_value;
      console.log("button!");
      console.log(value);
      contract.mintToken(token_id, value);
    }
  }
});
