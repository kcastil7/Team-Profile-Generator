const manager = require("../lib/manager.js");

describe("Manager", () => {
    const obj = new manager("Kevin",1,"k@email.com",404);
    describe("getRole", () => {
        it("should return Role", () => {
            const role = "Manager";
            const result = obj.getRole();
            expect(result).toBe(role);
        });
    });
})