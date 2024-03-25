const formulario = document.getElementById("formu");//se crea el evento del formulario
const usuario = document.getElementById("correo");//se extrae el valor del input "correo"
const acceso = document.getElementById("contraseña");//se extrae el valor del input "contraseña"
const msj = document.getElementById("mensaje");//se crea el evento para el h4 "mensaje"

const usuarios = [{//se crea el arreglo donde se guadaran los usuarios 
    user : "Pablo",//nombre del usuario
    email : "user1@gmail.com",//email del usuario
    contra : "123",//contraseña del usuario
    picture : "/Login_Form/imgs/pablo.jpg"//foto del usuario
}, 
{
    user : "Martin",
    email : "Martin32@gmail.com",
    contra : "321",
    picture : "/Login_Form/imgs/Martin.jpg"
}]

const eventoFormu = (evt)=>{//se crea la funcion para validar el correo y contraseña ingresado
    evt.preventDefault();//evento para evitar que se actualice la pagina
    let email = usuario.value;//crear la variable "email" para guardar el email ingresado
    let contra = acceso.value;//crear la variable "contra" para guardar la contraseña ingresada
    let coincidencia = usuarios.filter((usuario)=> usuario.email === email);/*se crea la variable "coincidencia para 
        evaluar los datos ingresados con los guardados en el arreglo"*/
    if(coincidencia.length > 0){//se crea el if que evalua si el correo el correcto
        if(coincidencia[0].contra === contra){//se crea el if que evalua si la comtraseña es correcta
            alert("Bienvenido "+ coincidencia[0].user);//envia un alert que indica que el correo y contraseña son correctos
            localStorage.setItem("nombre",coincidencia[0].user);//guarda el nombre en un localStorage
            localStorage.setItem("imagen",coincidencia[0].picture);//guarda la imagen en un localStorage
            window.location.href="/Login_Form/html/home.html";//redirije a la pagina de usuario
        }else {msj.textContent = "Contraseña incorrecta"}//envia el mensaje de contraseña incorrecta
    }else{
        msj.textContent = "Correo incorrecto" //envia el mensaje de correo incorrecto
    }
}
formulario.addEventListener("submit",eventoFormu);//se utiliza el evento del formulario y se le da la funcion eventoFormu al boton 