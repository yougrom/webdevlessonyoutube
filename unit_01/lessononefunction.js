// Функция это блок кода JS, который вызывается один раз и может вызыватся многократно
//Function Declaration
function testFunctio() {
    const x = 5;
    const y = 10;
    console.log(x + y);
}
testFunctio();

// функцию можно вызывать до ее объявдения
// hello();
// hello();
hello();
function hello() {
    testFunctio(); //функцию можно вызывать внутри другой функции
    console.log('Hello');
}

//Example
function testFunctio2() {
    function t3() {
        console.log('t3 function');
    }
    t3();
console.log('test function 2');
}
testFunctio2();
//t3(); !Error


//Practis 1
function unixTime() {
    let time = Math.floor(new Date().getTime());
    console.log(time);
}
unixTime();

//Practis 2 - генерипует число в каком то диапазоне
function randomInt() {
    const min = 100;
    const max = 200;
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    console.log(rand);
}

function randomInt(){
    console.log('random int 555');
}
randomInt();
randomInt();
randomInt(); // random int 555 - хотя уже есть такое имя функции но выводится будет последняя
//JS берет последнее определение функции и работает с ним

//Practis 3 - randomInt 3
let min = 1000;
let max = 2000;
function rand() {
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    console.log(rand);
} 
rand(); 
min = 10;
max = 20;
rand();


//Practis 4 пример с пост эффектом после сохранения, выносим переменную за функцию, таким образом переменная сохраняет своё значения после запуска функции и в следующий раз плюсует +1 как в этом примере.
let c = 9;
function count() {
    c++;
    console.log(c);
}
count();
count();
count();

//Practis 5 - rad line ++
// 1 способ вызова событий
//document.querySelector('.unit-1').addEventListener('mousemove', count);

// 2 способ вызова событий
//document.querySelector('.unit-1').onclick = count;

// 3 способ
document.querySelector('.unit-1').addEventListener('mousemove', blockwidth);
let w = 100;
function blockwidth() {
    w++;
    document.querySelector('.unit-1').style.width = w + 'px';
} 









// Home Task
// Task 1
function getRandomInt() {
    const min = 117;
    const max = 132;
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    console.log(rand);
}
getRandomInt();

// Task 2
let min = 1000;
let max = 2000;
function getRandomInt2() {
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    console.log(rand);
}
getRandomInt2();