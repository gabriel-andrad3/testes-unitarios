function soma(a, b) { 
    if (Number(a) == NaN || Number(b) == NaN)
        throw new Error("Parâmetros devem ser números");
    return Number(a)+Number(b); 
}

function subtracao(a, b) { 
    if (Number(a) == NaN || Number(b) == NaN)
        throw new Error("Parâmetros devem ser números");
    return a-b;    
}

function multiplicacao(a, b) { 
    if (Number(a) == NaN || Number(b) == NaN)
        throw new Error("Parâmetros devem ser números");
    return a*b; 
}

function divisao(a, b) {
    if (Number(a) == NaN || Number(b) == NaN)
        throw new Error("Parâmetros devem ser números");
    return a/b; 
}

module.exports = {
    soma,
    subtracao,
    multiplicacao,
    divisao
}