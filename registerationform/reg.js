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



if(confpass == "")
{
    alert("Please fill the confirmpassword field");
    return false;
}

if(email == "")
{
    alert("Please fill your email field");
    return false;
}
if(email.indexOf("@") <= 0){
    alert(" @ Invalid Position");
    return false;
}
if((email.charAt(email.length-4)!= ".") && (email.charAt(email.length-3)!="."))
{
    alert("** . Invalid Position**");
    return false;
}


if(mobile == "")
{
    alert("**Please fill your mobilenumber field**");
    return false;
}
if(isNaN(mobile)){
    alert("**user must write digits only not characters**");
    return false;
}
if(mobile.length!=10)
{
    alert("** Mobile Number  must be 10 digits only**");
    return false;
}
}