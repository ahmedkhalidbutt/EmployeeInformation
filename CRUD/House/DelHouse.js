import { myData } from "../../JSON/obj.js";
function delDisplayHouse(){
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
function delHouseOption(input){
    var houseSelect = document.getElementById("houseSelect");
    let existingHouse = [];
    var i;
    for (i = 1; i < houseSelect.length; i++) {
        existingHouse.push(houseSelect.options[i].text); 
    }
    if(existingHouse.includes(input)){
        for (var i=1; i<houseSelect.length; i++) {
            if (houseSelect.options[i].value == input)
                houseSelect.remove(i);
        }
    }
    else{
        alert("House doesn't exists");
    }
}
function delHouseRow(input){
    let tableBody = document.getElementById('houseTable').getElementsByTagName('tbody')[0];
    let rows = tableBody.getElementsByTagName('tr');
    for(let i=0; i<rows.length; i++){
        let rowText = rows[i].cells[0].innerHTML;
        if(rowText == input){
            rows[i].cells[0].parentNode.parentNode.removeChild(rows[i]);
        }
    }
}
function delHouseObject(input){
    var citySelect = document.getElementById("citySelect").value;
    myData.cities.forEach(city => {
        if(city.name == citySelect){
            let houses = city.softwareHouses;
            houses.forEach(house =>{
                if(house["name"] == input){
                    delete house["name"];
                    delete house ["location"];
                    delete house ["type"];
                    delete house ["departments"];
                    console.log(myData.cities);
                }
            })
        }
    });
}
export {delDisplayHouse, delHouseOption, delHouseRow, delHouseObject};