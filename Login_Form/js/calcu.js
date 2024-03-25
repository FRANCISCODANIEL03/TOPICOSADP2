const calculadora = document.querySelector("#formc");//extraer el evento del formulario
let P_Numero = document.querySelector("#primn");//extraer el valor del primer input
let S_Numero = document.querySelector("#segn");//extraer el valor del segundo input
let Resultado = document.getElementById("resul");//extraer el evento del h resul
let Sig = document.getElementById("signos");//extraer el evento del h signos
let Vac = document.getElementById("vacio");//extraer el evento del h vacio

const limp =()=>{//crear la funcion limp para limpiar el formulario
    Sig.textContent = "";//borra lo impreso en el h3
    Resultado.textContent = "";//borra lo impreso en el h3
}
const suma=()=>{//crear la funcion "suma" para la operacion suma
    if(P_Numero.value.length == 0 || S_Numero.value.length == 0){//crear un if que detecte cuando algun campo este vacio
        Vac.textContent = "Alguna celda se encuentra vacia";//mensaje impreso si se cumple la condicion
    }else{//si no estan vacios se ejcuta esto
    let num1 = parseFloat(P_Numero.value);//se transforman los datos a numeros
    let num2 = parseFloat(S_Numero.value);//""
    let num3 = (num1 + num2).toFixed(3);//se realiza la operacion 
    Resultado.textContent = num3;//se imprime el resulatado
    Sig.textContent = "+";//se imprime el signo de la operacion
    Vac.textContent = "";//se limpia el h4 de la advertencia
    }
}
const resta=()=>{//crear la funcion "resta" para la operacion resta
    if(P_Numero.value.length == 0 || S_Numero.value.length == 0){//crear un if que detecte cuando algun campo este vacio
        Vac.textContent = "Alguna celda se encuentra vacia";//mensaje impreso si se cumple la condicion
    }else{//si no estan vacios se ejcuta esto
    let num1 = parseFloat(P_Numero.value);//se transforman los datos a numeros
    let num2 = parseFloat(S_Numero.value);//""
    let num3 = (num1 - num2).toFixed(3);//se realiza la operacion 
    Resultado.textContent = num3;//se imprime el resulatado
    Sig.textContent = "-";//se imprime el signo de la operacion
    Vac.textContent = "";//se limpia el h4 de la advertencia
    }
}
const multi=()=>{//crear la funcion "multi" para la operacion multiplicacion
    if(P_Numero.value.length == 0 || S_Numero.value.length == 0){//crear un if que detecte cuando algun campo este vacio
        Vac.textContent = "Alguna celda se encuentra vacia";//mensaje impreso si se cumple la condicion
    }else{//si no estan vacios se ejcuta esto
    let num1 = parseFloat(P_Numero.value);//se transforman los datos a numeros
    let num2 = parseFloat(S_Numero.value);//""
    let num3 = (num1 * num2).toFixed(3);//se realiza la operacion 
    Resultado.textContent = num3;//se imprime el resulatado
    Sig.textContent = "*";//se imprime el signo de la operacion
    Vac.textContent = "";//se limpia el h4 de la advertencia
    }
}
const divi=()=>{//crear la funcion "divi" para la operacion division
    if(P_Numero.value.length == 0 || S_Numero.value.length == 0){//crear un if que detecte cuando algun campo este vacio
        Vac.textContent = "Alguna celda se encuentra vacia";//mensaje impreso si se cumple la condicion
    }else{//si no estan vacios se ejcuta esto
    let num1 = parseFloat(P_Numero.value);//se transforman los datos a numeros
    let num2 = parseFloat(S_Numero.value);//""
    let num3 = (num1 / num2).toFixed(3);//se realiza la operacion 
    Resultado.textContent = num3;//se imprime el resulatado
    Sig.textContent = "/";//se imprime el signo de la operacion
    Vac.textContent = "";//se limpia el h4 de la advertencia
    }
}
const cance2=()=>{//crear la funcion "resta" para cerrar la calculadora
    window.location.href="/Login_Form/html/home.html";//se regresa a la pagina de usuario
}
