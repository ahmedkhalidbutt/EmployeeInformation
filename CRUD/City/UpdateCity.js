import { myData } from "../../JSON/obj.js";
var data = Object.assign({},myData);
function displayUpdateInp(){
    let newCitylbl = document.getElementById('newCitylbl');
    newCitylbl.style.display = "block";
    let newCityInp = document.getElementById('newCityInp');
    newCityInp.style.display = "block";
}
function checkUpInput(){
    let newCityInp = document.getElementById('newCityInp').value;
    if(newCityInp != null || newCityInp != undefined || newCityInp != ''){
        return newCityInp;
    }
}
function updateOption(prevCity, newCity){
    var citySelect = document.getElementById("citySelect");
    let existingCities = [];
    var i;
    for (i = 1; i < citySelect.length; i++) {
        existingCities.push(citySelect.options[i].text); 
    }
    if(existingCities.includes(prevCity)){
        for (var i=1; i<citySelect.length; i++) {
            if (citySelect.options[i].value == prevCity)
                citySelect.options[i].text = newCity;
                citySelect.options[i].value = newCity;
        }
    }
    else{
        alert("City doesn't exists");
    }
}
function updateRow(prevCity, newCity){
    let tableBody = document.getElementById('cityTable').getElementsByTagName('tbody')[0];
    let rows = tableBody.getElementsByTagName('tr');
    for(let i=0; i<rows.length; i++){
        let rowText = rows[i].cells[0].innerHTML;
        if(rowText == prevCity){
            rows[i].cells[0].innerHTML = newCity;
        }
    }
}
function upCity(prevCity, newCity){
    myData.cities.forEach(element => {
        if(element["name"] == prevCity){
            element["name"] = newCity;
            console.log(myData.cities);
        }
    });
}
export {displayUpdateInp,checkUpInput,updateOption,updateRow, upCity};