function createPolarArea(){
    document.getElementById("returnToTypeChar").style.display="block";

    typeChart=6;
    document.getElementById("selectChar").style.display="none";
    $("#formForChar").html("<div id='formColors'></div>");

    let contents = "";

    for(let i=1 ; i<arrayColumn.length;i++) {
        if(arrayColumn[i].shows==true){
            console.log("setPlot() : ",arrayColumn[i].name,"   ",arrayColumn[i].shows);

            contents += "<div><p class='colorForm-p'>"+arrayColumn[i].name+"</p>"+
                "<input type=\"color\" id=\"color_"+i+"\">" +
                //"  Zaznaczone pole pod linią: <input type=\"checkbox\" value=\"true\" id=\"fill_"+i+"\"></div>" +
                "<div style='clear: left'></div>";
        }
    }
    document.getElementById("formColors").innerHTML=contents;

    for(let i=1 ; i<arrayColumn.length;i++) {
        if(arrayColumn[i].shows==true){
            document.getElementById("color_" + i).value = arrayColumn[i].color;
        }
    }

    let formL_1="<h5 >Wpisz tytuł wykresu: "+
        "<input type=\"text\" id=\"titleChart\" class=\"form-control\" " +
        "style=\"margin-bottom: 10px;\"\></h5><br>" +
        "<input type=\"button\" value=\"Narysuj\" class=\"btn btn-primary\" onclick=\"plotChartPolarArea()\">";
    $("#formForChar").append(formL_1);

    document.getElementById("titleChart").value=charTitle;
}
function plotChartPolarArea() {

    delteAndMakeCanvas();
    let canvas_1 = document.getElementById("mainChart");
    drawCharPolarArea(canvas_1, makeArraySumColumn(), makeName(), readColor(), readTitle());

    document.getElementById("coment_h5").style.display = "block";
    document.getElementById("coment").style.display = "block";
    document.getElementById("coment_input").style.display = "block";
}



function drawCharPolarArea(canvasPolarArea,arraySumColumn,arrayName,arrayColor,title) {

    let dataSets=[];

    dataSets[0] = {
        data: arraySumColumn,
        label: arrayName, //labels,
        backgroundColor: arrayColor
    };

//----WYKRES:---
    canvasPolarArea.style.display="block";
    new Chart(canvasPolarArea, {
        type: 'polarArea',
        data: {
            labels: arrayName ,     //w legendzie
            datasets: dataSets
        },
        options: {
            responsive:true,
            title: {
                display: true,
                text: title,
                fontSize: 20,
                fontColor: 'black'
            },
            legend: {
                position:"bottom"
            },
            animation:{
                animateScale: false,
                animateRotate: true
            }
        }
    });
}

function drawCharPolarArea_2(canvasPolarArea,arrayValue,arrayName,arrayColor,labels,title) {

    let dataSets=[];

    for(let i=0;i<arrayValue.length;i++) {
        dataSets[i] = {
            data: arrayValue[i],
            label: labels[i],
            backgroundColor: arrayColor
        };
    }


//----WYKRES:---
    canvasPolarArea.style.display="block";
    new Chart(canvasPolarArea, {
        type: 'polarArea',
        data: {
            labels: arrayName ,     //w legendzie
            datasets: dataSets
        },
        options: {
            responsive:true,
            title: {
                display: true,
                text: title,
                fontSize: 20,
                fontColor: 'black'
            },
            legend: {
                position:"bottom"
            },
            animation:{
                animateScale: false,
                animateRotate: true
            }
        }
    });
}
