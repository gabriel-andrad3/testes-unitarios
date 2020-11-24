function soma(a, b) { return a+b; }

function subtracao(a, b) { 
    if (typeof(a) != "number" || typeof(b) != "number")
        throw "Parâmetros devem ser números";
    return a-b;
}

function multiplicacao(a, b) { 
    if (typeof(a) != "number" || typeof(b) != "number")
        throw "Parâmetros devem ser números";
    return a*b; 
}

function divisao(a, b) { return a/b; }

module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao
}