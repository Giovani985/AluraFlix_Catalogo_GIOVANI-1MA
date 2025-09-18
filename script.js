const botoesProximo = document.querySelectorAll('.btn-proximo');
const botoesVoltar = document.querySelectorAll('.btn-voltar'); // Adicionamos a seleção dos botões de voltar
let passoAtual = 0; // Controla o passo atual para facilitar a navegação

function mudarPasso(novoPasso) {
    const passos = document.querySelectorAll('.passo');
    
    // Esconde todos os passos
    passos.forEach(passo => {
        passo.classList.remove('ativo');
    });

    // Mostra o passo desejado
    const proximoElemento = document.getElementById(`passo-${novoPasso}`);
    if (proximoElemento) {
        proximoElemento.classList.add('ativo');
        passoAtual = novoPasso; // Atualiza o passo atual
    }
}

// Evento para avançar
botoesProximo.forEach(button => {
    button.addEventListener('click', function() {
        const proximo = this.getAttribute('data-proximo');
        mudarPasso(proximo);
    });
});

// Evento para voltar
botoesVoltar.forEach(button => {
    button.addEventListener('click', function() {
        const anterior = this.getAttribute('data-anterior');
        mudarPasso(anterior);
    });
});