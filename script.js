// declaracao das variaveis usando om
const btn = document.getElementById("button");
const romanEl = document.getElementById("numeroRomano");
const realEl = document.getElementById("numeroReal");

// objeto com as caracteristas e valores de cada algarismo
const romans = {
    'i': 1,
    'v': 5,
    'x': 10,
    'l': 50, 
    'c': 100,
    'd': 500,
    'm': 1000
};

function convertRomanToArabic(roman) {
    let total = 0;
    let prevValue = 0;

    // isso vai ler o input todo sem dar break
    for (let i = roman.length - 1; i >= 0; i--) { //vai passar de caracter por caracter de trás pra frente
        const char = roman[i]; //define o caracter atual
        const value = romans[char]; // vai ver no objeto ver qual o correspondente

        if (!value) {
            return "Inválido"; // ! quer dizer nao, entao se nao for nenhuma das caracteristicas declaradas ele da invalido
        }
        if (value >= prevValue) {
            total += value; // adiciona o valor se for maior ou igual ao valor anterior
        } else {
            total -= value; // subtrai o valor se for menor que o valor anterior
        }

        prevValue = value; // isso eu acho que seja pra parar de tentar somar ou subtrair os numeros
    }

    return total; // retorna o valor total da funcao
}

btn.onclick = function () {
    const value = romanEl.value.toLowerCase(); // variavel value igual ao input em minusculo
    const result = convertRomanToArabic(value); // vai pegar a variavel daqui da linha e cima e vai usar a funcao nela, o resultado é a variavel value
    realEl.textContent = result; // pega a div e innera o resultado
}