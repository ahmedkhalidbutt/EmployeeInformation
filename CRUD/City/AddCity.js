function add(){
let citylbl = document.getElementById('citylbl');
let cityInp = document.getElementById('cityInp');
citylbl.style.display = "block";
cityInp.style.display = "block";
}
function checkInput(){
    let cityInp = document.getElementById('cityInp').value;
    if(cityInp != null || cityInp != undefined || cityInp != ''){
        return cityInp;
    }
}
function addOption(input){
    let citySelect = document.getElementById('citySelect');
    let option = document.createElement('option');
    option.innerHTML = input;
    citySelect.appendChild(option)
}
function addRow(input){
    let tableBody = document.getElementById('cityTable').getElementsByTagName('tbody')[0];
    let row = document.createElement('tr');
    let rowtxt = document.createElement('td');
    rowtxt.innerHTML = input;
    row.appendChild(rowtxt);
    tableBody.appendChild(row);
}
function clearInp(){
let cityInp = document.getElementById('cityInp');
cityInp.value = '';
}
export {add, checkInput, addOption,addRow,clearInp};