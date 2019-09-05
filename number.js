let acountNumber = 12345678
let acountPin = 1234
let balance = 1000

const cashWithdrawal = (pin, amount) => {
    if (pin == acountPin){
        if (balance >= amount){
        console.log(`withdraw £${amount} from ${acountNumber}`)
        displayBalance(amount)
        console.log(`Your new balance is £${balance}`)
        }
        else{
        console.log("not enough funds in acount")
        console.log(`Your balance is £${balance}`)
        }
    }
    else{
        console.log("invalid pin entered")
    }

}

const displayBalance = (amount) => {
    return balance = balance - amount 
} 

cashWithdrawal(1254, 100)
cashWithdrawal(1234, 100)
cashWithdrawal(1234, 900)
cashWithdrawal(1234, 100)
