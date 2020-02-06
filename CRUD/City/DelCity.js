import { myData } from "../../JSON/obj.js";
var data = Object.assign({},myData)
let cityObj = data.cities;

function delOption(input){
    var citySelect = document.getElementById("citySelect");
    let existingCities = [];
    var i;
    for (i = 1; i < citySelect.length; i++) {
        existingCities.push(citySelect.options[i].text); 
    }
    if(existingCities.includes(input)){
        for (var i=1; i<citySelect.length; i++) {
            if (citySelect.options[i].value == input)
                citySelect.remove(i);
        }
    }
    else{
        alert("City doesn't exists");
    }
}
function delRow(input){
    let tableBody = document.getElementById('cityTable').getElementsByTagName('tbody')[0];
    let rows = tableBody.getElementsByTagName('tr');
    for(let i=0; i<rows.length; i++){
        let rowText = rows[i].cells[0].innerHTML;
        if(rowText == input){
            rows[i].cells[0].parentNode.parentNode.removeChild(rows[i]);
        }
    }
}
function delObject(input){
    myData.cities.forEach(element => {
        if(element["name"] == input){
            delete element["name"];
            console.log(myData.cities);
        }
    });
}
export {delOption, delRow,delObject};