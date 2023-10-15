const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularAreaTrapezio(BaseM, base, altura){
    const area = (BaseM + base)*altura / 2;
    return area;
}


rl.question('Informe o valor da Base Maior : ', (BaseM) => {
    BaseM = parseFloat(BaseM);
    rl.question('Informe o valor da Base Menor : ', (base) => {
        base = parseFloat(base);
        rl.question('Informe o valor da altura : ', (altura) => {
            altura = parseFloat(altura);

    if(!isNaN(BaseM, base, altura) && BaseM, base, altura > 0) {
    const area = calcularAreaTrapezio(BaseM, base, altura);
    console.log('A área do Trapézio é: '+area);
} else {
    console.log('Por favor, insira um valor maior que zero.');
}

rl.close();
})})});