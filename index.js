#!/usr/bin/env node 
import inquirer from "inquirer";
const randomNum = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNum",
        type: "number",
        message: "Guess the number between 1-6 :,"
    }
]);
if (answer.userGuessNum == randomNum) {
    console.log("Congratulation, you guessed right number ! ");
}
else {
    console.log("you Guess wrong number, guess again !");
}
