var pacientes = document.querySelectorAll(".paciente")

    for( var i= 0; i < pacientes.length; i++){
        var paciente = pacientes[i];

        var nomeTd = paciente.querySelector(".info-nome")
        var nome = nomeTd.textContent;

        var pesoTd = paciente.querySelector(".info-peso");
        var peso = pesoTd.textContent;

        var alturaTd = paciente.querySelector(".info-altura");
        var altura = alturaTd.textContent;

        var imcTd = paciente.querySelector(".info-imc");

        var alturaEhValida = true;
        var pesoEhvalido = true;

        if(altura < 1 || altura > 2.5){
            alturaTd.textContent = "altura inválida";
            var alturaEhValida = false;
        }

        if(peso > 400 || peso < 0){
            pesoTd.textContent = "peso inválido";
            var pesoEhvalido = false;
        }else

        if (pesoEhvalido && alturaEhValida){
            var imc = calculaImc(peso, altura);
            imcTd.textContent = imc;
        }
    }

function calculaImc(peso, altura){
    var imc = 0;
    var imc = peso / (altura * altura);
    return imc.toFixed(2)   
}