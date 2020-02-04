function delOption(input){
    var citySelect = document.getElementById("citySelect");
    let existingCities = [];
    var i;
    for (i = 1; i < citySelect.length; i++) {
        existingCities.push(citySelect.options[i].text); 
    }
    if(existingCities.includes(input)){
        for (var i=1; i<citySelect.length; i++) {
            if (citySelect.options[i].value == input)
                citySelect.remove(i);
        }
    }
    else{
        alert("City doesn't exists");
    }
}
// function delRow(input){

// }
export {delOption, delRow};