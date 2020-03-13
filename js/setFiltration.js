function followFilter() {
    cancelFilter();
    for(let i=1 ; i<arrayColumn.length;i++){
        if(arrayColumn[i].shows==true) {
            arrayColumn[i].down = parseFloat(document.getElementById("down_" + i).value);
            arrayColumn[i].up = parseFloat(document.getElementById("up_" + i).value);
        }
    }

    console.log(arrayColumn);
    for(let i=1 ; i<arrayColumn.length;i++){
        if((!isNaN(arrayColumn[i].down))&&(arrayColumn[i].down!=null)) {
            for(let j=0 ; j<arrayRow.length;j++){
                if (arrayRow[j].arrayCell[i] < arrayColumn[i].down) arrayRow[j].shows = false;
            }
        }
    }
    for(let i=1 ; i<arrayColumn.length; i++){
        if((!isNaN(arrayColumn[i].up))&&(arrayColumn[i].up!=null)) {
            for(let j=0 ; j<arrayRow.length; j++){
                if (arrayRow[j].arrayCell[i] > arrayColumn[i].up) arrayRow[j].shows = false;
            }
        }
    }

    console.log("filtrowanie:  ", arrayRow);
    showData();
}
function cancelFilter() {
    for(let i=0 ; i<arrayRow.length;i++){
        arrayRow[i].shows = true;
    }

}


