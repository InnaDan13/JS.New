// forEach виконує колбек послідовно для всіх елементів масиву
// filter => новий масив з елеметами, які задовольняють умові в колбеку
// map => новий масив з елементами, які повернуті з колбеку для кожного елемента вихідного масиву
// findIndex => індекс знайденого елемента (для якого з колбека повертається true,
//              або -1, якщо його не знайдено (для кожного повернулося false))
// every => true (виконується всім) / false
// some => true (виконується хоча б для одного) / false

// Phone: id, brand, model, makeYear, color, isNfc, price

function Phone(id, brand, model, makeYear, color, isNfc, price) {
  this.id = id;
  this.brand = brand;
  this.model = model;
  this.makeYear = makeYear;
  this.color = color;
  this.isNfc = isNfc;
  this.price = price;
}

const phones = [];
const PHONES_COUNT = 20;

for (let i = 0; i < PHONES_COUNT; i++) {
  const phone = new Phone(
    i + 1,
    Math.random() > 0.5 ? "Samsung" : "IPhone",
    `Series ${Math.trunc(Math.random() * 20)}`,
    2015 + Math.trunc(Math.random() * 10),
    Math.random() > 0.5 ? "white" : "black",
    Math.random() > 0.5,
    5000 + Math.trunc(Math.random() * 7000)
  );

  phones.push(phone);
}

console.table(phones);
// 1 Відібрати телефони дорожче 8000
// 2 Відібрати телефони 2018 року випуску
// 3 Вивести 'brand: model year' кожного телефону
// 4 Видалати телефон з id 10
// 5 Отримати масив з телефонами, ціна яких нижча на 5% від вихідної
// 6 Вивести бренд+модель телефонів із nfc.
// 7 Вивести дані про моделі apple 2016 року
// *8 Перевірити, чи є золоті телефони
// *9 Перевірити, чи всі телефони пізніше 2013 випуску
// *10 Дізнатися, чи всі білі айфони з нфc

//1.
const new1 = phones.filter((el) => el.price > 8000);
//2.
const new2 = phones.filter((el) => el.makeYear === 2018);
//3.
phones.forEach((el) => {
  console.table(el.brand, el.model, el.makeYear);
});
//4.
const updatedPhones = phones.filter((phone) => phone.id !== 10);
console.table(updatedPhones);

// id10thPhone = phones.findIndex((phone) => phone.id === 10);
// phones.splice(id10thPhone, 1);

//5.
// const cheaperPhones = phones.map((phone) => phone.price * 0.95);

//6.
const nfcPhones = phones.filter((el) => el.isNfc);
nfcPhones.forEach((el) => console.table(`${el.brand} ${el.id}`));
//7.
const new3 = phones.filter(
  (el) => el.brand === "IPhone" && el.makeYear >= 2015
);

console.table(new3);
//8.
const isGoldPhone = phones.some((phone) => phone.color === "gold");
console.table(isGoldPhone);
//9.
const isYear = phones.every((phone) => phone.makeYear > 2012);
console.table(isYear);
//10.
const whiteNFC = phones.every(
  (phone) => (phone.color = "white" && phone.isNFC === true)
);
console.table(whiteNFC);

//string - псевдомасиви

const str = "i am good";

const newStr = str.slice(0, 9) + "!";


