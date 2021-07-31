'use strict';

//JavaScript is synchronous. by order -> in order
//Execute the code block by orger after hoisting
//hoisting: var, function declaration   (선언이 가장 위쪽에 간 후, 순서대로 실행)
console.log('1');   //동기
setTimeout(() => console.log('2'), 1000);    // asynchronous(비동기적 실행)
console.log('3');

// Synchronous callback
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);