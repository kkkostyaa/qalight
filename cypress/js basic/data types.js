// <reference types = "cypress"/>

/*
типи даних

прості (примітиви)
 - числа
 - текст 
 - логічний тип boolean
 - null
 - undefined
 - symbol
 - BigInt


об'єкти
 - масиви
 - функції
 - об'єкт дати 
 - регулярні вирази
 - помилки
 - об'єкт

*/

// int - числа до 2^53
let number = 4;
let floatNumber = 5.5;
let text = 'bgbgbfbfb';
let booleanType = true;
let a = null;
let b; //undefined


let object = {};

let person = {
    age: 20,
    name: 'Dmytro',
    isMarried: true
};

console.log('Age ' + person.age);
console.log(`Name ${person.name}`);


let arr = ['text', 6, {}, []];
console.log(arr[1]);

let numArr = [1, 2, 3];
let numObj = { a: 1, b: 2, c: 3 };
console.log(numArr[0]);
console.log(numObj.a);

let salary = {
    'Anna': 1000,
    'Vlada': 1200
};

let numbobj = {
    0: 1,
    1: 2,
    2: 3
};
console.log(numbobj[1]);

let numObj2 = {
    a: 1,
    b: 2,
    c: {
        somekey: {
            somekey: 12
        }
    },
    d: { somekey: [1, 2, 3] }
};
console.log(numObj2.c.somekey.somekey);
console.log(numObj2.d.somekey[1]);

let someText = 'Hello world';
console.log(someText.length);
console.log(someText.substring(1, 9));
console.log(someText.toLowerCase());
console.log(someText.indexOf('w'));
console.log(someText.indexOf('o'));
console.log(someText.slice(1, 9));
console.log(someText.trim());
console.log(someText.charAt('1'));
console.log(someText[2]);


let myArr = [];
myArr.push('good morning');
myArr.push('good night');
console.log(myArr);
console.log(myArr.length);
console.log(myArr.join(' '));
console.log(myArr.pop());



