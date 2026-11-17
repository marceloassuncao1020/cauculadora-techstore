function calcularDescontoPagamento(formaPagamento) {
    switch (formaPagamento) {
        case 'pix': return 0.15;
        case 'boleto': return 0.10;
        case 'cartao-vista': return 0.05;
        default: return 0;
    }
}

function calcularValorEntrega(tipoEntrega) {
    switch (tipoEntrega) {
        case 'padrao': return 12;
        case 'expressa': return 25;
        case 'super-expressa': return 45;
        default: return 0;
    }
}

function formatarMoeda(valor) {
    return 'R$ ' + valor.toFixed(2).replace('.', ',');
}

document.getElementById('form-orcamento').addEventListener('submit', function(event) {
    event.preventDefault();

    const valor = Number(document.getElementById('valor-produto').value);
    const pagamento = document.getElementById('forma-pagamento').value;
    const entrega = document.getElementById('tipo-entrega').value;

    const desconto = valor * calcularDescontoPagamento(pagamento);
    const frete = calcularValorEntrega(entrega);
    const total = valor - desconto + frete;

    document.getElementById('res-valor-produto').textContent = formatarMoeda(valor);
    document.getElementById('res-desconto').textContent = formatarMoeda(desconto);
    document.getElementById('res-frete').textContent = formatarMoeda(frete);
    document.getElementById('res-total').textContent = formatarMoeda(total);

    document.getElementById('painel-resultado').classList.remove('hidden');
});
