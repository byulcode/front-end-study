//added in ES 5, use this for Valina javascript
'use strict';

//1. Variable, rw(read/write)
//let (added in ES6) - mutable
//var (don't ever use it!!)
//var hoisting(선언 순서와 상관 없이 순서를 젤 위로 끌어올려줌), 블럭 scope 무시
let glovalName = 'global name'; //
{
    let name = 'elly';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(glovalName);
}
console.log(name);
console.log(glovalName);

//2. Constant, r(read only) 이걸 쓰는게 바람직
const daysInWeek = 7;
const maxNumber = 5;


//Note!
//Immutable data types: premitive types, frozen objects(i.e. object.freeze())
//Mutable data types: all objects by default are mutable in JS
//favor immutable data type always for a few reasons: 
// security, thread safety, reduce human mistakes


//3. Variable types
// primitive, object(box), function
const count = 17;   //integer
const size = 17.1;  //decimal number
console.log(`value: ${count}, type : ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - special numeric values:
const infinity = 1/0;   //무한
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello '+ brendan+ char;
console.log(`value: ${greeting}, type: ${typeof greeting}`);

//boolean
//false : 0, null, undefined, NaN, ''
//true : any other value

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, created unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);  //false

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
//description : string으로 변환

//object, real-life object, data structure
const ellie = {name: 'ellie', age:20}; //const로 정의되어 있어 다른 object로 할당 불가
ellie.age = 21; //변경 가능

//4. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`); //string
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);//string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);//number
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);//number
console.log(text.charAt(0)); //error!


