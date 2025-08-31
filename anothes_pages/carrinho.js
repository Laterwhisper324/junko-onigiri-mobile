// Adiciona evento ao botão "Calcular Total"
document.getElementById('calcular-total').addEventListener('click', () => {
    // Preços dos onigiris
    const precos = {
        salmao: 12,
        atum: 8,
        hotSalmao: 15,
        kani: 8
    };

    // Quantidades selecionadas
    const quantidadeSalmao = parseInt(document.getElementById('sabor-salmao').value) || 0;
    const quantidadeAtum = parseInt(document.getElementById('sabor-atum').value) || 0;
    const quantidadeHotSalmao = parseInt(document.getElementById('sabor-hot-salmao').value) || 0;
    const quantidadeKani = parseInt(document.getElementById('sabor-kani').value) || 0;

    // Cálculo do total
    const total = 
        (quantidadeSalmao * precos.salmao) +
        (quantidadeAtum * precos.atum) +
        (quantidadeHotSalmao * precos.hotSalmao) +
        (quantidadeKani * precos.kani);

    // Atualiza o preço total no HTML
    document.getElementById('total-preco').textContent = `Total: R$ ${total.toFixed(2)}`;
});