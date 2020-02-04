//  Display All Employees Data Table
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
export {populateDataTable};