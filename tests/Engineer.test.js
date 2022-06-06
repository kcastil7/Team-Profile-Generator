const engineer = require("../lib/engineer.js");

describe("Engineer", () => {
    const obj = new engineer("Kevin",1,"k@email.com","kcastil7");
    describe("getGithub", () => {
        it("should return Github", () => {
            const github = "https://github.com/kcastil7";
            const result = obj.getGithub();
            expect(result).toBe(github);
        });
    });

    describe("getRole", () => {
        it("should return Role", () => {
            const role = "Engineer";
            const result = obj.getRole();
            expect(result).toBe(role);
        });
    });
})