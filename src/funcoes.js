function adicao(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b != 0) {
        return a / b;
    } else {
        throw new Error('Não é possível dividir por zero!')
    }
}

module.exports = { adicao, subtracao, multiplicacao, divisao };