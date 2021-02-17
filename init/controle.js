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
        nota: 9
    },

    {
        nome: "Aluno Novo",
        nota: 7
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
    },

    {
        nome: "Novo Aluno",
        nota: 4
    }
];

function calculaMedia(alunos) {
    let soma = 0;
    for(let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }
    
    const media = soma / alunos.length;
    return media
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