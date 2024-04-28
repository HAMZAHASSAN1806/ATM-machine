#!/usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

let myBalance = 50000; //Dollar
let myPin = 131313;
 
let pinAnswer = await inquirer.prompt(
    [
        {
           name: "pin",
           message: "Enter your 6 Digit pin code:",
           type: "number"
        }
    ]
);

if (pinAnswer.pin === myPin){
    console.log(chalk.green("Correct pin code Login successfully"));
    console.log(chalk.yellow("Welcome to real-IQ ATM machine!!! Your current Balance is: 50000"));

    let operationAnswer = await inquirer.prompt(
       [
           {
                 name: "operation",
                 message: "Please select option",
                 type: "list",
                 choices: ["withdraw" , "check balance" , "fast cash"]
           }
       ]
    );
   
      console.log(operationAnswer);
   
     if (operationAnswer.operation === "withdraw") {
       let amountAns = await inquirer.prompt(
           [
               {
                  name: "amount",
                  message: "Enter the amount to withdraw:",
                  type: "number"
               }
           ]
    );
       
    if(amountAns.amount > myBalance){
       console.log(chalk.red("Low balance!!! You don't have money to take this balance to withdraw"))
    }
       
    else{myBalance -= amountAns.amount 
        console.log(chalk.bgGreen(`Withdraw successfully!!! Your remaining balance is: ${myBalance}`));
        console.log(chalk.blue("Thank You for using ATM machine"))}

    }
     else if (operationAnswer.operation === "check balance"){
       console.log(chalk.greenBright(`Your current Balance is: ${myBalance}`))
       console.log(chalk.blue("Thank You for using ATM machine"))
    } 
    
    
    else if (operationAnswer.operation === "fast cash"){
        let fastcashAns = await inquirer.prompt(
       [
           {
              name: "amount",
              message: "Enter the amount to fast cash:",
              type: "list",
              choices: [ "10000" , "20000" , "30000" , "40000" , "50000"]
            }
        ] 
    ); 
        
          myBalance -= fastcashAns.amount;
          console.log(chalk.bgGreen(`Fast cash successfully!!! Your remaining balance is: ${myBalance}`))
          console.log(chalk.blue("Thank You for using ATM machine"))
     }

}    else{
     console.log(chalk.red("Incorrect pin code Login failed"));
};
