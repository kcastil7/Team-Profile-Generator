const inquirer = require("inquirer");
const helper = require("./src/index-helper.js");
const htmlGen = require("./src/html-generator.js");


let managerList = [];
let engineerList = [];
let internList = [];
let employees = [];

const engineerInfo = [
    {
        type: "input",
        name: "Name",
        message: "Please enter your name"

    },
    {
        type: "input",
        name: "ID",
        message: "Please enter the employee ID"

    },
    {
        type: "input",
        name: "Email",
        message: "Please enter the engineer's email"

    },
    {
        type: "input",
        name: "Github",
        message: "Please enter the engineer's GitHub"

    }

];

const managerInfo = [
    {
        type: "input",
        name: "Name",
        message: "Please enter the manager's name"
    },
    {
        type: "input",
        name: "ID",
        message: "Please enter the employee ID"
    },
    {
        type: "input",
        name: "Email",
        message: "Please enter the manager's email"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Please enter the manager's office number"
    },

];

const internInfo = [
    {
        type: "input",
        name: "Name",
        message: "Please enter the intern's name"
    },
    {
        type: "input",
        name: "ID",
        message: "Please enter the employee ID"
    },
    {
        type: "input",
        name: "Email",
        message: "Please enter the intern's email"
    },
    {
        type: "input",
        name: "School",
        message: "Please enter the intern's school"
    },

];

const choice = [
    {
        type: "list",
        name: "Choice",
        message: "Please select which you want to add",
        choices: ["Engineer", "Intern", "None"]
    }
];

async function main() {

    await inquirer.prompt(managerInfo).then(function (response) {
        managerList = helper.setManager(response, managerList);
    });
     

        askChoice(); 
}
main();

async function askChoice() {
        await inquirer.prompt(choice).then(function (response) {  
            if (response.Choice ==="Engineer"){ 
                askEngineer();   
            }
            else if (response.Choice === "Intern"){
                askIntern();   
            }
            else {
                employees = managerList.concat(engineerList);
                employees = employees.concat(internList);
                htmlGen.generateHtml(employees);
            }

        });
}

async function askEngineer(){
    await inquirer.prompt(engineerInfo).then(function (response){
        engineerList = helper.setEngineer(response,engineerList);
    });
    askChoice(); 
}
async function askIntern(){
    await inquirer.prompt(internInfo).then(function (response){
        internList = helper.setIntern(response,internList);
    });
    askChoice(); 
}