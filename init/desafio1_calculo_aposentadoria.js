const nome = "Mariah";
const sexo = "F";
const idade = 58;
const contribuição = 30

const calculoContribuicao = idade + contribuição;

if(sexo == "F" && calculoContribuicao >= 85) {  
    console.log(`Parabéns ${nome} você tem ${calculoContribuicao} de calculo de contribuição e pode se aposentar `);
} else if(sexo == "F" && calculoContribuicao <= 85) {
    console.log(`${nome} infelizmente seu calculo não possibilita que aposente por agora.`);
} else if(sexo == "M" && calculoContribuicao >= 95) {
    console.log(`Parabéns ${nome} você tem ${calculoContribuicao} de calculo de contribuição e pode se aposentar `);
} else {
    console.log(`${nome} infelizmente seu calculo não possibilita que aposente por agora.`);
}