const calculadora = document.querySelector("#formc");
let P_Numero = document.querySelector("#primn");
let S_Numero = document.querySelector("#segn");
let Resultado = document.getElementById("resul");
let Sig = document.getElementById("signos");

const suma=()=>{
    let num1 = parseFloat(P_Numero.value);
    let num2 = parseFloat(S_Numero.value);
    let num3 = num1 + num2;
    Resultado.textContent = num3;
    Sig.textContent = "+";
}
const resta=()=>{
    let num1 = parseFloat(P_Numero.value);
    let num2 = parseFloat(S_Numero.value);
    let num3 = num1 - num2;
    Resultado.textContent = num3;
    Sig.textContent = "-";
}
const multi=()=>{
    let num1 = parseFloat(P_Numero.value);
    let num2 = parseFloat(S_Numero.value);
    let num3 = num1 * num2;
    Resultado.textContent = num3;
    Sig.textContent = "*";
}
const divi=()=>{
    let num1 = parseFloat(P_Numero.value);
    let num2 = parseFloat(S_Numero.value);
    let num3 = num1 / num2;
    Resultado.textContent = num3;
    Sig.textContent = "/";
}
const limp=()=>{
    P_Numero.textContent = "";
    S_Numero_Numero.textContent = "";
    Resultado.textContent = "";
    Sig.textContent = "";
}

