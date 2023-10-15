const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularAreaRetangulo(Lado, lado1){
    const area = (Lado * lado1);
    return area;
}


rl.question('Informe o lado da base  : ', (Lado) => {
    Lado = parseFloat(Lado);

    rl.question('Informe o lado da altura : ', (lado1) => {
        lado1 = parseFloat(lado1);


        if(!isNaN(Lado,lado1) && Lado,lado1> 0) {
    const area = calcularAreaRetangulo(Lado, lado1);
    console.log('A área do retângulo é: '+area);
} else {
    console.log('Por favor, insira um valor válido maior que zero.');
}

rl.close();
})});