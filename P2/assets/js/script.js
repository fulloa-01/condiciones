function verificador(){
    var s1 = document.getElementById("sticker1").value;
    var s2 = document.getElementById("sticker2").value;
    var s3 = document.getElementById("sticker3").value;
    var suma = parseFloat(s1) + parseFloat(s2) + parseFloat(s3);

    console.log(suma)

    if ( suma > 10 ){

        document.getElementById("alerta").innerHTML = "Llevas demasiados Stickers"
    } else {
        document.getElementById("alerta").innerHTML = "Llevas " + suma + " stickers"
    }

    

}