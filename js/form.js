var botaoAdicionar = document.querySelector("#bto-add-paciente");
botaoAdicionar.addEventListener("click", function(event){ // isso eh um escutador de evento
    event.preventDefault(); // para a pagina nao carregar e apagar os dados do formulario

    //fazendo o valor da variavel pelo id da <form> e o campo name do <input mame = variavel>.value
    var form = document.querySelector("#form-adiciona");
    var paciente = obtemPacienteFormulario(form);
    CriaLista(paciente.nome, paciente.altura, paciente.peso, paciente.imc);
});

function CriaLista(nome, altura, peso, imc){

    var pacienteTr = document.createElement("tr"); // cria um tr no HTMl
    
    var nomeTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var imcTd= document.createElement("td");

    nomeTd.textContent = nome; // o valor nomeTd ta sem nada ai ele coloca esse valor q vem do input
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    imcTd.textContent = imc;


    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-paciente");
    tabela.appendChild(pacienteTr);

}

var nome = document.querySelector("#tabela-paciente")
console.log(nome)

function obtemPacienteFormulario(form){
    var paciente = {
        nome: form.name.value,
        peso: form.peso.value,
        altura: form.altura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente
}