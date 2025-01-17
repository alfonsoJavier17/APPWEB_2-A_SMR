document.addEventListener("DOMContentLoaded", function(){
/*objetico crear una calculadora de descuentos*/
    const pre_usr = parseFloat (prompt("Introduce el precio original"));
    const dct = parseFloat (prompt("Inserta el procentaje de descuento"));

function descuentoPrecio(Pre_ori, dct){
    return Pre_ori*(1-dct/100);
}

});
