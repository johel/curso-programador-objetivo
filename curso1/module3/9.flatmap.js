let frases = [
  ["olá", "como", "está"],
  ["eu", "estou", "bem"],
];

function flatWords(phrases) {
  let result = [];

  for (let i = 0; i < phrases.length; i++) {
    let phrase = phrases[i];
    for (let j = 0; j < phrase.length; j++) {
      let word = phrase[j]; // phrases[i][j]
      result.push(word);
    }
  }

  return result;
}

flatWords(frases);
