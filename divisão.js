function divisao(rl, callback) {
    rl.question('Digite o dividendo: ', (input1) => {
        rl.question('Digite o divisor: ', (input2) => {
            let valor1 = parseFloat(input1)
            let valor2 = parseFloat(input2)
            if (isNaN(valor1) || isNaN(valor2) || typeof valor1 === 'undefined' || typeof valor2 ==='undefined') {
                console.log('Entrada inválida. Por favor, digite números.')
                divisao(rl, callback)
            } else if(parseFloat(valor2) === 0) {
                console.log('Não é possível dividir por zero.');
            } else {
                let resultado = (valor1) / (valor2);
                console.log(`Resultado da divisão é: ${resultado}`);
                callback()
            }    
        });
    });
}
module.exports = {divisao}
