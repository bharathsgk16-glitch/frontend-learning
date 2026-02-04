const product={
    name:"wheat",
    price:50,
    quantaty:2
}
console.log(product.name+" "+product.quantaty);
//Task-2 2️⃣ Calculate total price
let pricespro=[{proname:"Wheat",price:800},
    {proname:"Rice",price:300},
    {proname:"Milk",price:580},
{proname:"Water",price:100}
]

let sum=0;
pricespro.forEach(item=>{
    sum=sum+item.price;
});
console.log(sum)