const employee = require("./employee");

class engineer extends employee{  
    constructor(name,id,email,github){
        super(name,id,email);
        this.github = github;
        
    }
    getGithub(){
        return "https://github.com/" + this.github;
    }
    getRole(){
        return "Engineer";
    }
}
module.exports = engineer;