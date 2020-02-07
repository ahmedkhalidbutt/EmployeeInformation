import { myData } from "../../JSON/obj.js";
function displayDepUpdateInp(){
    let newDeplbl = document.getElementById('newDeplbl');
    newDeplbl.style.display = "block";
    let newDepInp = document.getElementById('newDepInp');
    newDepInp.style.display = "block";
}
function checkUpDepInput(){
    let newDepInp = document.getElementById('newDepInp').value;
    if(newDepInp != null || newDepInp != undefined || newDepInp != ''){
        return newDepInp;
    }
}
function updateDepOption(prevDep, newDep){
    var depSelect = document.getElementById("depSelect");
    let existingDeps = [];
    var i;
    for (i = 1; i < depSelect.length; i++) {
        existingDeps.push(depSelect.options[i].text); 
    }
    if(existingDeps.includes(prevDep)){
        for (var i=1; i<depSelect.length; i++) {
            if (depSelect.options[i].value == prevDep)
                depSelect.options[i].text = newDep;
                depSelect.options[i].value = newDep;
        }
    }
    else{
        alert("Department doesn't exists");
    }
}
function updateDepRow(prevDep, newDep){
    let tableBody = document.getElementById('depTable').getElementsByTagName('tbody')[0];
    let rows = tableBody.getElementsByTagName('tr');
    for(let i=0; i<rows.length; i++){
        let rowText = rows[i].cells[0].innerHTML;
        if(rowText == prevDep){
            rows[i].cells[0].innerHTML = newDep;
        }
    }
}
function upDep(prevDep, newDep){
    let citySelect = document.getElementById('citySelect').value;
    let houseSelect = document.getElementById('houseSelect').value;
    myData.cities.forEach(city =>{
        if(citySelect == city.name){
          let softwareHouses = city.softwareHouses;
          softwareHouses.forEach(house =>{
            if(houseSelect == house.name){
                let departments = house.departments;
                departments.forEach(department =>{
                    if(department.name == prevDep){
                       department.name = newDep;
                    }
                    console.log(department);
                })
            }
          })
}
    })
}
export {displayDepUpdateInp, checkUpDepInput, updateDepOption, updateDepRow, upDep};