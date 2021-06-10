const Engineer = require("../lib/classes/engineer");

it("Can set GitHUb account via constructor", () => {
    const testVal = 'ibealec';
    const e = new Engineer('Alec', 2, 'alec@fakemail.com', testVal);

    expect(e.github).toBe(testVal);
});

describe('getRole', () => {
    it("getRole() should return \"Engineer\"", () => {
        const testVal = 'Engineer';
        const e = new Engineer('Alec', 2, 'alec@fakemail.com', 'ibealec');

        expect(e.getRole()).toBe(testVal);
    });
})

describe('getRole', () => {
    it("Can get GitHub username via getGithub()", () => {
        const testVal = 'ibealec';
        const e = new Engineer('Alec', 2, 'alec@fakemail.com', testVal);

        expect(e.getGithub()).toBe(testVal);
    });
})
