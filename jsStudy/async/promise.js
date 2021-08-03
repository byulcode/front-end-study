'use strict';

// Promise is a JavaScript object for asynchronous operation.
// State : pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Promise is created, the executor runs automatically
const promise = new Promise((resolve, reject) => {//비동기적
    // doing some heavy work (network, read file)
    console.log('doing something..');
    setTimeout(() => {
       resolve('byul');//성공
       //reject(new Error('no network'));//실패
    }, 2000);
});

// 2. Consumers: then, catch, finally
promise//
.then(value => {//promise에서의 결과가 들어감
    console.log(value);
})
.catch(error => {
    console.log(error);
})
.finally(() => {console.log('finally')
});

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
})

fetchNumber
.then(num => num * 2)   //2
.then(num => num *3)    //6
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> resolve(num -1), 1000); //5
    });
})
.then(num => console.log(num));

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('닭'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(()=> reject(new Error(`error! ${hen} => 알`)),1000);
    });
    const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(()=> resolve(`${egg} => 계란프라이`), 1000);
    });

    // getHen()
    // .then(hen => getEgg(hen)) //한가지만 받아 그대로 전달하는 경우 생략 가능
    // .then(egg => cook(egg))     // ↓↓↓↓↓
    // .then(meal => console.log(meal));
//생략 한 것
    getHen()
    .then(getEgg)
    .catch(error => {   //에러날 경우 빵으로 대체
        return '빵';
    })
    .then(cook)    
    .then(console.log)
    .catch(console.log);
