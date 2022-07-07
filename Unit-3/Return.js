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