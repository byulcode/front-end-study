'use strict';

//JavaScript is synchronous. by order -> in order
//Execute the code block by orger after hoisting
//hoisting: var, function declaration   (선언이 가장 위쪽에 간 후, 순서대로 실행)
console.log('1');   //동기
setTimeout(() => console.log('2'), 1000);    // asynchronous(비동기적 실행)
console.log('3');

// Synchronous callbLack
function printImmediately(print) {
    print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);


// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=> {
            if(
                (id === 'byul' && password === 'code') ||
                (id === 'ellie' && password === 'dream')
            ) {
                onSuccess(id);
            }else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(() => {
            if(user === 'byul') {
                onSuccess({name : 'byul', role: 'admin'});
            }else{
                onError(new Error('no access'));
            }
        }, 1000);
    }
}


const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getRoles(
        user, 
        userWithRole => {
            alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
        },
        error => {
            console.log(error);
        }
        );
    },
    error => {
        console.log(error);
    }
    );