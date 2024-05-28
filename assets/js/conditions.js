// const greeting = 'Hello';
// const name = 'Test';

// const result = `${greeting} ${name}`
// console.log(result);

// const a = 1;
// const b = 10;
// console.log(`${a} + ${b} = ${a+b}`);

// const isOnline = false;
// let status = null;
// let color = null;

// if(isOnline){
//      color = 'green';
//      status = 'online';
// } else { color = 'red';
// status='offline'}

// if (isOnline) {
//   document.write(
//     `<p>User is <span style = "color:${color}">online </span></p>`
//   );
// } else {
//   document.write(
//     `<p>User is <span style = "color:${color}"> offline</span></p>`
//   );
// // }
// document.write(`<p>User is <span style = "color:${color}"> ${status}</span></p>`
//     )

const isMoney = false;

if (isMoney) {
  document.write(`<p>Accepted</p>`);
} else {
  document.write(`<p>Declined</p>`);
}

const isOnline = true;
const color = isOnline ? "green" : "red";
console.log(color);

const status = isOnline ? "online" : "offline";
console.log(status);
document.write(
  `<p> User is <span style='color:${color};'>${status}</span></p>`
);

const age = 16;
if (age >= 18) {
  document.write("All access");
} else {
  document.write("Access declined");
}

const right_number = 2;
// const quessNumber = Number(prompt('Input a number'))

// if (right_number === quessNumber){
//   document.write('<p>Congrats</p>')
// } else {
//   document.write('<p>Wrong</p>')
// }

// const isRightNum = right_number === quessNumber
// document.write(`<p> You are ${isRightNum ? "": "NOT"} RIGHT</p>`)

// const a = Number(prompt("Input a number", "2"));
// const b = Number(prompt("Input a number"));
// const c = prompt("Input an operation", "+");
// const d = c === "+";
// const isPlus = d ? a + b : a - b

// if (quessOperation == "+"){
//   document.write(quessFirstNumber + quessSecondNumber)
// } else {document.write(quessFirstNumber - quessSecondNumber)}

// document.write(`<p>${a} ${c} ${b} = ${isPlus}</p>`)
// document.write(`<p>${d ? a + b : a - b}</p>`);

// if (c === "+") {
//   console.log(a + b);
// } else if (c === "*") {
//   console.log(a * b);
// } else if (c === "-") {
//   a - b;
// }else{
//   console.log('incorrrect');
// }

// switch(c){
//   case '+': console.log(a+b);
//   break;
//   case '-':console.log(a-b);
//   break;
//   case '*':a*b;
//   break;
//   case '/':console.log(a/b);
//   break;
//   default: console.log('default');
// }

// if (Number.isInteger(a)){
//   console.log('Integer');
// } else {
//   console.log('not integer');
// }

// let inputNumber = Number(prompt("Input number"));

// while (!Number.isFinite(inputNumber)) {
//   inputNumber = Number(prompt("Input number"));
// }

// console.log(`${inputNumber}**2 = ${inputNumber ** 2}`);

// let inputNumber = null;

// do {
//   inputNumber = Number(prompt("Input"));
// } while (!Number.isFinite(inputNumber));

// let i = 40;
// do {
//   console.log(i++);
// } while (i <= 50);

// let password = "abcd";
// let correct = prompt("input correct pass");


// do {
//    correct = prompt("input correct pass");
// } while (password !== correct);

for (i = 101;i>=80;i--){
  if (i%2 !==0)
  console.log(i);
}

for (i = 101;i>=80;i-=2){
  console.log(i);
}

