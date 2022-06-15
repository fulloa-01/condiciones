window.onload = function(){
    numeros();
 
}

function numeros(){
    const nx = document.querySelector("#n1")
    for (i=1;i<=9;i++){
        num = i
        var option = document.createElement("option");
        var valor = num;
        option.value = valor;
        nx.appendChild(option)
        option.innerHTML = num;
        console.log(num)
    }
    const ny = document.querySelector("#n2")
    for (i2=1;i2<=9;i2++){
        num2 = i2
        var option2 = document.createElement("option");
        var valor2 = num2;
        option2.value = valor2;
        ny.appendChild(option2)
        option2.innerHTML = num2;
        console.log(num2)
    }
    const nz = document.querySelector("#n3")
    for (i3=1;i3<=9;i3++){
        num3 = i3
        var option3 = document.createElement("option");
        var valor3 = num3;
        option3.value = valor3;
        nz.appendChild(option3)
        option3.innerHTML = num3;
        console.log(num3)
    }
}


function elegir(){
    var elegido = document.getElementById("n1").value;
    var elegido2 = document.getElementById("n2").value;
    var elegido3 = document.getElementById("n3").value;
    var passwd = Number(elegido + elegido2 + elegido3);
    console.log(elegido)
    console.log(elegido2)
    console.log(elegido3)
    console.log(passwd)

    if (passwd == "911"){
        console.log("Password1 Correcto")
        document.getElementById("mensaje").innerHTML = "Password1 Correcto"
    }else if (passwd == "714"){
        console.log("Password2 Correcto")
        document.getElementById("mensaje").innerHTML = "Password2 Correcto"
    }
    else{
        console.log("Password incorrecto")
        document.getElementById("mensaje").innerHTML = "Password incorrecto"
    }
}