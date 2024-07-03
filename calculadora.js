const readline =require ('readline')
const adição = require('./soma')
const subtrair = require('./subtração')
const multiplicar = require('./multiplicação')
const dividir = require('./divisão')
const porcentar = require('./porcentagem')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

exibirMenu()
function exibirMenu() {
    console.log(`
    ===Bem-Vindo a sua Calculadora Pessoal===
    Qual Função você deseja usar:
    + (soma)
    - (subtração)
    * (multiplicação)
    / (divisão)
    % (porcentagem)
    ! sair
    `);
    
    rl.question('Escolha uma Opção: ', (opcao) => {
        switch (opcao) {
            case '+':
                adição.soma(rl, exibirMenu)
                break;
            case '-':
                subtrair.subtracao(rl, exibirMenu)
                break;
            case '*':
                multiplicar.multiplicacao(rl, exibirMenu)
                break;
            case '/':
               dividir.divisao(rl, exibirMenu)
                break;
            case '%':
                 porcentar.porcentagem(rl, exibirMenu)
                 break
            case '!':
                rl.close()
                break;
            default:
                console.log('Opção inválida, tente novamente.');
                exibirMenu();
                break;
        }
    })
}

function soma(rl, callback) {
    rl.question('Digite o primeiro valor: ', (input1) => {
        rl.question('Digite o segundo valor: ', (input2) => {
            let valor1 = parseFloat(input1)
            let valor2 = parseFloat(input2)
            if (isNaN(valor1) || isNaN(valor2) || typeof valor1 === 'undefined' || typeof valor2 ==='undefined') {
                console.log('Entrada inválida. Por favor, digite números.')
                soma(rl,callback)
            } else {
            let resultado = (valor1) + (valor2);
            console.log(`Resultado da soma é: ${resultado}`);
            callback();
        }
        });
    });
}
module.exports = {soma}

function subtracao(rl, callback) {
    rl.question('Digite o primeiro valor: ', (input1) => {
        rl.question('Digite o segundo valor: ', (input2) => {
            let valor1 = parseFloat(input1)
            let valor2 = parseFloat(input2)
            if (isNaN(valor1) || isNaN(valor2) || typeof valor1 === 'undefined' || typeof valor2 ==='undefined') {
                console.log('Entrada inválida. Por favor, digite números.')
                subtracao(rl, callback)
            } else {
            let resultado = (valor1) - (valor2);
            console.log(`Resultado da subtração é: ${resultado}`);
            callback();}
        });
    });
}
module.exports = {subtracao}

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