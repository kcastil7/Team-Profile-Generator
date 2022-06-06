const intern = require("../lib/intern.js");

describe("Intern", () => {
    const obj = new intern("Kevin",1,"k@email.com","UCLA");
    describe("getSchool", () => {
        it("should return School", () => {
            const school = "UCLA";
            const result = obj.getSchool();
            expect(result).toBe(school);
        });
    });
    describe("getRole", () => {
        it("should return Role", () => {
            const role = "Intern";
            const result = obj.getRole();
            expect(result).toBe(role);
        });
    });
})