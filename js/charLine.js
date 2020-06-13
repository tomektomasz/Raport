function createChartLine(){
    document.getElementById("returnToTypeChar").style.display="block";

    typeChart=1;
    document.getElementById("selectChar").style.display="none";
    $("#formForChar").html("<div id='formColors'></div>");

    let contents = "";

    for(let i=1 ; i<arrayColumn.length;i++) {
        if(arrayColumn[i].shows==true){
            console.log("setPlot() : ",arrayColumn[i].name,"   ",arrayColumn[i].shows);

            contents += "<div><p class='colorForm-p'>"+arrayColumn[i].name+"</p>"+
                "<input type=\"color\" id=\"color_"+i+"\">  Zaznaczone pole pod linią: " +
                "<input type=\"checkbox\" value=\"true\" id=\"fill_"+i+"\"></div>" +
                "<div style='clear: left'></div>";
        }
    }
    document.getElementById("formColors").innerHTML=contents;

    for(let i=1 ; i<arrayColumn.length;i++) {
        if(arrayColumn[i].shows==true){
            document.getElementById("color_" + i).value = arrayColumn[i].color;
        }
    }

    let formL_1="<hr><h5>Zaznacz czy chcesz skalę logarytmiczną" +
        "<input type=\"checkbox\" value=\"true\" id=\"logarithm\"></h5><hr>" +
        "<h5 >Wpisz tytuł wykresu"+
        "<input type=\"text\" id=\"titleChart\" class=\"form-control\" " +
        "style=\"margin-bottom: 10px;\"\></h5><br>" +
        "<input type=\"button\" value=\"Narysuj\" class=\"btn btn-primary\" onclick=\"plotChartLine()\">";
    $("#formForChar").append(formL_1);

    document.getElementById("titleChart").value=charTitle;
    document.getElementById("logarithm").checked=charLogarithm;
}

function plotChartLine() {
    delteAndMakeCanvas();
    let canvas_1 = document.getElementById("mainChart");
    drawCharLine(canvas_1, makeArrayValue(), makeName(), readColor(), readFill(), makeLabels(), readTitle(), readLogarithm());

    document.getElementById("coment_h5").style.display="block";
    document.getElementById("coment").style.display="block";
    document.getElementById("coment_input").style.display="block";

}

function drawCharLine(canvasLine,arrayValue,arrayName,arrayColor,arrayFill,labels,title,yLogarithmic) {
    let dataSets=[];
    let yLogar;
    for(let i=0 ; i<arrayValue.length;i++){
        dataSets[i] = {
            data: arrayValue[i],
            label: arrayName[i],
            borderColor: arrayColor[i],
            fill:arrayFill[i],
            backgroundColor: arrayColor[i]+"50",
            borderWidth: 2
        }
    }
    if(yLogarithmic){
        yLogar={
            xAxes: [{
                display: true
            }],
            yAxes: [{
                display:true,
                type: 'logarithmic'
            }]
        }
    }
    else{
        yLogar={
            xAxes: [{
                display: true
            }],
            yAxes: [{
                display:true,
            }]
        }
    }

//----WYKRES:---

    canvasLine.style.display="block";
    new Chart(canvasLine, {
        type: 'line',
        data: {
            labels: labels ,
            datasets: dataSets
        },
        options: {
            title: {
                display: true,
                text: title,
                fontSize: 20,
                fontColor: 'black'
            },
            legend: {
                position:"bottom"
            },

            scales: yLogar
        }
    });
}




