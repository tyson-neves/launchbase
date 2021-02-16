// Criar um programa que calcula a média 
// das notas entre os alunos e envia
// mensagem do calculo da média.


const aluno1 = "Pedro";
const notaAluno1 = 9.8;

const aluno2 = 'Diego';
const notaAluno2 = 2;

const aluno3 = 'Junior';
const notaAluno3 = 10;


const media = (notaAluno1 + notaAluno2 + notaAluno3) / 3;

console.log(media);
if(media > 5) {
    console.log(`Parabéns turma a média foi ${media}`);
} else {
    console.log("Vamo estudar carai");
}



