// alert('Hello World!')
// let age = 19;
// alert(age)
// age = 13;
// let bigNumber = 9999n;
// alert(bigNumber)
let someHtml = `<h1>head</h1>`

document.write (someHtml)

//boolean - true, false;


let isAdult = false;
let name = 'John';
const email = 'asdfghjk@gmail.com'
let isMale = true;

// let a = null;
// let b = undefined;
// console.log(a)
// console.log(b)
// console.log('gender:', isMale, 'name', name)

let firstProduct = 600;
let discountFirst = 0.1;
let secondProduct = 800;
let discountSec = 0.15;

let total = firstProduct * (1 - discountFirst) + secondProduct * (1 - discountSec)

// console.log(total)

// const firstName = prompt('Input name', 'type a name');
// const surname = prompt('input surname')


// document.write(`${firstName} ${surname}`)

// const first = Number(prompt('1 number:'))
// const second = +prompt('2 prompt')
// const sum = first + second
// console.log(sum)

// const quantity = +prompt('Input quantity:')
// let howMuch = 200
// let totalO = quantity* Number(howMuch)
// console.log(totalO)


// Homework

const a = '-3';
const b = 5;
const ab = a*b;
console.log(ab);

const c = 10;
const d = 0;
const cd = c/d;
console.log(cd);

const e = 'Слава';
const f = ' Україні';
const ef = e+f;
console.log(ef);

const eleven = 11;
const isTrue = true;
const js = 'java script';
const string = '100';
console.log(eleven,isTrue,js,string);

/*num+=11;
num*=11;
num-=11;
 num/=11;
 num++;
 num--;*/

/*let variable0 = Number(prompt('Please input a number'));
alert(variable1**2)*/

/*let variable1 = Number(prompt('PLease input first number:'))
let variable2 = Number(prompt('PLease input second number:'));
let variable3 = (variable1+variable2)/2;
console.log(variable3);*/

/*let hvylyny = Number(prompt('Input minuts '))
let sekundy = hvylyny*60
alert(sekundy)*/

/*let greeting = 'Hello,';
let userName  = prompt('PLease provide your name')
document.write(`<p> ${greeting} ${userName} !</p>`)*/


// const nameA = prompt('Please provide your name');
// const surnameA = prompt('PLease provide your surname');
// const phoneA = +prompt('Please provide your phone number')
// const ageA = +prompt('Please provide your age');
// const emailA = prompt('Please provide your email')
const pictureA = prompt('Please provide the link to your profile picture')
document.write(`<h3> ${nameA} ${surnameA}</h3> <p>${ageA} ${email} <img src = ${pictureA}></p>`)
