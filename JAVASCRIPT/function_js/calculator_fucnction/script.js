function add(a,b){
    return a+b;
}
function subract(a,b){
    return a-b;
}
function multiply(a,b){
return a*b;
}
function div(a,b){
    if(b==0){
     return "Cannot divided by 0"
    }
    return a/b;
}

let num1=Number(prompt("Enter the  first number:"));
let num2=Number(prompt("Enter the value sceond number"))
let choice = prompt("Choose + - * /");
let reuslt;
switch(choice){
    case "+": reuslt=add(num1,num2);
    break;
      case "-": reuslt=subract(num1,num2);
    break;
     case "*": reuslt=multiply(num1,num2);
    break;
     case "/": reuslt=div(num1,num2);
    break;
    default: 
    reuslt="Invalid choice"
}
console.log("Result:",reuslt );