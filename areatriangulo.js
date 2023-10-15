const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularAreaTriangulo(Base, altura){
    const area = (Base * altura) / 2;
    return area;
}


rl.question('Informe o lado da base  : ', (Base) => {
    Base = parseFloat(Base);

    rl.question('Informe o lado da altura : ', (altura) => {
        altura = parseFloat(altura);


        if(!isNaN(Base, altura) && Base, altura> 0) {
    const area = calcularAreaTriangulo(Base, altura);
    console.log('A área do triângulo é: '+area);
} else {
    console.log('Por favor, insira um valor válido maior que zero.');
}

rl.close();
})});