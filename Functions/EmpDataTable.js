import { myData } from "../JSON/obj.js";
var data = Object.assign({},myData)
const cityObj = data.cities;
// Getting data of Department Employees Datatable
function empDataTable(){
    let depdtArr = [];
    let cityOp = document.getElementById('citySelect').value;
    let houseOp = document.getElementById('houseSelect').value;
    let depOp = document.getElementById('depSelect').value;
    cityObj.forEach( city =>{
      if (city.name == cityOp){
        let houses = city.softwareHouses;
        houses.forEach( house =>{
          if (house.name == houseOp){
            let deps = house.departments;
            deps.forEach(dep =>{
              if (dep.name == depOp){
                let emps = dep.employees;
                emps.forEach(emp =>{
                  depdtArr.push(emp);
                })
              }
            })
          }
        })
      }
    })
    return depdtArr;
    
  }
  export {empDataTable}