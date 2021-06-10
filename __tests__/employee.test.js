const Employee = require("../lib/classes/employee");

describe('Employee', () => {
    it("Can instantiate Employee instance", () => {
        const e = new Employee();

        expect(typeof (e)).toBe('object');
    });

    it("Can set name via constructor arguments", () => {
        const name = 'Tammer';
        const e = new Employee(name);

        expect(e.name).toBe(name);
    });

    it("Can set id via constructor argument", () => {
        const testVal = 4;
        const e = new Employee('Tammer', testVal);

        expect(e.id).toBe(testVal);
    });

    it("Can set email via constructor argument", () => {
        const testVal = 'tammer@fakemail.com';
        const e = new Employee('Tammer', 4, testVal);

        expect(e.email).toBe(testVal);
    });

    describe('getName', () => {
        it("Can get name via getName()", () => {
            const testVal = 'Tammer';
            const e = new Employee(testVal);

            expect(e.getName()).toBe(testVal);
        });
    })
    describe('getId', () => {
        it("Can get id via getId()", () => {
            const testVal = 4;
            const e = new Employee('Tammer', testVal);

            expect(e.getId()).toBe(testVal);
        });
    })

    describe('getEmail', () => {
        it("Can get email via getEmail()", () => {
            const testVal = 'tammer@fakemail.com';
            const e = new Employee('Tammer', 4, testVal);

            expect(e.getEmail()).toBe(testVal);
        });
    })

    describe('getRole', () => {
        it("getRole() should return \"Employee\"", () => {
            const testVal = 'Employee';
            const e = new Employee('Tammer', 4, 'tammer@fakemail.com');

            expect(e.getRole()).toBe(testVal);
        });
    })
})
