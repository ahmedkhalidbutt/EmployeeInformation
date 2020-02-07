import { myData } from "../../JSON/obj.js";

function delDepOption(input){
    var depSelect = document.getElementById("depSelect");
    let existingDeps = [];
    var i;
    for (i = 1; i < depSelect.length; i++) {
        existingDeps.push(depSelect.options[i].text); 
    }
    if(existingDeps.includes(input)){
        for (var i=1; i<depSelect.length; i++) {
            if (depSelect.options[i].value == input)
                depSelect.remove(i);
        }
    }
    else{
        alert("Department doesn't exists");
    }
}
function delDepRow(input){
    let tableBody = document.getElementById('depTable').getElementsByTagName('tbody')[0];
    let rows = tableBody.getElementsByTagName('tr');
    for(let i=0; i<rows.length; i++){
        let rowText = rows[i].cells[0].innerHTML;
        if(rowText == input){
            rows[i].cells[0].parentNode.parentNode.removeChild(rows[i]);
        }
    }
}
function delDepObject(input){
    myData.cities.forEach(city =>{
        if(citySelect == city.name){
          let softwareHouses = city.softwareHouses;
          softwareHouses.forEach(house =>{
            if(houseSelect == house.name){
                let departments = house.departments;
                departments.forEach(department =>{
                    if(department[name] == input){
                        delete department["name"];
                        delete department["employees"];
                    }
                })
            }
          })
}
    })
} 
export {delDepOption, delDepRow,delDepObject};