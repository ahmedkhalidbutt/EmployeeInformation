import { myData } from "../../JSON/obj.js";
function addHouse(){
    let houseNamelbl = document.getElementById('houseNamelbl');
    let houseNameInp = document.getElementById('houseNameInp');
    houseNamelbl.style.display = "block";
    houseNameInp.style.display = "block";
    let houseLocationlbl = document.getElementById('houseLocationlbl');
    let houseLocInp = document.getElementById('houseLocInp');
    houseLocationlbl.style.display = "block";
    houseLocInp.style.display = "block";
    let houseTypelbl = document.getElementById('houseTypelbl');
    let houseTypeInp = document.getElementById('houseTypeInp');
    houseTypelbl.style.display = "block";
    houseTypeInp.style.display = "block";
    let newhouseNamelbl = document.getElementById('newhouseNamelbl');
    let newhouseNameInp = document.getElementById('newhouseNameInp');
    newhouseNamelbl.style.display = "none";
    newhouseNameInp.style.display = "none";
    let newhouseLocationlbl = document.getElementById('newhouseLocationlbl');
    let newhouseLocInp = document.getElementById('newhouseLocInp');
    newhouseLocationlbl.style.display = "none";
    newhouseLocInp.style.display = "none";
    let newhouseTypelbl = document.getElementById('newhouseTypelbl');
    let newhouseTypeInp = document.getElementById('newhouseTypeInp');
    newhouseTypelbl.style.display = "none";
    newhouseTypeInp.style.display = "none";
    }
function checkNameInput(){
    let houseNameInp = document.getElementById('houseNameInp').value;
    if(houseNameInp != null || houseNameInp != undefined || houseNameInp != ''){
        return houseNameInp;
    }
}
function checkLocationInput(){
    let houseLocInp = document.getElementById('houseLocInp').value;
    if(houseLocInp != null || houseLocInp != undefined || houseLocInp != ''){
        return houseLocInp;
    }
}
function checkTypeInput(){
    let houseTypeInp = document.getElementById('houseTypeInp').value;
    if(houseTypeInp != null || houseTypeInp != undefined || houseTypeInp != ''){
        return houseTypeInp;
    }
}
function addHouseOption(input){
    let houseSelect = document.getElementById('houseSelect');
    let option = document.createElement('option');
    option.innerHTML = input;
    houseSelect.appendChild(option)
}
function addHouseRow(name, location, type){
    let tableBody = document.getElementById('houseTable').getElementsByTagName('tbody')[0];
    let row = document.createElement('tr');
    let nameRow = document.createElement('td');
    nameRow.innerHTML = name;
    let locRow = document.createElement('td');
    locRow.innerHTML = location;
    let typeRow = document.createElement('td');
    typeRow.innerHTML = type;
    row.appendChild(nameRow);
    row.appendChild(locRow);
    row.appendChild(typeRow);
    tableBody.appendChild(row);
}
function clearHouseInp(){
    let houseNameInp = document.getElementById('houseNameInp');
    houseNameInp.value = '';
    let houseLocInp = document.getElementById('houseLocInp');
    houseLocInp.value = '';
    let houseTypeInp = document.getElementById('houseTypeInp');
    houseTypeInp.value = '';
    }
function addHouseObject(name, location, type){
    let houseOb = {
        "name": name,
        "location": location,
        "type": type,
        "departments": []
    }
    let citySelect = document.getElementById('citySelect').value;
    let cities = myData.cities;
    cities.forEach(city => {
        if(citySelect == city.name){
            city.softwareHouses.push(houseOb);
        }
    });
}
export {addHouse,checkNameInput,checkLocationInput, checkTypeInput, addHouseRow, addHouseOption, clearHouseInp, addHouseObject};