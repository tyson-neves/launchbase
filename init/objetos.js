// objeto é uma coleção de propriedades que recebem valores ou métodos.

const aluno01 = {
    nome: "Pedro",
    nota: 9.8
};

const aluno02 = {
    nome: "Bruno",
    nota: 10
};

const aluno03 = {
    nome: "Mateus",
    nota: 4
};

const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3;

console.log(media);