// Captura o botão de favoritar com o icone de coração
let coracao = document.querySelector(".favoritar i");

// Função
function favoritar (){ 
    if (coracao.classList.contains("fa-regular", "fa-heart")) {
        coracao.classList.remove("fa-regular", "fa-heart");        
        coracao.classList.add("fa-solid", "fa-heart"); 
    } else {
        coracao.classList.remove("fa-solid", "fa-heart");           
        coracao.classList.add("fa-regular", "fa-heart");            
    }
}

// Evento
coracao.addEventListener("click", favoritar);
