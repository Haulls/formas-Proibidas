const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularAreaPrisma(Base,lateral,alturab, ){
    const area = (Base * alturab) * lateral;
    return area;
}


rl.question('Informe o número de lados da base : ', (Base) => {
    Base = parseFloat(Base);
    rl.question('Informe o valor da area lateral : ', (lateral) => {
        lateral = parseFloat(lateral);
        rl.question('Informe o valor da altura da base : ', (alturab) => {
            alturab = parseFloat(alturab);


    if(!isNaN(BaBase,lateral,alturabse) && Base,lateral,alturab > 0) {
    const area = calcularAreaPrisma(Base,lateral,alturab, );
    console.log('A área do Prisma é: '+area);
} else {
    console.log('Por favor, insira um valor maior que zero.');
}

rl.close();
})})});