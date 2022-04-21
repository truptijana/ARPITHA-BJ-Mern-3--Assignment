let input1 = Number(prompt("enter the number of rows"));
let input2 = Number(prompt("enter the number of columns"));
var table = document.createElement("table");
table.style.border="2px solid";
table.style.color="black";
table.style.width="20px";

document.body.append(table);

for(let i=1; i<=input1; i++)
{
    let tr = document.createElement("tr")
    tr.style.border="2px solid";

    table.appendChild(tr)


for(let j=1; j<=input2; j++)
{
    let td = document.createElement("td")
    td.style.border="2px solid";
    td.style.width="20px";
    tr.appendChild(td)
    td.innerHTML = (i * j);
}

}
