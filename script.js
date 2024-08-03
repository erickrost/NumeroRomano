//cada algarismo e seu correspondente
const romans = {
    'i': 1,
    'v': 5,
    'x': 10,
    'l': 50, 
    'c': 100,
    'd': 500,
    'm': 1000
};

//mapeia os numeros com os algarismos
const romanValues = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
];

//converter números romanos em arábicos
function convertRomanToArabic(roman) {
    let total = 0;        //numro que esta passando 
    let prevValue = 0;    //numero que ja passou

    //passa de algarismo por algarismo de tras pra frente
    for (let i = roman.length - 1; i >= 0; i--) {
        const char = roman[i];           //pega o numero atual
        const value = romans[char];      //ve se esse numero atual tem corresondente no objeto romans

        //se nao acha correspondente no objeto romans da invalido
        if (!value) {
            return "Inválido";
        }
        
        //se o valor atual for maior ou igual ao valor do caractere anterior adiciona ao total
        if (value >= prevValue) {
            total += value;
        } else {
            //se nao subtrai o valor do total
            total -= value;
        }

        //vai atualizando o valor anterior 
        prevValue = value;
    }

    return total;  //retorna o total convertido
}

//função para converter números arábicos em romanos
function convertArabicToRoman(num) {
    //ve se o numero esta fora do intervalo valido para conversao
    if (num <= 0 || num > 3999) {
        return "Inválido";
    }
    
    let result = '';  //acumula o algarismo romano 

    //ve na array romanValues para construir a string romana
    for (let i = 0; i < romanValues.length; i++) {
        const { value, numeral } = romanValues[i];  //
        while (num >= value) {
            result += numeral;  //add o numero no resultado
            num -= value;       //subtrai o valor do numero
        }
    }
    
    return result;  //retorna o algarismo resultado
}

//converter romano para arabico
const btn1 = document.getElementById("button");  
const romanEl1 = document.getElementById("numeroRomano");  
const realEl1 = document.getElementById("numeroReal");  

btn1.onclick = function () {
    const value = romanEl1.value.toLowerCase();  //pega o valor do campo de entrada e converte para minuscula
    const result = convertRomanToArabic(value);  //converte o valor romano para arabico
    realEl1.textContent = result;  //atualiza o campo de saida com o resultado
}

//converte arabico em romano
const btn2 = document.getElementById("button2");  
const realEl2 = document.getElementById("numeroReall");  
const romanEl2 = document.getElementById("numeroRomanoo");  

btn2.onclick = function () {
    const value = parseInt(realEl2.value, 10);  //pega valor do campo de entrada e converte para inteiro
    const result = convertArabicToRoman(value);  //converte o valor arabico para romano
    romanEl2.textContent = result;  //atualiza o campo de saída com o resultado
}
