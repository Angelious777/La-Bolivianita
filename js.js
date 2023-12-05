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




function mas_popular(){
    document.getElementById("cuadro_populares").style.display ="flex";
    document.getElementById("cuadro_ultima").style.display ="none";
    document.getElementById("cuadro_clasico").style.display ="none";

    document.getElementById("popular").style.backgroundColor ="dimgray";
    document.getElementById("ultima").style.backgroundColor ="transparent";
    document.getElementById("clasico").style.backgroundColor ="transparent";
}

function ultima_pub(){
    document.getElementById("cuadro_populares").style.display ="none";
    document.getElementById("cuadro_ultima").style.display ="flex";
    document.getElementById("cuadro_clasico").style.display ="none";

    document.getElementById("popular").style.backgroundColor ="transparent";
    document.getElementById("ultima").style.backgroundColor ="dimgray";
    document.getElementById("clasico").style.backgroundColor ="transparent";

}

function los_clasicos(){
    document.getElementById("cuadro_populares").style.display ="none";
    document.getElementById("cuadro_ultima").style.display ="none";
    document.getElementById("cuadro_clasico").style.display ="flex";

    document.getElementById("popular").style.backgroundColor ="transparent";
    document.getElementById("ultima").style.backgroundColor ="transparent";
    document.getElementById("clasico").style.backgroundColor ="dimgray";

}