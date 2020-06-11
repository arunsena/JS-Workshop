let num = 123;

// num = num.toString();// toString(base) --> base - 10

// hex binary octal or decimal representations - number systems

// base 2 - 36 and default is 10

// binary - 0 or 1
// hex - #fffff
// Oct - 343abc

console.log(num);

console.log(123);

console.log((123).toString()); // 123.12321312.toString()

console.log((123.12321312).toString());

console.log((123).toString()); // 123.00.toString()

console.log(Math.floor(25.45)); // 25.45 -- 25

console.log(Math.ceil(25.45)); // 25.45 --

console.log(Math.round(25.45)); // 25.45 -- 25   0.5 > ceil or 0.5 < floor

console.log('dollar value - $' + 5); // $5.00 // $10.00

console.log('dollar value - $' + (5).toFixed(2)); // $5.00 // $10.00

console.log('fraction value - $' + (5.2).toFixed(3)); // 10/3 - 3.3333333333

// Imperfect calculations
console.log(0.1 + 0.2 === 0.3); // 0.1 + 0.2 --> 0.3000000000004 // 1/10 + 2/10 === 3/10 // decimal type base - 10

// isFinite and isNaN

console.log('Is NaN Check ' + isNaN(NaN)); // auto type conversion isNaN('123') or isNaN(123) -- false - number

console.log('Is Finite check ' + isFinite(123)); // Infinity and -Infinity

// IsNaN or IsFinite - functions or methods

// parseInt and parseFloat

console.log('Parse Int example ' + parseInt('5USD'));

console.log('Parse Float example ' + parseFloat('5.23USD'));

// MATH

console.log('Random number' + Math.random()); // 0.1 - 1.0 -- generates random number

console.log('Generate a number ' + Math.round(Math.random() * 100)); // 1 - 10 5.45

console.log(Math.min(6, 7, 3, 4));

console.log(Math.pow(2, 5));
console.log(2 ** 3);

let obj = { key: 123 };
obj;
num;
