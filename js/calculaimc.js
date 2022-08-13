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

        var alturaEhValida = validaAltura(altura);
        var pesoEhvalido = validaPeso(peso);

        if(!alturaEhValida){
            alturaTd.textContent = "altura inválida";
            var alturaEhValida = false;
            paciente.classList.add("paciente-invalido")
        }

        if(!pesoEhvalido){
            pesoTd.textContent = "peso inválido";
            var pesoEhvalido = false;
            paciente.classList.add("paciente-invalido")
        }

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

function validaPeso(peso){
    if(peso < 400 && peso > 0){
        return true    
    }else{
        return false
    }
}

function validaAltura(altura){
    if(altura > 1 && altura < 2.5){
        return true
    }else{
        return false
    }
}