

// Uma função de validação que funciona para todos os campos

function validarCampo(input, helper, validar, mensagemErro) {
    if (validar(input.value)) {   
        //correto
        input.classList.remove("error");
        input.classList.add("correct");
        helper.classList.remove("visible");
    } else {
        // errado
        input.classList.remove("correct");
        input.classList.add("error");
        helper.classList.add("visible");
        helper.textContent = mensagemErro;
    }
}

// Ao chamar a função validarCampo vamos passar como parametro o "Input", "o Helper", "o nome da função criada abaixo", e a mensagem de erro);

// abaixo uma função que vai ser utilizada como validação 
function validarNome(valor) {
    // Verifica se o nome tem pelo menos 10 caracteres
    if (valor.length >= 10) {
        return true;
    } else {
        return false;
    }
}
function validarSenha(valor) {
    // Verifica se a senha  tem mais de 6 caracteres 
    if (valor.length >= 6) {
        return true;
    } else {
        return false;
    }
}

function validarConfirmarSenha(valor) {
    // Verifica se a senha confirmada é igual à senha digitada no campo de senha
    if (valor === document.getElementById('cadSenha').value) {
        return true;
    } else {
        return false;
    }
}

function validarEmail(valor) {
    // Verifica se o e-mail contém "@" e ".com"
    if (valor.includes('@') && valor.includes('.com')) {
        return true;
    } else {
        return false;
    }
}



   // Validação para o campo "email" / Login
    let emailLogInput = document.getElementById("loginEmail");
    let emailLogHelper = document.getElementById("loginEmail-helper");

    emailLogInput.addEventListener("input", function() {
    validarCampo(emailLogInput, emailLogHelper, validarEmail, "Insira um e-mail válido.");
    });

 
    // Validação para o campo "nome"
    let nomeInput = document.getElementById("nome");
    let nomeHelper = document.getElementById("nome-helper");

    nomeInput.addEventListener("input", function() {
        validarCampo(nomeInput, nomeHelper, validarNome, "O nome é obrigatório");
    });


    // Validação para o campo "email" / Cadastro
    let emailInput = document.getElementById("cadEmail");
    let emailHelper = document.getElementById("cadEmail-helper");

    emailInput.addEventListener("input", function() {
        validarCampo(emailInput, emailHelper, validarEmail, "Insira um e-mail válido.");
    });


    // Validação para o campo "senha"
    let senhaInput = document.getElementById("cadSenha");
    let senhaHelper = document.getElementById("cadSenha-helper");

    senhaInput.addEventListener("input", function() {
        validarCampo(senhaInput, senhaHelper, validarSenha, "Senha mínima de 6 caracteres.");
    });


    
    // Validação para o campo "confirmacao_senha"
    let confirmacaoSenhaInput = document.getElementById("confirmacao_senha");
    let confirmacaoSenhaHelper = document.getElementById("confirmacao_senha-helper");

    confirmacaoSenhaInput.addEventListener("input", function() {
        validarCampo(confirmacaoSenhaInput, confirmacaoSenhaHelper, validarConfirmarSenha, "As senhas precisam ser iguais.");
    });
 
//-----------------------------

//function mostrarPopup(input, label) {
    // Mostrar popup ao focar no campo
    //input.addEventListener("focus", function() {
    //    label.classList.add("required-popup");
    //});

    // Ocultar popup ao sair do campo
    //input.addEventListener("blur", function() {
   //     label.classList.remove("required-popup");
  //  });
//}

// ---- Mensagem para finalizar / enviar o formulário. 

// Login
let formLogin = document.getElementById("formLogin");  
formLogin.addEventListener("submit", (e) => {
    // Se for correto exibe a msg abaixo, sem necessidade de validação por causa do required, no html 
    if (formLogin.checkValidity()) {
        alert("Login realizado com sucesso!");
    }
});

// Cadastro
let formCadastro = document.getElementById("formCadastro");  
formCadastro.addEventListener("submit", (e) => {
    // Se for correto exibe a msg abaixo, sem necessidade de validação por causa do required, no html 
    if (formCadastro.checkValidity()) {
        alert("Cadastro realizado com sucesso!");
    }
});


