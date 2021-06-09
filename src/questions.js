const questionsTM = [
    {
        type: 'input',
        message: "Enter your name: ",
        name: 'name',
    },
    {
        type: 'input',
        message: "Enter your employee ID: ",
        name: 'id',
    },
    {
        type: 'input',
        message: "Enter your E-mail: ",
        name: 'email',
    },
    {
        type: 'input',
        message: "Enter your office number: ",
        name: 'office',
    }
];

const questionsNG = [
    {
        type: 'input',
        message: "Enter your engineer's name: ",
        name: 'name',
    },
    {
        type: 'input',
        message: "Enter your engineer's employee ID: ",
        name: 'id',
    },
    {
        type: 'input',
        message: "Enter your engineer's E-mail: ",
        name: 'email',
    },
    {
        type: 'input',
        message: "Enter your engineer's GitHub username: ",
        name: 'username',
    }
];

const questionsIT = [
    {
        type: 'input',
        message: "Enter your intern's name: ",
        name: 'name',
    },
    {
        type: 'input',
        message: "Enter your intern's employee ID: ",
        name: 'id',
    },
    {
        type: 'input',
        message: "Enter your intern's E-mail: ",
        name: 'email',
    },
    {
        type: 'input',
        message: "Enter your intern's school name: ",
        name: 'school',
    }
];

const questionAdd = [
    {
        type: 'list',
        message: "Would you like like to do next? ",
        name: 'add',
        choices: ['Add an engineer', 'Add an intern', 'Create the cards']
    }
];

module.exports = {
    questionsTM,
    questionsNG,
    questionsIT,
    questionAdd
};