// let formulario = document.getElementById("formulario");

// formulario.addEventListener("submit", (e) => {
//     e.preventDefault();
// })

function coletardados() {
    // debugger
    var nomecompleto = document.getElementById('nomecompleto').value;
    var idade = document.getElementById('idade').value;
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;

    var imc = peso / altura ** 2

    var tabela = document.getElementById("tabela")
    var tabelacorpo = document.getElementById("corpo-tabela")

    var linha = tabelacorpo.insertRow();

    var nomecompletocell = linha.insertCell(0);
    var idadecell = linha.insertCell(1);
    var pesocell = linha.insertCell(2);
    var alturacell = linha.insertCell(3);
    var imccell = linha.insertCell(4);


    nomecompletocell.innerHTML = nomecompleto;
    idadecell.innerHTML = idade;
    pesocell.innerHTML = peso;
    alturacell.innerHTML = altura;
    imccell.innerHTML = imc.toFixed(2);
}

// aa