import inquirer from "inquirer";
let currency = {
    PKR: 278,
    USD: 1,
    IND: 83.30,
    SA: 18.70
};
let current_amount = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ['PKR', 'USD', 'IND', 'SA'],
    },
    {
        name: "to",
        message: "Enter To Currency ",
        choices: ['PKR', 'USD', 'IND', 'SA'],
        type: "list",
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: 'number',
    }
]);
let From_Amount = currency[current_amount.from];
let To_Amount = currency[current_amount.to];
let amount = current_amount.amount;
let amount1 = amount / From_Amount;
let convertamount = amount1 / To_Amount;
console.log(convertamount);
