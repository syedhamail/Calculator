#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const answers : {
    numberOne: number,
    numberTwo: number,
    operator: string,

    
} = await inquirer.prompt([
    {type: "number",
     name: "numberOne",
     message: "What is your first number?"
    },
    {type: "number",
     name: "numberTwo",
     message: "What is your second number?"
    },
    {type: "list",
     name: "operator",
     message: "What operator would you like to use?",
     choices: ["+", "-", "*", "/"]}
    
])

const { numberOne, numberTwo, operator} = answers;
let result
 switch (operator) {
     case "+": result=numberOne + numberTwo;
     break;
     case "-": result=numberOne - numberTwo;
     break;
     case "*": result=numberOne * numberTwo;
     break;
     case "/": result=numberOne / numberTwo;
     break;
     default:
        console.log("Invalid operator");
}

 console.log(chalk.green(`The result of ${numberOne} ${operator} ${numberTwo} is ${result}`));