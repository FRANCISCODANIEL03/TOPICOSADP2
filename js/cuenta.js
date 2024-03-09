let nonmbre = document.getElementById("nombre")
nonmbre.innerHTML = localStorage.getItem("nombre");
let imagen = document.getElementById("img2");
imagen.src = localStorage.getItem("imagen");