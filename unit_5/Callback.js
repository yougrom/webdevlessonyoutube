const arr1 = [7, 4, 5, 6, 8];
const out1 = document.querySelector('.out-1');
const out2 = document.querySelector('.out-2');
const out3 = document.querySelector('.out-3');


function f1(arr, myFunk, block) {
    arr[3] = arr[3] * 2;
    //out1.innerHTML = arr1;
    myFunk(arr, block);
}

function showArr(arr, block) {
    let out = '';
    for(let i = 0; i < arr1.length; i++) {
        out += arr1[i] + '_';
    }
    block.innerHTML = out;
}

function showArr2(arr, block) {
    let out = '';
    for(let i = 0; i < arr1.length; i++) {
        out += arr1[i] + '*';
    }
    block.innerHTML = out;
}

f1(arr1, showArr, out1);
f1(arr1, showArr2, out2);


//классический пример функции callback

function squad(item) {
    return item**2;
}

//
const arr2 = arr1.map(squad);
const arr2 = arr1.map(item => item ** 2);
console.log(arr2);
showArr(arr2, out3);


// Пример с input

document.querySelector('.b-4').addEventListener('click', getUserName);
function getUserName() {
    const userName = document.querySelector('.i-4').value;
    console.log(fixUserName(userName));
}

function fixUserName(str) {
    return str.trim().toLowerCase();
}