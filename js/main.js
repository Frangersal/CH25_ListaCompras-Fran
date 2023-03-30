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

let tabla = document.getElementById("tablaListaCompras");
//tomando la tabla buscamos una etiqueta... OHH!
let cuerpoTabla = tabla.getElementsByTagName("tbody");
let contadorProductos = document.getElementById("contadorProductos");
let productosTotal = document.getElementById("productosTotal");
let precioTotal = document.getElementById("precioTotal");
//  Variables GLOBALES
let isValid = true;
let idTimeout;
let precio = 0;
let contador = 0;
let totalEnProductos = 0;
let contadorTotal = 0 ;
///let btnClear = document.getElementById("btnClear");
// Limpiar campos
btnClear.addEventListener("click", function (event) {
    event.preventDefault();
    //Borrar todos los txt nombre y number.
    txtNombre.value="";
    txtNumber.value="";  
    cuerpoTabla[0].innerHTML="";  
    contador = 0;
    totalEnProductos = 0;
    contadorTotal = 0 ; 

    contadorProductos.innerText = "0";
    productosTotal.innerText = "0";
    precioTotal.innerText = "$ 0" ;


    localStorage.setItem("contador: ",contador);
    localStorage.setItem("totalEnProductos: ",totalEnProductos);
    localStorage.setItem("contadorTotal: ",contadorTotal.toFixed(2));

})//btnClear click

function validarCantidad() {
    if (txtNumber.value.length==0){
        return false;
    }
    if (isNaN(txtNumber.value)) {
        return false;
    }
    if (parseFloat(txtNumber.value)<=0) {
        return false;
    }
    return true;
}//validarCantidad

function getPrecio() {
    return Math.floor(Math.random()*50*100)/100;
}//getPrecio


btnAgregar.addEventListener("click", function (event) {
    event.preventDefault(); 
    isValid= true;
    clearTimeout = idTimeout;
    let lista ="Los siguientes cambos deben ser llenados correctamente: <ul>";
    alertValidacionesTexto.innerHTML="";
    alertValidaciones.style.display="none";
    if (txtNombre.value.length<=1){
        txtNombre.style.border="solid thin red";
        lista += "<li> Se debe escribir un nombre válido</li>";
        alertValidaciones.style.display="block";
        isValid=false;
    } else{
        txtNombre.style.border="";
    }//if txtNombre

    if (! validarCantidad()){
        txtNumber.style.border="solid thin red"; //.style.border
        lista +="<li> Se debe escribir una cantidad válida</li>";
        alertValidaciones.style.display="block"; // para que se vea la alerta
        isValid=false;
    } else{
        txtNumber.style.border="";
    }//if txtNumber
    lista+= "</ul>";
    alertValidacionesTexto.insertAdjacentHTML("beforeend", lista);
    //usando el metodo setTimeout haremos que desaparezca la alerta desppues de x tiempo
    idTimeout = setTimeout(function () {      
        alertValidaciones.style.display="none"; 
    },5000);
    if (isValid) {
        precio = getPrecio();
        contador ++;
        let row =  
        `<tr>
            <td>${contador}</td> 
            <td>${txtNombre.value}</td>
            <td>${txtNumber.value}</td> 
            <td>${precio}</td> 
        <tr>`;

        cuerpoTabla[0].insertAdjacentHTML("beforeend", row);

        contadorProductos.innerText = contador;
        totalEnProductos += parseFloat(txtNumber.value);

        productosTotal.innerHTML = totalEnProductos;
        contadorTotal += precio*parseFloat(txtNumber.value);

        precioTotal.innerHTML = `$ ${contadorTotal.toFixed(2)}`;

        localStorage.setItem("contador",contador);
        localStorage.setItem("totalEnProductos",totalEnProductos);
        localStorage.setItem("contadorTotal",contadorTotal.toFixed(2));
        
        //Borrar todos los txt nombre y number..toFixed(2)
        txtNombre.value="";
        txtNumber.value=""; 
        txtNombre.focus();
    }

});//btnAgregar.click

txtNumber.addEventListener("blur", function (event) {
    event.preventDefault(); 
    
});//txtNombre.blur

window.addEventListener("load", function (event) {
    
    if (localStorage.getItem("contador")==null) {
        localStorage.setItem("contador","0")
    }
    if (localStorage.getItem("totalEnProductos")==null) {
        localStorage.setItem("totalEnProductos","0")
    }
    if (localStorage.getItem("contadorTotal")==null) {
        localStorage.setItem("contadorTotal","0.0")
    }
    contador = parseInt(localStorage.getItem("contador"));
    totalEnProductos= parseInt(localStorage.getItem("totalEnProductos"));
    contadorTotal= parseFloat(localStorage.getItem("contadorTotal"));

    contadorProductos.innerText = contador;
    productosTotal.innerText = totalEnProductos;
    precioTotal.innerText = `$ ${contadorTotal}`;
    
});