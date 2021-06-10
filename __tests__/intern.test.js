const Intern = require("../lib/classes/intern");

it("Can set school via constructor", () => {
    const testVal = '2University';
    const e = new Intern('John', 5, 'john@fakemail.com', testVal);

    expect(e.school).toBe(testVal);
});

describe('getRole', () => {
    it("getRole() should return \"Intern\"", () => {
        const testVal = 'Intern';
        const e = new Intern('John', 5, 'john@fakemail.com', '2University');

        expect(e.getRole()).toBe(testVal);
    });
})

describe('getSchool', () => {
    it("Can get school via getSchool()", () => {
        const testVal = '2University';
        const e = new Intern('John', 5, 'john@fakemail.com', testVal);

        expect(e.getSchool()).toBe(testVal);
    });
})

