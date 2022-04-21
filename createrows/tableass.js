

function AddRow()
{
    var AddRow = document.getElementById('show');
    newRow = AddRow.insertRow(show.length);
      
    fname = document.getElementById('fname').value;
     desig = document.getElementById("desig").value;
    
     cell1 = newRow.insertCell(0);
     cell2 = newRow.insertCell(1);

    cell1.innerHTML =  fname;
    cell2.innerHTML =  desig;
    
} 

function DeleteRow()
{


    var deleteRow = document.getElementById('show');
    newRow = deleteRow.deleteRow(show.length);
      
     fname = document.getElementById('fname').value;
    desig = document.getElementById("desig").value;
    
    cell1.innerHTML =  fname;
    cell2.innerHTML =  desig;

    cell1 = newRow.deletetCell(0);
    cell2 = newRow.deleteCell(1);

    //  table.removeChild(table.lastElementChild);
    // // console.log(table.lastElementChild);


   
}