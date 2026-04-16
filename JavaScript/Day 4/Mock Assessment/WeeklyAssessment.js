let account = {
    balance: 0,
    transactions: []
}

function deposit(amount){
    if(amount <= 0){
        console.log("Deposit amount must be greater than 0");
        return;
    }
    account.balance += amount;
    account.transactions.push(amount);

    console.log(amount+" deposited successfully");
}

function withdraw(amount){
    if(amount <= 0){
        console.log("Withdrawal amount must be greater than 0");

    }else if(account.balance < amount){
        console.log("Cannot withdraw more than balance");

    }else if(account.balance-amount < 500){
        console.log("Minimum balance of 500 must be maintained");

    }else if(amount > 10000){
        console.log("Cannot withdraw more than 10000 at once");
    
    }else{
        account.balance -= amount;
        account.transactions.push(-amount);
    }
}

function getBalance(){
    return "The balance is: "+account.balance;
}

function getTransactions(){

    if(account.transactions.length == 0){
        console.log("No Transactions to show !!")
        return;
    }
    
    console.log("Transactions:")
    for(let i=0; i<account.transactions.length; i++){

        if(account.transactions[i] < 0){
            console.log("Withdrawn: "+(-account.transactions[i]));

        }else{
            console.log("Deposited: "+account.transactions[i]);
        }
    }
    console.log();
}

deposit(2000);
withdraw(2500);

deposit(100);
withdraw(600)
getTransactions();


// getTransactions();
// console.log(getBalance());
// console.log();

// deposit(2000);
// getTransactions();
// console.log(getBalance());
// console.log();

// withdraw(500);
// getTransactions();
// console.log(getBalance());
// console.log();

// deposit(200);
// getTransactions();
// console.log(getBalance());
// console.log();

// withdraw(12000);
// withdraw(1400);
// deposit(-200);