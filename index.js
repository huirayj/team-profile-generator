const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Manager = require('./lib/classes/manager');
const Engineer = require('./lib/classes/engineer');
const Intern = require('./lib/classes/intern');

const question = require('./lib/questions');
const render = require("./lib/htmlRenderer");


// const inquireTM = inquirer.prompt(question.questionsTM);
// const inquireNG = inquirer.prompt(question.questionsNG);
// const inquireIT = inquirer.prompt(question.questionsIT);
// const inquireAdd = inquirer.prompt(question.questionAdd);
const employees = [];

const addManager = () => {
    inquirer.prompt(question.questionsTM)
        .then(({ name, id, email, office }) => {
            const manager = new Manager(name, id, email, office);

            employees.push(manager);
            addMember();
        });
}

const addEngineer = () => {
    inquirer.prompt(question.questionsNG)
        .then(({ name, id, email, github }) => {
            const engineer = new Engineer(name, id, email, github);

            employees.push(engineer);
            addMember();
        });
}

const addIntern = () => {
    inquirer.prompt(question.questionsIT)
        .then(({ name, id, email, school }) => {
            const intern = new Intern(name, id, email, school);

            employees.push(intern);
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
    const outputPath = path.join(OUTPUT_DIR, "team.html");

    // (!fs.existsSync(OUTPUT_DIR)) && fs.mkdirSync(OUTPUT_DIR)

    fs.writeFileSync(outputPath, render(employees), (err) =>
        console.error(err ? err : 'Your html was successfully created.'));
};

addManager();