
const usuarios = [
    { nome: "Pedro",
      tecnologias: ["Javascript", "CSS"]  
    },

    {
      nome:"Bruno",
      tecnologias: ["Python", "C#", "Java", "Angular"]  
    },

    {
      nome: "Erick",
      tecnologias: ["PhP", "Python", "React", "CSS"]  
    }
];


for(let usuario of usuarios) {
  console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(", ")}`)
}

// for(let i = 0; i < usuarios.length; i++) {
//    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias.join(", ")}  `) // join adiciona uma string entre as propriedades.
// }

// Busca por tecnologia 

function checarUsuarioUsaCSS(usuario) {
  for(let tecnologia of usuario.tecnologias) {
    if (tecnologia == "CSS") {
      return true   
    }
  }
  return false
}

for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checarUsuarioUsaCSS(usuarios[i]);

  if(usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
  }
}