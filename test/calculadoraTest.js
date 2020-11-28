const assert = require('chai').assert;
const calculadora = require('../src/calculadora');

describe('Calculadora', function() {
    context('com números corretos', function() {
        it('deve retorna a soma de dois números', function() {
            assert.equal(calculadora.soma(3,2), 5);
        })

        it('deve retorna a subtracao de dois números', function() {
            assert.equal(calculadora.subtracao(3,2), 1);
        })

        it('deve retorna a multiplicacao de dois números', function() {
            assert.equal(calculadora.multiplicacao(3,2), 6);
        })
    })
})