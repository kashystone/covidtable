let firstName = document.getElementById('firstName');
let lastName = document.getElementById('lastName');
let email = document.getElementById('email');
let gender = document.getElementById('gender');
let checkbox = document.getElementById('checkbox');
let table = document.getElementById('formTable');
let formPage = document.getElementById('formId');
let updateForm = document.getElementById('formUpdate');
let html;
let row;
 let rowNum = 1;


let button = document.getElementById('subBtn');

button.addEventListener("click", function(event){
    event.preventDefault();
    
    if(button.innerText === "Submit"){
    let cbValue = checkbox.checked ? "Yes" : "No";
    if(!firstName.value || !lastName.value || !email.value || !gender.value){
        return alert("Fill in the details");
    }
    
    html = `
    <tr>
        <td>${lastName.value} ${firstName.value} </td>
        <td>${email.value}</td>
        <td>${gender.value}</td>
        <td>${cbValue}</td>
        <td><button class="editBtn" onclick="updateToTable(this)">Edit</button></td>
        <td><button class="delBtn"  onclick="deleteRow(this)">Delete</button></td>
    </tr>`;
    
    table.insertAdjacentHTML("beforeend", html);
    //make table visible again once button is hit
    table.style.display = "block";
    //Return input to blank
    firstName.value = lastName.value = email.value = gender.value = "";
    checkbox.checked = false;

    rowNum++;

}
});


function updateToTable(e){
    button.innerText = "Update";
     if (e.parentElement.parentElement.cells[3].innerHTML === "No") {
      document.getElementById('checkbox').checked = false;
  } else {
      document.getElementById('checkbox').checked = true;
  } 
    row = e.closest('tr');
    let nameCell = row.querySelector('td:first-child');
    let emailCell = nameCell.nextElementSibling;
    let genderCell = emailCell.nextElementSibling;
    let checkboxCell = genderCell.nextElementSibling;
    let editCell = checkboxCell.nextElementSibling;
    let delCell = editCell.nextElementSibling;

    
    document.getElementById('gender').value = genderCell.innerHTML;
    document.getElementById('email').value = emailCell.innerHTML;
    document.getElementById('firstName').value = nameCell.innerHTML.split(" ")[0];
    document.getElementById('lastName').value = nameCell.innerHTML.split(" ")[1];

   
  
}


    button.addEventListener("click", function(e){
        e.preventDefault();
        if(button.innerText === "Update"){
     
    
    
     let nameCell = row.querySelector('td:first-child');
    let emailCell = nameCell.nextElementSibling;
    let genderCell = emailCell.nextElementSibling;
    let checkboxCell = genderCell.nextElementSibling;
    let editCell = checkboxCell.nextElementSibling;
    let delCell = editCell.nextElementSibling;
       
        emailCell.innerHTML = document.getElementById('email').value;
        genderCell.innerHTML = document.getElementById('gender').value;
        nameCell.innerHTML = document.getElementById('lastName').value + " " + document.getElementById('firstName').value;
        if(document.getElementById('checkbox').checked){
        checkboxCell.innerHTML = `<td>Yes</td>`;
        }else{ checkboxCell.innerHTML = `<td>No</td>`}
        
        //Return input to blank
       
        firstName.value = lastName.value = email.value = gender.value = "";
       
        button.innerHTML = "Submit";
    } 
    })


function deleteRow(delButton){
 row = delButton.closest('tr');
    row.parentNode.removeChild(row);

console.log(rowNum);
    rowNum--;
    if (rowNum === 1) {
        // If there are no rows left, hide the table
        table.style.display = "none";
      }
    
   
    
}





  


