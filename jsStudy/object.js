//Objects
//object = {key: value};

// 1. Literals and properties
const obj1 = {};    //object literal syntax
const obj2 = new Object();  //ovject constructor syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const byul = {name : 'byul', age : 22};
print(byul);

byul.hasJob = true; //동적으로 추가 가능
console.log(byul.hasJob);

delete byul.hasJob; //삭제 가능
console.log(byul.hasJob);   //undefined

//2. Computed properties
// key should be always string
console.log(byul.name);
console.log(byul['name']);
byul['hasJob'] = true;
console.log(byul.hasJob);

function printValue(obj, key) {
    console.log(obj[key]);
}
printValue(byul, 'name');

// 3. Property value shorthand
const person1 = {name : 'bob', age: 2};
const person2 = {name: 'steve', age:3};
const person3 = {name: 'dave', age:4};
const person4 = new Person('byul', 22);
console.log(person4);
//object를 만드는 함수

// 4. Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

//5. in operator : property existence check (key in obj)
console.log('name' in byul);    //true
console.log('random' in byul);  //false
console.log(byul.random);   //undefined

//6. for..in vs for..of
// for(key in obj)
console.clear();
for(key in byul){
    console.log(key);
}

//for (value of iterable)
const array = [1,2,4,5];
for(value of array){
    console.log(value);
}

//7. Cloning
//Object.assign(dest,[obj1, obj2,...] )
const user = {name:'byul', age:'21'};
const user2 = user;
user2.name = 'coder';   
console.log(user);  //coder로 변경됨

const user4 = Object.assign({}, user);
console.log(user4);

//another example
const fruit1 = {color : 'red'};
const fruit2 = {color: 'blue', size:'big'};
const mixed = Object.assign({}, fruit1, fruit2);   //뒤에 나올수로 덮어씀
console.log(mixed.color);
console.log(mixed.size);