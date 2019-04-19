//現在のDappsのインフォメーションを表示する
async function current_state() {
    let current_address = await getAccount();
    const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
    let account_list    = await web3.eth.accounts;

    $("#current_address").text(current_address);
    $("#user01").text(account_list[0]);
    $("#user02").text(account_list[1]);
    $("#user03").text(account_list[2]);
    $("#user04").text(account_list[3]);
    $("#user05").text(account_list[4]);
    $("#user06").text(account_list[5]);
    $("#user07").text(account_list[6]);
    $("#user08").text(account_list[7]);
    $("#user09").text(account_list[8]);
    $("#user10").text(account_list[9]);

}
