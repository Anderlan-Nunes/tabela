var botaoAdicionar = document.querySelector("#bto-add-paciente");
botaoAdicionar.addEventListener("click", function(event){ // isso eh um escutador de evento
    event.preventDefault(); // para a pagina nao carregar e apagar os dados do formulario

    //fazendo o valor da variavel pelo id da <form> e o campo name do <input mame = variavel>.value
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteFormulario(form);
    var pacienteTr = montaTr(paciente);
    if(!validaPaciente(paciente)){
        console.log("paciente invalido")
        return;
    }
    var tabela = document.querySelector("#tabela-paciente"); // coloca dentro do tbody
    tabela.appendChild(pacienteTr);
    form.reset(); // limpa formulario
});


function obtemPacienteFormulario(form){
    var paciente = {
        nome: form.name.value,
        peso: form.peso.value,
        altura: form.altura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente
}

function montaTr(paciente){

    var pacienteTr = document.createElement("tr"); // cria um tr no HTMl
    pacienteTr.classList.add("paciente")

    pacienteTr.appendChild(montaTd(paciente.nome, "info-peso"));// o valor nomeTd ta sem nada ai ele coloca er q vem sse valodo input
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;

}
function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){
    if(validaPeso(paciente.peso)){
        return true;
    }else{
        return false;
    }
}