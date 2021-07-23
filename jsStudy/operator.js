//1. String concatenation
console.log('my' + ' cat');
console.log('1'+2);
console.log(`string literals: 1+2 = ${1+2}`);

//2. Numeric operators
// + - / * % **
console.log(2**3); //exponentiation

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

//4. Logical operators: || (or), &&(and), !(not)
const v1 = false;
const v2 = 4<2;
console.log(`or: ${v1 || v2 || check()}`); //true
//함수처럼 복잡한 연산 가장 뒤에

//and: often used to compress long if-statement
//nullableObject && nullableObject.something   


function check(){
    for(let i =0; i<10; i++){
        //wasting time
        console.log('😢');
    }
    return true;
}

//5. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);  //true
console.log(stringFive != numberFive);  //false

// === strict equality, no type conversion
console.log(stringFive === numberFive); //false
console.log(stringFive !== numberFive); //true

// object equality by reference     object는 레퍼런스를 저장
const e1 = {name: 'e1'};
const e2 = {name: 'e2'};
const e3 = e1;
console.log(e1 == e2);  //false     : 각각 다른 레퍼런스 저장되어있음
console.log(e1 === e2); //false
console.log(e1 === e3); //true
console.log('\n');
//equality - puzzler
console.log(0 == false); //true
console.log(0 === false); //false
console.log('' == false);   //true
console.log('' === false ); //false
console.log(null == undefined); //true
console.log(null === undefined);    //false

//6. Ternary operator : ?
// condition ? value1 : value2;
console.log(name === 'e1' ? 'yes' : 'no');

//7. switch
browser = 'IE';
switch(browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

//8. loops
let i = 3;
while(i>0) {
    console.log(`while:${i}`);
    i--;
}

do {
    console.log(`do while: ${i}`);
    i--;
}while(i>0);