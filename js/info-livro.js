


const urlParams = new URLSearchParams(window.location.search);
const tituloLivro = urlParams.get('titulo');


fetch('./json/info-livro.json')  // Caminho para o arquivo JSON  
    .then(response => response.json())  // Converte a resposta para um JSON
    .then(livros => {

        let livroEncontrado = null;  // iniciando como null
        for (let i = 0; i < livros.length; i++) {  // Percorrendo os livros no JSON
            if (livros[i].titulo === tituloLivro) {  // comparar se é igual ao tituloLivros
                livroEncontrado = livros[i];  // add o livro encontrado
                break;   
            }
        }

        if (livroEncontrado) {  // se o livro foi encontrado
            const livroInfo = `
                <div class="livro">
                    <img src="${livroEncontrado.imagem}" width="300" height="400" alt="Capa ${livroEncontrado.titulo}" class="capa">
                    <div class="informacoes">
                        <button class="favoritar">
                            <i class="fa-regular fa-heart"></i>
                        </button>
                        <h2>${livroEncontrado.titulo}</h2>
                        <p><strong>Edição Português</strong> | por ${livroEncontrado.autor} (Autor), ${livroEncontrado.tradutor} (Tradutor). <br></p>
                        <p>${livroEncontrado.descricao}</p>
                        <br>
                        <section class="acoes">
                            <button>Leia online <i class="fas fa-book"></i></button>
                            <button>Audiobook <i class="fas fa-headphones"></i></button>
                            <button>Baixar <i class="fas fa-download"></i></button>
                            <button>Comentar <i class="fas fa-comment"></i></button>
                        </section>
                        <div class="avaliacao">
                            <div class="estrelas">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <p class="detalhes">Avaliações: ${livroEncontrado.avaliacoes} | Comentários: ${livroEncontrado.comentarios}</p>
                        </div>
                    </div>
                </div>
            `;
            
            // Adiciona as informações na página
            document.getElementById('livro-info').innerHTML = livroInfo;



        // -------------------------------BOTÃO FAVORITAR -------------------- //
 
        // Captura o botão de favoritar com o icone de coração
        let coracao = document.querySelector(".favoritar i");

        // Função para favoritar o livro
        function favoritar (){ 
            if (coracao.classList.contains("fa-regular", "fa-heart")) {
             coracao.classList.remove("fa-regular", "fa-heart");        
                coracao.classList.add("fa-solid", "fa-heart"); 
            } else {
             coracao.classList.remove("fa-solid", "fa-heart");           
             coracao.classList.add("fa-regular", "fa-heart");            
            }
        }

        // Evento de clique no ícone de favoritar
        coracao.addEventListener("click", favoritar);

    }
});