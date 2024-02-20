#!/usr/bin/env node

import inquirer from "inquirer";
import { me, questions } from "./src/content.js";
import { clear } from "console";
clear();

console.log(me);

const prompt = inquirer.createPromptModule();

const runPrompt = () => {
  prompt(questions).then((answer) => {
    answer.action();
    if (answer.action !== questions[0].choices[2].value) {
        clear();
        runPrompt();
    }
  });
};

runPrompt();
