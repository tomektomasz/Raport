
function openWindowPrint() {
    // document.getElementById("prr").contentWindow.document.getElementById("windowPrint");
    $("#windowPrint").modal();
}

function printOnly() {
    $("#windowPrint").modal("hide");
    let eq = document.getElementById("coment").value;
    document.getElementById("effect").innerText=eq;
    console.log("drukowanie bez tabelki");
    print();
}

function printAll() {
    $("#windowPrint").modal("hide");
    let eq = document.getElementById("coment").value;
    document.getElementById("effect").innerText=eq;

    let tabDat=document.getElementById("printData");
    tabDat.innerText="";
    let row_Name = document.createElement("tr");
    for(let item in arrayColumn){
        if(arrayColumn[item].shows == true) {
            let el_Name = document.createElement("td");
            el_Name.innerText = arrayColumn[item].name;
            el_Name.setAttribute("class", "nameCell");
            row_Name.appendChild(el_Name);
        }
    }
    tabDat.appendChild(row_Name);

    for(let item in arrayRow) {
        if(arrayRow[item].shows==true) {
            let el_Row = document.createElement("tr");
            for (let item2 in arrayRow[item].arrayCell) {
                if (arrayColumn[item2].shows == true) {
                    let el_Cell = document.createElement("td");
                    el_Cell.innerText = arrayRow[item].arrayCell[item2];
                    el_Cell.setAttribute("class", "dataCell")
                    el_Row.appendChild(el_Cell);
                }
            }
            tabDat.appendChild(el_Row);
        }
    }
    let row_Sum = document.createElement("tr");

    let el_Sum = document.createElement("td");
    el_Sum.innerText = "SUMA:";
    el_Sum.setAttribute("class", "sumRow");
    row_Sum.appendChild(el_Sum);

    for(let i=1 ; i<arrayColumn.length;i++){
        if(arrayColumn[i].shows == true) {
            el_Sum = document.createElement("td");
            el_Sum.innerText = arrayColumn[i].sum;
            el_Sum.setAttribute("class", "sumRow");
            row_Sum.appendChild(el_Sum);
        }
    }
    tabDat.appendChild(row_Sum);


    print();
    tabDat.innerText="";
}
