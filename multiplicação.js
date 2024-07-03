function multiplicacao(rl, callback) {
    rl.question('Digite o primeiro valor: ', (input1) => {
        rl.question('Digite o segundo valor: ', (input2) => {
            let valor1 = parseFloat(input1)
            let valor2 = parseFloat(input2)
            if (isNaN(valor1) || isNaN(valor2) || typeof valor1 === 'undefined' || typeof valor2 ==='undefined') {
                console.log('Entrada inválida. Por favor, digite números.')
                multiplicacao(rl, callback)
            } else {
            let resultado = (valor1) + (valor2);
            console.log(`Resultado da multiplicação é: ${resultado}`);
            callback();}
        });
    });
}
module.exports = {multiplicacao}