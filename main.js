#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{ message: "Enter first number", type: "number", name: "firstnumber" },
    { message: "Enter second number", type: "number", name: "secondnumber" },
    { message: "Select one of the operators to perform operation",
        type: "list",
        name: "operators",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//conditional statement
if (answer.operators === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operators === "Subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operators === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operators === "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("Please enter o valid number");
}
