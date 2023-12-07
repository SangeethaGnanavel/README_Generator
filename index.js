// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter Application title",
  },
  {
    type: "input",
    name: "description",
    message: "Enter Application Description",
  },
  {
    type: "input",
    name: "install",
    message: "Enter Installation Steps",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter Application usage (Seperate each line using dot.)",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a License",
    choices: ["Apache", "Boost", "Eclipse", "MIT", "Unlicense"],
    filter(val) {
      return val.toLowerCase();
    },
  },
  {
    type: "input",
    name: "contribute",
    message: "How to Contribute to the Application",
  },
  {
    type: "input",
    name: "test",
    message: "How to test the Application",
  },
  {
    type: "input",
    name: "Gitrepo",
    message: "Provide Git Repository for the Application",
  },
  {
    type: "input",
    name: "contact",
    message: "Provide email for contact",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const ReadMecontent = generateMarkdown.generateMarkdown(answers);
    writeToFile("README.md", ReadMecontent);
  });
}

// Function call to initialize app
init();
