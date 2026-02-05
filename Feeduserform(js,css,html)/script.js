let users =JSON.parse(localStorage.getItem("users"))||[];
displayUsers();

document.getElementById("formuser").addEventListener("submit",function(event){
        event.preventDefault();
    let username =document.getElementById("username").value;
let userage =document.getElementById("age").value;
let useremail =document.getElementById("email").value;
let userpho =document.getElementById("phono").value;

let user ={
    username,userage,useremail,userpho
};

users.push(user);

localStorage.setItem("users",JSON.stringify(users));
displayUsers();
document.getElementById("formuser").reset();
if (userpho.length !== 10) {
  alert("Phone number must be exactly 10 digits");
  return;
}

});

function displayUsers(){
    let usertable=document.getElementById("usertable");
    usertable.innerHTML="";
//using array aceesws
    users.forEach(user => {
        let row=document.createElement("tr");
row.innerHTML=`
<td>${user.username}</td>
<td>${user.userage}</td>
<td>${user.useremail}</td>
<td>${user.userpho}</td>
`;
usertable.appendChild(row);
    });
}