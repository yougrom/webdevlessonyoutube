function sum(a, b){
    return a + b;
}
// let a = sum(4,5);
// console.log(a);

function multi(a, b){
    return a * b;
}

document.querySelector('.b-1').addEventListener('click', function() {
    let res = sum(23, 45);
    console.log(res);
});

// 1. Стрелочные функции это более сокращенный способ записи ананимных функций.

document.querySelector('.b-1').addEventListener('click', () => {
    let res = sum(23, 45);
    console.log(res);
});

// Example 2 - запуск двух функций
document.querySelector('.b-2').addEventListener('click', function() {
    let res = sum(23, 45);
    console.log(res);
    let res2 = multi(23, 45);
    console.log(res2);
});

document.querySelector('.b-2').addEventListener('click', () => {
    let res = sum(23, 45);
    console.log(res);
    let res2 = multi(23, 45);
    console.log(res2);
});

//callback - применение метода массива map
//map - перебирает каждый элемент массива и применяет функцию указанную в скопках
const ar1 = [4,5,6,7,8];

//
function pow2(a){
    return a**2;
}

const res2 = ar1.map(pow2);
console.log(res2);

//ананимная функция
const res3 = ar1.map(function(a){
    return a ** 2;
});
console.log(res3);

//приминяем стрелочную функцию
const res4 = ar1.map((a) => {
    return a ** 2;
});
console.log(res4);

//сокращенный синтаксис
// одна строка - уюрать {} return
// один аргумент то убрать ()
const res5 = ar1.map(a => a ** 2 );
console.log(res5);

// Example 3 - filter
const res6 = ar1.filter(function (item, index) {
    if (index % 2 === 0) { // % 2 === 0 - четность определяем таким образом
        return true;
    }
});
console.log(res6);

// Example 3 - filter стрелочная функция, код должен быть читаем, расширяем и легко поддерживаемый.
const res7 = ar1.filter((item, index) => (index % 2 === 0));
console.log(res7);

// arrow and this
document.querySelector('.b-3').addEventListener('click', function() 
{
  console.log(this);
});

document.querySelector('.b-3').addEventListener('click', () => 
{
  console.log(this); //this в стрелочной функции может подвести
});


//arrow аргументы
// стрелочные функции хороши для сокращения визуального объема функций
const f1 = (...arg) => {
    console.log(arg);
    console.log('work');
}
f1(99, 100);