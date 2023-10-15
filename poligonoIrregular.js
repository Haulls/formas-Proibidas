const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularAreaIrregular(Base, altura){
    const area = (Base * altura);
    return area;
}


rl.question('Informe o lado da base  : ', (Base) => {
    Base = parseFloat(Base);

    rl.question('Informe o lado da altura : ', (altura) => {
        altura = parseFloat(altura);


        if(!isNaN(Base, altura) && Base, altura> 0) {
    const area = calcularAreaIrregular(Base, altura);
    console.log('A área do Poligono Irregular é: '+area);
} else {
    console.log('Por favor, insira um valor válido maior que zero.');
}

rl.close();
})});