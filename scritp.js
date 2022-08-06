var botaoAdicionar = document.querySelector("bto-add-paciente");
botaoAdicionar.addEventListener("click",function(event){ // isso eh um escutador de evento
    event.preventDefault(); // para a pagina nao carregar e apagar os dados do formulario
})



var nome = document.querySelector("#tabela-paciente")
console.log(nome)