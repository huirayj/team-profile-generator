const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, number) {
        super(name, id, email);
        this.number = number;
        this.role = 'Manager';
    }
    getOfficeNumber() {
        return this.number;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Manager;