'use strict';
//class: template
//object: instance of a class

// 1. Class declaration
class Person{
    //constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }
    //methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const byul = new Person('byul', 22);
console.log(byul.name);
byul.speak();

// 2. Getter and Setters
class User{
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }
    set age(value){
        this._age = value < 0 ? 0 : value;
    }
}
const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Static(너무 최근에 추가됨)
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }
    
    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);

// 4. Inheritance
class Shape{
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color of`);
    }
    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    draw() {
        super.draw();
        console.log('▲');
    }
    getArea() {
        return (this.width * this.height)/2;
    }
}

const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
console.log(`Rectangle Area : ${rectangle.getArea()}`);

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(`Triangle Area : ${triangle.getArea()}`);

// 5. Class checking : instanceOf
console.log(rectangle instanceof Rectangle);    //true
console.log(triangle instanceof Rectangle);     //false
console.log(triangle instanceof Object);    //true