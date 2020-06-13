// zainicjowanie strefy upuszczania (tu i na końcu pliku)
function init() {
    let dropZone = document.getElementById('dropZone');
    dropZone.addEventListener("dragover",handleDragOver,false);
    dropZone.addEventListener("drop", handleFileDrop, false);
}

//obsługa plików przeciąganych nad strefą (wyłączenie strefy)
function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
}

//obsługa plików upuszczonych na strefę
function handleFileDrop(evt){
    evt.stopPropagation();
    evt.preventDefault();

    readFile(evt.dataTransfer);     //wczytanie upuszczonego pliku w zdarzeniu evt.dataTransfer
}

//--------------FUNKCJE-----------------------------------------

// Wczytanie pliku do obiektu-tabeli
function readFile(uploader) {
    let reader = new FileReader(uploader);
    reader.readAsText(uploader.files[0], 'UTF-8');

    reader.onprogress = function() {
        console.log('Postęp wczytywania');
        console.log(uploader.files);

    };

    reader.onload = function() {
        let tekst=reader.result;
        // document.getElementById('editor').innerHTML = tekst;

        //var effect=transform2(tekst);    //przekształcenie tekstu na obiekt-tabele
        //console.log( "obiekt: ", effect);
        retTypeChar();
        transform(tekst);
        console.log("kolumny: ",arrayColumn,"\n"," wartości: ",arrayRow);
        setColumnAndFilter();
        setSortValue();
        showData();
        //setFilter();      UWAGA
        document.getElementById("selectChar").style.display="block";

    };

    reader.onerror = function() {
        alert('Błąd wczytywania pliku!');
    };
}

//przekształcanie tekstu na obiekt -  wariant 1
//przekształca na dwa obiekty: zbiór tytułów kolumn (= arrayColumn[]) i zbiór wartości tabeli w wierszach (= arrayRow[])
function transform(tx){
    let fullArray=tx.split("\n");
    arrayRow=[];
    arrayColumn=[];
    makeArrayColumn(fullArray[0].split(","));
    makeArrayRow(fullArray);

}

//zamiana nieznanych liczb na 0 - w transform()
function autNan(a) {
    if(isNaN(a)) {return 0 ;}
    else {return a ;}
}

// stwarzanie wiersza kolumn - zmiennej globalnej
function makeArrayColumn(aStrName) {

    for (let item in aStrName) {

        arrayColumn[item] = new Column();
        if (aStrName[item].trim() != "") {
            arrayColumn[item].name = aStrName[item];
            arrayColumn[item].id = parseInt(item);
        } else {
            if(item==0) arrayColumn[item].name = "";
            else arrayColumn[item].name = "Seria-" + item;
        }
    }

}

// stwarzanie tabeli wierszy  - zmiennej globalnej, i uzupełnianie arrayColumn
function makeArrayRow(fArray) {
    let arrayStrValue = [];
    let n = 0;
    for (let i = 1; i < fArray.length; i++) {
        arrayStrValue.length = 0;
        arrayStrValue = fArray[i].split(",");
        if (!(arrayStrValue.length < 2 && arrayStrValue[0].trim() === "")) {
            arrayRow[n] = new oneRow();
            for (let j = 0; j < arrayStrValue.length; j++) {

                if (j == 0) {
                    if(arrayStrValue[j]==""){
                        arrayRow[n].arrayCell[j] = "nic";
                    }
                    else{
                        arrayRow[n].arrayCell[j] = arrayStrValue[j];
                    }
                    arrayColumn[j].typeText = true;
                }
                else {
                    arrayRow[n].arrayCell[j] = autNan(parseFloat(arrayStrValue[j]));
                }
            }
            n++;
        }
    }

    for (let i=1; i<arrayColumn.length;i++){
        arrayColumn[i].sum=addSumColumn(i);
    }
    for (let i=0; i<arrayRow.length;i++) {
        arrayRow[i].sum=addSumRow(i);
    }

}
// suma w kolumnie
function addSumColumn(n) {
    let result=0;
    for(let i=0; i<arrayRow.length;i++){
        result+=arrayRow[i].arrayCell[n];
    }
    return result;
}
//suma w wierszu bez pierwszej kolumny
function addSumRow(n) {
    let result=0;
    for(let i=1; i<arrayColumn.length;i++) {
        result += arrayRow[n].arrayCell[i];
    }
    return result;
}
///////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
window.addEventListener("load", init,false);    //zainicjowanie nasłuchu w oknie
//////////////////////////\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


