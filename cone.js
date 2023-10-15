const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularAreaCone(raio,geratriz){
    const area = Math.PI*raio(raio+geratriz);
    return area;
}


rl.question('Informe o valor do raio : ', (raio) => {
    raio = parseFloat(raio);
        rl.question('Informe o valor da altura : ', (geratriz) => {
            geratriz = parseFloat(geratriz);

    if(!isNaN(raio,geratriz) && raio,geratriz > 0) {
    const area = calcularAreaCone(raio,geratriz);
    console.log('A área do Cone é: '+area);
} else {
    console.log('Por favor, insira um valor maior que zero.');
}

rl.close();
})});