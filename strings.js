let str = 'single quotes'; // single quotes

// 3 quotes - single double (backtick - ES6 2015 JS)

let double = "double quotes";

let backtick = `backticks`;

// take ${} - dynamic executions

const num1 = 480;
const num2 = 20;

backtick = `this is backtick ${num1 + num2}`;

// this is your amount 5.00 USD

backtick = `${num2.toFixed(2)} USD`;

str;

double;

backtick;

const specialQuotes = 'I\'m a string'; // expected result - I'm a string

// \ - backslash is escape character

specialQuotes;

// print a string length

const strLen = double.length;
// length is not a function it is a pre calculated number value

strLen;

// Accessing characters
double
let character = double[3]; // 0 is the starting index
character = double.charAt(3); // old way of doing it 

character = double[25]; // undefined when using [] notation
character = double.charAt(25) // '' empty using charAt() method if not found

for (const value in double) {
    const result = double[value];
    result;
}

character

// immutability 

let immute = 'hi'; 

// expected - Hi

console.log(immute[0])

immute[0] = 'A'; // not a solution or not applicable

immute = 'H' + immute[1]; // string concatnation

immute;

// changing cases

console.log(immute.toLocaleLowerCase())
console.log(immute.toLowerCase());

console.log(immute.toUpperCase());

// searching a string
const search = 'Search';

console.log(search.length);


console.log(search.includes('zebra')); // true or false
console.log(search.includes('ear'));
console.log(search.includes('arch', 3)); // string, position of index

console.log(search.indexOf('S', 1)); // either returns -1 if not found or returns index if found
console.log(search.lastIndexOf('c', 5));

console.log(search.startsWith('arch', 1));
console.log(search.startsWith('Sea', 0));

console.log(search.endsWith('ch', 7));
console.log(search.endsWith('Sea', 1));




















