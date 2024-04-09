

let numeroQuad=document.getElementById('numeroQuaduadrado')

let number=10//Number (prompt("Digite um número!"))
let i=0
while(i < number){
    i++
    let num = i**2
    numeroQuaduadrado.innerHTML += `${num}<br>`

}