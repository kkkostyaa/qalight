
/*
Домашка:

1.  Ви прийшли в Макдональдз з трьома друзями.
    Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
    Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
    то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
    то виводити в консоль текст "Ми йдемо в інше кафе"
    (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)

2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
    Результат виводити в консоль.

3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
    Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
    Результат виводити в консоль.

4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
    Результат виводити в консоль.

5.  Задано 3 числа (a, b, c), які не рівні між собою.
    Визначити середнє мід цими трьома числами
    (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
    Використати вкладені оператори if
    Результат виводити в консоль.

6.  Задано номер дня тижня.
    За заданим номером вивести назву дня тижня використовуючи switch.
    Результат виводити в консоль.

7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
    Математичні операції для обчислення: "+", "-", "*", "/".
    Результат виводити в консоль.

8.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

9.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
    так щоб в консоль виводився результат обчислень з правильним закнченням.
    Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,02 кілометра; 3 кілометри і т.д.

    Відмінювання для "метр" (аналогічні закінчення будуть і для слова "кілометр")
    https://www.kyivdictionary.com/uk/words/conjugation/?word=%D0%BC%D0%B5%D1%82%D1%80&lang=uk
*/


// task 1
let hamburgers = 4;
let potatoes = 1;

if (hamburgers >= 4 && potatoes >= 1) {
    console.log('Ми поїли');
} else { 
    console.log('Ми йдемо в інше кафе');
};


//task 2
let itemCost = 1099;
if (itemCost >= 1000 && itemCost <= 1900) { 
    console.log('ціна = 1000 - 1900');
} else {
    console.log('ціна менше 1000 або більша ніж 1900');
}
 

//task 3
let itemCost1 = 99;
if (itemCost1 < 1000 || itemCost1 > 1900) { 
    console.log('ціна менше 1000 або більша ніж 1900'); 
} else {
    console.log('ціна = 1000 - 1900');
 }


let itemCost2 = 99;
if (!(itemCost2 >= 1000 && !itemCost2 <= 1900)) { 
    console.log('ціна менше 1000 або більша ніж 1900'); 
} else {
    console.log('ціна = 1000 - 1900');
 }


 //task 4
let seasonId = 5 // 1 - 4
if (seasonId === 1) {
    console.log('Зима');
} else {
    if (seasonId === 2) {
        console.log('Весна');
    } else {
        if (seasonId === 3) {
            console.log('Літо');
        } else {
            if (seasonId === 4) {
                console.log('Осінь');
            }
            else {
                console.log('Невідома пора року')
            }
        }
    }
}


//task 5
let a = 17;
let b = 18;
let c = 11;

if ((b > a) && (b < c)) {
    console.log('число b = ' + b + ' єсереднє');
} else {
    if ((b > a) && (c < a)) {
        console.log('число a = ' + a + ' є середнє');
    } else {
        console.log('число c = ' + c + ' є середнє');
    }
}
        

//task 6
let dayOfWeek = 8; // 1 - 7
switch (dayOfWeek) {
    case 1: console.log('понеділок');
        break;
    case 2: console.log('вівторок');
        break;
    case 3: console.log('середа');
        break;
    case 4: console.log('четвер');
        break;
    case 5: console.log('п' + '\'' + 'ятниця');
        break;
    case 6: console.log('субота');
        break;
    case 7: console.log('неділя');
        break;
    default: console.log('невідомий день')
        break;
}


//task 7
let mathSymbol = '+'; // + - / *
let value1 = 6;
let value2 = 2
switch (mathSymbol) {
    case '-': console.log(value1 + ' - ' + value2 + ' = ' + (value1-value2));
        break;
    case '+': console.log(value1 + ' + ' + value2 + ' = ' + (value1+value2));
        break;
    case '/': console.log(value1 + ' / ' + value2 + ' = ' + (value1/value2));
        break;
    case '*': console.log(value1 + ' * ' + value2 + ' = ' + (value1*value2));
        break;
    default: console.log('невідома дія')
        break;
}


//task 8
let str1 = 'some long string for test ';
let re = /[oieyuaAEUYIO]/g;
let str2 = str1.replace(re, '');
console.log('початковий текст: ' + str1);
console.log('змінений текст: ' + str2);



//task 9
// 5 - 19 кілометрів, 21 кілометр, 2 кілометри, 27 кілометрів, 1 кілометр, 0.35 кілометра 
let meters = 400; //input  
let kMeters = meters / 1000;
let isIntKm = Number.isInteger(kMeters);
let stringKM = kMeters.toString();
let lastChar = stringKM.charAt(stringKM.length - 1);
let isIntM = Number.isInteger(meters);
let stringM = meters.toString();
let lastCharM = stringM.charAt(stringM.length - 1);
let result = '';

if (!isIntM) {
    result = meters + ' метра';
} else {
    if (lastCharM === '1' && isIntKm && !(meters === 11)) {
        result = meters + ' метр';
    } else {
        if ((lastCharM === '2' || lastCharM === '3' || lastCharM === '4')  && isIntKm && (!(stringM === '12' || stringM === '13' || stringM === '14'))) {
        result = meters + ' метри');
        } else {
        result = meters + ' метрів');
        }
    }
}

console.log(result);

if (!isIntKm) {
    console.log(kMeters + ' кілометра');
} else {
    if (lastChar === '1' && isIntKm && !(kMeters === 11)) {
        console.log(kMeters + ' кілометр');
    } else {
        if ((lastChar === '2' || lastChar === '3' || lastChar === '4')  && isIntKm && (!(stringKM === '12' || stringKM === '13' || stringKM === '14'))) {
        console.log(kMeters + ' кілометри');
        } else {
        console.log(kMeters + ' кілометрів');
        }
    }
}

