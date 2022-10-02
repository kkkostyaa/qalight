/** ЗАВДАННЯ 1
  *
  * 1. Оголосіть змінну та присвойте їй стрілочну функцію
  * 2. У функції не повинно бути параметрів
  * 3. Поверніть з функції рядок "Привіт, світ!"
  * 4. Викличте функцію та виведіть результат у консоль
  *
  */


/** ЗАВДАННЯ 2
  *
  * 1. Виведіть у консоль "Привіт, світ!" із затримкою 5 секунд
  * 2. Використовуйте стрілочну функцію
  */


/** ЗАВДАННЯ 3
  *
  * 1. Створіть об'єкт із трьома властивостями та присвойте його значення змінній:
  * - name
  * - surname
  * - favoriteNumber
  *
  * 2. Напишіть функцію, що прийматиме цей обʼєкт як аргумент і
  *     створюватиме в ньому додаткове поле age з довільним значенням.
  * Результат роботи функції це вивід у консоль рядка
  * "My name is <name> <surname>, I'm <age> years old and my favorite number is <favoriteNumber>"
  */


/** ЗАВДАННЯ 4
  *
  * 1. Створіть масив з кількома елементами таких типів (int, boolean, string)
  * 2. Створіть стрілочну функцію, що прийматиме цей масив як аргумент.
  * 3. В функції замініть елемент масиву з типом int на інший з типом string
  * 4. Поверніть новий масив як результат роботи функції та виведіть його у консоль
  */

/** ЗАВДАННЯ 5
  *
  * 1. Виправте код щоб обидва вирази (setTimeout та myFn()) працювали.
  *
  * setTimeout(function myFn() {
  * console.log('hello from myFn')
  * }, 2000)
  *
  * myFn()
  */

/** ЗАВДАННЯ 6
  *
  * 1. Створіть масив із 3 об'єктами "cars"
  *
  * 2. Кожен об'єкт повинен мати три властивості
  * - carBrand (рядок)
  * - price (число)
  * - isAvailableForSale (логічне значення)
  *
  * 3. Створіть функцію, що прийматиме цей масив в якості аргументу.
  *
  * 4. В середині функції додайте ще один такий же обʼєкт в масив.
  *     Не створюйте новий обʼєкт в середині функції, а візьміть його з масиву.
  *
  * 5. Поверніть з функції новий масив. Результат роботи функції виведіть у консоль.
  */


/** ЗАВДАННЯ 7
  *
  * 1. Створіть обʼєкт
  *
    const myObject = {
        key1: true,
        key5: 10,
        key3: 'abc',
        key4: null,
        key10: NaN,
     }
  *
  * 2. Створіть функцію, що прийматиме цей обʼєкт як аргумент.
  *
  * 3. У функції реалізуйте логіку: якщо назва властивості (ключ) дорівнює key3 або key10
  *     то виводьте значення властивості в консоль.
  */


/** ЗАВДАННЯ 8
  *
  * 1. Створіть функцію "findProductById" із двома параметрами:
  * - ID товару
  * - масив товарів
  *
  * 2. Функція повинна повернути товар із певним ID
  *
  * 3. Якщо товару з певним ID у масиві товарів немає,
  * функція має повернути "undefined"
  *
  * 4. Також всередині функції виведіть у консоль товар по ID

    const products = [
    { productId: 1355, name: 'phone' },
    { productId: 5131, name: 'laptop' },
    { productId: 6134, name: 'tablet' },
 ]

 console.log(findProductById(6134, products)) // { postId: 6134, name: 'tablet' }

 console.log(findProductById(4511, products)) // undefined

 */


/** ЗАВДАННЯ 9
 *
 * 1. Створіть функцію "arraySortInfo" з одним параметром - "inputArray", та реалізуйте наступну логіку
 *
 * 2. Якщо хоча б один елемент у масиві не є числом – повернути "Деякі елементи не є числами"
 *
 * 3. Якщо числа у масиві відсортовані за зростанням - повернути "Масив відсортований за зростанням"
 *
 * 4. Якщо числа в масиві відсортовані за спаданням - повернути "Масив відсортований за спаданням".
 *
 * 5. Якщо масив не відсортований - повернути "Масив не відсортований"
 */

/*  const a = [5, 'abc', 10, 1]
 const b = [4, 10, 14, 25, 25, 50]
 const c = [150, 132, 80, 40]
 const d = [15, 26, 10, 23, 85]

 console.log(arraySortInfo(a)) // Деякі елементи не є числами
 console.log(arraySortInfo(b)) // Масив відсортований за зростанням
 console.log(arraySortInfo(c)) // Масив відсортований за спаданням
 console.log(arraySortInfo(d)) // Масив не відсортований */

 /**
  * ПІДКАЗКИ
  *
  * Підказка 1: Використовуйте метод масивів "every"
  * Підказка 2: Ви повинні використовувати два параметри в колбек функції "element", "index"
  * Підказка 3: Кожен елемент масиву, крім першого, слід порівнювати з попереднім
  */




// task 1
const task1Func = () => {
     return('hello world')
}
console.log(task1Func());


// task 2
const task2Func = () => {
    console.log('hello world');
}
setTimeout(task2Func, 5000);


// task 3
let myObject1 = {
    name: 'Ivan',
    surname: 'Petrov',
    favoriteNumber: 11
}
function modifyMyObject(obj) {
    obj['age'] = 35;
    console.log('My name is ' + obj['name'] + ' ' + obj['surname'] + ' I am ' + obj['age'] + ' years old and my favorite number is ' + obj['favoriteNumber']);
}
modifyMyObject(myObject1);


// task 4
let testArray = [135, true, 'some_text'];
const task4Func = (arr) => {
    arr[0] = 'new text';
     return(arr)
}
console.log(task4Func(testArray));


// task 5
  setTimeout(myFn = () => {
     console.log('hello from myFn')
    }, 2000)
  
myFn();


// task 6
let cars = [
    { carBrand: 'Nissan', price: 15000, isAvailableForSale: true },
    {carBrand: 'Opel', price: 5000, isAvailableForSale: true},
    { carBrand: 'Bugatti', price: 1500000, isAvailableForSale: false } ]

function addCar(carArray = []) {
    newcar = carArray[0];
    newcar = {carBrand: 'Fiat', price: 1000, isAvailableForSale: true};
    carArray.push(newcar);
    return(carArray)
}
console.log(addCar(cars));


// task 7
const myObject = {
        key1: true,
        key5: 10,
        key3: 'abc',
        key4: null,
        key10: NaN,
}
function checkProperty(obj, objNames = []) {
    let objProps = Object.keys(obj);
    for (let i = 0; i < objNames.length; i++) {
        if (objProps.includes(objNames[i])) {
            console.log(objNames[i] + ' = ' + obj[objNames[i]])
        }
    }
}
checkProperty(myObject, ['key3', 'key10']);


// task 8
    const products = [
    { productId: 1355, name: 'phone' },
    { productId: 5131, name: 'laptop' },
    { productId: 6134, name: 'tablet' },
]
function findProductById(goodsList = [], prodId) {
    let prodData = '';
    goodsList.forEach(function checkID(currentValue) {
        if (currentValue.productId === prodId) {
             console.log(currentValue.productId + ' ' + currentValue.name);
             prodData = currentValue.productId + ' ' + currentValue.name;
        } 
    })
    if (prodData === '') { undefined } else { return prodData }
}
console.log(findProductById(products, 6134));



// task 9

let a = [5, 'abc', 10, 1]
const b = [4, 10, 14, 25, 25, 50]
const c = [150, 132, 80, 40]
const d = [15, 26, 10, 23, 85]

function arraySortInfo(arr123 = []) {
    
    function isTextPresent(element, index) {
    return !isNaN(element)
    }

    function isSortedUp(element, index, array) {
        if (index === 0) {
            return true
        }
        else {
            if (element >= array[index - 1]) { return true }
            else {return false}
        }
    }

    function isSortedDown(element, index, array) {
        if (index === 0) {
            return true
        }
        else {
            if (element <= array[index - 1]) { return true }
            else {return false}
        }
    }

    let isNotText = arr123.every(isTextPresent);
    let sortedUp = arr123.every(isSortedUp);
    let sortedDown = arr123.every(isSortedDown);

    if (isNotText) {
        if (sortedUp) {
            return('Масив відсортований за зростанням')
        } else {
            if (sortedDown) {
                return ('Масив відсортований за спаданням')
            } else {
                return ('Масив не відсортований')
            }
        }
    } else {
        return ('Деякі елементи не є числами')
    } 
}


console.log(arraySortInfo(d));
