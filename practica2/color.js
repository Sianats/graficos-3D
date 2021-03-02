//esto sirve para declarar un color (en este caso) y luego ya si eso lo llamas en un archivo distinto para cuando lo tengas que usar, realmente es lo mismo que practica 2 pero por separado

function iniciar() {

    var cuadrado= document.getElementById("mycanvas");
 
    var gl = cuadrado.getContext ("webgl");

    if (!gl) {
            console.log ("algo esta fallando");
            return;
    }
 
    
    gl.clearColor(1.0, 0.3, 0.5, 1.0);

    gl.clear(gl.COLOR_BUFFER_BIT);
}