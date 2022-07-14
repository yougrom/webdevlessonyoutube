//контекст функций - это облость видимости переменных для функции и + переменная this 
//this это ссылка на объект который вызывает код в данный момент

let count = 0;
function f1() {
    console.log(count);
    console.log(this);
    this.textContent = count;
    count++;
}

//document.querySelector('.b-1').addEventListener('click', f1);


//ERROR - стрелочная функция не имеет this

// const f2 = () => {
//     console.log(count);
//     console.log(this);
//     this.textContent = count;//!!!
//     count++;
// }

// document.querySelector('.b-2').addEventListener('click', f2);


//что такое call - позволяет вызывать функцию и передовать ей необходимые документы
//call позволяет подминять контекст функции при запуске
f1.call(document.querySelector('.b-1'));

document.querySelector('.b-1').addEventListener('click', ()=>{
    f1.call(document.querySelector('.b-1'));
});


//Example 3
function f3(count) {
    console.log(count);
    console.log(this);
    this.textContent = count;
}

document.querySelector('.b-3').addEventListener('click', () => {
    count++
    f3.call(document.querySelector('.b-2'), count);
});


//Example 4
function sum1(a, b) {
    this.innerHTML = a + b;
}

document.querySelector('.b-2').addEventListener('click', ()=>{
    sum1(3,4);
});