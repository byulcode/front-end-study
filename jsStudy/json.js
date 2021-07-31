// JSON
// JavaScript Object Notation

//1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);  //double quote(json의 규격 사항)

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    //symbol: Symbol('id'),   //자바스크립트 자체의 특별한 데이터 json에 포함x
    jump:()=>{
        console.log(`${name} can jump!`);   //함수는 json에 포함x
    }
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color']); //이름, 색만 전달
console.log(json);

json = JSON.stringify(rabbit,(key, value) => {
    console.log(`key: ${key}, value: ${value}`);  
    return key === 'name' ? 'byul':value;      
});
console.log(json);

//2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key:${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
//obj.jump(); /// 에러뜸

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());   //error. string이기 때문