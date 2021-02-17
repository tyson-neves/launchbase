const usuarios = [
    {
        nome: "Salvio",
        receita: [115.3, 48.7, 98.3, 14.5],
        despesas: [85.3, 13.5, 19.9] 
    },

    {
        nome: "Marcio",
        receita: [24.6, 214.3, 45.3,],
        despesas: [185.3, 12.1, 120.0]
    },

    {
        nome: "Lucia",
        receita: [9.8, 120.3, 340.2, 45.3],
        despesas: [450.2, 29.9]
    },

]

function calculaSaldo(receitas, despesas) {
    let saldo = 0;
    for(let i = 0; i < usuarios.length; i++) {
       saldo = receitas - despesas
    }

    
}