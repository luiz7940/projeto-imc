function calcularIMC() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let resultado = document.getElementById("resultado");

    if (peso && altura) {
        
        peso = parseFloat(peso);
        altura = parseFloat(altura);
        
        let imc = (peso / (altura * altura)).toFixed(1);
        let classificacao = "";

        if (imc < 18.5) classificacao = "Abaixo do peso";
        else if (imc < 24.9) classificacao = "Peso normal";
        else if (imc < 29.9) classificacao = "Sobrepeso";
        else classificacao = "Obesidade";

        resultado.innerHTML = `<strong>Resultado:</strong><br>Seu IMC é ${imc}<br>Classificação: ${classificacao}`;
    } else {
        resultado.innerHTML = "Por favor, preencha todos os campos.";
    }
}
