const alunosDaTurmaA = [
    {
        nome: "Pedro",
        nota: 3
    },

    {
        nome: "Bruno",
        nota: 10
    },

    {
        nome: "Mateus",
        nota: 4
    }
];

const alunosDaTurmaB = [
    {
        nome: "Mauro",
        nota: 8
    },

    {
        nome: "Gil",
        nota: 10
    },

    {
        nome: "Amolfadinhas",
        nota: 8
    }
];

function calculaMedia(alunos) {
     return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

const media1 =  calculaMedia(alunosDaTurmaA);
const media2 =  calculaMedia(alunosDaTurmaB);



function enviaMensagem(media, turma) {
    if(media > 7) {
        console.log(`Parabéns para os alunos da ${turma} a nota de vocês foi de ${media}`);
    } else {
        console.log(`Infelizmente a media da turma ${turma} foi menor que 7`);
 }
}

enviaMensagem(media1, "Turma A");
enviaMensagem(media2, "Turma B");

