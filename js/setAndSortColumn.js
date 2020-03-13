const sort_List=document.getElementById("sortList");
function setSortValue(){
   // const sort_List=document.getElementById("sortList");
    sort_List.innerText="";
    document.getElementById("sortList_h6").style.display="block";
    sort_List.style.display="block";

    let el_0 = document.createElement("option");
    el_0.value=0;
    el_0.innerText="Bez sortowania";
    sort_List.appendChild(el_0);

    for(let i=1 ; i<arrayColumn.length;i++){
        if(arrayColumn[i].shows==true){
            let el = document.createElement("option");
            el.value=arrayColumn[i].id;
            el.innerText=arrayColumn[i].name;

            sort_List.appendChild(el);

        }

    }
    //sort_List.selectedIndex=selectColumn;
}

//zdarzenie: 'click' wywołuje funkcję sortValue()
sort_List.addEventListener('change',(event)=>{sortValue(event.target.value)});

//sortowanie danych lub czytanie archiwum
function sortValue(sel) {
    if(sel=="0"){
        if(archive.isArchiveAR) {
            arrayRow=archive.arrayRow.slice();
        }
    }
    else {
        let idCol = parseInt(sel);
        //selectColumn=idCol;
        if (!archive.isArchiveAR) {
            console.log("zapisywnie archiwum");
            archive.arrayRow = arrayRow.slice();
            archive.isArchiveAR = true;
        }
        arrayRow.sort(function (a, b) {
            return a.arrayCell[idCol] - b.arrayCell[idCol];
        });
    }
    showData();
}


