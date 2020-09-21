const boton = document.getElementById("button")
const cards = document.querySelectorAll (".card")



boton.onclick = () => {
    for (let card of cards) {
    
        if (card.dataset.nombre === "boris") {
            card.classList.add ('hidden')
        }
    }
}