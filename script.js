import { myData } from "./JSON/obj.js"; //Main Object (JSON) Import
import {populateDataTable} from './Functions/PopulateDataTable.js' //Display All Employees DataTable
import {populateCityTable} from './Functions/PopulateCityTable.js'//Display City Wise Employee DataTable
import {displayHouseDrp} from './Functions/DisplayHouseDrp.js'; //Display SoftwareHouse Select + Table
import {houseDataTable} from './Functions/HouseDataTable.js'; //Display SoftwareHouse Wise Employee DataTable
import {displayDepDrop} from './Functions/DisplayDepDrop.js'; //Display Department Select + Table
import {empDataTable} from './Functions/EmpDataTable.js'; //Display Department Wise Employee DataTable
// CRUD Operation Imports
import {add, checkInput, addOption,addRow,clearInp} from './CRUD/City/AddCity.js';
import {delOption,delRow} from './CRUD/City/DelCity.js';
import {displayBtn} from './CRUD/City/DisplayCityBtn.js';

let data = Object.assign({},myData)  //Cloning main Object
let depOption = document.querySelectorAll('.depOption'); //department select options
let depDropDiv = document.getElementById('depDropdown'); //department select + table div
const depCheck = document.querySelectorAll('#depTable tbody tr'); //department table body

// initializing array for employee data
let cityObj = data.cities; //Main Object City Data
let empArr = []; //employee Array Initialization

// On Load Hide Table Div
window.onload = function() {
  document.getElementById('tableDiv').style.display = 'none';
};

// Get All Employees Data
for(let i=0; i<cityObj.length; i++){
  let  obj = cityObj[i];
  let softwareHouses = obj.softwareHouses;
  for(let j = 0;j <softwareHouses.length; j++){
    let departments = softwareHouses[j].departments;
    for (let k =0; k<departments.length; k++){
      let employees = departments[k].employees;
      employees.forEach(element => {
        empArr.push(element);
      })
    }
  }
}

// Initial datatable display call
populateDataTable(empArr,'dt');

// Initializing datatable
var dataTable = new DataTable("#dt");
function cityEmpDt(){
    var cityEmpArr = houseDataTable();
    cityEmpArr.forEach(element =>{
        let dataArr = Object.values(element)
        dataTable.rows().add(dataArr);
      })
}

// Citydropdown onChange()
function changeCitySelect(){
    displayBtn();
    const check = document.querySelector('#cityTable tbody tr') //Get City Table Rows
    const houseCheck = document.querySelectorAll('#houseTable tbody tr'); //Get SoftwareHouse Table Rows
    if(check == null || check == undefined){
      populateCityTable(); //Display City DataTable
    }
    if(houseCheck == null || check == undefined){
      displayHouseDrp(); //Display SoftwareHouse Select Options + Table
    }
    else {
      houseCheck.forEach(element =>{
        element.parentNode.removeChild(element)
      })
      let houseOption = document.querySelectorAll('.houseOption'); //Get all SoftwareHouse Select Options
      houseOption.forEach(element =>{
        element.parentNode.removeChild(element);
      })
      displayHouseDrp(); //Display SoftwareHouse Select Options + Table
    }
    
    depDropDiv.style.display = "none"; //Hide Department Select + Table Div
    
    if(depCheck == null || depCheck == undefined){
    }
    else {
      depCheck.forEach(element =>{
        element.parentNode.removeChild(element)
      })
      
      depOption.forEach(element =>{
        element.parentNode.removeChild(element);
      })
    }
    removedtRows(); //Remove Exisiting DataTable Rows
    cityEmpDt(); //Display City Wise Employees DataTable
}

//Adding City Select OnChange Attribute
const citySe = document.getElementById('citySelect');
citySe.addEventListener("change", changeCitySelect);

//Remove Exisiting DataTable Rows Function
function removedtRows(){
    var rowToRemove = dataTable.body.querySelector("tr");
    var rows = dataTable.body.querySelectorAll('tr');
    rows.forEach( x =>{
      dataTable.rows().remove(rowToRemove.dataIndex);
    })
    dataTable.page(1)
    var rows = dataTable.body.querySelectorAll('tr');
    rows.forEach( x =>{
      dataTable.rows().remove(rowToRemove.dataIndex);
    })
  }
// Display Department Wise Employee DataTable
function depEmpDt(){
  var depEmpArr = displayDepDrop();
  depEmpArr.forEach(element =>{
    let dataArr = Object.values(element)
    dataTable.rows().add(dataArr);
  })
}
  // Display Department Dropdown + SoftwareDropdown onChange()
function changeDepSelect(){
  const depCheck = document.querySelectorAll('#depTable tbody tr');
  if(depCheck == null || depCheck == undefined){
    removedtRows();
    depEmpDt();
  }
  else {
    depCheck.forEach(element =>{
      element.parentNode.removeChild(element)
    })
    let depOption = document.querySelectorAll('.depOption'); //Get Department Select Options
    depOption.forEach(element =>{
      element.parentNode.removeChild(element); //Removing existing department options
    })
    removedtRows();
    depEmpDt(); //Display Employee DataTable Function Call
  }
}

// Adding Software House Select onChange Attribute
const houseSe = document.getElementById('houseSelect');
houseSe.addEventListener("change", changeDepSelect);

//Display Department Employees DataTable
function empDt(){
  var depdtArr = empDataTable();
  depdtArr.forEach(element =>{
    let dataArr = Object.values(element)
    dataTable.rows().add(dataArr);
  })
}

// Display Department wise Employees Datatable
function displayDepEmp(){
  removedtRows();
  empDt();
}

//Add Department Select onChange Attribute
const depSe = document.getElementById('depSelect');
depSe.addEventListener("change", displayDepEmp)

function addCity(){
  add();
  let input = checkInput();
  let existingCities = [];
  cityObj.forEach(city =>{
    existingCities.push(city.name)
  })
  if(existingCities.includes(input) != true ){
    if(input.length != 0){
      addOption(input);
      addRow(input);
      alert("City Added");
      clearInp();
    }
  }
  else{
    alert("City Already Exists");
  }
}
const addCityBtn = document.getElementById('addCitybtn');
addCityBtn.addEventListener("click",addCity)

function delCity(){
  add();
  let input = checkInput();
  if(input.length != 0){
    delOption(input);
    delRow(input);
    alert("City Deleted");
    clearInp();
  }
}
const delCityBtn = document.getElementById('delCitybtn');
delCityBtn.addEventListener("click",delCity)
