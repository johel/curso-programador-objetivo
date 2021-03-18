function sum(a, b) {
  return a + b;
}

function returnThis() {
  return this;
}

var johel = {
  name: "Johel",
  speak: function () {
    console.log(this.name);
  },
};

var flavia = {
  name: "Flavia",
  speak: function () {
    console.log(this.name);
  },
};

johel.speak();
flavia.speak();

const speakWithoutContext = johel.speak;

// const speakWithoutContext = function () {
//   console.log(this.name);
// };

const speakWithoutContextComOValorDoThisEspecificado = speakWithoutContext.bind(
  {
    age: 21,
    name: "Igor",
    aleatoria: "fdsjfoisdhfoie",
  }
);

// speakWithoutContextComOValorDoThisEspecificado = function(){
//   console.log({
//     age: 21,
//     name: "Igor",
//     aleatoria: "fdsjfoisdhfoie",
//   }.name);
// }

// speakWithoutContextComOValorDoThisEspecificado();

function returnThis() {
  return this + " mundo";
}

const return3 = returnThis.bind(3);
const returnOla = returnThis.bind("ola");
console.log(returnOla());

function somaThisMaisNumero(numero) {
  return this + numero;
}

const somaTresMaisNumero = somaThisMaisNumero.bind(3);

console.log(somaTresMaisNumero(5));

const person = {
  name: "José",
  age: 40,
  speakName: function () {
    console.log(this.name);
  },
};

const animal = {
  name: "Donatelo",
  age: 90,
  especie: "tartaruga",
  speakAge() {
    console.log("Hey, my age is: " + this.age);
  },
};

// const speakAnimalName = person.speakName.bind(animal);
// person.speakName();
person.speakName.call(animal); // person.speakName(), mas trocando o this pelo animal

// speakAnimalName();
console.log("fd");

// ex1: function returnName(){return this.name}; O que returnName.call({name: 'Joao'}) retorna?
// ex1.5  O que returnName.bind({name: 'Joao'})() retorna?
// ex2: queremos usar o método speakAge do animal, mas substiuindo o this do animal pelo person
