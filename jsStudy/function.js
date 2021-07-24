//1. Function declaration
//function name(param1, param2) {body .. return;}
//function is object in JS

function log(message) {
    console.log(message);
}

//2. Parameters
//premitive parameters: passed by value
//object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const byulcode = {name : 'byulcode'};
changeName(byulcode);
console.log(byulcode);

//3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('HI');//HI by unknown

//4. Rest parameters (added in ES6) 배열 형태로 전달
function printAll(...args){
    for(let i = 0; i<args.length;i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }
    
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding');

//5. Local scope
let globalMessage = 'global';   //global variable
function printMessage() {
    let message = 'hellohi';
    console.log(message);   //local variable
    console.log(globalMessage);
}
printMessage();

//6. Return a value
function sum(a, b){
    return a + b;
}
const result = sum(1,2);    //3
console.log(`sum: ${sum(1,2)}`);

//7. Early return, early exit
//bad
function upgradeUser(user){
    if(user.point > 10) {
        //long upgrade logic..
    }
}

//good.
function upgradeUser(user){
    if(user.point <= 10) {
        return;
    }
     //long upgrade logic..
}

///Function Expression
const print  = function() { //anonymousfunction
    console.log('print');
};
print();
const printAgain = print;

printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

//Callback function using function expression
function randomQuiz(answer, printYes, printNO){
    if(answer === 'love you') {
        printYes();
    }else {
        printNO();
    }
}

const printYes = function() {//anonymous function
    console.log('yes!');
};

const printNo = function print(){//named function
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//Arrow function
//always anonymous
const simplePrint = function() {
    console.log('simple Print');
};

const simplePrint2 = () => console.log('simple Print!');
const add = (a,b) => a + b;
const simpleMultiply = (a,b) => {
    //do something more
    return a*b;
};

//IIFE : Immediately Invoked Function Expression 선언 동시에 호출
(function hello() {
    console.log('IIFE');
})();

//quiz!
//function calculate(command, a, b)
function calculate(command, a, b) {
    switch(command){
        case 'add':
            return a+b;
        case 'subtract':
            return a-b;
        case 'divide':
            return a/b;
        case 'multiply':
            return a*b;
        case 'remainder':
            return a%b;
        default:
            throw Error('nknown command');
    }
}