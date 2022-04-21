let abc = document.getElementById("abc");
abc.onclick=function()
 {
 let input1= document.getElementById("n1").value;
 let input2= document.getElementById("n2").value;
 let sum=Number(input1)+Number(input2);
let div=document.getElementById("result")
 div.innerHTML="resut is = "+sum;

 }

 let def = document.getElementById("def");
def.onclick=function()
 {
 let input1= document.getElementById("n1").value;
 let input2= document.getElementById("n2").value;
 let sub=Number(input1)-Number(input2);
let div=document.getElementById("result")
 div.innerHTML="resut is = "+sub;

 }

 let fgh = document.getElementById("fgh");
fgh.onclick=function()
 {
 let input1= document.getElementById("n1").value;
 let input2= document.getElementById("n2").value;
 let mul=Number(input1)*Number(input2);
let div=document.getElementById("result")
 div.innerHTML="resut is = "+mul;

 }

 let ijk = document.getElementById("ijk");
ijk.onclick=function()
 {
 let input1= document.getElementById("n1").value;
 let input2= document.getElementById("n2").value;
 let divi=Number(input1)/Number(input2);
let div=document.getElementById("result")
 div.innerHTML="resut is = "+divi;

 }