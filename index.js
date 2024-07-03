#! /usr/bin/env node
// import chalk and inquirer
import inquirer from "inquirer";
import chalk from "chalk";
// display colourfull wellcome message
console.log(chalk.bold.cyanBright("\n \t\t Code with shifa - Word Counter"));
console.log("=".repeat(70));
// prompt the user to enter a sentance
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence.",
    }
]);
// Trimming the sentence, splitting it into words based on space and save it into array
let word = answer.sentence.trim().split(" ");
// analysis of user input sentence
console.log("=".repeat(70));
console.log(chalk.bold("Sentence words:"));
console.log(word);
console.log(chalk.bold(`\n - word count: ${chalk.bold.blueBright(word.length)}`));
console.log("=".repeat(70));
