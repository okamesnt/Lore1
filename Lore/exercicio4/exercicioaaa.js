var pessoas = [];
for (var i = 0; i < 5; i++){
    var idade = parseInt(prompt("Idade:"))
    var nome = prompt("Nome:")
    var altura = parseInt(prompt("Altura:"))
    var peso = parseInt(prompt("Peso:"))
    var sexo = prompt("Sexo (M|F)")

    pessoas.push([idade, nome, altura, peso, sexo])
}
var mediaIdade