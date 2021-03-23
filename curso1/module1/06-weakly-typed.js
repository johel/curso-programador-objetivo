// weakly typed
let texto = "valor a ela";
texto = 1;
texto = { teste: 1 };
let numeros = [1, 2, 3];

let conditionFalse = !!0;
let conditionFalse2 = !!undefined;
let conditionFalse3 = !!null;
let conditionFalse4 = !!"";

let conditionTrue = !!1;
let conditionTrue1 = !!"fhfiod";
let conditionTrue2 = !!{};
let conditionTrue3 = !![];

if (conditionFalse) {
  console.log("entrou no if");
} else {
  console.log("entrou no else");
}

let x;
