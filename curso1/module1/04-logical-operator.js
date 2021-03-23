// && e ||

let a = 1;
let b = 2;
let c = 1;

console.log("a===b", a === b); // false
console.log("a!==b", a !== b); // true
console.log("a menor que b", a < b); // true

console.log("----");

console.log("a menor ou igual que b:", a <= b); // true
console.log("a menor ou igual que b:", a < b || a === b); // true
console.log("false ou false ou true:", false || false || true); // true

console.log(
  "se existir um false e usarmos &&, retorna false:",
  true && true && true && false // false
);
console.log(
  "se existir um false e usarmos &&, retorna false:",
  1 === 1 && 1 < 4 && 4 % 2 === 0 && 10 > 1000 // false
);

console.log(
  "se todos forem true e usarmos &&, retorna true:",
  1 === 1 && 1 < 4 && 4 % 2 === 0 && 10 < 1000 // true
);

console.log("-------");

var n = 12;
console.log(n % 6 === 0);
console.log(n % 2 === 0 && n % 3 === 0);

console.log("-------");
