import { myData } from "../JSON/obj.js";
var data = Object.assign({},myData)
//   Initial Dropdown
function citySelect(){
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
    return cityArr;
}
export {citySelect};
