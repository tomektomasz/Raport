function readForm(){
    switch (typeChart) {
        case 1:
            createChartLine();
            break;
        case 2:
            createChartBar();
            break;
        case 3:
            createChartBarVer();
            break;
        case 4:
            createChartDoughnut();
            break;
        case 5:
            createChartPie();
            break;
        case 6:
            createPolarArea()
            break;
    }
}
// ----- INNE FUNKCJE DO RYSOWANIA -----

//tworzenie tablicy[][] wartości dla wykresu (lustrzane przepisanie wartosci arrayRow)
function makeArrayValue(){
    let aV=[];
    let k=0;
    for(let i=1 ; i<arrayColumn.length;i++){
        if(arrayColumn[i].shows==true){
            aV[k]=[];
            for(let j=0 ; j<arrayRow.length; j++){
                if(arrayRow[j].shows==true) {
                    aV[k][j] = arrayRow[j].arrayCell[i];
                }
            }
            k=k+1;
        }
    }
    return aV;
}
//tworzenie innej tablicy[][] dla wykresu Doughnut
function  makeArrayValueDoughnut() {
    let aV=[];
    let k=0;
    for(let i=0;i<arrayRow.length;i++){
        aV[i]=[];
        k=0;
        for(let j=1;j<arrayColumn.length;j++) {
            if(arrayColumn[j].shows==true) {
                aV[i][k] = arrayRow[i].arrayCell[j];
                k++;
            }
        }

    }
    return aV;
}

// odczytuje kolory z formularza -zwraca tablice[] i zapisuje w zmiennej globalnej
function readColor() {
    let aColor=[];
    let k=0;
    for(let i=1 ; i<arrayColumn.length;i++) {
        if(arrayColumn[i].shows==true){
            arrayColumn[i].color=document.getElementById("color_" + i).value;
            aColor[k]=arrayColumn[i].color;
            k=k+1;
        }
    }
    return aColor;
}

//odczytuje z formularza czy zaznaczyć pole pod linią -zwraca tablice[]
function readFill() {
    let aFill=[];
    let k=0;
    for(let i=1 ; i<arrayColumn.length;i++) {
        if(arrayColumn[i].shows==true){
            arrayColumn[i].fill=document.getElementById("fill_" + i).checked;
            aFill[k]=arrayColumn[i].fill;
            k=k+1;
        }
    }
    return aFill;
}
//wyciąga nazwy kolumn z globalnej arrayColumn -zwraca tablice[]
function makeName() {
    let aName=[];
    let k=0;
    for ( let i=1 ; i< arrayColumn.length; i++){
        if(arrayColumn[i].shows==true){
            aName[k]=arrayColumn[i].name;
            k=k+1;
        }
    }
    return aName;
}
//odczytuje, zwraca i zapisuje w zmiennej globalnej tytul wykresu
function readTitle() {
    charTitle=document.getElementById("titleChart").value;
    return document.getElementById("titleChart").value;

}

function readLogarithm() {
    charLogarithm=document.getElementById("logarithm").checked;
    return document.getElementById("logarithm").checked;

}
// tworzy nazwy dla osi X z pierwszej kolumny(komórki) Row'ów -zwraca tablice[]
function makeLabels() {
    let lab=[];
    for(let i=0;i<arrayRow.length;i++){
        lab[i]=arrayRow[i].arrayCell[0];
    }
    return lab;
}
//wyciągnięcie sum z arrayColumn -zwraca tablice[]
function makeArraySumColumn() {
    let tab = [];
    let k = 0;
    for (let i = 1; i < arrayColumn.length; i++) {
        if (arrayColumn[i].shows == true) {
            tab[k] = arrayColumn[i].sum;
            k++;
        }
    }
    return tab;
}
//sprawdza ile ma być pierścieni na wykresie
function readTotalAm() {
    return document.getElementById("totalAmount").value;
}
//usuwa stare canvas i wstawia czyste
function delteAndMakeCanvas() {
    document.getElementById("mainChart").remove();
    const can=document.createElement("canvas");
    can.id="mainChart";
    can.style.display="none";
    document.getElementById("mainCanvas").appendChild(can);

}
//powracanie do wyboru typu wykresu
function retTypeChar() {
    document.getElementById("selectChar").style.display="block";
    document.getElementById("returnToTypeChar").style.display="none";
    document.getElementById("formForChar").innerText="";
    document.getElementById("mainChart").style.display="none";
    document.getElementById("coment_h5").style.display="none";
    document.getElementById("coment").style.display="none";
    document.getElementById("coment_input").style.display="none";
}

