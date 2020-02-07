function disableBtn(){
    let toggleBtn = document.getElementById('toggleDt');
    toggleBtn.setAttribute("disabled",true);
    let citySelect = document.getElementById('citySelect');
    citySelect.style.display = "none";
    let input = document.getElementById('myInput');
    input.style.display = "block";
}
function liveSearchInp(){
    var input, filter, tableBody, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    var tableBody = document.getElementById('dt').getElementsByTagName('tbody')[0];
    var rows = tableBody.getElementsByTagName('tr');
    for (i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td");
        var j;
        var rowContainsFilter = false;
        for (j = 0; j < cells.length; j++) {
        if (cells[j]) {
            if (cells[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
            rowContainsFilter = true;
            continue;
            }
        }
        }

        if (! rowContainsFilter) {
        rows[i].style.display = "none";
        } else {
        rows[i].style.display = "";
        }
    }
}
export {disableBtn, liveSearchInp};
