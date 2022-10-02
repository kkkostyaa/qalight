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


console.log('arr' + ' - obj');
console.log(2 + '2');
console.log(2 + + '2');


let incr = 10;
let decr = 10;

//incr++;
//decr--;

console.log(incr++);
console.log(decr--);

console.log(++incr);
console.log(--decr);

console.log(5 < 2);
console.log(5 > 2); //<= >= ==
console.log('2' == 2); // нестрогое сравнение
console.log('2' === 2); //сторогое сравнение
console.log(2 != 2);

console.log('2' !== 2);


let isChecked = true;
let isClosed = true;

console.log(isChecked && isClosed); //and
console.log(isChecked || isClosed); //or
console.log(isChecked && !isClosed);


const hamburger = true;
const fries = true;

console.log(hamburger && fries);


const hamburger1 = 5;
const fries1 = 1;

if (hamburger1 && fries1) {
    console.log('ja sityj')
}


const hamburger2 = 2;
const fries2 = 2;
const naggets = 1;
const cola = 1;
 //3 hamb + 1 cola or 2 naggets + 2 fries

if ((hamburger2 >= 3 && cola) || (naggets >= 2 && fries2 >= 2))
{ console.log('sitij') } else { console.log('ne sitij') };





