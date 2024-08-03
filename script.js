class RomanToArabicConverter {
  //cada algarismo e seu correspondente em uma propriedade privada (só pode ser acessada dentro da classe, por fora dela não pode ser acessada)
  #romans = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000,
  }

  //converter números romanos em arábicos
  convertRomanToArabic(roman) {
    let total = 0 //numro que esta passando
    let prevValue = 0 //numero que ja passou

    //passa de algarismo por algarismo de tras pra frente
    for (let i = roman.length - 1; i >= 0; i--) {
      const char = roman[i] //pega o numero atual
      const value = this.#romans[char] //ve se esse numero atual tem corresondente no objeto romans

      //se nao acha correspondente no objeto romans da invalido
      if (!value) {
        return "Inválido"
      }

      //se o valor atual for maior ou igual ao valor do caractere anterior adiciona ao total
      if (value >= prevValue) {
        total += value
      } else {
        //se nao subtrai o valor do total
        total -= value
      }

      //vai atualizando o valor anterior
      prevValue = value
    }

    return total //retorna o total convertido
  }
}

class ArabicToRomanConverter {
  //mapeia os numeros com os algarismos
  #romanValues = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ]

  //função para converter números arábicos em romanos
  convertArabicToRoman(num) {
    //ve se o numero esta fora do intervalo valido para conversao
    if (num <= 0 || num > 3999) {
      return "Inválido"
    }

    let result = "" //acumula o algarismo romano

    //ve na array romanValues para construir a string romana
    for (let i = 0; i < this.#romanValues.length; i++) {
      const { value, numeral } = this.#romanValues[i] //
      while (num >= value) {
        result += numeral //add o numero no resultado
        num -= value //subtrai o valor do numero
      }
    }

    return result //retorna o algarismo resultado
  }
}

//converter romano para arabico
const RomanToArabicElements = {
  InputEl: document.getElementById("roman-to-arabic-input"),
  ButtonEl: document.getElementById("roman-to-arabic-button"),
  ResultEl: document.getElementById("roman-to-arabic-result"),
}

RomanToArabicElements.ButtonEl.onclick = function () {
  const romanToArabicConverter = new RomanToArabicConverter() //cria uma instância da classe

  const value = RomanToArabicElements.InputEl.value.toLowerCase() //pega o valor do campo de entrada e converte para minuscula
  const result = romanToArabicConverter.convertRomanToArabic(value) //converte o valor romano para arabico

  RomanToArabicElements.ResultEl.textContent = result //atualiza o campo de saida com o resultado
}

//converte arabico em romano
const ArabicToRomanElements = {
  InputEl: document.getElementById("arabic-to-roman-input"),
  ButtonEl: document.getElementById("arabic-to-roman-button"),
  ResultEl: document.getElementById("arabic-to-roman-result"),
}

ArabicToRomanElements.ButtonEl.onclick = function () {
  const romanToArabicConverter = new ArabicToRomanConverter() //cria uma instância da classe

  const value = parseInt(ArabicToRomanElements.InputEl.value, 10) //pega valor do campo de entrada e converte para inteiro
  const result = romanToArabicConverter.convertArabicToRoman(value) //converte o valor arabico para romano

  ArabicToRomanElements.ResultEl.textContent = result //atualiza o campo de saída com o resultado
}
