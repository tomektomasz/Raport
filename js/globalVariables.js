function Column() {
    this.name = "";
    this.id = 0 ;
    this.shows = true ;
    this.down = null;
    this.up=null;
    this.color="";
    this.fill=false;
    this.sum=0;
}

let arrayColumn=[];

function ArchiveArrayRow(){
    this.arrayRow=[];
    this.isArchiveAR=false;
}
archive = new  ArchiveArrayRow()

let arrayRow=[];
function oneRow()  {
    this.shows = true ;
    this.arrayCell= [] ;
    this.sum=0;
}
let typeChart=0;
let charTitle="";
let charLogarithm=false;
//----------------------

function addPartSumColumn(n) {
    let result=0;
    for(let i=0;i<arrayRow.length;i++){
        if(arrayRow[i].shows==true) result +=arrayRow[i].arrayCell[n];
    }
    return  result;
}

function addPartSumRow(n){
    let result=0;
    for(let i=1; i<arrayColumn.length;i++){
        if(arrayColumn[i].shows==true) result += arrayRow[n].arrayCell[i];
    }
    return result;
}
//------------------
$("tt").tooltip('show');
