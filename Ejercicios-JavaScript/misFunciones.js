/**
 * Conversion de unidades, de metros, yardas, pies y pulgadas.
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs de metros, yardas, pie o pulgadas.
 * @param {number} valor - El valor de los inputs de metros, yardas pies o pulgadas.
 * @return
 */

function cambiarUnidades(id, valor){
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