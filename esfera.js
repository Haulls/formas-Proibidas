const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularAreaEsfera(raio){
    const area = 4 * Math.PI * Math.pow(raio,2);
    return area;
}


rl.question('Informe o raio da Esfera : ', (raio) => {
    raio = parseFloat(raio);


if(!isNaN(raio) && raio > 0) {
    const area = calcularAreaEsfera(raio);
    console.log('A área da esfera com raio é: '+area);
} else {
    console.log('Por favor, insira um raio válido maior que zero.');
}

rl.close();
});