const o1 = {
    name: 'Jura',
    age: 35
};
o1.age = 45;
console.log(o1);


const new1 = (a) => {
    a();
};

new1(new2);


function new2() {
    console.log('New Text');
}
