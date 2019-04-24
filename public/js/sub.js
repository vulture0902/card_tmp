//現在のDappsのインフォメーションを表示する
async function current_state() {
    let current_address = await getAccount();
    let account_list    = await web3.eth.accounts;

    app.user01 = account_list[0];
    app.user02 = account_list[1];
    app.user03 = account_list[2];
    app.user04 = account_list[3];
    app.user05 = account_list[4];
    app.user06 = account_list[5];
    app.user07 = account_list[6];
    app.user08 = account_list[7];
    app.user09 = account_list[8];
    app.user10 = account_list[9];

    app.current_address = current_address;

}
