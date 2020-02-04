import { myData } from "../JSON/obj.js";
var data = Object.assign({},myData)
const cityObj = data.cities;
function houseDataTable(){
    let cityEmpArr = [];
    let selectedCity = document.getElementById('citySelect').value;
    cityObj.forEach( element =>{
      if(selectedCity == element.name){
        let houseObj = element.softwareHouses;
        houseObj.forEach( house =>{
          let departments = house.departments;
          departments.forEach( dep =>{
           let employeeObj = dep.employees;
            employeeObj.forEach( emp =>{
              cityEmpArr.push(emp);
            })
          })
        })
      }
    })
    return cityEmpArr;
  }
export {houseDataTable};