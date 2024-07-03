function porcentagem(rl, callback) {
    rl.question('Digite o valor total: ', (input1) => {
        rl.question('Digite a porcentagem a ser calculada: ', (input2) => {
            let valor1 = parseFloat(input1)
            let valor2 = parseFloat(input2)
            if (isNaN(valor1) || isNaN(valor2) || typeof valor1 === 'undefined' || typeof valor2 ==='undefined') {
                console.log('Entrada inválida. Por favor, digite números.')
                porcentagem(rl, callback)
            } else {
                let resultado = ((valor1) * (valor2)) / 100;
                console.log(`Resultado da porcentagem: ${resultado}`);
                callback();
            }
        });
    });
}
module.exports = {porcentagem}