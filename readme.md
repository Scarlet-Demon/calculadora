# Sistema Calculadora
## Introdução 

Criei um sistema baseado numa calculadora, com todas as operações matemáticas. 

Fiz o sistema, declarando o comando `readlina` para salvar todas as informações na biblioteca, a partir disso criei a entrada e a saida de informações do banco de dados do sistema.

Adicionei um `Menu` para que o usuário possa escolher qual função ele deseja utilizar, coloquei um mensagem de `Boas Vindas` ao usuário e adicionei uma pergunta para levar o usuário a pensar em qual função ele deseja usar.

## Desenvolvimento

Pensando no menu, criei funções que quando o usuário escolher ele será direcionado para a função escolhida.

Em cada função. ele irá pergunta os valores para o usuário e depois fara a operação escolhida, seja ela `soma`, `subtração`, `multiplicação`, `divisão` e `porcentagem`.

### Função Soma:
Como explicado a cima, em cada função o codígo perguntará para o usuário os valores que ele deseja inserir.

Nesta função, o codígo irá analizar as informações que o usuário adicionar e as irá `somar` e em seguida irá mostrar o resultado dessa soma. Exemplo: `5 + 2 = 7`
```javascript
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
```
### Função Subtração:
Nesta função, o codígo irá analizar as informações que o usuário adicionar e as irá `subtrair` e em seguida irá mostrar o resultado dessa subtração. Exemplo: `5 - 2 = 3`
```javascript
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
```
### Função Multiplicação:
Nesta função, o codígo irá analizar as informações que o usuário adicionar e as irá `multiplicar` e em seguida irá mostrar o resultado dessa multiplicação. Exemplo: `5 * 2 = 10`
```javascript
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
```
### Função Divisão:
Nesta função, o codígo irá analizar as informações que o usuário adicionar e as irá `dividir` e em seguida irá mostrar o resultado dessa multiplicação. Exemplo: `10 / 2 = 5`
```javascript
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
```
### Função Porcentagem:
Nesta função, o código irá analizar as informações que o usuário adicionar e as irá fazer a `porcentagem` e em seguida irá mostrar o resultado dessa multiplicação. Exemplo: `x = (20 / 100) * 50`
```javascript
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
```
## Alterações no Código

Alterei as linhas de código nas `Funções` para que elas não reconhecam as letras e as adicione nas operações.
```javascript
let valor1 = parseFloat(input1)
            let valor2 = parseFloat(input2)
            if (isNaN(valor1) || isNaN(valor2) || typeof valor1 === 'undefined' || typeof valor2 ==='undefined'){
                console.log('Entrada inválida. Por favor, digite números.')
                função(rl, callback)
            }
```
Ao fazer isso, é impresso no terminal uma mensagem com a seguinte infformação: `Entrada inválida. Por favor, digite números.`
Depois que essa pergunta é impressa o códifo retornará para a função para que sejá insetida as informações corretamente..
