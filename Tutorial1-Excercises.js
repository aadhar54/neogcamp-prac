

// Ex 1
console.log('Aadhar Bhatnagar');

// Ex 2
var readlineSync = require('readline-sync');

var userName = readlineSync.question('What is your name ?');

console.log(userName);

// Ex 3

console.log('Wecome ' + userName);

// Ex 4

var user = readlineSync.question('Hey Whats your name da ? \n')

console.log ('My name is '+user );

//Ex 5 and 6

var score = 0;
var userAns = readlineSync.question("Am I older than 25 (yes/no) ?\n");

if(userAns2 != 'no'){
  if(score>0){
    score -= 1;
  }
  console.log('You are wrong');
}else{
  score += 1;
  console.log('You are right');
}

var userAns2 = readlineSync.question('Are you from London (yes/no) ?\n')

if(userAns2 != 'no'){
  if(score>0){
    score -= 1;
  }
  console.log('You are wrong');
}else{
  score += 1;
  console.log('You are right');
}

console.log("Your score is "+score);

// Ex 7

function addTwoNumbers(n1 , n2){
  return n1+n2;
}

var firstNumber = parseInt(readlineSync.question('Enter first number\n'));
var secondNumber = parseInt(readlineSync.question('Enter second number\n'));

console.log(addTwoNumbers(firstNumber,secondNumber));


// Ex 8

var score = 0;

function miniquest(question , rightAns){
  var userAns = readlineSync.question(question+'\n');

  if(userAns === rightAns ){
    console.log('You are correct')
    score += 1;
  }
  else{
    console.log('You are wrong')
    if(score!=0){
      score -= 1;
    }
  }
}

miniquest('Is Delhi a country', 'no');
miniquest('Is Europe a country', 'no');
miniquest('Is India a country', 'yes');
miniquest('Is Bhutan a country', 'yes');

console.log(score);

// Ex 9
var readlineSync = require('readline-sync');

for(var i =0;i<5;i++){
  console.log('Aadhar Bhatnagar');
}

var n = readlineSync.question('Enter the number of rows\n');

for(let row =0; row<n ;row++ ){
  for(let col =0; col<=row ;col++){
    process.stdout.write('*');
  }
  process.stdout.write('\n');
}
