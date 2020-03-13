function createChartDoughnut(){
    document.getElementById("returnToTypeChar").style.display="block";

    typeChart=4;
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

    let formL_1="<h5>Czy ma być pokazana suma kolumn <input type=\"checkbox\" id=\"total\" class=''></h5>"+
        //"<input type=\"checkbox\" id=\"total\">" +
        "<h5>Ile wierszy ma być na wykresie" +
        "<select id=\"totalAmount\" class=''>\n" +
        "</select>"+
        "</h5>"+
        "<h5 >Wpisz tytuł wykresu: "+
        "<input type=\"text\" id=\"titleChart\" class=\"form-control\" " +
        "style=\"margin-bottom: 10px;\"\></h5><br>" +
        "<input type=\"button\" value=\"Narysuj\" class=\"btn btn-primary\" onclick=\"plotChartDoughnut()\">";
    $("#formForChar").append(formL_1);

    document.getElementById("titleChart").value=charTitle;

    setTotalValue();
}

function plotChartDoughnut() {

    delteAndMakeCanvas();
    let canvas_1 = document.getElementById("mainChart");
    if(document.getElementById("total").checked){
        drawCharDoughnut_2(canvas_1, makeArraySumColumn(), makeName(),readColor(), readTitle());
    }
    else {
        drawCharDoughnut(canvas_1, makeArrayValueDoughnut(), makeName(), readColor(), makeLabels(), readTitle(), readTotalAm());
    }

    document.getElementById("coment_h5").style.display="block";
    document.getElementById("coment").style.display="block";
    document.getElementById("coment_input").style.display="block";

}


function drawCharDoughnut(canvasDough,arrayValue,arrayName,arrayColor,labels,title,amount) {

    let dataSets=[];
    let n;
    if(amount>arrayValue.length) n=arrayValue.length;
    else if(amount<1) n=1;
    else n=amount;

    for(let i=0 ; i<n;i++){
        dataSets[i] = {
            data: arrayValue[i],
            label: labels[i],
            backgroundColor: arrayColor,
        };
        console.log("wartość dla "+i+" : "+arrayValue[i]);
    }
    console.log("amount: "+ n);

//----WYKRES:---
    canvasDough.style.display="block";
    new Chart(canvasDough, {
        type: 'doughnut',
        data: {
            labels: arrayName ,
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
                animateScale: true,
                animateRotate: true
            }
        }
    });
}

// dla sumy

function drawCharDoughnut_2(canvasDough,arraySumColumn,arrayName, arrayColor,title) {

    let dataSets=[];
 //   for(let i=0 ; i<arrayValue.length;i++){

        dataSets[0] = {
            data: arraySumColumn,
            label: arrayName, //labels,
            backgroundColor: arrayColor
        };
       // console.log("wartość dla "+i+" : "+arrayValue[i]);

//    }


//----WYKRES:---
    canvasDough.style.display="block";
    new Chart(canvasDough, {
        type: 'doughnut',
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
                animateScale: true,
                animateRotate: true
            }
        }
    });
}
//wstawia do <select> możliwe ilości do wyboru narysowanch pierścieni
function setTotalValue(){
    const total_Amount=document.getElementById("totalAmount");
    total_Amount.innerText="";

    let n=1;
    for(let i=0 ; i<arrayRow.length;i++){
        if(arrayRow[i].shows==true){
            let el = document.createElement("option");
            el.value=n;
            el.innerText=n;

            total_Amount.appendChild(el);
            n++;
        }

    }
}
