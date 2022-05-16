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