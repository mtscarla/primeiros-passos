var peso = 54
var altura = 1.60

// Operações matemáticas
// Somar: +
// Subtrair: -
// Multiplicação: *
// Divisão: /


var imc = peso / (altura * altura)

if(imc < 18.5){
  console.log("Magreza!")
} 
else if(imc >= 18.5 && imc <= 24.9){
  console.log("Normal")
}
else if(imc > 24.9 && imc <= 30){
  console.log("Sobrepeso")
}
else {
  console.log("Obesidade")
}