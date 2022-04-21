var a = document.querySelector(".call_us")
a.style.transform = "scale(0)"
// console.log(a.style.transform);
document.getElementById("num-drop").addEventListener("click",(e)=>{
    e.stopPropagation();
    if(a.style.transform == "scale(0)"){
                a.style.transform = "scale(1)"
            }
            else{
                a.style.transform = "scale(0)"
            }
})

a.addEventListener("click",(e)=>{
    e.stopPropagation();
 
})

document.body.addEventListener("click",()=>{
    if(a.style.transform == "scale(1)"){
        a.style.transform = "scale(0)"
    }
    
})


var b = document.querySelector(".form")
b.style.transform = "scale(0)"

document.getElementById("reg-drop").addEventListener("click",(e)=>{
    e.stopPropagation();
    if(b.style.transform == "scale(0)"){
                b.style.transform = "scale(1)"
            }
            else{
                b.style.transform = "scale(0)"
            }
})

// b.addEventListener("click",(e)=>{
//     e.stopPropagation();
 
// })

document.body.addEventListener("click",()=>{
    if(b.style.transform == "scale(1)"){
        b.style.transform = "scale(0)"
    }
    
})


function validation()
{
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var confpass = document.getElementById("confpass").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    if(user == "")
{
    alert("Please enter your name");
    return false;
}
if((user.length<=2) || (user.length >20))
{
    alert("User length must be between 2 and 20");
    return false;
}
if(!isNaN(user)){
    alert("Only Characters are allowed");
    return false;
}



if(pass == "")
{
    alert("Please enter your password");
    return false;
}
if((pass.length<=5) || (pass.length >20))
{
    alert("Password length must be between 5 and 20");
    return false;
}
if(pass!=confpass){
    alert("Password not Matching");
    return false;
}
}