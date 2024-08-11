// OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    
// passo 1 - dar um jeito de pegar o elemento HTML dos botões
// passo 2 - dar um jeito de identificar o clique do usuário no botão
// passo 3 - desmarcar o botão selecionado anterior
// passo 4 - marcar o botão clicado como se estivesse selecionado
// passo 5 - esconder a imagem anteriormente selecionada
// passo 6 - fazer aparecer a imagem correspondente ao botão clicado
// passo 7 - esconder a informação do dragão anteriormente selecionado
// passo 8 - mostrar a informação do dragão referente ao botão clicado

// Passo 1
const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

// Passo 2
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        // Passo 3
        const botaoSelecionado = document.querySelector(".selecionado");

        botaoSelecionado.classList.remove("selecionado");

        // Passo 4
        botao.classList.add("selecionado");

        // Passo 5
        const imagemAtiva = document.querySelector(".ativa");
        imagemAtiva.classList.remove("ativa");

        // Passo 6
        imagens[indice].classList.add("ativa");

        // Passo 7
        const informacoesAtiva = document.querySelector(".informacoes.ativa");
        informacoesAtiva.classList.remove("ativa");

        // Passo 8
        informacoes[indice].classList.add("ativa");
    });

    botao.addEventListener("mouseover", () => {
        const botaoSelecionado = document.querySelector(".selecionado");

        botaoSelecionado.classList.remove("selecionado");

        botao.classList.add("selecionado");
    });
});