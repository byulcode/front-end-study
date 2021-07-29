//Array

// 1. Declaration
const arr1 = new Array()
const arr2 = [1,2];

// 2. Index position
const fruits = ['사과','바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[2]); //undefined

console.clear();
// 3. Looping over an array
// a. for
for(i = 0; i<fruits.length;i++){
    console.group(fruits[i]);
}

// b. for of
for(let fruit of fruits){
    console.log(fruits);
}

// c. forEach
fruits.forEach((fruit, index) => console.log(fruit, index));//함수

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('딸기','복숭아');
console.log(fruits);

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('딸기', '레몬');
console.log(fruits);

//shift : remove an item from the beginning
fruits.shift();
console.log(fruits);

//note! shift, unshift are slower than pop, push ..느려!!
// splice: remove an itme by index position
fruits.push('딸기', '복숭아', '살구');
console.log(fruits);
//fruits.splice(1);   //지정한 인덱스부터 모두 다 지워버림
fruits.splice(1,1);
console.log(fruits);
fruits.splice(1,1,'사과','수박');   //지워진 자리에 사과, 수박 추가
console.log(fruits);

//combine two arrays
const fruits2 = ['라임', '코코넛'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the index
console.clear()
console.log(fruits);
//indexOf
console.log(fruits.indexOf('사과'));
console.log(fruits.indexOf('수박'));
console.log(fruits.indexOf('코코넛')); //-1
//includes
console.log(fruits.includes('수박'));
console.log(fruits.includes('코코넛')); //false

// lastIndexOf
console.clear();
fruits.push('사과');
console.log(fruits);
console.log(fruits.indexOf('사과')); //가장 먼저 나온 사과의 인덱스 리턴
console.log(fruits.lastIndexOf('사과')); //가장 마지막 사과 인덱스 리턴

