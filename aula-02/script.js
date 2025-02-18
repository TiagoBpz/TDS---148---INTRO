const primeiro = 10
const segundo = 2
const terceiro = 5

function soma(){
    batata()
    return "resultado: " + (segundo + terceiro)
}

function batata(){
    console.log("esta é uma função de soma")
}

// function somarComParametros(n1, n2, n3){
//     return n1 + n2 + n3
// }

const somarComParametros = (n1, n2, n3) => n1 + n2 + n3

// console.log(somarComParametros(1, 2, 3))

const teste = () => "texto qualquer"
console.log(teste())

