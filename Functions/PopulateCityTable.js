import {citySelect} from '../Functions/CitySelect.js';
var cityArr = citySelect();
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
export {populateCityTable};