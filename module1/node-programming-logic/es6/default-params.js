function meuLog(text, config = { background: "green", color: "blue" }) {
  console.log(
    "%c" + text,
    "background: " + config.background + "; color: " + config.color
  );
}

// meuLog("Olá, pessoal");
// meuLog("Olá, pessoal", { background: "blue", color: "yellow" });

function quizz(a, b = 5, c = 10) {
  return a + b + c;
}

quizz(1); // a=1; b= 5; c= 10
quizz(1, 4); // a=1; b=4; c =10
quizz(1, 9, 7); // a=1; b=9; c=7;

function quizz2(a = false, b = 7) {
  if (a) {
    if (b === 7) {
      return "hey";
    } else {
      return "hi";
    }
  } else {
    if (b === 7) {
      return "ho";
    } else if (b > 10) {
      return "ha";
    } else {
      return "hi";
    }
  }
}

quizz2();
quizz2(0, 8);
quizz2(1);
quizz2("");
quizz2(true, 11);
quizz2(false, 11);
quizz2(false, 8);
quizz2(20);
