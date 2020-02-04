import { myData } from "../JSON/obj.js";
var data = Object.assign({},myData)
const cityObj = data.cities;
// Display SoftwareHouses Dropdown
function displayHouseDrp(){
    let houseDiv = document.getElementById('houseDropdown');
    houseDiv.style.display = "block";
    let selectedCity = document.getElementById('citySelect').value;
    cityObj.forEach(element =>{
      if(selectedCity == element.name) {
        const houseTableBody = document.getElementById('houseTable').getElementsByTagName('tbody')[0];
        let houseObj =element.softwareHouses;
        let houseDrop = document.getElementById('houseSelect');
        houseObj.forEach(element =>{
          let option = document.createElement("option");
          option.value = element.name;
          option.text = element.name;
          option.setAttribute("class","houseOption")
          houseDrop.appendChild(option);
          var row = document.createElement('tr');
          var name = document.createElement('td');
          name.innerHTML = element.name;
          var location = document.createElement('td');
          location.innerHTML = element.location;
          var type = document.createElement('td');
          type.innerHTML = element.type;
          row.appendChild(name);
          row.appendChild(location);
          row.appendChild(type);
          houseTableBody.appendChild(row);
        })
      }
    })
  }
  export {displayHouseDrp};