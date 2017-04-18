// dependency for inquirer npm package
var inquirer = require("inquirer");
var fs = require("fs");

// Creating flash cards  
function newCard () {
    inquirer.prompt([{
        name: "question",
        message: "Enter in question: "
    }, {
        name: "answer",
        message: "Enter in answer: "
    }]).then(function(input) {
        console.log(input)
        storeCard(input.question, input.answer);
    });
}

function storeCard (question, answer) {
    // Append to file
    var textToAdd = question + "," + answer + "\r\n";
    fs.appendFile("log.txt", textToAdd, function(err) {
    });
}

function review (question, answer) {
    this.question = question;
    this.answer = answer;
    fs.readFile("log.txt", "utf8", function(error, data) {
        console.log(data);
    });
}

function listCards () {
    fs.readFile("log.txt", "utf8", function(error, data) {
        console.log(data);
    });
}

// Ask user for command
function commandRequest () {
    inquirer.prompt([{
        name: "command",
        message: "Enter a command. \n 'create' to create flash cards) \n 'review' to review current flash card list \n 'list' to see all flash cards \n",
    }]).then(function(input) {
        if (input.command === "create") {
            newCard();
        } 
        else if (input.command === "review") {
            review();
        } 
        else if (input.command === "list") {
            listCards();
        }
        else {
            console.log("Please enter a valid command.");
        }

    });
}

commandRequest();