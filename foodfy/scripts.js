const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");


for(let card of cards) {
    card.addEventListener("click", function(){
        const fotoId = card.getAttribute("id");
        modalOverlay.classList.add("active")
        modalOverlay.querySelector("img").src = `assets/${fotoId}.png`;
        
    })
}

document.querySelector(".btn-close").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
})

for (let card of cards) {
    card.addEventListener("click", function(){
    const titulo = card.querySelector(".card_description").innerHTML;
    const creator = card.querySelector(".creator").innerHTML;

    modalOverlay.querySelector("h4").innerHTML = `${titulo}`;
    modalOverlay.querySelector("p").innerHTML = `${creator}`;
    })
}    