function addDep(){
    let deplbl = document.getElementById('deplbl');
    let depInp = document.getElementById('depInp');
    deplbl.style.display = "block";
    depInp.style.display = "block";
    let newdeplbl = document.getElementById('newDeplbl');
    newdeplbl.style.display = "none";
    let newdepInp = document.getElementById('newDepInp');
    newdepInp.style.display = "none";
    }
function checkDepInput(){
    let depInp = document.getElementById('depInp').value;
    if(depInp != null || depInp != undefined || depInp != ''){
        return depInp;
    }
}
function addDepOption(input){
    let depSelect = document.getElementById('depSelect');
    let option = document.createElement('option');
    option.innerHTML = input;
    depSelect.appendChild(option)
}
function addDepRow(input){
    let tableBody = document.getElementById('depTable').getElementsByTagName('tbody')[0];
    let row = document.createElement('tr');
    let rowtxt = document.createElement('td');
    rowtxt.innerHTML = input;
    row.appendChild(rowtxt);
    tableBody.appendChild(row);
}
function clearDepInp(){
let depInp = document.getElementById('depInp');
depInp.value = '';
}
export {addDep, checkDepInput, addDepOption,addDepRow,clearDepInp};