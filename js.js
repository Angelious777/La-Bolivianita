// function mostrar_cuadro_registros(){
//     document.getElementById("registro").style.display = "flex";
// }

// function cerrar_registro(){
//     document.getElementById("registro").style.display = "none";
// }

function mostrar_cuadro_registros(){
    var registro = document.getElementById("registro");
    if (registro.classList.contains("registro")){
        registro.classList.remove("registro");
        registro.classList.add("registro_on")
    }
    else{
        registro.classList.remove("registro_on");
        registro.classList.add("registro")
    }
}

function cerrar_registro(){
    var registro = document.getElementById("registro");
    registro.classList.remove("registro_on");
    registro.classList.add("registro")
}