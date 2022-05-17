/**
 * Conversion de unidades, de metros, yardas, pies y pulgadas.
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs de metros, yardas, pie o pulgadas.
 * @param {number} valor - El valor de los inputs de metros, yardas pies o pulgadas.
 * @return
 */

function cambiarUnidades(id, valor){
    var metro, pulgada, pie, yarda;

    if(valor.includes(",")){
        valor=valor.replace(",",".");
    }

    if(isNaN(valor)){
        alert("Se ingreso un valor invalido");
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_pulgada.value ="";
        document.lasUnidaes.unid_pie.value = "";
        document.lasUnidaes.unid_yarda.value = ";
    }else if(id=="metro"){
        document.lasUnidades.unid_pulgada.value = 39.3701*valor;
        document.lasUnidaes.unid_pie.value = 3.28084*valor;
        document.lasUnidaes.unid_yarda.value = 1.09361*valor
    }
    document.lasUnidades.unid_metro.value = Math.round(metro*100)/100;
}
function convertirGR(id) {

    var grad, rad;
    if(id=="grados"){
        grad = document.getElementById("grados").value;
        rad = (grad*Math.PI)/180;
    }else if(id=="radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}

function mostrar_ocultar(valorMO){
    if(valorMO=="val_mostrar"){
        document.getElementById("divMO").style.display = 'block';
    }else if(valorMO=="valor_ocultar"){
        document.getElementById("divMO").style.display = 'none';
    }

}

function calcularSuma(){
    var num1, num2;

    num1=Number(document.getElementByName("sum_num1")[0].value);
    num2=document.getElementByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].innerHTML=num1 + Number(num2);
}

function cargarWeb(){

    var cant, unidad, urlComp;

    cant = document.getElementById("distancia").value;
    unidad = document.getElementByName("unidades")[0].value;
    urlComp = "segundaWeb.html#" + cant "#" + unidad;
    window.open(urlComp);

}

function cargarResultado(){
    var urlComp, can, un;

    urlComp = window.location.href.split("/")[5];

    can =urlComp.split("#")[1];
    un = urlComp.split("#")[2];


    document.getElementById("dist").value = can + "" + un;
}

function dibujarCirCuad(){

    var canvas = document.getElementById("myCanvas");
    var ctx= canvas.getContext("2d");
    var xMax =canvas.width;
    var yMax = canvas.height;
    var margen=5;
    
    ctx.fillStyle = "#333899";
    ctx.fillRect(0+margen,yMax-40-margen,40,40);

    ctx.arc(xMax/2, yMax/2, 20, 0, 2*3.14);
    ctx.stroke();
    ctx.fill();
}