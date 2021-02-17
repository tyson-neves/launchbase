
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
      tecnologias: ["PhP", "Python", "React"]  
    }
];

// for(let i = 0; i < usuarios.length; i++) {
   
//     if(i == 0) { 
//         console.log(`${usuarios[0].nome} trabalha com ${usuarios[0].tecnologias[0]}, ${usuarios[0].tecnologias[1]}`);
// } else if(i == 1) {
//     console.log(`${usuarios[1].nome} trabalha com ${usuarios[1].tecnologias[0]}, ${usuarios[1].tecnologias[1]}`);
// } else if(i == 2) {
//     console.log(`${usuarios[2].nome} trabalha com ${usuarios[2].tecnologias[0]}, ${usuarios[2].tecnologias[1]}`);
// }

// }


function checarUsuarioUsaCSS(usuario) {
    if(usuario == "CSS") {
      return  true
    } else
     return false
    
}

const usuarioCSS = checarUsuarioUsaCSS(usuarios.length);

console.log(usuarioCSS);