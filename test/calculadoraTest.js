const assert = require('chai').assert;
const calculadora = require('../src/calculadora');

describe('Calculadora', function() {
    
    context('soma', function() {
        it('com números positivos deve ser OK', function() {
            assert.equal(calculadora.soma(3,2), 5);
        })

        it('com números negativos deve ser OK', function() {
            assert.equal(calculadora.soma(-3,2), -1);
        })

        it('não deve aceitar letras', function() {
            assert.equal(calculadora.soma(-3,"-2"), -5);
        })
    })

    context('subtracao', function() {        
        it('com números positivos deve ser OK', function() {
            const result = calculadora.subtracao(3,2);
            assert.equal(result, 1);
        })

        it('com números negativos deve ser OK', function() {
            const result = calculadora.subtracao(-3,2);
            assert.equal(result, -5);
        })

        it('não deve aceitar letras', function() {
            try {
                calculadora.subtracao(-3,"-2");
            } catch(error) {
                assert.equal(error.message, 'Parâmetros devem ser números');
            }
        })                 
    })

    context('multiplicacao', function() {
        it('com números positivos deve ser OK', function() {
            assert.equal(calculadora.multiplicacao(3,2), 6);
        })

        it('com números negativos deve ser OK', function() {
            assert.equal(calculadora.multiplicacao(-3,-2), 6);
        })

        it('não deve aceitar letras', function() {
            try {
                calculadora.multiplicacao(-3,"-2");
            }
            catch (error) {
                assert.equal(error.message, "Parâmetros devem ser números");
            }            
        })                   
    })

    context('divisao', function() {
        it('com números positivos deve ser OK', function() {
            assert.equal(calculadora.divisao(3,2), 1.5);
        })

        it('com números negativos deve ser OK', function() {
            assert.equal(calculadora.divisao(-3,-2), 1.5);
        })

        it('não deve aceitar letras', function() {
            try {
                calculadora.multiplicacao(-3,"-2");
            }
            catch (error) {
                assert.equal(error.message, "Parâmetros devem ser números");
            }              
        })    
          
        it('com divisor 0 deve ser Infinito', function() {
            assert.equal(calculadora.divisao(-3,0), -Infinity);
        }) 
    })
})