const  programador01 = {
    nome: "Carlos",
    idade: 32,
    
}

const  programador02 = {
    nome: "Manuel",
    idade: 21,
    
}

const  programador03 = {
    nome: "Mario",
    idade: 48,
    
}



const tecnologias = [
        {
            nome: "C++",
            especialidade:"Desktop",
        },
        {
            nome: "Javascript",
            especialidade:"Web/Mobile"
        },
        {
            nome: "Python",
            especialidade:"Data Science"
        }

]


console.log(`O usuário ${programador02.nome} tem ${programador02.idade} e usa a tecnologia ${tecnologias[2].nome} com especialidade em ${tecnologias[2].especialidade}`);

console.log(`O usuário ${programador03.nome} tem ${programador03.idade} e usa a tecnologia ${tecnologias[0].nome} com especialidade em ${tecnologias[0].especialidade}`);

console.log(`O usuário ${programador01.nome} tem ${programador01.idade} e usa a tecnologia ${tecnologias[1].nome} com especialidade em ${tecnologias[1].especialidade}`);