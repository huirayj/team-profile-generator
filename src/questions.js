const questionsTM = [
    {
        type: 'input',
        message: "Enter your team manager's name: ",
        name: 'name',
    },
    {
        type: 'input',
        message: "Enter your team manager's employee ID: ",
        name: 'id',
    },
    {
        type: 'input',
        message: "Enter your team manager's E-mail: ",
        name: 'email',
    },
    {
        type: 'input',
        message: "Enter your team manager's office number: ",
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
        name: 'username',
    }
];

const questionAdd = [
    {
        type: 'list',
        message: "Would you like add an another team member: ",
        name: 'add',
        choices: ['Add an engineer', 'Add an intern', 'Done']
    }
];

module.exports = {
    questionsTM,
    questionsNG,
    questionsIT,
    questionExtra
};