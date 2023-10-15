const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularAreaCilindro(raio,altura){
    const area = Math.PI*2*raio*altura;
    return area;
}


rl.question('Informe o raio : ', (raio) => {
    raio = parseFloat(raio);

    rl.question('Informe a altura : ', (altura) => {
        altura = parseFloat(altura);
if(!isNaN(raio,altura) && raio,altura > 0) {
    const area = calcularAreaCilindro(raio,altura);
    console.log('A área do cilindro com raio é: '+area);
} else {
    console.log('Por favor, insira um número válido maior que zero.');
}

rl.close();
})});