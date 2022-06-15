    function cambiaBorde(){
        var foto = document.getElementById("foto1");
        var respuesta = foto.classList.contains("bordeada");
        console.log(respuesta)
    
        if (respuesta == true) {
            foto.classList.remove("bordeada");
        }
        else {
            foto.classList.add("bordeada");
        }
    }
    

    
