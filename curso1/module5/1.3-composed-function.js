// f(x) = 2 * x
// g(x) = x + 3;

// f(g(x)) = 2 * g(x) => 2 * (x + 3) => 2x + 6

function doubleX(x) {
  return 2 * x;
}

function plus3(x) {
  return x + 3;
}

function plus6(x) {
  return x + 6;
}

function triple(x) {
  return 3 * x;
}

function doubleX(x, transformX) {
  return 2 * transformX(x);
}

// doubleX(7, plus3);
// doubleX(7, plus6);

const result = doubleX(7, triple);

console.log(result);
