const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Manager = require('./lib/classes/manager');
const Engineer = require('./lib/classes/engineer');
const Intern = require('./lib/classes/intern');

const question = require('./lib/questions');
const render = require("./lib/htmlRenderer");
const teams = require('./lib/teams');

// starts application
const init = () => {
    createTeam();
}

const createTeam = () => {
    // present questions to user
    inquirer.prompt(question.questionTeam)
        .then((answer) => {
            // team name is used as a property of the team object
            teams[`${answer.teamName}`] = [];
            addManager();
        });
};

const addManager = () => {
    inquirer.prompt(question.questionsTM)
        .then(({ name, id, email, office }) => {
            const manager = new Manager(name, id, email, office);

            // adds manager to employee array
            teams[Object.keys(teams)].push(manager);
            addMember();
        });
}

const addEngineer = () => {
    inquirer.prompt(question.questionsNG)
        .then(({ name, id, email, github }) => {
            const engineer = new Engineer(name, id, email, github);

            // adds engineer to employee array
            teams[Object.keys(teams)].push(engineer);
            addMember();
        });
}

const addIntern = () => {
    inquirer.prompt(question.questionsIT)
        .then(({ name, id, email, school }) => {
            const intern = new Intern(name, id, email, school);

            // adds intern to employee array
            teams[Object.keys(teams)].push(intern);
            addMember();
        });
}

const addMember = () => {
    inquirer.prompt(question.questionAdd).then(choice => {
        switch (choice.add) {
            case 'Add an engineer':
                addEngineer();
                break;
            case 'Add an intern':
                addIntern();
                break;
            default:
                generateHTML();
                process.exit();
                break;
        }
    });
}

const generateHTML = () => {
    // formats team name for filename consistency
    const filename = Object.keys(teams).toString().replace(/\s+/g, '').toLowerCase();
    const OUTPUT_DIR = path.resolve(__dirname, "dist");
    const outputPath = path.join(OUTPUT_DIR, `${filename}.html`);

    // takes the employee array and processes it as an html document
    fs.writeFile(outputPath, render(teams[Object.keys(teams)]), err => {
        if (err) throw err;
        console.log('Your html was successfully created.');
    });
};

init();

module.exports = teams;

