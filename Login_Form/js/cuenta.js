let nonmbre = document.getElementById("nombre");//se crea el evento del h2 "nombre"
nonmbre.innerHTML = localStorage.getItem("nombre");//se extrae el valor anteriormente guardado y se inserta en el evento del h2 
let imagen = document.getElementById("img2");//se crea el evento de la img "img2"
imagen.src = localStorage.getItem("imagen");//se extrae la imagen guardada y se inserta en el evento creado
const cal =()=>{//se crea la funcion "cal" para abrir la calculadora
    window.location.href="/Login_Form/html/calculadora.html";//se ingresa a la pagina de la calculadora
}
const cance3 =()=>{//se crea la funcion "cance3" para cerrar sesion
    window.location.href="/Login_Form/html/index.html";//se regresa a la pagina de inicio
}