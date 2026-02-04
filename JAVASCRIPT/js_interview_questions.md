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
  \* its just obj based notfully based

## way implement?

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
* |Primitive type-whic stored in value|
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
* do-while loop - Even if condtion is false,cdoe runs one timex

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

methods of string:
Name	Description
at()	Returns an indexed character from a string
charAt()	Returns the character at a specified index (position)
charCodeAt()	Returns the Unicode of the character at a specified index
codePointAt()	Returns the Unicode value at an index (position) in a string
concat()	Returns two or more joined strings
constructor	Returns the string's constructor function
endsWith()	Returns if a string ends with a specified value
fromCharCode()	Returns Unicode values as characters
includes()	Returns if a string contains a specified value
indexOf()	Returns the index (position) of the first occurrence of a value in a string
isWellFormed()	Returns true if a string is well formed
lastIndexOf()	Returns the index (position) of the last occurrence of a value in a string
length	Returns the length of a string
localeCompare()	Compares two strings in the current locale
match()	Searches a string for a value, or a regular expression, and returns the matches
matchAll()	Searches a string for a value, or a regular expression, and returns the matches
padEnd()	Pads a string at the end
padStart()	Pads a string from the start
prototype	Allows you to add properties and methods to an object
repeat()	Returns a new string with a number of copies of a string
replace()	Searches a string for a pattern, and returns a string where the first match is replaced
replaceAll()	Searches a string for a pattern and returns a new string where all matches are replaced
search()	Searches a string for a value, or regular expression, and returns the index (position) of the match
slice()	Extracts a part of a string and returns a new string
split()	Splits a string into an array of substrings
startsWith()	Checks whether a string begins with specified characters
substr()	Deprecated. Use substring() or slice() instead.
substring()	Extracts characters from a string, between two specified indices (positions)
toLocaleLowerCase()	Returns a string converted to lowercase letters, using the host's locale
toLocaleUpperCase()	Returns a string converted to uppercase letters, using the host's locale
toLowerCase()	Returns a string converted to lowercase letters
toString()	Returns a string or a string object as a string
toUpperCase()	Returns a string converted to uppercase letters
toWellFormed()	Returns a string where "lone surrogates" are replaced with the Unicode replacement character
trim()	Returns a string with removed whitespaces
trimEnd()	Returns a string with removed whitespaces from the end
trimStart()	Returns a string with removed whitespaces from the start
valueOf()	Returns the primitive value of a string or a string object

# Nuber properties and methods?
constructor	Returns the function that created JavaScript's Number prototype
EPSILON	Returns the difference between 1 and the smallest number greater than 1
isFinite()	Checks whether a value is a finite number
isInteger()	Checks whether a value is an integer
isNaN()	Checks whether a value is Number.NaN
isSafeInteger()	Checks whether a value is a safe integer
MAX_SAFE_INTEGER	Returns the maximum safe integer in JavaScript.
MIN_SAFE_INTEGER	Returns the minimum safe integer in JavaScript
MAX_VALUE	Returns the largest number possible in JavaScript
MIN_VALUE	Returns the smallest number possible in JavaScript
NaN	Represents a "Not-a-Number" value
NEGATIVE_INFINITY	Represents negative infinity (returned on overflow)
POSITIVE_INFINITY	Represents infinity (returned on overflow)
parseFloat()	Parses a string an returns a number
parseInt()	Parses a string an returns a whole number
prototype	Allows you to add properties and methods to an object
toExponential(x)	Converts a number into an exponential notation
toFixed(x)	Formats a number with x numbers of digits after the decimal point
toLocaleString()	Converts a number into a string, based on the locale settings
toPrecision(x)	Formats a number to x length
toString()	Converts a number to a string
valueOf()	Returns the primitive value of a number

## What is bitwise property?
&	AND	Sets each bit to 1 if both bits are 1
|	OR	Sets each bit to 1 if one of two bits is 1
^	XOR	Sets each bit to 1 if only one of two bits is 1
~	NOT	Inverts all the bits
<<	Zero fill left shift	Shifts left by pushing zeros in from the right and let the leftmost bits fall off
>>	Signed right shift	Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
>>>	Zero fill right shift	Shifts right by pushing zeros in from the left, and let the rightmost bits fall off

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

another function example -function sayHi(){
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

## Modern methods Arrays used :
Ex with known and what :


- map()- transforms array
change each item and retruns a new array(Does NOT change original array)
example:
const names = ["bharath", "raj"];
const upperNames = names.map(name => name.toUpperCase());
:: change to uppercase change to form

- filter () -condtion  and fitler it they which keep item match
length may change
 Original array unchanged
 even numbers;
 let num+[2,34,4,62]
 const even= number.filter(n=> num%2===0);
 console.log(even)

 - reduce()- single value reduces
reduces to array into  one result
|andthe with this we can 
## all methods array
[ ]	Creates a new Array
new Array()	Creates a new Array
at()	Returns an indexed element of an array
concat()	Joins arrays and returns an array with the joined arrays
constructor	Returns the function that created the Array prototype
copyWithin()	Copies array elements within the array, to and from specified positions
entries()	Returns a key/value pair Array Iteration Object
every()	Checks if every element in an array pass a test
fill()	Fill the elements in an array with a static value
filter()	Creates a new array with every element in an array that pass a test
find()	Returns the value of the first element in an array that pass a test
findIndex()	Returns the index of the first element in an array that pass a test
findLast()	Returns the value of the last element in an array that pass a test
findLastIndex()	Returns the index of the last element in an array that pass a test
flat()	Concatenates sub-array elements
flatMap()	Maps all array elements and creates a new flat array
forEach()	Calls a function for each array element
from()	Creates an array from an object
includes()	Check if an array contains the specified element
indexOf()	Search the array for an element and returns its position
isArray()	Checks whether an object is an array
join()	Joins all elements of an array into a string
keys()	Returns a Array Iteration Object, containing the keys of the original array
lastIndexOf()	Search the array for an element, starting at the end, and returns its position
length	Sets or returns the number of elements in an array
map()	Creates a new array with the result of calling a function for each array element
of()	Creates an array from a number of arguments
pop()	Removes the last element of an array, and returns that element
prototype	Allows you to add properties and methods to an Array object
push()	Adds new elements to the end of an array, and returns the new length
reduce()	Reduce the values of an array to a single value (going left-to-right)
reduceRight()	Reduce the values of an array to a single value (going right-to-left)
reverse()	Reverses the order of the elements in an array
shift()	Removes the first element of an array, and returns that element
slice()	Selects a part of an array, and returns the new array
some()	Checks if any of the elements in an array pass a test
sort()	Sorts the elements of an array
splice()	Adds or Removes array elements
toReversed()	Reverses the order of array elements (to a new array)
toSorted()	Sorts the elements of an array (to a new array)
toSpliced()	Adds or Removes array elements (to a new array)
toString()	Converts an array to a string, and returns the result
unshift()	Adds new elements to the beginning of an array, and returns the new length
valueOf()	Returns the primitive value of an array
with()	Returns a new array with updated elements

#### “forEach is used for iteration without returning anything.map transforms each element and returns a new array filter selects elements based on condition.reduce combines all values into a single result.”

## What is a object?
- Object is  variable that store thye values and functions
- The object funtion stores of key and function pairs(means collection of key and value pairs kown as property)
- object in literls
The basic struture is :
let or const objectname={
  key:value,
  value:pair
};
- acess by dotnotation and barckket notation
console.log(car.brand);
console.log(car["brand"]);
-  object contructor
Template/Blue print
like form create many objects
 like name age courses each student fills same form but values is different
 constructor = is form
 objects forms
 funtuion Person(name,age){
  this.name =name;
  this.age=age;
 }
funtion Person is Constructor name (Capital letter by rule)
objects using constructor:
const p1 = new Person("Bharath", 22);
const p2 = new Person("Raj", 25);

## What i set and give references used?
Passing array to sets and then add various methods which is dynamikc
Method	Description
new Set()	Creates a new set
add()	Adds a new element to a set
clear()	Removes all elements from a set
delete()	Removes an element from a set
difference()	Returns the difference between two sets
entries()	Returns an Iterator with the [value,value] pairs from a set
forEach()	Invokes a callback for each element in a set
has()	Returns true if a value exists
intersection()	Returns the intersection of two sets
isDisjointFrom()	Returns true if no elements in a set are elements in another set
isSubsetOf()	Returns true if a set is a subset of another set
isSupersetOf()	Returns true if a set is a superset of another set
keys()	Same as values()
symmetricDifference()	Returns the symmetric difference between two set
union()	Returns the union of two sets
values()	Returns an Iterator with the values in a set
Sets have only one property:

Property	Description
size	Returns the number of elements in a Set

## What is Dom ?
if html is page is tree structure and js controls the tree using dom(like html convert to js object)
like:
 document
 ├── html
 │   ├── head
 │   └── body
 │        ├── h1
 │        └── p
can read, change, add, delete HTML using DOM.

Accessing Dom 
- : document represent whole page

Selecting element: 
- by id
html- <h1 id="title">Hello</h1>
const heading=document.getElementById("title");

- by class
<p class="text">One</h1>
<p class="text">Two</p>
const heading=document.getElementBYClassName("text");(returns in htl array like)
const item=document.getElementBYClassName("text");
- by tagname
document.getelemntv=byTagname("p");
Moderway use queryselector:
document.querySelecdtor("#h1"); for id.
document.querySelecdtor(".h1"); for class.
document.querySelecdtor("h1"); for tag.querySelectorAll(".box");//Return NodeList
2-Change content
title.textContent="Welcome";
heading.innerHTML="<span>Hellow</span>";

we can change styles:
heading.style.color="red"
heading.style.fontSize="20px";

Add / Remove CSS class (BEST PRACTICE)
heading.classList.add("active");
heading.classList.remove("active");
heading.classList.toggle("active");

The  Eventgs= uswer action(click type,scroll)
html-<button id="btn>ClickME</button>