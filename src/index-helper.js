const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");
const Manager = require("../lib/manager");
const Intern = require("../lib/intern");

function setManager(data, list) {
    let manager = new Manager(data.Name, data.ID, data.Email, data.officeNumber);
    list.push(manager);
    return list;
}
function setEngineer(data, list) {
    let engineer = new Engineer(data.Name, data.ID, data.Email, data.Github)
    list.push(engineer);
    return list;

}

function setIntern(data, list) {
    let intern = new Intern(data.Name, data.ID, data.Email, data.School)
    list.push(intern);
    return list;

}



module.exports = { setManager, setEngineer, setIntern }