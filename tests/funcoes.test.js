const { adicao, subtracao, multiplicacao, divisao } = require('../src/funcoes');

describe('funcoes', () => {
    test('Adição, dois mais três é igual a cinco!', () => {
        expect(adicao(2, 3)).toBe(5);
    });

    test('Subtração, seis menos dois é igual a quatro!', () => {
        expect(subtracao(6, 2)).toBe(4);
    });

    test('Multiplicação, cinco vezes cinco é igual a vinte e cinco!', () => {
        expect(multiplicacao(5, 5)).toBe(25);
    });

    test('Divisão, vinte e um dividido por três é igual a sete!', () => {
        expect(divisao(21, 3)).toBe(7);
    });

    test('Divisão por zero, nove dividido por zero retorna a mensagem de erro!', () => {
        expect(() => divisao(9, 0)).toThrow('Não é possível dividir por zero!');
    });
});