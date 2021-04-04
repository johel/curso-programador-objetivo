// 1. Criar uma função que multiplica uma lista de numeros por dois
// ex: multiplyBy2([1,3]) => [2,6]
function multiplyBy2() {}

// 2. Criar uma função que multiplica numeros pares por dois
// ex: multiplyEvenBy2([1, 3, 2]) => [1, 4, 6]
function multiplyEvenBy2() {}

// 3. Criar uma função que filtra multiplica numeros pares por dois
// ex: filterAndmultiplyEvenBy2([1, 3, 2, 4]) => [4, 8]
function filterAndMultiplyEvenBy2() {}

// 4. Encontre o primeiro elemento em uma lista de numeros cujo valor é maior que N.
function findFirstGreaterThanN() {}

// 5. Encontre o último elemento em uma lista de numeros cujo valor é maior que N.
function findLastGreaterThanN() {}

// 6. Encontre o primeiro elemento em uma lista de numeros, se houver,
// cujo valor é igual a soma dos dois numeros anteriores;
function findFirstEqualToPriorsSum() {}

// 7. Verifique se todos os numeros de uma lista sao maiores que um valor N qualquer.
function everyGreaterThan() {}

// 8. Verifique se algum numero na lista é maior que um valor N qualquer.
function someGreaterThan() {}

// 9. Conte quantas palavras são anagramas de uma dada palavra em um texto.
function countWordAnagrams(givenWord, text) {}

// 10. Criar uma função que filtra multiplica numeros pares por dois
// e soma os elementos;
// ex: filterAndmultiplyEvenBy2Sum([1, 3, 2, 4]) => 12
function filterAndmultiplyEvenBy2Sum() {}

// 11. Conte a quantidade de vogais que aparecem em uma palavra
function countVocalsInSingleWord(word) {}

// 12. Conte a quantidade de vogais que aparecem em um texto
function countVocalsInText(text) {}

// 13. Conte a quantidade de palavras em um texto que possuem pelo menos uma quantidade
// n de vogais;
function countNVocalsMinWords(text) {}

// 14. Criar uma função que retorna o resultado da subtração do primeiro elemento
// pela soma do restante dos elementos;
// ex: firstElementLessOthers([10, 2, 2]) => 6
function firstElementLessOthers() {}

// 15. Criar uma função que retorna o resultado da subtração do primeiro elemento
// pela soma do restante dos elementos divisíveis por N;
function firstElementLessMultiplesOfN() {}

// 16. Para uma lista de numeros, faça a soma dos elementos pares
// subtraída da soma dos elementos ímpares;
// ex: SumEvenSubtractedBySumOdd([1,4,5,7]) => -9
function sumEvenSubtractedBySumOdd() {}

// 17. Para uma dado texto, retorne apenas as palavras que possuem as
// vogais A, E, U ao mesmo tempo, minúsculas ou maiúsculas. Assuma
// que as vogais do texto não possuem acento.
// ex: aeuWords("saudades de você") => ["saudades"]
function aeuWords() {}

// 18. Para uma dada lista de numeros, retorne uma outra, cujos elementos
// representam a soma dos numeros de 1 até o número original
// ex: mapSum([1,3,5]) => [1, 6, 15];
// a soma dos numeros de 1 a 5 é 15, de 1 a 3 é 6, de 1 a 1 é 1;
function mapSum() {}

// 19. Encontre o mínimo e o máximo dos numeros maiores que minValue
// e menores que maxValue, de uma dada lista de numeros
// ex: minAndMaxOnRange([1,2,3,4,5,6,7], 2, 6) => [3,5]
function minAndMaxOnRange() {}

// 20. Criar uma função que recebe um array de preços e retorna um array de três arrays.
// O primeiro array são de preços menores que 10;
// O segundo de preços entre 10 e 100;
// O terceiro maiores que 100;
function classifyPrices() {}

// 21. Criar uma função que recebe um array de preços e retorna um array de três arrays.
// O primeiro array são de preços menores que 10;
// O segundo de preços entre 10 e 100;
// O terceiro maiores que 100;
// IMPORTANTE: os preços em cada um dos três arrays devem estar em ordem crescente
// Dica: usar o método sort presentes nos arrays do javaScript;
function classifyAndSortPrices() {}

// 22. Calcule a soma dos digitos de um numero
// sumDigits(111) => 3;
// Dica: primeiro passo é passar o numero para string
function sumDigits() {}

// 23. Conte a quantidade de dígitos de um numero
function countDigits() {}

// 24. Calcule o máximo divisor comum de três numeros inteiros positivos quaisquer
function mdc() {}

// 25. No javascript toda letra pode ser representada por um codigo numeral
// Por exemplo, "e".charCodeAt() => 101
// Com base nisso, criar uma função que mapeia as letras de uma palavra para esse codigo
// ex: charCodeMap("teste") => [116, 101, 115, 116, 101]
function charCodeMap() {}

// 26. Usando a função String.fromCharCode, fazer o caminho contrário da questão anterior
// ex: charCodeMap([116, 101, 115, 116, 101]) => "teste"
function decodeCharCodeToLetter(charCodes) {}

// e => f
// n => o
// t => u
// 27. Acima está a chave de um padrão de substituição de letras
// Com base nesse padrão, escrever um algoritmo para decodificar
// um texto de letras minusculas expresso nessa lógica
// ex: decodifyText('foufoefv') => 'entendeu'
function decodifyText() {}

// 28. Usando o console.log, reproduza o seguinte texto, de acordo com o numero
// de linhas especificado.
// ex: para um numero de 3 linhas o texto a ser retornado deve ser:
// - - * - -
// - * * * -
// * * * * *
// ex: para um numero de 2 linhas o texto a ser retornado deve ser:
// - * -
// * * *
// ex: para um numero de 4 linhas o texto a ser retornado deve ser:
// - - - * - - -
// - - * * * - -
// - * * * * * -
// * * * * * * *
function printStairStars(linesCount) {}
