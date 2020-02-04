import { myData } from "../JSON/obj.js";
var data = Object.assign({},myData)
const cityObj = data.cities;
// Display Department Dropdown + table + Datatable
function displayDepDrop(){
    let depEmpArr = [];
    let depDropDiv = document.getElementById('depDropdown');
    depDropDiv.style.display = "block";
    let selectedCity = document.getElementById('citySelect').value;
    let selectedHouse = document.getElementById('houseSelect').value;
    let depOption = document.getElementById('depSelect');
    cityObj.forEach( cityOb => {
      if(selectedCity == cityOb.name){
        let softwareHouses = cityOb.softwareHouses;
        softwareHouses.forEach(houseObj =>{
          if(selectedHouse == houseObj.name){
            const depTableBody = document.getElementById('depTable').getElementsByTagName('tbody')[0];
            let departments = houseObj.departments;
            departments.forEach(department =>{
              let option = document.createElement("option");
              option.value = department.name;
              option.text = department.name;
              option.setAttribute("class","depOption")
              depOption.appendChild(option);
              var row = document.createElement('tr');
              var name = document.createElement('td');
              name.innerHTML = department.name;
              row.appendChild(name);
              depTableBody.appendChild(row);
            })
            departments.forEach(department =>{
              let employees = department.employees;
              employees.forEach(employee =>{
                depEmpArr.push(employee);
              })
            })
          }
        })
      }
    })
    return depEmpArr;
  }
  export {displayDepDrop};