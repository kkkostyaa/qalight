
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
function checkFood(hamburgers, potatoes) {
    if (hamburgers >= 4 && potatoes >= 1) {
        return('Ми поїли');
    } else { 
        return('Ми йдемо в інше кафе');
    };
}

let hamburgers = 2;
let potatoes = 1;
console.log(checkFood(hamburgers, potatoes));


//task 2
function iCost(itemCost) {
    if (itemCost >= 1000 && itemCost <= 1900) {
        return('ціна = 1000 - 1900');
    } else {
        return('ціна менше 1000 або більша ніж 1900');
    }
}
console.log(iCost(200)); 


//task 3
function iCost1(itemCost1) {
    if (itemCost1 < 1000 || itemCost1 > 1900) {
        return('ціна менше 1000 або більша ніж 1900');
    } else {
        return('ціна = 1000 - 1900');
    }
}
console.log(iCost1(200));


function iCost2(itemCost2) {
    if (!(itemCost2 >= 1000 && itemCost2 <= 1900)) {
        console.log('ціна менше 1000 або більша ніж 1900');
    } else {
        console.log('ціна = 1000 - 1900');
    }
}
iCost2(2200);    


 //task 4
function getSeason(seasonId) {
    if (seasonId === 1) {
        return('Зима');
    } else {
        if (seasonId === 2) {
            return('Весна');
        } else {
            if (seasonId === 3) {
                return('Літо');
            } else {
                if (seasonId === 4) {
                    return('Осінь');
                }
                else {
                    return('Невідома пора року')
                }
            }
        }
    }
}

console.log(getSeason(2));




//task 5
function getMiddle(a, b, c) {
    if ((b > a) && (b < c)) {
        return('число b = ' + b + ' єсереднє');
    } else {
        if ((b > a) && (c < a)) {
            return('число a = ' + a + ' є середнє');
        } else {
            return('число c = ' + c + ' є середнє');
        }
    }
}
console.log(getMiddle(17, 26, 11));


        

//task 6
function getDayName(dayOfWeek) {
    switch (dayOfWeek) {
        case 1: return('понеділок');
            break;
        case 2: return('вівторок');
            break;
        case 3: return('середа');
            break;
        case 4: return('четвер');
            break;
        case 5: return('п' + '\'' + 'ятниця');
            break;
        case 6: return('субота');
            break;
        case 7: return('неділя');
            break;
        default: return('невідомий день')
            break;
    }
}

console.log(getDayName(4));


//task 7
function calc2values(mathSymbol, value1, value2) {
    switch (mathSymbol) {
        case '-': return(value1 + ' - ' + value2 + ' = ' + (value1 - value2));
            break;
        case '+': return(value1 + ' + ' + value2 + ' = ' + (value1 + value2));
            break;
        case '/': return(value1 + ' / ' + value2 + ' = ' + (value1 / value2));
            break;
        case '*': return(value1 + ' * ' + value2 + ' = ' + (value1 * value2));
            break;
        default: return('невідома дія')
            break;
    }
}
let mSymbol = '+'; // + - / *
let val1 = 6;
let val2 = 2
console.log(calc2values( mSymbol, val1, val2));


//task 8
function delLetters(str1) {
    let re = /[oieyuaAEUYIO]/g;
    let str2 = str1.replace(re, '');
    return ('початковий текст: ' + str1 + '\n' + 'змінений текст: ' + str2);
}

let textInp = 'some long string for test ';
console.log(delLetters(textInp));

//task 9
// 5 - 19 кілометрів, 21 кілометр, 2 кілометри, 27 кілометрів, 1 кілометр, 0.35 кілометра 

function showMeters(meters) {
    let isIntM = Number.isInteger(meters);
    let stringM = meters.toString();
    let lastCharM = stringM.charAt(stringM.length - 1);
    let result = '';

    if (!isIntM) {
        result = meters + ' метра';
    } else {
        if (lastCharM === '1' && isIntM && !(meters === 11)) {
            result = meters + ' метр';
        } else {
            if ((lastCharM === '2' || lastCharM === '3' || lastCharM === '4') && isIntM && (!(stringM === '12' || stringM === '13' || stringM === '14'))) {
                result = meters + ' метри';
            } else {
                result = meters + ' метрів';
            }
        }
    }
return result
}

function showKMeters(meters) {
    let kMeters = meters / 1000;
    let isIntKm = Number.isInteger(kMeters);
    let stringKM = kMeters.toString();
    let lastChar = stringKM.charAt(stringKM.length - 1);
    if (!isIntKm) {
        console.log(result + kMeters + ' кілометра');
    } else {
        if (lastChar === '1' && isIntKm && !(kMeters === 11)) {
            result = kMeters + ' кілометр';
        } else {
            if ((lastChar === '2' || lastChar === '3' || lastChar === '4') && isIntKm && (!(stringKM === '12' || stringKM === '13' || stringKM === '14'))) {
                result = kMeters + ' кілометри';
            } else {
                result = kMeters + ' кілометрів';
            }
        }
    }
return result
}
let mValue = 2000; //input  
console.log(showMeters(mValue) + ' це ' + showKMeters(mValue));