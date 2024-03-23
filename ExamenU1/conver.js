const Conv = document.querySelector("#formC");//se extrae el evento del formulario

let mil = document.getElementById("mm");//se extrae el valor del h mm
let met = document.getElementById("mt");//se extrae el valor del h mt
let kil = document.getElementById("km");//se extrae el valor del h km
let pul = document.getElementById("in");//se extrae el valor del h in
let pie = document.getElementById("ft");//se extrae el valor del h ft
let yar = document.getElementById("yd");//se extrae el valor del h yd

const calcular =(e)=>{//se crea la funcion que calculara los resultados
    e.preventDefault();//evento para evitar que se actualice la pagina
    let valor =document.getElementById("val").value;//se extrae el valor del input
    let milimetro,kilometro,pulgada,pies,yarda,metro;//declarando las variables de las resultados
    
    metro = parseFloat(valor /100);//calcular el valor en mt
    milimetro = parseFloat(metro*1000);//calcular el valor en mm
    kilometro = parseFloat(metro * .001).toFixed(4);//calcular el valor en km
    pulgada = parseFloat(metro * 39.3701).toFixed(4);//calcular el valor en in
    pies = parseFloat(metro * 3.28084).toFixed(4);//calcular el valor en ft
    yarda = parseFloat(metro * 1.09361).toFixed(4);//calcular el valor en yd

    mil.textContent="el valor en milimetros es " + milimetro;//imprimir el valor en mm
    met.textContent="el valor en metros es " + metro;//imprimir el valor en mt 
    kil.textContent="el valor en kilometros es " + kilometro;//imprimir el valor en km
    pul.textContent="el valor en pulgadas es " + pulgada;//imprimir el valor en in
    pie.textContent="el valor en pies es " + pies;//imprimir el valor en ft
    yar.textContent="el valor en yardas es " + yarda;//imprimir el valor en yd
}//fin funcion 
const limpiar =(e)=>{//se crea la funcion para limpiar los datos ingresados y generados
    e.preventDefault();
    let valor =document.getElementById("val");//se extrae el valor del input
    valor.value ="";//se borra el contenido del input
    mil.textContent="";//se limpia el h mm
    met.textContent="";//se limpia el h mt
    kil.textContent="";//se limpia el h km
    pul.textContent="";//se limpia el h in
    pie.textContent="";//se limpia el h ft
    yar.textContent="";//se limpia el h yd
}//fin funcion
Conv.addEventListener("submit",calcular);//se crea el evento para la funcion "calcular"
Conv.addEventListener("reset",limpiar);//se crea el evento para la funcion "limpiar"