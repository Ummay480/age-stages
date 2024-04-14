#!/usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "age",
        type: "number",
        message: "select an age",
    }
]);
// * If the person is less than 2 years old, print a message that the person is a baby.
if (answers.age < 2) {
    console.log("The person is a baby");
}
// * If the person is at least2 years old but less then 4, prinr a message that the person is a toddler.
else if (answers.age >= 2 && answers.age < 4) {
    console.log("The person is a toddler");
}
// * If the person is at least 4 years old but less then 13, print a message that the person is a kid.
else if (answers.age >= 4 && answers.age < 13) {
    console.log("The person is a kid");
}
// * If the person is atleast 13 years old but less then 20, print a message that the person is a teenager.
else if (answers.age >= 13 && answers.age < 20) {
    console.log("The person is teenager");
}
// * If the person is atleast 20 years old but less then 65, print a message that the person is an adult.
else if (answers.age >= 20 && answers.age < 65) {
    console.log("The person is an adult");
}
// * If the person is age 65 years older, print a message that the person is an elder.
else {
    console.log("The person is an elder");
}
