const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.position = 'Engineer'
    }
    getPosition() {
        return this.position;
    }
    getGitHub() {
        return this.github;
    }
}

module.exports = Engineer;