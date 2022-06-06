const employee = require("../lib/employee.js");

describe("employee", () => {
    const obj = new employee("Kevin",1,"k@email.com");
    describe("getName", () => {
        it("should return name", () => {
            const name = "Kevin";
            const result = obj.getName();
            expect(result).toBe(name);
        });
    });
    describe("getId", () => {
        it("should return ID", () => {
            const id = 1;
            const result = obj.getId();
            expect(result).toBe(id);
        });
    });
    describe("getEmail", () => {
        it("should return Email", () => {
            const email = "k@email.com";
            const result = obj.getEmail();
            expect(result).toBe(email);
        });
    });
    describe("getRole", () => {
        it("should return role", () => {
            const role = "Employee";
            const result = obj.getRole();
            expect(result).toBe(role);
        });
    });

}
);