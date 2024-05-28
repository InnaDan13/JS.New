function getFullName() {
  return `${this.name} ${this.surname}`;
}

const customer = {
  name: "Test",
  surname: "Testowych",
  email: "testtestowych@ua.com",
  password: "qwerty123",
  phone: +3812445768,
  adres: {
    street: "Kromera",
    city: "WR",
    postcode: "51-163",
  },
  year: "2014",
  // getFullName: function () {
  //   return `${customer.name} ${customer.surname}`;
  // },
  // getFullName(){
  //   return
  // }
  getFullName: getFullName,
  changePassw(newPassw) {
    this.password = newPassw;
  },
  getAge() {
    return new Date().getFullYear() - this.year;
  },
};

console.log(customer.getFullName());
customer.changePassw("new pass");
console.log(customer.password);
console.log(customer.getAge());

document.write(`<h2>${customer.getFullName()}</h2>`);

for (const key in customer) {
console.log(key, customer[key]);}//синтаксис обчислюваних властивосетй

function Book (author,title,year,publish,price){
  this.author = author;
  this.title = title;
  this.year = year;
  this.publish=publish;
  this.price = price;
}

const book1 = new Book('Євгенія Кузнєцова',"Драбина",'2022','Видавництво Лева','50')
console.log(book1);

Book.prototype.getAge = function() {
  return new Date().getFullYear() - this.year
};
Book.prototype.setNewPrice = function(newPrice){
  this.price = newPrice;
}