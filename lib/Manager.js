const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, number) {
        super(name, id, email);
        this.number = number;
        this.position = 'Manager';
    }
    getPosition() {
        return this.position;
    }
    getNumber() {
        return this.number;
    }
}

module.exports = Manager;