

function fondo () {

    var cuadrado = document.getElementById("elfondo");
    var gl= cuadrado.getContext ("webgl");
    gl.clearColor (0.0, 0.0, 0.0, 1.0);

    if (!gl){
        console.log ("Algo esta fallando, intentelo de nuevo mas tarde");
        return;
    }

    
    gl.clear(gl.COLOR_BUFFER_BIT);
}
