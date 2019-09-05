const cashWithdrawl = (amount, accnum) => {
    console.log(`Withdrawing ${amount}from account $accnum`);

}


cashWithdrawl(300, 50449921);
cashWithdrawl(30, 50449921);
cashWithdrawl(200, 50447921);


const takeOrder = (size, drinkType) => {
    console.log (`Order received: ${size} ${drinkType}`);
}

takeOrder("Large","Tea");


let accnumber = 50449921;

const cashWithdrawl = (amount, accnum) => {
    console.log(`Withdrawing ${amount} from account ${accnum}`);
}
cashWithdrawl(300, accnumber);
cashWithdrawl(30,  50449921);
cashWithdrawl(200, 50447921);
