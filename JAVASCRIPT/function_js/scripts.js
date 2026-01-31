//Task futnion
//1. Function to find square & cube
const sqr=n=>n*n;
console.log(sqr(3));

const cube=(a)=>{
    return a*a*a;
}
console.log(cube(3));

const square = n => Math.pow(n, 2);
console.log(square(3));

//2.Function to check even or odd

function chckerevenoroodd(num){
    if(num%2==0){
        console.log("Even Number")
    }else{
        console.log("Odd number")
    }
}
console.log(chckerevenoroodd(6));
//Arrow funciton
const checker=(num)=>{
    return num%2===0? "Even":"Odd";
}
console.log(checker(15)); 
//const checkEvenOdd = num => num % 2 === 0 ? "Even" : "Odd";

function countvowels(str){
let count=0;
for(let char of str){
if (
      char === 'a' || char === 'e' || char === 'i' ||
      char === 'o' || char === 'u' ||
      char === 'A' || char === 'E' || char === 'I' ||
      char === 'O' || char === 'U'
    ) {
      count++;
    }
}
return count ;
 
}
console.log(countvowels("Bharath"));

//to know
const countVowels = str =>
  [...str.toLowerCase()].filter(ch => "aeiou".includes(ch)).length;
console.log(countVowels("barathnhfsdaaaa"))
//task4. Function to find largest of 3 numbers
const largests=(a,b,c)=>Math.max(a,b,c);
console.log(largests(76,3,5));
 //simple way
function finlargest(a,b,c){
    if(a>=b && a>c){
        return a;
    }else if(b>a && b>c){
        return b;
    }else{
        return c;
    }
}
console.log(finlargest(4,7,23));

function revesed(str){
    let rev="";
for(let i=0; i<str.length;i--){
     rev+=str[i];
  
}
return revesed;
}
console.log(revesed("bharath"));

const reverseString = str =>
  str.split("").reverse().join("");

console.log(reverseString("Bharath")); // htarahB

