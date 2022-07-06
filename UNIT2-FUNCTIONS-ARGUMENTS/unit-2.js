//Аргументы в функциях JavaScript. Аргументы по умолчанию, функции как аргументы. Unit 02
//формальные аргументы
function sum3(x1 = 100, y1 = 100) {
    console.log(x1 + y1);
}
sum3(14, 11);
let z = 77;
sum3(z, 10);
sum3(z*10, z);
sum3();
// function sum3(x1 = 0, y1 = 0) - можно задать параметры по умолчанию

// Practice 1 + HTML 
function showSum(elem, x, y) {
    document.querySelector(elem).textContent = x + y;
}

function showSum2(elem, x, y) {
    elem.textContent = x + y;
}

showSum('.out-2', 5, 6);
showSum2(document.querySelector('.out-1'), 100, 6);

// Practice 2

function showSum3(x, y, elem = '.out-1',) {
    console.log(arguments);
    document.querySelector(elem).textContent = x + y;
}
showSum3(10, 40, '.out-2');


// Practice 3 -
function showSumAll() {
    console.log(arguments);
    // let sum = 0;
    // for (let i = 0; i < arguments.length; i++) {
    //     sum += arguments[i];
    // }
    let sum = Array.from(arguments).reduce( (accum, item) => accum+= item);
    console.log(sum);
}
showSumAll(4, 5, 60);

// Practice 4 + Rest Parametrs
function showSumAll2(...args) {
    console.log(args);
    let sum = args.reduce( (accum, item) => accum+= item);
    console.log(sum);
}
showSumAll2(4, 5, 160, 230, 450);

// Practice 5 Можно ли передать функцию в качестве аргумента
 // Функция как Аргумент

function showAll(res) {
    document.querySelector('.out-1').innerHTML = `<b>${res}</b>`;
}

function showSumAll3(num, drowFunction) {
    drowFunction(num);
}
showSumAll3(45, showAll);
