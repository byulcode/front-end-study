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
console.log(byul.name);
console.log(byul['name']);