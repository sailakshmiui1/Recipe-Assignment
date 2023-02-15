//Problem-1 Take two numbers a,b and print the sum, difference, product, quotient and modulus of a & b.
let a = 10;
let b = 3;
let sum, diff, product, quotient, modulus;
sum = a + b;
diff = a - b;
product = a * b;
quotient = a / b;
modulus = a % b;

console.log("Sum Value is",sum);
console.log("Difference Value is",diff);
console.log("Product Value is",product);
console.log("Quotient Value is",quotient);
console.log("Modulus Value is",modulus);


//Problem-2 Take two numbers and only print the integer part when a is divided by b
var num1 = 10;
let num2 = 4;
let div1 = num1/num2;
console.log("With Decimal and Integer Value is",div1);
console.log("Only Integer and Without Decimal",parseInt(div1));

//Problem-3 Take two numbers a,b and print the exponential power of the first number raised by the second
var num3 = 2;
var num4 = 3;
var power = num3**num4;
console.log("Power a^^b value is",power);

//Problem-4 Take two numbers a,b and only print the decimal part of the result obtained when a is divided by b
//Approach-1
var num5 = 23;
var num6 = 4;
var div2 = num5/num6;
console.log(div2);
console.log("With Integer and Decimal ", div2);
let DecimalPart = div2%1;
console.log("Only DecimalPart value is",DecimalPart);
//Approach-2
var nums = 23;
var numss = 4;
var div5 = nums / numss;
console.log(div5);
var intgerValue = parseInt(div5);
console.log(intgerValue);
var decimalValue = div5 - intgerValue;
console.log("Only DecimalPart value is", decimalValue);

//problem-5 Take marks in 5 subjects A,B,C,D,E and print out the average of marks from five subject marks.
let subMark1 = 45;
let subMark2 = 93;
let subMark3 = 23;
let subMark4 = 45;
let subMark5 = 65;

let totalSubjects = subMark1+subMark2+subMark3+subMark4+subMark5;
console.log("Total Subject Marks",totalSubjects);
let averageSubMarks = totalSubjects/5;
console.log("Total Student average Marks",averageSubMarks);

//problem-6 Profit Percentage Formula  {Profit = Selling Price + Cost Price} Profit Percentage(%) = (profit/Cost Price)*100
var sp = 120;
var cp = 590;
var profit = cp - sp;
console.log("Profit given by CP and SP is:",profit);

//problem-7 Take a number and print out the last digit of the number

var num7 = 12;
var lastdigit = num7%10;
console.log("Only Last Digit Number",lastdigit);
//problem-8 Take a 3 digit number and print the reverse of that number



//Problem-9 Reverse Number Take a 3 digit number and print the reverse of that number 
let rnum = 49;
let reverse = 0;

while(rnum!=0){
  b = rnum %10;
  reverse = reverse*10+b;
  rnum = parseInt(rnum/10)
}
 console.log(reverse);
//problem-10 Take a 3 digit number and print the reverse of that number
 let rnum1 = 987;
 let reverse1 = 0;
 
 while(rnum1!=0){
   b = rnum1 %10;
   reverse1 = reverse1*10+b;
   rnum1 = parseInt(rnum1/10)
 }
  console.log(reverse1);
//problem-11
//Enter 2 numbers a,b - exchange their values using third variable and print them
let anum = 299;  
  let bnum = 566;   
   cnum = anum + bnum
   bnum = cnum - bnum
   anum = cnum - anum
   console.log(anum)
   console.log(bnum); 
 //Enter 2 numbers a,b - exchange their values without using third variable and print them
 //problem-12
 let anum1 = 299;  
 let bnum1 = 566;   
 anum1 = anum1 + bnum1;
 bnum1 = anum1 - bnum1;
 anum1 = anum1 - bnum1
  console.log(anum1)
  console.log(bnum1); 
