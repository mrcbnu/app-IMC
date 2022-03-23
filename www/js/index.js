function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    altura = parseFloat(altura / 100);

    let valor = (peso / (altura * altura)).toPrecision(4);

    let div = document.getElementById("resultado");
    div.innerHTML = "Seu IMC é de: " + valor;

    let info = document.getElementById("info");

    if (valor < 18.5){
        info.innerHTML = "<br> DESNUTRIÇÃO";
    }else if (valor >= 18.5 && valor < 24.99){
        info.innerHTML ="<br> PESO NORMAL";
    }else if (valor >= 25 && valor < 29.99){
        info.innerHTML = "<br> SOBREPESO";
    }else if (valor >= 30 && valor < 39.99){
        info.innerHTML = "<br> OBESIDADE";
    }else {
        info.innerHTML = "<br> OBESIDADE MORBIDA"
    }

}
