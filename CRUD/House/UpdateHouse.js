import { myData } from "../../JSON/obj.js";
function displayUpdateHouse(){
    let houseNamelbl = document.getElementById('houseNamelbl');
    let houseNameInp = document.getElementById('houseNameInp');
    houseNamelbl.style.display = "block";
    houseNameInp.style.display = "block";
    let houseLocationlbl = document.getElementById('houseLocationlbl');
    let houseLocInp = document.getElementById('houseLocInp');
    houseLocationlbl.style.display = "none";
    houseLocInp.style.display = "none";
    let houseTypelbl = document.getElementById('houseTypelbl');
    let houseTypeInp = document.getElementById('houseTypeInp');
    houseTypelbl.style.display = "none";
    houseTypeInp.style.display = "none";
    let newhouseNamelbl = document.getElementById('newhouseNamelbl');
    let newhouseNameInp = document.getElementById('newhouseNameInp');
    newhouseNamelbl.style.display = "block";
    newhouseNameInp.style.display = "block";
    let newhouseLocationlbl = document.getElementById('newhouseLocationlbl');
    let newhouseLocInp = document.getElementById('newhouseLocInp');
    newhouseLocationlbl.style.display = "block";
    newhouseLocInp.style.display = "block";
    let newhouseTypelbl = document.getElementById('newhouseTypelbl');
    let newhouseTypeInp = document.getElementById('newhouseTypeInp');
    newhouseTypelbl.style.display = "block";
    newhouseTypeInp.style.display = "block";
    }
function checknewNameInput(){
    let houseNameInp = document.getElementById('newhouseNameInp').value;
    if(houseNameInp != null || houseNameInp != undefined || houseNameInp != ''){
        return houseNameInp;
    }
}
function checknewLocationInput(){
    let houseLocInp = document.getElementById('newhouseLocInp').value;
    if(houseLocInp != null || houseLocInp != undefined || houseLocInp != ''){
        return houseLocInp;
    }
}
function checknewTypeInput(){
    let houseTypeInp = document.getElementById('newhouseTypeInp').value;
    if(houseTypeInp != null || houseTypeInp != undefined || houseTypeInp != ''){
        return houseTypeInp;
    }
}
function clearnewHouseInp(){
    let houseNameInp = document.getElementById('newhouseNameInp');
    houseNameInp.value = '';
    let houseLocInp = document.getElementById('newhouseLocInp');
    houseLocInp.value = '';
    let houseTypeInp = document.getElementById('newhouseTypeInp');
    houseTypeInp.value = '';
    }
function updateHouseOption(prevHouse, newHouse){
    var houseSelect = document.getElementById("houseSelect");
    let existingHouses = [];
    var i;
    for (i = 1; i < houseSelect.length; i++) {
        existingHouses.push(houseSelect.options[i].text); 
    }
    if(existingHouses.includes(prevHouse)){
        for (var i=1; i<houseSelect.length; i++) {
            if (houseSelect.options[i].value == prevHouse)
                houseSelect.options[i].text = newHouse;
                houseSelect.options[i].value = newHouse;
        }
    }
    else{
        alert("Software House doesn't exists");
    }
}
function updateHouseRow(prevName, newName, newLocation, newType){
    let tableBody = document.getElementById('houseTable').getElementsByTagName('tbody')[0];
    let rows = tableBody.getElementsByTagName('tr');
    for(let i=0; i<rows.length; i++){
        let rowText = rows[i].cells[0].innerHTML;
        if(rowText == prevName){
            rows[i].cells[0].innerHTML = newName;
            rows[i].cells[1].innerHTML = newLocation;
            rows[i].cells[2].innerHTML = newType;
        }
    }
}
function updateHouseObject(prevName, newName, newLocation, newType){
    var citySelect = document.getElementById("citySelect").value;
    myData.cities.forEach(city => {
        if(city.name == citySelect){
            let houses = city.softwareHouses;
            houses.forEach(house =>{
                if(house["name"] == prevName){
                    house["name"] = newName;
                    house ["location"] = newLocation;
                    house ["type"] = newType;
                    console.log(myData.cities);
                }
            })
        }
    });
}
export {displayUpdateHouse, updateHouseOption, checknewNameInput, checknewLocationInput, checknewTypeInput, clearnewHouseInp, updateHouseRow, updateHouseObject};
