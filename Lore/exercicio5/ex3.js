// 3. Crie uma função que separe o texto em palavras por meio do caracter espaço em branco (pode utilizar dentro da sua própria função a função split)

var texto = prompt("Digite o texto:")
var caracteresParaRemover = [",", "."]

function removerCaracteres (caracteresParaRemover){
    var caracteresParaRemover = [",", "."]
    for(var i = 0; i < caracteresParaRemover.length; i++){
        texto = texto.split(caracteresParaRemover[i]).join("")
    }
    return texto
}
removerCaracteres(texto)
alert (texto)
