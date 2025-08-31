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

// Adiciona evento ao botão "Enviar Pedido via WhatsApp"
document.getElementById('enviar-whatsapp').addEventListener('click', () => {
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

    // Monta a lista de pedidos
    let listaPedidos = '';
    if (quantidadeSalmao > 0) listaPedidos += `- ${quantidadeSalmao}x Onigiri de Salmão\n`;
    if (quantidadeAtum > 0) listaPedidos += `- ${quantidadeAtum}x Onigiri de Atum com Maionese\n`;
    if (quantidadeHotSalmao > 0) listaPedidos += `- ${quantidadeHotSalmao}x Onigiri Hot Salmão\n`;
    if (quantidadeKani > 0) listaPedidos += `- ${quantidadeKani}x Onigiri de Kani\n`;

    // Nome do cliente (pode ser capturado de um input adicional)
    const nomeCliente = prompt("Digite seu nome:");

    // Número do WhatsApp
    const numeroWhatsApp = "918429-5482";

    // Mensagem formatada
    const mensagem = `Olá, meu nome é ${nomeCliente}. Eu vim pelo site e estou fazendo um pedido de:\n${listaPedidos}\nTotal: R$ ${total.toFixed(2)}`;

    // Codifica a mensagem para URL
    const mensagemCodificada = encodeURIComponent(mensagem);

    // Redireciona para o WhatsApp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
    window.open(urlWhatsApp, '_blank');
});