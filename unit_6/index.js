//контекст функций - это облость видимости переменных для функции и + переменная this 
//this - это ссылка на объект который вызывает код в данный момент

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


//что такое call - позволяет вызывать функцию и передовать ей необходимые оргументы
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
    sum1.call(document.querySelector('.out-3'), 17,4);
    sum1.apply(document.querySelector('.out-4'), [17,4]);

});

//метод bind
const f4 = f1.bind(document.querySelector('.out-5'));
f4();
document.querySelector('.b-5').addEventListener('click', f4);


//Example 6
const sum2 = sum1.bind(document.querySelector('.out-6'), 77, 88);
sum2();

// частичные функции или функции с переопределённым документом

function sum3(a, b, c) {
    console.log(arguments);//arguments это похожая на моссив конструкция которая содержим переданные в sum3 аргументы
    this.innerHTML = a + b + c;
}

const sum4 = sum3.bind(document.querySelector('.b-6'), 100, 200);

document.querySelector('.b-6').addEventListener('click', ()=>{
sum4(3);
});
