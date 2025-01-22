document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.btn-toggle'); // Seleciona todos os botões

    toggles.forEach(button => {
        button.addEventListener('click', () => {
            const conteudo = button.previousElementSibling; // O conteúdo está logo antes do botão
            if (conteudo.style.maxHeight === "0px" || !conteudo.style.maxHeight) {
                conteudo.style.maxHeight = "none"; // Exibe o conteúdo completo
                button.innerText = "Exibir menos"; // Muda o texto do botão
            } else {
                conteudo.style.maxHeight = "0px"; // Oculta o conteúdo
                button.innerText = "Exibir tudo"; // Muda o texto do botão
            }
        });
    });
});
