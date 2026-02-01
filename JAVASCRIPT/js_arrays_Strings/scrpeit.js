//Array taks
//task1- sums
// let arr=[10,20,30];
// let sum=0;
// for(let i=0;i<arr.length;i++){
// sum+=arr[i];
// }
// console.log(sum);

//Largest Number
let arr=[3,7,2,9];
let largest=arr[0];

for(let i=0;i<arr.length;i++){
if(arr[i]>largest){
  largest=arr[i  ];
}

}
console.log(largest)
//task reverse
let str='hello';
let rev="";

for(let i=
  str.length-1;i>=0;i--){
  rev+=str[i]
}
console.log(rev);
//task count vowels
let strs="javascript";
let countvowels=0;
for(let i=0;i<strs.length;i++){
  if(strs[i] === "a" ||
    strs[i] === "e" ||
    strs[i] === "i" ||
    strs[i] === "o" ||
    strs[i] === "u"){
   countvowels++;
  }
}
//Another method
console.log(countvowels);
let strss = "javascript";
let count = 0;

for (let ch of strss) {
  if ("aeiou".includes(ch)) {
    count++;
  }
}

console.log(count);
