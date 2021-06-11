const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Manager = require('./lib/classes/manager');
const Engineer = require('./lib/classes/engineer');
const Intern = require('./lib/classes/intern');

const question = require('./lib/questions');
const render = require("./lib/htmlRenderer");

const teams = {};

const init = () => {
    createTeam();
}

const createTeam = () => {
    inquirer.prompt(question.questionTeam)
        .then((answer) => {
            teams[`${answer.teamName}`] = [];
            addManager();
        });
};

const addManager = () => {
    inquirer.prompt(question.questionsTM)
        .then(({ name, id, email, office }) => {
            const manager = new Manager(name, id, email, office);

            teams[Object.keys(teams)].push(manager);
            addMember();
        });
}

const addEngineer = () => {
    inquirer.prompt(question.questionsNG)
        .then(({ name, id, email, github }) => {
            const engineer = new Engineer(name, id, email, github);

            teams[Object.keys(teams)].push(engineer);
            addMember();
        });
}

const addIntern = () => {
    inquirer.prompt(question.questionsIT)
        .then(({ name, id, email, school }) => {
            const intern = new Intern(name, id, email, school);

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
    const OUTPUT_DIR = path.resolve(__dirname, "dist");
    const outputPath = path.join(OUTPUT_DIR, `${Object.keys(teams)}.html`);

    fs.writeFileSync(outputPath, render(teams[Object.keys(teams)]), (err) =>
        console.error(err ? err : 'Your html was successfully created.'));
};

init();

module.exports = teams;
