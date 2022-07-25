/**
 * Conversion de unidades, de metros, yardas, pies y pulgadas.
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs de metros, yardas, pie o pulgadas.
 * @param {number} valor - El valor de los inputs de metros, yardas pies o pulgadas.
 * @return
 */

function cambiarUnidades(id, valor){
    if(valor.includes(",")){
        valor=valor.replace(",",".");
    }

    if(isNaN(valor)){
        alert("Se ingreso un valor invalido");
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_pulgada.value ="";
        document.lasUnidaes.unid_pie.value = "";
        document.lasUnidaes.unid_yarda.value = "";
    }else if(id=="metro"){
        document.lasUnidades.unid_pulgada.value = valor *39.3701;
        document.lasUnidaes.unid_pie.value = valor * 3.28084;
        document.lasUnidaes.unid_yarda.value = valor * 1.09361;
    }else if (unidad == "pulgada"){
    document.lasUnidades.metro.value = valor * 0.0254;
    document.lasUnidades.pie.value = valor * 0.08333;
    document.lasUnidades.yarda.value = valor * 0.027778;
    }else if (unidad == "pie"){
    document.lasUnidades.metro.value = valor * 0.3048;
    document.lasUnidades.pulgada.value = valor * 12;
    document.lasUnidades.yarda.value = valor * 0.333333;
    }else if (unidad == "yarda"){
    document.lasUnidades.metro.value = valor * 0.9144;
    document.lasUnidades.pulgada.value = valor * 36;
    document.lasUnidades.pie.value = valor * 3;
    }
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
function calcularResta(){
    var num1, num2;

    num1=Number(document.getElementByName("res_num1")[0].value);
    num2=document.getElementByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].innerHTML=num1 + Number(num2);
}

function calcularMul(){
    var num1, num2;

    num1=Number(document.getElementByName("mul_num1")[0].value);
    num2=document.getElementByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].innerHTML=num1 + Number(num2);
}

function calcularDiv(){
    var num1, num2;

    num1=Number(document.getElementByName("div_num1")[0].value);
    num2=document.getElementByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].innerHTML=num1 + Number(num2);
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

var bandera;
function dibujar(event){
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");
    
    var posX= event.clientX;
    var posY = event.clientY;

    console.log(posX, posY);

    canvas.onmousedown = funcion(){ bandera=true};
    canvas.onmouseup = funtion(){bandear=false};
    
    if(bandera){
        ctx.fillRect(posX,posY, 5, 5);
        ctx.fill;
    }
 
    
    
}

function limpiarCanvas(){

    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;


}

function dibujarCuadriculado(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var alturaMax = canvas.height;
    var anchoMax = canvas.width;

    //dibujar lineas horizontales
    ctx.beginPath();
    for(var i=0; i<alturaMax;){
        ctx.moveTo(0,i);
        ctx.lineTo(anchoMax,i);
        ctx.strokeStyle = "#3e67d9";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();

    //dibujar lineas verticales
    ctx.beginPath();
    for(var i=0; i<anchoMaxx;){
        ctx.moveTo(i,0);
        ctx.lineTo(i,alturaMax);
        ctx.strokeStyle = "#3e67d9";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();

    //Eje X
    ctx.beginPath();
    ctx.moveTo(0,alturaMax/2);
    ctx.lineTo(anchoMax,alturaMax/2);
    ctx.strokeStyle = "#d91c00";
    ctx.stroke();
    i=i+20;
    ctx.closePath();

    //Eje Y
    ctx.beginPath();
    ctx.moveTo(anchoMax/2,0);
    ctx.lineTo(anchoMax/2,alturaMax);
    ctx.strokeStyle = "#d91c00";
    ctx.stroke();
    i=i+20;
    ctx.closePath();



}


function dibujarImagen(posX, posY){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    canvas.widht = canvas.widht;

    var img = new Image();
    img.src= "images/auto.png";


    img.onload = function (){
        ctx.drawImage(img,posX,posY);
    }


}

x=0;
dx=2;
function animarAuto(){

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    canvas.widht = canvas.widht;

    var img = new Image();
    img.src= "images/auto.png";

    img.onload = function (){
        ctx.drawImage(img,x,100);
    }

    if(x>canvas.widht){
        x=0;
    }
    x+=dx;


}