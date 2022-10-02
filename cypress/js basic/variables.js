// <reference types = "cypress"/>
"use strict";
let number = 5;
const number1 = 1000;

//camelCase
//snake_case
//UPPER_SNAKE_CASE - константы
//kebab-case
//PascalCase - класы

console.log(number);
console.log(number1);

// прямих констант не буває
const obj = {
    age: 20
};
obj.age = 18
console.log(obj.age);

// фснує в памяті до  того як виконається 
var firstName = 'Taras';

// область видимості
{
    let number2 = 4;
    console.log(number2);
}

{
    var number3 = 34;
}
console.log(number3);


const width = 3000;
const lenght = 2000;

console.log('ширина  = ' + width + ' довжина = ' + lenght);


