//  let a =10;
//  let b = 4;
// let sum = a + b;
// let diff = a - b;
// let product = a * b;
// let quotient = a / b;
// let modulus = a %b;
// console.log(sum);
// console.log(diff);
// console.log(product);
// console.log(quotient);
// console.log(modulus);

//Here only integer
// let a = 10;
// let b = 4;
// let divided = a / b;
// console.log(divided);


//Here power
// let a = 2;
// let b = 3;
// let power = a**b;
// console.log(power);

// Take p,r,t and calculate si
// let p,r,t,si
// p = 10000;
// r= 10;
// t =5;
// si = p*r*t/100;
// console.log(si);

// Take p, r, t and find compond interest
 //A = p(1+r/100^t)
 //ci = a-p
//  let p, r, t, amt, ci;
//  p = 10000;
//  r = 10;
//  t = 5;
//  amt = p(1+r/100**t)
//  console.log(amt);
//  ci = amt-p;
//  console.log(ci);

// let a = 67;
//I want you guys to extract last digit:
// let lastdigit = a % 10;
// console.log(lastdigit);

let n = 124;
let x = 7;
let ans = parseInt(n/x);

console.log(ans);



const readline = require("readline");

const code = readline.createInterface({
  input: process.stdin
});

const userInput = [];

code.on("line", (data) => {
  userInput.push(data);
});

// neglect code above it
code.on("close", () => {
   
 let input=userInput // give you access to stdin box
 
  let a = parseInt(input[0])
  let b = parseInt(input[1])

let sum, diff, product, quotient, modulus;
 sum = a + b;
 diff = a- b;
product = a*b;
quotient = a / b;
modulus = a %b;
console.log(sum);
console.log(diff);
console.log(product);
console.log(quotient);
console.log(modulus);
 
     
});


//parseInt(), parseFloat()
//+, Number
// let a = '15'
// let b = 12
//let ans = number(a)//it is also converting  string to number frist way
// let ans1 = +a; //it is also converted string to number second way
// console.log(ans, typeof[(ans)]);

//Here in string pure integer so, that's why showing NaN
// let a1 = '15p'
// let b1 = 12
// let val = +a 
// console.log(ans, typeof[(ans)]);
//conver float to number
// var a = '15.5'
// var b = 12
// let ans2 = +a;
// console.log(ans, typeof(ans));
//Convert to Integer to String
let a11 = "15.5"
let b11 = 12
let ans3 = parseInt(a11);
console.log(ans3, typeof(ans3));
//parseInt  string to integer two advantage  while string to intger removing the decimal part
//2 "15p"  and "15pht4j" = 15 here convert only number it will return ignore the chars
//parseInt it will display only number "15.5prsts" = 15
//parseFloat "15.5phr8" =15.5 it  will return











