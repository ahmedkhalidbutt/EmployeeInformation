import { myData } from "../../JSON/obj.js";
function displayUpEmpInp(){
    let prevNamelbl = document.getElementById('prevempNamelbl');
    prevNamelbl.style.display = "block";
    let prevNameInp = document.getElementById('prevempNameInp');
    prevNameInp.style.display = "block";
    let heading = document.getElementById('heading');
    heading.style.display = "block";
}
function checkUpEmpInput(){
    let prevempName = document.getElementById('prevempNameInp').value;
    if(prevempName != null || prevempName != undefined || prevempName != ''){
        return prevempName;
    }
}
function updateEmpRow(prevName, newName, newSalary, newCity, newMobile, newType){
    let tableBody = document.getElementById('dt').getElementsByTagName('tbody')[0];
    let rows = tableBody.getElementsByTagName('tr');
    for(let i=0; i<rows.length; i++){
        let rowText = rows[i].cells[0].innerHTML;
        if(rowText == prevName){
            rows[i].cells[0].innerHTML = newName;
            rows[i].cells[1].innerHTML = newSalary;
            rows[i].cells[2].innerHTML = newCity;
            rows[i].cells[3].innerHTML = newMobile;
            rows[i].cells[4].innerHTML = newType;
        }
    }
}
function upEmp(prevName, newName, newSalary, newCity, newMobile, newType){
    let citySelect = document.getElementById('citySelect').value;
    let houseSelect = document.getElementById('houseSelect').value;
    let depSelect = document.getElementById('depSelect').value;
    myData.cities.forEach(city =>{
        if(citySelect == city.name){
          let softwareHouses = city.softwareHouses;
          softwareHouses.forEach(house =>{
            if(houseSelect == house.name){
                let departments = house.departments;
                departments.forEach(department =>{
                    if(department.name == depSelect){
                        let employees = department.employees;
                        employees.forEach(employee =>{
                            if(employee.name == prevName){
                                employee["name"] = newName;
                                employee["salary"] = newSalary;
                                employee["city"] = newCity;
                                employee["mobileNumber"] = newMobile;
                                employee["type"] = newType;
                            }
                        })
                    }
                })
            }
          })
}
    })
}
export {displayUpEmpInp, checkUpEmpInput, updateEmpRow,upEmp};