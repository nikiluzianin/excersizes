"use strict";

let balance = 0;

const checkBalance = () => "your balance is " + balance;

const deposit = amount => amount > 0 ? "your new balance is " + (balance += amount) : "can't add negatinve amount";

const withdraw = amount => amount <= 0 ? "can't withdraw negative amount" :
    amount > balance ? "not sufficient funds" : "your new balance is " + (balance -= amount);

const checkIfNumber = (stringInQuestion) => (stringInQuestion += 1) ? true : alert("only use numbers!");

function main () {

    let decision;

    while (decision != 4) {
        decision = +prompt("What do you want to do? \n 1.Check balance\n 2.Deposit money \n 3.Withdraw money \n 4.Exit");
        if (checkIfNumber(decision)) {
            switch (decision) {
                case(1):  {
                    alert(checkBalance());
                    break;
                }
                case(2): {
                    let amountToAdd = +prompt("How much money do you want to add?")
                    checkIfNumber(amountToAdd) && alert(deposit(amountToAdd)); 
                    break;
                } 
                case(3): {
                    let amountToWithdraw = +prompt("How much money do you want to withdraw?")
                    checkIfNumber(amountToWithdraw) && alert(withdraw(amountToWithdraw));
                    break;
                }
            }
        }
    }
}

const checkBalanceOutput = () => alert("your balance is " + balance);

const runMain = () => main();



