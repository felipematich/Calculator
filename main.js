function numeros (valor){
    document.getElementById("display").value += valor;
}

function operacion (){
    let operacion = document.getElementById("display").value;
    if (operacion == 0){
        document.getElementById("display").value = "Sin operacion";
    }
    else{
        document.getElementById("display").value = eval(operacion);
    }
}

function resetear (){
    document.getElementById("display").value = " ";

}