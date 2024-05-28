// function sayHello(user,surname){ //parametry
//     document.write(`<p>Hello ${user} ${surname}!</p>`)
// }

// sayHello('Test');//argumenty
// sayHello('Wally', 'Robot')
// sayHello(prompt(),prompt())

// function sayHello(user, surname) {
//   const returnString = `Hello ${user} ${surname}`;
//   return returnString;
// }

// const helloString = sayHello("Test", "Testowycz");
// console.log(helloString);
// document.write(`${helloString}`);

// function sayHello(user, surname) {
//     return `Hello ${user} ${surname}`;
//   }

// sum(5,3)
// console.log(sum()); - >NaN

function sum(a, b) {
  return a + b;
}
// ввести два номери і додатию перевірити на пустий рядок
// function inputNumber(sumNum){
//     let summand;
//     do{
//         summand = prompt(`Enter ${sumNum} number`);
//     }while (!Number.isFinite(+summand) || summand ==='');
//     return Number(summand);
// }

// let firstSummand = inputNumber(1);
// let secondSummand = inputNumber(2);

// do {
//   firstSummand = prompt("Enter first");
// } while (!Number.isFinite(+firstSummand) || firstSummand ==='');
// //пеервірка на порожній рядок
// do {
//     secondSummand = prompt("Enter first");
//   } while (!Number.isFinite(+secondSummand) || secondSummand ==='');

// const result = sum(firstSummand, secondSummand);
// console.log(result);

function adult(age) {
  return age > 18;
}

console.log(adult(5));

//згенерувати розмітку для 3 новин(заголовок тіло і час новини)
//вивести попередження на початку якщо новини переглядає неповнолітні і для сьогоднішніш новин(підсвітити червоним заголовок,New)

const age = 20;
const articleTitle1 = "Lorem Ipsum Dolor Sit Amet";
const articleTitle2 = "Consectetur Adipiscing Elit";
const articleTitle3 = "Sed Do Eiusmod Tempor Incididunt";

const articleBody1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.";
const articleBody2 =
  "Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.";
const articleBody3 =
  "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut non enim eleifend felis pretium feugiat.";

const articleDate1 = new Date("2024-05-18");
const articleDate2 = new Date("2023-05-10");
const articleDate3 = new Date("2023-09-22");

let age1 = 20;

function generator(articleTitle, articleBody, articleDate) {
  const nowDay = new Date();
  let nowDaySpan;

  if (articleDate.toLocaleDateString() === nowDay.toLocaleDateString()) {
    nowDaySpan = "<span>New!</span>";
  } else {
    nowDaySpan = ""
  }
  return `<article>
    <h3>${articleTitle} ${nowDaySpan}</h3>
    <p>${articleBody}</p>
    <p>${articleDate.toDateString()}</p>
  </article>`;
}

if (age1<18){
    alert('Kontent is not applicable')
}

document.write(generator(articleTitle1, articleBody1, articleDate1));

document.write(generator(articleTitle2, articleBody2, articleDate2));

document.write(generator(articleTitle3, articleBody3, articleDate3));
