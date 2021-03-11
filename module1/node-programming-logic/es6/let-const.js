// hoisting

function teste0() {
  var i;
  i = 1;

  if (true) {
    i = 2;
  }

  return i;
}

function teste1() {
  var i = 1;

  if (true) {
    var i = 2;
  }

  return i;
}

function teste2() {
  let i = 1;

  if (true) {
    let i = 2;
  }

  return i;
}

function teste3() {
  const i = 1;

  i = 3;

  return i;
}

// outra má utilização do const
// function teste4() {
//   const i;

//   i = 3;

//   return i;
// }

function teste5() {
  let i;

  if (true) {
    i = 2;
  }

  return i;
}

function teste6() {
  const user = { name: "fulano", age: 22 };

  user.name = "beltrano";

  return user;
}

// teste1();
// teste2();
// teste3();
// teste4();
// teste5();
// teste6();

function quizz1() {
  let i = 10;
  let result = i;

  if (i === 10) {
    let i = 2;
    if (i === 2) {
      i = 20;
      result = i;
    }
  } else {
    i = 3;
  }

  return result;
}

function quizz2() {
  let i = 10;
  let result = i;

  if (i === 10) {
    let i = 2;
    if (i === 2) {
      i = 20;
      let result = i;
    }
  } else {
    i = 3;
  }

  return result;
}

quizz2();
