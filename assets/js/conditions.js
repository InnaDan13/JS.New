const greeting = 'Hello';
const name = 'Test';

const result = `${greeting} ${name}`
console.log(result);

const a = 1;
const b = 10;
console.log(`${a} + ${b} = ${a+b}`);

const isOnline = false;
let color = null;

if(isOnline){
     color = 'green';
} else { color = 'red';}
console.log(color);


if (isOnline){
    document.write(`<p>User is <span style = "color:${color}">online </span></p>`)
} else {
    document.write(`<p>User is <span style = "color:${color}> offline</span></p>`)
}

const isMoney = false;

if (isMoney){
    document.write(`<p>Accepted</p>`)
} else {
    document.write(`<p>Declined</p>`)
}