const Manager = require("../lib/classes/manager");
const Employee = require("../lib/classes/employee");

it("Can set office number via constructor argument", () => {
    const testVal = 1;
    const e = new Manager('Jared', 1, 'jared@fakemail.com', testVal);

    expect(e.number).toBe(testVal);
});

describe('getRole', () => {
    it('getRole() should return "Manager"', () => {
        const testVal = 'Manager';
        const e = new Manager('Jared', 1, 'jared@fakemail.com', 1);

        expect(e.getRole()).toBe(testVal);
    });
})

describe('getOfficeNumber', () => {
    it("Can get office number via getOfficeNumber()", () => {
        const testVal = 1;
        const e = new Manager('Jared', 1, 'jared@fakemail.com', testVal);

        expect(e.getOfficeNumber()).toBe(testVal);
    });
})
