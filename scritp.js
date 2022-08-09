var botaoAdicionar = document.querySelector("#bto-add-paciente");
botaoAdicionar.addEventListener("click", function(event){ // isso eh um escutador de evento
    event.preventDefault(); // para a pagina nao carregar e apagar os dados do formulario

    //fazendo o valor da variavel pelo id da <form> e o campo name do <input mame = variavel>.value
    var form = document.querySelector("#form-adiciona");
    var nome = form.name.value;
    var altura = form.altura.value;
    var peso = form.peso.value;
    CriaLista(nome, altura, peso);
});

function CriaLista(nome, peso, altura){

    var pacienteTr = document.createElement("tr"); // cria um tr no HTMl
    
    var nomeTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var IMCTd= document.createElement("td");

    nomeTd.textContent = nome; // o valor nomeTd ta sem nada ai ele coloca esse valor q vem do input
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(pesoTd);

    var tabela = document.querySelector("#tabela-paciente");
    tabela.appendChild(pacienteTr);

}

var nome = document.querySelector("#tabela-paciente")
console.log(nome)