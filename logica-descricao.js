const produtos = {
    "Nome do Perfume": {
        descricao: "Uma descrição mais elaborada do Nome do Perfume.",
        preco: "R$ 149,90",
        imagem: "assets/images/perfume.png"
    },
    "Outro Perfume": {
        descricao: "Descrição do Outro Perfume.",
        preco: "R$ 129,90",
        imagem: "assets/images/outro_perfume.png"
    }
    // Adicione mais produtos conforme necessário
};

const produtoNome = params.get('produto');

if (produtoNome && produtos[produtoNome]) {
    document.querySelector('.container-finalizacao h3').textContent = produtoNome;
    document.querySelector('.container-finalizacao p').textContent = produtos[produtoNome].descricao;
    document.querySelector('.container-finalizacao .produto-img').src = produtos[produtoNome].imagem;
    document.querySelector('.container-finalizacao .preco').textContent = produtos[produtoNome].preco;
}
