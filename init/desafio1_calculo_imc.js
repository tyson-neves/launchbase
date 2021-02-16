// calculo de IMC
// peso / (altura * altura)

const nome = "Pedro";
const peso = 73.2;
const altura = 1.75;

const imc = peso / (altura * altura);

if(imc >= 30) {
    console.log(`Pedro, o seu IMC é ${imc} e está alto, você está acima do peso`);
} else {
    console.log(`Pedro, seu IMC é ${imc} e você esta no seu peso, não se descuide.`);
}