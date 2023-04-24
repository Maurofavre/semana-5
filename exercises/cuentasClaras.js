function calcular() {
    let participante1 = document.getElementById("participante1").value + " Gasto " + parseInt( document.getElementById("gasto1").value);
    let gasto1 =  parseInt( document.getElementById("gasto1").value);
    let participante2 = document.getElementById("participante2").value + " Gasto " + parseInt( document.getElementById("gasto2").value);
    let gasto2 =  parseInt( document.getElementById("gasto2").value);
    let participante3 = document.getElementById("participante3").value + " Gasto " + parseInt( document.getElementById("gasto3").value);
    let gasto3 =  parseInt( document.getElementById("gasto3").value);
    let participante4 = document.getElementById("participante4").value + " Gasto " + parseInt( document.getElementById("gasto4").value);
    let gasto4 =  parseInt( document.getElementById("gasto4").value);

    let mensajeGastos = participante1 + " " + participante2 + " " + participante3 + " " +participante4

    console.log(mensajeGastos); 

     let sumaFinal = gasto1 + gasto2 + gasto3 + gasto4 ;
 
     console.log("El gasto total fue de " + sumaFinal);
 }