// Seleciona o botão e o menu
const botaoMenu = document.querySelector(".botao-menu i");
const navList = document.querySelector("#navbar ul");

// Alterna a visibilidade do menu e o ícone do botão
botaoMenu.parentElement.addEventListener("click", () => {
  navList.classList.toggle("active");

  // Alterna entre os ícones fa-bars e fa-times
  if (botaoMenu.classList.contains("fa-bars")) {
    botaoMenu.classList.remove("fa-bars");
    botaoMenu.classList.add("fa-times");
  } else {
    botaoMenu.classList.remove("fa-times");
    botaoMenu.classList.add("fa-bars");
  }
});