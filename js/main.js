// El código va aquí -> 
//document.addEventListener("DOMContentLoaded", function() {   });
//Tomamos los inputs
let txtNombre = document.getElementById ("Name");
let txtNumber = document.getElementById("Number");
//Tomamos los botones
let btnAgregar = document.getElementById("btnAgregar");
let btnClear = document.getElementById("btnClear");

let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
///let btnClear = document.getElementById("btnClear");
// Limpiar campos
btnClear.addEventListener("click", function (event) {
    event.preventDefault();
    //Borrar todos los txt nombre y number.
    txtNombre.value="";
    txtNumber.value="";    
})

btnAgregar.addEventListener("click", function (event) {
    event.preventDefault(); 
    let lista ="Los siguientes cambos deben ser llenados correctamente: <ul>";
    alertValidacionesTexto.innerHTML="";
    if (txtNombre.value.length==0){
        txtNombre.style.border="solid thin red";
        lista += "<li> Se debe escribir un nombre válido</li>";
        alertValidaciones.style.display="block";
    } else{
        txtNombre.style.border="";
    }//if txtNombre

    if (txtNumber.value.length==0){
        txtNumber.style.border="solid thin red"; //.style.border
        lista +="<li> Se debe escribir una cantidad válida</li>";
        alertValidaciones.style.display="block"; // para que se vea la alerta
    } else{
        txtNumber.style.border="";
    }//if txtNumber
    alertValidacionesTexto.insertAdjacentHTML("beforeend", lista)
});//btnAgregar.click

txtNumber.addEventListener("blur", function (event) {
    event.preventDefault();
    txtNumber.value = txtNumber.value.tim();
    
});//txtNombre.blur
