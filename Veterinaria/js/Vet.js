const Vet = document.querySelector("#FormVet");


function Registrar(){
    var NombreD = document.getElementById("NomD").value;
    var NombreM = document.getElementById("NomM").value;
    var Contacto = document.getElementById("Cont").value;
    var Padecimiento = document.getElementById("Pad").value;
    var ImagenI = document.getElementById("imagenInput").files[0];

    var datos ={
        nombreD:NombreD,
        nombreM:NombreM,
        contacto:Contacto,
        pad:Padecimiento,
        img : ImagenI,
    }
    console.log(datos);
     
    var formData = new FormData();
    formData.append("nombreD",NombreD);
    formData.append("nombreM",NombreM);
    formData.append("contc",Contacto);
    formData.append("padec",Padecimiento);
    formData.append("foto",ImagenI);

    var datosMostrados = document.getElementById("datosMostrados");
    datosMostrados.innerHTML = "<p>Nombre del Dueño:  " + NombreD + "</p>"+ 
        "<p>Nombre de la mascota:  " + NombreM + "</p>" + 
        "<p>Contacto:  " + Contacto + "</p>" + 
        "<p>Padecimiento:  " + Padecimiento + "</p>";
        
    var imagenMostrada = document.getElementById("imgenMostrada2");
    imagenMostrada.src = URL.createObjectURL(ImagenI);
    imagenMostrada.style.display = "block";
}
document.getElementById("imagenInput").addEventListener("change", function(){
    var reader = new FileReader();
    reader.onload = function(e){
        var imagenMostrada = document.getElementById("imagenMostrada");
        imagenMostrada.src = e.target.result;
        imagenMostrada.style.display = "block";
    }
    reader.readAsDataURL(this.files[0]);
});