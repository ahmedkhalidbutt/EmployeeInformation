import { myData } from "../../JSON/obj.js";
function displayDelInp(){
    let empSalarylbl = document.getElementById('empSalarylbl');
    empSalarylbl.style.display = "none";
    let empCitylbl = document.getElementById('empCitylbl');
    empCitylbl.style.display = "none";
    let empMobilelbl = document.getElementById('empMobilelbl');
    empMobilelbl.style.display = "none";
    let empTypelbl = document.getElementById('empTypelbl');
    empTypelbl.style.display = "none";
    let empSalaryInp = document.getElementById('empSalaryInp');
    empSalaryInp.style.display = "none";
    let empCityInp = document.getElementById('empCityInp');
    empCityInp.style.display = "none";
    let empMobileInp = document.getElementById('empMobileInp');
    empMobileInp.style.display = "none";
    let empTypeInp = document.getElementById('empTypeInp');
    empTypeInp.style.display = "none";
}
function delEmpRow(input){
    let tableBody = document.getElementById('dt').getElementsByTagName('tbody')[0];
    let rows = tableBody.getElementsByTagName('tr');
    for(let i=0; i<rows.length; i++){
        let rowText = rows[i].cells[0].innerHTML;
        if(rowText == input){
            rows[i].cells[0].parentNode.parentNode.removeChild(rows[i]);
        }
    }
}
function delfromJSON(input){
    let citySelect = document.getElementById('citySelect').value;
    let houseSelect = document.getElementById('houseSelect').value;
    let depSelect = document.getElementById('depSelect').value;
    myData.cities.forEach(city =>{
        if(city.name == citySelect){
            let softwareHouses = city.softwareHouses;
            softwareHouses.forEach(house =>{
                if(house.name == houseSelect){
                    let departments = house.departments;
                    departments.forEach(department => {
                        if(department.name == depSelect){
                            let employees = department.employees;
                            employees.forEach(employee =>{
                                if(employee.name == input){
                                    delete employee["name"];
                                    delete employee["salary"];
                                    delete employee["city"];
                                    delete employee["type"];
                                    delete employee["mobileNumber"];
                                }
                            })
                        }
                    })
                }
            })
        }
    })
}
export {displayDelInp, delEmpRow, delfromJSON};