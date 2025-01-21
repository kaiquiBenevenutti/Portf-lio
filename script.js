function toggleTexto() {
    var conteudo = document.querySelector('.conteudo');
    var btnToggle = document.querySelector('.btn-toggle');

    if (conteudo.style.maxHeight === "0px") {
        conteudo.style.maxHeight = "none";  // Exibe o conteúdo completo
        btnToggle.innerText = "Exibir menos";  // Muda o texto do botão
    } else {
        conteudo.style.maxHeight = "0px";  // Oculta o conteúdo novamente
        btnToggle.innerText = "Exibir tudo";  // Muda o texto do botão
    }
}
