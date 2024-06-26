#! usr/bin/env node

import inquirer from "inquirer";

let balance: number = 10000;
const PIN: number = 1234;

let userPin = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: "Please enter 4 digit PIN code: "

});

if(userPin.pin === PIN) {
    let userInput = await inquirer.prompt([{
        name: "accountType",
        type: "list",
        choices: ["Current Account", "Saving Account"],
        message: "Select your account type: "

    },

    {
        name: "transacType",
        type: "list",
        choices: ["Fast Cash", "Cash Withdraw", "Balance Inquiry" ],
        message: "Select your transaction type: "
    }]);

    if(userInput.transacType === "Fast Cash") {
        let fastCash = await inquirer.prompt({
            name: "amount",
            type: "list",
            choices: ["1000", "2000", "3000", "4000", "5000", "10000"],
            message: "Please select your amount: "
        });
        if(fastCash.amount <= balance) {
            let newBalance = balance-fastCash.amount;
            console.log("Please take your cash.");
            console.log(`Your remaining balance is: ${newBalance}`);
            
        } else {
            console.log("Insufficient balance.");
            
        }
    }
    else if(userInput.transacType === "Cash Withdraw") {
        let cashWithdraw = await inquirer.prompt({
            name: "amount",
            type: "number",
            message: "Enter your amount:"
        });

        if(Number.isNaN(cashWithdraw.amount)) {
            console.log("Please enter a valid amount.");
            
        } else if(cashWithdraw.amount%500 !=0 ) {
                console.log("Please enter amount in multiples of 500");
                
        } else if(cashWithdraw.amount <= balance) {
            let newBalance = balance - cashWithdraw.amount;
            console.log("Please take your cash.");
            console.log(`Your remaining balance is: ${newBalance}`);
            
            } else {

            console.log("Insufficient balance.");
        }

    } else {
        console.log(`Your account balance is PKR ${balance}.`);
        
    }

}
else {
    console.log("Incorrect PIN");
}



