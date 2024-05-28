const arr = new Array(1, 2, 3);
console.log(arr);

const arr1 = [4, 5, 6];

const users = [
  { id: 1, name: "Test", age: 4 },
  { id: 2, name: "Ivo", age: 9 },
];

const months = ["Jan", "Feb", "Mar"];
console.log(months);

//copy

const months1 = Array.from(months);
const months2 = [...months];

for (let i = 0; i <= months.length; i++) {
  console.log(months[i]);
}

for (let i = 0; i <= users.length; i++) {
  console.log(users[i]);
}

// for (let i = 0; i <= users.length; i++) {
//   document.write(
//     ` <article>
//     <h2>${users[i].name}</h2>
//     <p>Age:${users[i].age}</p>
//   </article>`
//   );
// }

document.write("<ol>");

for (let i = 0; i <= months.length; i++) {
  document.write(
    ` <li>
      ${months[i]}
    </li>`
  );
}
document.write("</ol>");

const numbers = [2, 6, 3, 4, 5, 6];

function arraySum(mas) {
  let sum = 0;

  for (let i = 0; i < mas.length; i++) {
    sum += mas[i];
  }
  return sum;
}
console.log(arraySum(numbers));

function averageAge(mas) {
  let sum = 0;

  for (let i = 0; i < mas.length; i++) {
    sum += mas[i].age;
  }
  return sum / mas.length;
}
console.log(averageAge(users));

for (const index in numbers) {
  //перебір по ключах індексах
  console.log(numbers[index]);
}

//метод для масиву перебір елементів
for (const element of months) {
  document.write(
    `<ul>${element}</ul>
`
  );
}
months.push("April", "Msy"); //- >>(4) ['Jan', 'Feb', 'Mar', 'April','May]
months.pop(); //- >>(4) ['Jan', 'Feb', 'Mar', 'April']

// const numElem = prompt("Enter mass number");
// const empty = [];
// for (let i = 0; i < numElem; i++) {
//   const enterNAme = prompt("ENter mass name");
//   empty.push(enterNAme);
// }

//Копіювання елементів
const monthsCopy = months.slice();
const monthsPart = months.slice(0, 2); //->//- >>(4) ['Jan', 'Feb']

//Видалення елементів

const monthDelete = months.splice(0, 2); //масив з видаленими елементами 0-Jan 2 - Feb

function sun(...argsOfSum) {
  let sum = 0;
  for (const el of argsOfSum) {
    sum += el;
  }
  return sum;
}

const a = sun(5, 5, 5);

function accum(sign, ...rest) {
  if (sign === "+") {
    let sum = 0;
    for (const el of rest) {
      sum += el;
    }
    return sum;
  } else if (sign === "*") {
    let mult = 1;
    for (const el of rest) {
      mult *= el;
    }
    return mult;
  } else {
    return `incorrect`;
  }
}

accum("+", 1, 2, 3, 4);

//arrow function

const sum = (a, b) => {
  return a + b;
};

const isAdult = (age) => {
  return age >= 18;
};

//масив набір впорядкованих еллементів - вхідні дані
//rest parameters = альтернатива дл аргументів - які особливості стрілки - немає arguments

//Методи перебору масивів
// колбек - функція зворотнього виклику - приймає якест велю і ми маємо це вивести

function functionWithCallback(cb, value) {
  cb(value);
}

// functionWithCallback(alert, 'hello')
functionWithCallback(console.log, "hello with clg");

const rew = [1, 2, 3, 4, -5, 6];

function printElement(currentValue, index, arr) {
  console.log("current", currentValue);
  console.log("index", index);
}

// const printElement = currentValue => console.log(currentValue);
// rew.forEach(printElement)

// Array.prototype.forEach(cb){
//   for (let i=0;i<this.length,i++){
//     cb(this[i],i,this)
//   }
// }

const months12 = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// const printElement1 = (currentValue) =>
//   document.write(`<ul>${currentValue}</ul>`);

// months12.forEach(printElement1);

//map - новий масив !!! з елементами які повертаються для кожного елемента

// function toSqr(currentValue,index){
// return currentValue**2
// }
const arr16 = rew.map((currentValue) => currentValue ** 2);
console.log(arr16);

function toMinus(currentValue, index) {
  return -currentValue;
}
const arr3 = rew.map((currentValue) => -currentValue);
console.log(arr3);

const month3 = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function generateList(el) {
  return `<li>${el}</li>`;
}
// const month4 = months.map(generateList);
document.write(`<ol>
${month3.map(generateList).join(" ")}
</ol>`);

const users2 = [
  { id: 1, name: "Test", age: 15 },
  { id: 2, name: "Ivo", age: 30 },
]; // ['Test', 'Ivo']

const new2 = users2.map((el) => el.name);

//filter - створює новий масив які задовільняють умову  в колбеці
const numbers3 = [0, -3, 5, 6, -8, 2, -7, 6];

const numbersPar = numbers3.filter((el) => el % 2);

const users3 = users2.filter((el) => el.age > 18);

//findIndex - повертає індекс знайденого елемента

const found = users2.findIndex((el) => el.id === 3);
// users2[found].age = 16
if (found !== -1) {
  updatedAge = { age: 18 };

  users2[found] = { ...users2[found], ...updatedAge };
}

//string - псевдомасиви

const str = 'i am good'

const newStr = str.slice(0,9)+'!';

str.toUpperCase()
'I AM GOOD'
str.toLowerCase()
'i am good'
str.startsWith('t')
false
str.endsWith('d')
str.includes('Ann')

function id(name) {
  const initialsArray = name.split(" ");
  return initialsArray[0][0]+initialsArray[1][0].toUpperCase()
}

console.log(id("Ivo smith"));

let userName = "John Doe";
let initials = userName
  .split(" ") //розділяємо на масив split  дає масив і на ньому треба методи масивів
  .map((word) => word[0])// беремо початковий
  .join("")//беремо в один рядок
  .toUpperCase();

  //замінити погані слова на ***

let messages = [
  {
    id: 1,
    body: "Lorem fuck dolor sit fuck, consectetur fuck elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    createdAt: "2024-05-01",
  },
  {
    id: 2,
    body: "Ut fuck ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    createdAt: "2024-05-02",
  },
  {
    id: 3,
    body: "Duis fuck irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    createdAt: "2024-05-03",
  },
];

let newMess = messages[0].body.replaceAll("fuck", "***");

let newMas = messages.map((el) => ({
  ...el,
  body: el.body.replaceAll("fuck", "***"),
}));

