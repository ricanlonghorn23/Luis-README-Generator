// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What would you like the title of your project to be?',
        name: 'title',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:',
    },
    {
        type: 'input',
        message: 'Please provide a Table of Contents for your project:',
        name: 'table of contents',
    },
    {
        type: 'input',
        message: 'How do you install your application?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How do you use your application?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What license would you like to use for your project?',
        name: 'license',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        message: 'How can users contribute to the project?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'How do I run tests for this application?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Are there any questions?',
        name: 'questions',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   fs.writeFileSync(fileName, data, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('README.md created successfully!');
});
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userAnswers) =>{
        const markdownContent = generateMarkdown(userAnswers);
        writeToFile('README.md', markdownContent);
    });
}

// Function call to initialize app
init();
