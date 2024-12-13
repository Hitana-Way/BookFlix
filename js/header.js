
// Seleciona os elementos do menu
const botaoMenu = document.querySelector(".botao-menu i");
const navList = document.querySelector("#navbar ul");

// Função para alternar o menu e os ícones
function alternarMenu() {
  navList.classList.toggle("active");

  // Alterna entre os ícones fa-bars e fa-times
  if (botaoMenu.classList.contains("fa-bars")) {
    botaoMenu.classList.remove("fa-bars");
    botaoMenu.classList.add("fa-times");
  } else {
    botaoMenu.classList.remove("fa-times");
    botaoMenu.classList.add("fa-bars");
  }
}

// Adiciona o evento de clique no botão do menu
botaoMenu.parentElement.addEventListener("click", alternarMenu);


