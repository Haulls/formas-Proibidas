const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularAreaPoligonoregular(lado,lados){
    const area = (( Math.pow(lado,2) * lados) / (4*Math.tan(Math.PI/lados))) ;
    return area;
}


rl.question(' Informe o lado : ', (lado) => {
    lado = parseFloat(lado);
    rl.question('Informe a quantidade de lados : ', (lados) => {
        lados = parseFloat(lados);
        
    if(!isNaN(lado,lados) && lado,lados > 0) {
    const area = calcularAreaPoligonoregular(lado,lados)
    console.log('A área do Poligono Regular é: '+area);
} else {
    console.log('Por favor, insira um valor maior que zero.');
}

rl.close();
})});