## What is js?

js is a proragramming language that makes webiste interactive and dynamic
in webrowser

- (And the core technolgy is html and css)its basicallyisd dynamic content
  runs in(browser side) and server-side(node.js)and other(libraries & frameworks like(React & Angular))
  They nothing but prototype object oriented run in mordern brower
  js is case sensitive

History-introduce in Breden_Eich-netsen Developer

like timelin goeson - Hister Mocha(1995)- Live Script(1996)-js 1 Es 14 Ecma-Ecama Intern 20(1997)-ES3 conv IES -Error Handling(1999)-Dougler Crock form ideal oops Json(2009)-2015-es6(used all version as universal script)|(ECMA script 2021)
Ecma-Script-1 start 1997 t0 currently  2023 Ecma -14
- html -structure
- CSS-design
- JS- Logic + behaviour ex button click
  its used client side scrpting|(make ui dynamic)

#### Features

- Dyanamic( static Website)-Tehy make webiste intractive
- Light weight-Runs directly to broweser
  Aysncronse- it make synchronse order |(asyn middel time setted whithout block it wil run)vicely webise (callback,promises)
- Event handling programing- event occurs(user action(fucntioning))
- Cross Plateform-Wroks in borwser and works in all os
- Versatiole(Frontend (Browser)) and backend(node.js)
  its read top to bottom(excute line by by)Internet user call sack-handle function
- single page application  
   chrom-js enigne V8
  fire fox-spiderMonkey
  |\* its just obj based notfully based

## way implement||?

inline way-<Script>JS statment <Script>
in external use -<script src="ap.js><script> lkie this.
pringt in JS-
way of direct consoles

- console.log(js)
- for pop- window.alert("hllo|");
  -to print in html

* document.write("hwllo)
* document.body.innerhtml("hwllo)
* userinputusing prompt-console.error("any)
  console.warn(users)-yellow
  console.clear|(emtpy)

## what is variable?

Variable is used to store data so we can reuse it
its two way decalaration and instilization
ex|: let a; // let a=12;

sturcture keyword variabename= value;

var - redeclaration,reassinging,change;
let-reassinging,change|(block scoper mostly used )
constant-cann't do anything(final)

## What is Datatype and its types?
|Its used sotre which kind of value and then how muxh memory to allocate and what operator allowed
* |Primitive type-whic stored in value|)
- number
- string
- Boolean
- undefined
- Null
- Symbol
- Big Int
* Non-|Primitive
|Objects,Arrays,Fucntion(sotred in Heap memory)Refrence Type

## What is Operator ?
Operators symbols used to perform operation on values

- Arihtmetic operators
Its used perform calculation mathematical operation
+add,- Subract,* mutilply,/ Divide,% modulas(reminder)
- Assignment Operator
Its used to perform assinging values
+=,-=,*=,/=(its perform x=x+5)like that
- Comparison Operators
Operator	Meaning(used to compare two value)
>Greater than
< Less than
>=	Greater or equal
<=	Less or equal
==	Equal (value only)
===	Strict equal (value + datatype)
!=	Not equal
!==	Strict not equalwith datatype
- Logical Operator
Which used combine the coditions
&& - and operator check if both codition are ture
|| - or operator if any one is true

Increment & Decrement operator
which increase the value and decrease
ex count=5;
count ++;6
count --;5

operator precedecence
BOdmas which runs before
like first priorty -|()
and then to * /
and then come to + - this vicely(10 + 2)* 3

## What is Conditonal Statement?
conditon statment is which give decision which to give
there is 
* if -single condition
* if-else -used to two outcome
* if-else if-else- multiple condtion
* switch - used chcek one value against many options
ht syntax:
switch(value) {
  case option1:
    // code
    break;
  case option2:
    // code
    break;
  default:
    // code
}
(the jump condtion like break- stop and then continue skip)

What is Loop?
Loops is repeat code unitl a condtion is true|(used to avoid repeatation,process data)
* for loop -when you know how many times to repeat 
* while loop - used when you don't know how many times,but you know the condition
* do-while loop - Even if condtion is false,cdoe runs one time

## What is Arrays and how works?
Array is collection of value stored in one variable(sotring multiple value)
like let number=[10,30,20]
      let names=["Bhararth","Raj"]
      access by array by console.log(numbr[0]); index accessing
      number.length- to know the length
      - looping though the array
      for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
Mehtods used:
let fruits=["apple","banana"];
- fruits.push("organge); - add it
- furits.pop(); remove the last
- fruits.shift(); - remove first
- fruits.unshift(); - add first
There is modern array methods used |:
- forEach
arr.forEach(num=>{
  console.log(num)
})
-map(transform arry) it modify each element give new array |(orginal array stay safe)
#### “forEach is used for iteration without returning anything.map transforms each element and returns a new array filter selects elements based on condition.reduce combines all values into a single result.”

## What String in js?
A string is a sequence of character(text)
let name = "Bharath";
name.length;          // length 7
name.toUpperCase();   // BHARATH
name.toLowerCase();   // bharath
name.includes("a");   // true(its there not)
name.charAt(0);       // B
name.indexof(B);//0
name.slice(0,3) //bha //its till 2 scond index
name.split(",")//split by comma
let str = "JavaScript";
str.slice(4, 10); // Script
str.slice(4);    // Script (start from index and stop till end)
str.slice(-6);   // Script (from back)

Looping|:
let name="bharath";
for(let i=0;i<name.length;i++){
  console.log(name[i])
}

## What is funtion ?
Fucntion is reusable block of code
(it of writing same code again and agian)
key of using:reusabiltiy,less code 
Syntax :
function functionName() {
  // code
}
ex:function greet(){
  console.log("Hello");
}
greet();
##### we can return used funtion(return sends value back.)
function add(a, b) {
  return a + b;
}

let result = add(10, 20);
console.log(result);
another ex: funtion can stored in varaible
const func=function(a,b){
  return a*b;
};
console.log(func(1,2))

Modern way use arrrow funtion
const greet=()=>{
  console.log("hellow")
}
greet();
if two operation
const add = (a, b) => {
  return a + b;
};

if single we can
const onepara=n=>n*n;
console.log(square(5));

Difference between function & arrow function?

👉 Arrow functions:

Short syntax

No this binding

Used in modern JS

##### Callback- funciton passed  into another function as argument

funtion greet(name){
  console.log("Hello"+name);
}
//greet(bharath)
funtion proceesuser(callback){
  let name="Bharath";
  callback(name);
}
processuser(greet);

another function-function sayHi(){
  console.log("Hi");
}
funtion result(callback){
cllaback();
}
result(sayHi) used for time out

##### Anonymus funtion -An anonymous function is a function without a name.
function () {
  console.log("Hello");
}
features-Stored in variables
- Passed as callbacks
- Used immediately

used most setTimeout(function() {
  console.log("Hello after 2 sec");
}, 2000);

imediate invoked (function() {
  console.log("Run immediately");
})();

Thi funtions concept that is:
What is Scope?
 Scope = Where a variable can be accessed
 - The Global scoper -variable declared outside funtion
 hat is Scope?
let x = 10;

function test() {
  console.log(x);
}
test(); // 10

x is accessible everywhere

- Local Scope (Function Scope)
Variable declared inside function.
function test() {
  let y = 20;
  console.log(y);
}
test();
// console.log(y); ❌ Error
##### What is closure?
A function remembers variables from its outer function even after outer function is finished.
ex:function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

let counter = outer();

counter();
counter();
counter();
function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

let counter = outer();

counter();
counter();
counter();
closure = Function + Memory of outer variables
// to knwofor...of = “give me values”

👉 for...in = “give me indexes”