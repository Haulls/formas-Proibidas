const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularAreaQuadrado(Base){
    const area = (Base * Base);
    return area;
}


rl.question('Informe o lado do quadrado : ', (Base) => {
    Base = parseFloat(Base);


    if(!isNaN(Base) && Base > 0) {
    const area = calcularAreaQuadrado(Base);
    console.log('A área do Quadrado é: '+area);
} else {
    console.log('Por favor, insira um valor maior que zero.');
}

rl.close();
});