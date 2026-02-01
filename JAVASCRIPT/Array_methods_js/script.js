//Array methods
let num=[1,2,3,4];
//tasks double numbrs
// const double=num.map(n =>n*2);
// console.log(double);

//tasks odd number
let oddnumbers=num.filter(n => n%2!==0);
console.log(oddnumbers)

//task sum of even numbers
let evensum=num.filter(n => n%2===0).reduce((sum,n)=>sum+n,0);
console.log(evensum);

//task convet to uppercase
let names="bahrath";
let upperNames = names.map(name => name.toUpperCase());
console.log(upperNames);
//copunt number
let count = nums.filter(n => n > 50).length;
console.log(count);
