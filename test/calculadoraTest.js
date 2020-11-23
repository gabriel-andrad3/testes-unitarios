const assert = require('chai').assert;
const calculadora = require('../src/calculadora');

describe('Calculadora', function() {
    context('com números corretos', function() {
        it('deve retorna a soma de dois números', function() {
            assert.equal(calculadora.soma(3,2), 5);
        })
    })
})