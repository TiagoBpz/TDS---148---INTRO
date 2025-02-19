function somar(){
    var numero1 = parseFloat(document.getElementById("n1").value)
    var numero2 = parseFloat(document.getElementById("n2").value)
    // console.log(typeof numero1, typeof numero2, numero1, numero2)
    var res = document.getElementById("res")
    res.textContent = numero1 + numero2
    return res
}
function Subtração(){
    var numero3 = parseFloat(document.getElementById("n3").value)
    var numero4 = parseFloat(document.getElementById("n4").value)
    // console.log(typeof numero1, typeof numero2, numero1, numero2)
    var res = document.getElementById("resu")
    res.textContent = numero3 - numero4
    return res
}
function Multiplicacao(){
    var numero5 = parseFloat(document.getElementById("n5").value)
    var numero6 = parseFloat(document.getElementById("n6").value)
    // console.log(typeof numero1, typeof numero2, numero1, numero2)
    var res = document.getElementById("resul")
    res.textContent = numero5 * numero6
    return res
}
function Divisao(){
    document.getElementById("n8").style.border = "1px solid black"
    var numero7 = parseFloat(document.getElementById("n7").value)
    var numero8 = parseFloat(document.getElementById("n8").value)
    // console.log(typeof numero1, typeof numero2, numero1, numero2)
    var res = document.getElementById("resulta")
    if(numero8 !== 0){
        res.textContent = (numero7 / numero8).toFixed(1)
    }else{
        res.innerHTML = "Não é permitido divisão por 0"
        document.getElementById("n8").style.border = "2px solid red"
    }
    
    return res
}

function media(){
    var m1 = parseFloat(document.getElementById("m1").value)
    var m2 = parseFloat(document.getElementById("m2").value)
    var m3 = parseFloat(document.getElementById("m3").value)
    var m4 = parseFloat(document.getElementById("m4").value)
    var m5 = parseFloat(document.getElementById("m5").value)
    var media = document.getElementById("respMedia")
    var msg = document.getElementById("msg")
    var res = (m1 + m2 + m3 + m4 + m5) / 5
    if(res >= 7){
        media.textContent = res
        msg.textContent = "PASSOU"
        msg.style.color = "green"
    }else{
        media.textContent = res
        msg.textContent = "REPROVOU"
        msg.style.color = "red"
    }

}
function imc(){
    var kg = parseFloat(document.getElementById("n9").value)
    var altura = parseFloat(document.getElementById("n10").value)
    var imc = document.getElementById("respImc")
    var msg = document.getElementById("msgimc")
    var rest = (altura / altura) * kg).toFixed(1)
    if(rest >= 40.0){
        imc.textContent = rest
        msg.textContent = "Obesidade 3"
        msg.style.color = "orange"
    }else if(rest <= 39.9 && rest >= 35.0){
        imc.textContent = rest
        msg.textContent = "Obesidade 2"
        msg.style.color = "orange"
    }else if(rest <=34.9 && rest >= 30.0){
        imc.textContent = rest
        msg.textContent = "Obesidade 1"
        msg.style.color = "orange"
    }else if(rest <= 29.9 && rest >= 25.0){
        imc.textContent = rest
        msg.textContent = "Soprepeso"
        msg.style.color = "yellow"
    }else if(rest <= 24.9 && rest >= 18.6){
    imc.textContent = rest
    msg.textContent = "Normal"
    msg.style.color = "blue"
    }else{
        msg.textContent = "INVALIDO"
        msg.style.color = "red"
    }


}

function verif(){
    var idade = parseFloat(document.getElementById("n11").value)
    var resid = document.getElementById("resid")
    var msgid = document.getElementById("msgid")
    var res = ano - 2025

    if(res >= 18){
        resid.textContent = res
        msgid.textContent = "Entrada permitida"
        msg.style.color = "green"
    }
    else{
        resid.textContent = res
        msgid.textContent = "Entrada negada"
        msg.style.color = "red"
    }
}