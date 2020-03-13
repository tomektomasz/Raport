function setColumnAndFilter(){
    const  column_List = document.getElementById("columnAndFilter");
    column_List.innerText="";
    let contents="";
    document.getElementById("columnAndFilter").style.display="block";
    for(let i=1 ; i<arrayColumn.length;i++) {
        let el = document.createElement("input");
        el.id="nameCol_"+i;
        el.type="checkbox";
        el.value=arrayColumn[i].name;
        el.checked=true;
        el.onclick=function () {    // zaznaczanie checkbox przy wyznaczaniu kolumn
            if(el.checked == false) {
                lbl.style.color="gray";
                checkFilter(i,false);
                arrayColumn[i].shows=false;
                console.log("kolumny: ",arrayColumn);
            }
            else {
                lbl.style.color="black";
                checkFilter(i,true);
                arrayColumn[i].shows=true;
                console.log("kolumny: ",arrayColumn);
            }

            setSortValue();
            showData();
            readForm();
        };

        let lbl = document.createElement("label");
//        lbl.style.display="inline-block";
        lbl.setAttribute("for",el.id);
        lbl.appendChild(document.createTextNode(arrayColumn[i].name));

        let br = document.createElement("br");

        column_List.appendChild(el);
        column_List.appendChild(lbl);

        contents="";
        contents += "<p id=\"filtr_p_"+i+"\" class=\"setColFil\">"+
            "    od wartości <input type=\"text\" size=\"10\" id=\"down_"+i+"\">" +
            "    do wartości <input type=\"text\" size=\"10\" id=\"up_"+i+"\" ></p>";

        column_List.insertAdjacentHTML('beforeend',contents);
        //-----------------------------------
        column_List.appendChild(br);
    }
    document.getElementById("colAndFil").style.display="block";

}
function checkFilter(i,box) {
    let elem_p=document.getElementById("filtr_p_"+i);
    let elem_down=document.getElementById("down_"+i);
    let elem_up=document.getElementById("up_"+i);
    console.log("BOX: "+box);
    if(box==true) {
        elem_p.style.color = "red";
        elem_down.removeAttribute("disabled");
        elem_up.removeAttribute("disabled");

    }
    else{
        elem_p.style.color = "gray";
        elem_down.setAttribute("disabled",true);
        elem_up.setAttribute("disabled",true);
    }

}
