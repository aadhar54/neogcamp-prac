https://replit.com/@thebtechviral/RoundedComplicatedScale?embed=1&output=1

ex 10

let groceryList = [];
groceryList.push('potato');
groceryList.push('spinach');
groceryList.push('roses');
groceryList.push('milk');
groceryList.push('banana');

console.log(groceryList[0]);
console.log(groceryList[2]);

let listLength = groceryList.length;
console.log(groceryList[listLength-1]);

// ex11: print every item on the list

for(let index =0; index<listLength ;index++){
    console.log(groceryList[index]);
}


// ex12: club info about a superhero together

let superman = {
    strength : 1000,
    name : "Clent",
    wife : "Louis Lane",
    happy : "Yes",
    species : "Alien",
    stealth : 10
}

let batman = {
    strength : 10,
    name : "Bruce",
    wife : "Catwoman",
    happy : "No",
    species : "Human",
    stealth : 1000
}

console.log(superman.stealth);
console.log(batman.stealth);

console.log("Superman is strong but it has stealth as "+ superman.stealth+" whereas Batman has ninja level stealth of "+batman.stealth);

// ex13: put a list of questions together

let questionOne = {
    question : "What is your first name" ,
    answer : "Aadhar"
};

let questionTwo = {
    question : "What is your last name" ,
    answer : "Bhatnagar"
}

let questionThree = {
    question : "Are you happy ?",
    answer : "yes"
}


let questList = []
questList.push(questionOne);
questList.push(questionTwo);
questList.push(questionThree);

// ex14: club everything to make the game

let readlineSync = require('readline-sync');
let score = 0;

let  user = readlineSync.question('Hi , Whats your name\n');

console.log('Welcome' +user);

let highscore = [];
// When user sends screenshot , we can enter here user object with name and high score

function play(question , correctAns){
    let userAns = readlineSync.question(question+'\n')
    if(userAns === correctAns){
        score ++;
    }else{
        if(score>0){
            score --;
        }
    }
}

for(let index = 0;index<questList.length;index++){
    let quesansobj = questList[index];
    play(quesansobj.question ,quesansobj.answer );
}

    console.log("Game over . Your score is "+score);
    console.log('Please send a screenshot if this is your high score');
