let numeros = [5, 2, 4, 1, 3];

// 1. filtrar os numeros maiores ou iguais que 'minValue',
// somando 'increment' a eles no processo;
// mapAndFilter([5, 2, 4, 1, 3], 4, 10) => [15, 14]
function mapAndFilter(list, minValue, increment) {
  let result = [];
  for (let i = 0; i < list.length; i++) {
    let el = list[i];
    if (el >= minValue) {
      result.push(el + increment);
    }
  }

  return result;
}

// 2. para uma lista de numeros, retornar outra lista com o valor mínimo
// e o valor máximo, respectivamente
// ex:  minAndMax([1,2,3,4]) => [1,4]
function minAndMax(numbers) {
  let min = numbers[0];
  let max = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    let el = numbers[i];
    if (el < min) {
      min = el;
    }

    if (el > max) {
      max = el;
    }
  }

  return [min, max];
}

// 3. verificar se em um dado texto existem palavras consecutivas com
// a mesma quantidade de vogais;

//  sameVocalsQuantity('oi ei') => true
//  sameVocalsQuantity('oi paralepidedo ei') => false
function sameVocalsQuantity(text) {
  let result = false;
  let words = text.split(" "); // ['oi', 'ei'];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let nextWord = words[i + 1] || "";

    if (vocalsQuantity(word) === vocalsQuantity(nextWord)) {
      result = true;
      break;
    }
  }

  return result;
}

function vocalsQuantity(word) {
  let vocals = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    let character = word[i];
    let isCharacterVocal = vocals.includes(character.toLowerCase());
    if (isCharacterVocal) {
      count = count + 1;
    }
  }

  return count;
}

sameVocalsQuantity("oi paralepidedo ei");

let nextWord = undefined || "";
console.log(nextWord);
