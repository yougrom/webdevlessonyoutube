//Return в функции - учимся возвращать значение функции в JavaScript. Функции в JavaScript
function f1(x, y) {
return x + y;
}
console.log(100 * f1(3,4));//использовать в выражениях
//Exam[ple 2 + return
function f2() {
    console.log(2);
    return 5; // когда мы используем оператор return мы используем функцию внутри выраженй и математических рассчетов
}
f2();
console.log(4 + f2()); 
console.log(f1(6, 7) + f1(4,5));


//Example 2 - функция которая вычисляет целое случайное число
function randInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);

}
let r = randInt(222, 333);
console.log(r);
console.log(randInt(222, 333) + 100);

// выводить куда угодно
console.log(f1(100, 200));
document.querySelector('.out-1').textContent = f1(300, 400);//на HTML страницу
document.querySelector('.out-1').style.background = 'rgb(23,156,201)';
document.querySelector('.out-1').style.background = `rgb(${randInt(0,255)},${randInt(0,255)},${randInt(0,255)})`;
//alert(f1(3,4))

//использовать в выражениях
console.log(100 * f1(3,4));


//Example 3 - вывод данных введенных пользователем
document.querySelector('.b-3').addEventListener('click', 
function () {
    const s = document.querySelector('.i-3').value;
    document.querySelector('.out-3').innerHTML = 'Hello ' + 
    clearText(s);
    console.log('Hello ' + clearText(s));
});

function clearText(data) {
    return data.trim().toLowerCase(); //задача 1 - очистить пробелы
}


// Return прерывает выполнение функции



//Прерывание функции
//Эмулирование indexOf
function indexOfEmul(arr, num) {
for (let i = 0; i < arr.lenght; i++) {
if(arr[i] === num) return i;
}
    return -1;
}
let result = indexOfEmul([22,33,44,55], 44);
console.log(result);


//Пользователь вводит кол-во лет.
document.querySelector('.b-4').addEventListener('click', 
function () {
    let year = +document.querySelector('.i-4').value;
    if (isNaN(year)) return;
    if (year <0 || year > 140) return;
    document.querySelector('.out-4').innerHTML = 2021 - year;
});


//Ex 5 - Применение суммы
console.group('example 5');
const arr5 = [ [3,4,5], [6,7,8] ];
function t5() {
    let s = 0;
    for (let i = 0; i < arr5.length; i++) {
        s += sum(arr5[i]);
    }
    return s;
}

function sum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(t5());
console.groupEnd();


// return и ;
//Ex 5 - Применение суммы
console.group('example 6');
function t6() {
    let a = 88;
    /** перенос - ошибка 
     * return
     * a;
     */     
    return a;
}
console.groupEnd();


//Ex 7 Return
console.group('example 7');
const arr7 = [[3, 4, 5], [6, 7, 9], [7, 7, 1], [2, 2]];

const evenArr7 = arr7.filter(function(item) {
    return(sum(item) % 2 === 0);
});
console.log(evenArr7);
console.groupEnd();

// Exercise 8 return функции
function t8() {
    return sum;
}

let s = t8();
console.log(s ([10,20,30]));