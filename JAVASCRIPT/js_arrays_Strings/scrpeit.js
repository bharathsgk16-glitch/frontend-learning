let arr=[10,20,30];
let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i];

}
console.log(sum)

let arrs = [3, 7, 2, 9];
let largest = arrs[0];

for (let i = 1; i < arrs.length; i++) {
  if (arrs[i] > largest) {
    largest = arrs[i];
  }
}

console.log("Largest number:", largest);
