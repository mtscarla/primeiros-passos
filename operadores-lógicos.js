var idade = 20
var usaOculos = false

// Operadores lógicos
//  menor < maior | maior > menor
//  comparação - == 
//  diferença - !=
//  e - &&
//  ou - ||

if(idade < 18){
  console.log("Não pode dirigir")
}
else if (idade > 18 && usaOculos == true){
  console.log("Pode dirigir depois do exame de vista")
}
else {
  console.log("Reprovou no teste")
}