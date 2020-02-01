var data = {
  "cities": [
    {
      "name": "Sialkot",
      "softwareHouses": [
        {
          "name": "Kaarigar",
          "location": "Kashmir Road",
          "type": "Web Solutions",
          "departments": [
            {
              "name": "Human Resource",
              "employees": [
                {
                  "name": "Ali ",
                  "salary": "20000",
                  "city": "Sialkot",
                  "mobileNumber": "0111111111",
                  "type": "Full Time"
                },
                {
                  "name": "Muneeb",
                  "salary": "15000",
                  "city": "Sialkot",
                  "mobileNumber": "0222222222",
                  "type": "Part Time"
                }
              ]
            },
            {
              "name": "Development",
              "employees": [
                {
                  "name": "Subtain",
                  "salary": "30000",
                  "city": "Islamabad",
                  "mobileNumber": "0333333333",
                  "type": "Full Time"
                },
                {
                  "name": "Ahmad",
                  "salary": "30000",
                  "city": "Sialkot",
                  "mobileNumber": "0444444444",
                  "type": "Full Time"
                },
                {
                  "name": "Faseeh",
                  "salary": "20000",
                  "city": "Lahore",
                  "mobileNumber": "0555555555",
                  "type": "Part Time"
                }
              ]
            }
          ]
        },
        {
          "name": "Experts Solution",
          "location": "Abbot Road",
          "type": "Mobile Solutions",
          "departments": [
            {
              "name": "Human Resource",
              "employees": [
                {
                  "name": "Hassan ",
                  "salary": "15000",
                  "city": "Sialkot",
                  "mobileNumber": "0666666666",
                  "type": "Full Time"
                }
              ]
            },
            {
              "name": "Development",
              "employees": [
                {
                  "name": "Aleem",
                  "salary": "20000",
                  "city": "Sialkot",
                  "mobileNumber": "0777777777",
                  "type": "Full Time"
                },
                {
                  "name": "Zarq",
                  "salary": "10000",
                  "city": "Wazirabad",
                  "mobileNumber": "08888888888",
                  "type": "Part Time"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Lahore",
      "softwareHouses": [
        {
          "name": "HashLogics",
          "location": "Johar Town",
          "type": "Cross Platform Solutions",
          "departments": [
            {
              "name": "Human Resource",
              "employees": [
                {
                  "name": "Hamza ",
                  "salary": "20000",
                  "city": "Lahore",
                  "mobileNumber": "1111111111",
                  "type": "Full Time"
                },
                {
                  "name": "Tayyab",
                  "salary": "15000",
                  "city": "Lahore",
                  "mobileNumber": "1222222222",
                  "type": "Part Time"
                }
              ]
            },
            {
              "name": "Development",
              "employees": [
                {
                  "name": "Zayn",
                  "salary": "35000",
                  "city": "Rawalpindi",
                  "mobileNumber": "1333333333",
                  "type": "Full Time"
                },
                {
                  "name": "Shanawar",
                  "salary": "30000",
                  "city": "Sialkot",
                  "mobileNumber": "1444444444",
                  "type": "Full Time"
                }
              ]
            }
          ]
        },
        {
          "name": "NetSol Technologies",
          "location": "Main Ghazi Road",
          "type": "Web Solutions",
          "departments": [
            {
              "name": "Human Resource",
              "employees": [
                {
                  "name": "Rizwan",
                  "salary": "40000",
                  "city": "Lahore",
                  "mobileNumber": "1555555555",
                  "type": "Full Time"
                },
                {
                  "name": "Ihsan",
                  "salary": "45000",
                  "city": "Lahore",
                  "mobileNumber": "1666666666",
                  "type": "Full Time"
                }
              ]
            },
            {
              "name": "Development",
              "employees": [
                {
                  "name": "Saad",
                  "salary": "50000",
                  "city": "Lahore",
                  "mobileNumber": "1777777777",
                  "type": "Full Time"
                },
                {
                  "name": "Danish",
                  "salary": "40000",
                  "city": "Islamabad",
                  "mobileNumber": "18888888888",
                  "type": "Full Time"
                },
                {
                  "name": "Ajmal",
                  "salary": "35000",
                  "city": "Sialkot",
                  "mobileNumber": "1999999999",
                  "type": "Full Time"
                },
                {
                  "name": "Qasim",
                  "salary": "20000",
                  "city": "Lahore",
                  "mobileNumber": "1000000000",
                  "type": "Part Time"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
window.onload = function() {
    document.getElementById('tableDiv').style.display = 'none';
  };
// Initial Dropdown
var cityArr = [];
data.cities.forEach(element => {
  cityArr.push(element.name);
});
var citiesDrop = document.getElementById("citySelect");
cityArr.forEach(element => {
  let option = document.createElement("option");
  option.value = element;
  option.text = element;
  citiesDrop.appendChild(option);
});

// Adding Cities to City Table
function populateCityTable(){
    var tableDiv = document.getElementById('tableDiv');
    tableDiv.style.display = "block";
    var cityTable = document.getElementById('cityTable');
    var tableBody = document.createElement('tbody');
    cityArr.forEach(element =>{
        let row = document.createElement('tr');
        let name = document.createElement('td');
        name.innerHTML = element;
        row.appendChild(name)
        tableBody.appendChild(row)
        cityTable.appendChild(tableBody)
    })
}
// Citydropdown onChange()
function changeCitySelect(){
    const check = document.querySelector('#cityTable tbody tr')
    const houseCheck = document.querySelectorAll('#houseTable tbody tr');
    if(check == null || check == undefined){
      populateCityTable();
    }
    if(houseCheck == null || check == undefined){
      displayHouseDrp();
    }
    else {
      houseCheck.forEach(element =>{
        element.parentNode.removeChild(element)
      })
      let houseOption = document.querySelectorAll('.houseOption');
      houseOption.forEach(element =>{
        element.parentNode.removeChild(element);
      })
      displayHouseDrp();
    }
    let depDropDiv = document.getElementById('depDropdown');
    depDropDiv.style.display = "none";
    const depCheck = document.querySelectorAll('#depTable tbody tr');
    if(depCheck == null || depCheck == undefined){
    }
    else {
      depCheck.forEach(element =>{
        element.parentNode.removeChild(element)
      })
      let depOption = document.querySelectorAll('.depOption');
      depOption.forEach(element =>{
        element.parentNode.removeChild(element);
      })
    }
    removedtRows();
    houseDataTable();
}
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
// initializing array for employee data
const cityObj = data.cities;
let empArr = [];
// Get All Employees Data
for(i=0; i<cityObj.length; i++){
  let  obj = cityObj[i];
  let softwareHouses = obj.softwareHouses;
  for(j = 0;j <softwareHouses.length; j++){
    let departments = softwareHouses[j].departments;
    for (k =0; k<departments.length; k++){
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

// Display All Employees Data Table
function populateDataTable(arr,id){
  let employees = arr;
  const dtBody = document.getElementById(id).getElementsByTagName('tbody')[0];
  employees.forEach(element =>{
    var row = document.createElement('tr');
    var name = document.createElement('td');
    name.innerHTML = element.name;
    var salary = document.createElement('td');
    salary.innerHTML = element.salary;
    var city = document.createElement('td');
    city.innerHTML = element.city;
    var mobileNumber = document.createElement('td');
    mobileNumber.innerHTML = element.mobileNumber;
    var type = document.createElement('td');
    type.innerHTML = element.type;
    row.appendChild(name);
    row.appendChild(salary);
    row.appendChild(city);
    row.appendChild(mobileNumber);
    row.appendChild(type);
    dtBody.appendChild(row);
  })
}
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
// Get House datatable data
function houseDataTable(){
  let cityEmpArr = [];
  let selectedCity = document.getElementById('citySelect').value;
  cityObj.forEach( element =>{
    if(selectedCity == element.name){
      let houseObj = element.softwareHouses;
      houseObj.forEach( house =>{
        let departments = house.departments;
        departments.forEach( dep =>{
          employeeObj = dep.employees;
          employeeObj.forEach( emp =>{
            cityEmpArr.push(emp);
          })
        })
      })
    }
  })
  
  cityEmpArr.forEach(element =>{
    let dataArr = Object.values(element)
    dataTable.rows().add(dataArr);
  })
  console.log(cityEmpArr);
}

// Display Department Dropdown + SoftwareDropdown onChange()
function changeDepSelect(){
  const depCheck = document.querySelectorAll('#depTable tbody tr');
  if(depCheck == null || depCheck == undefined){
    removedtRows();
    displayDepDrop();
  }
  else {
    depCheck.forEach(element =>{
      element.parentNode.removeChild(element)
    })
    let depOption = document.querySelectorAll('.depOption');
    depOption.forEach(element =>{
      element.parentNode.removeChild(element);
    })
    removedtRows();
    displayDepDrop();
  }
}
// Display Department Dropdown + table + Datatable
function displayDepDrop(){
  let depEmpArr = [];
  let depDropDiv = document.getElementById('depDropdown');
  depDropDiv.style.display = "block";
  let selectedCity = document.getElementById('citySelect').value;
  console.log(selectedCity);
  let selectedHouse = document.getElementById('houseSelect').value;
  console.log(selectedHouse);
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
  depEmpArr.forEach(element =>{
    let dataArr = Object.values(element)
    dataTable.rows().add(dataArr);
  })
}
// Display Department wise Employees Datatable
function displayDepEmp(){
  removedtRows();
  empDataTable();
}
// Getting data of Department Employees Datatable
function empDataTable(){
  depdtArr = [];
  let cityOp = document.getElementById('citySelect').value;
  let houseOp = document.getElementById('houseSelect').value;
  let depOp = document.getElementById('depSelect').value;
  cityObj.forEach( city =>{
    if (city.name == cityOp){
      houses = city.softwareHouses;
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
  depdtArr.forEach(element =>{
    let dataArr = Object.values(element)
    dataTable.rows().add(dataArr);
  })
}