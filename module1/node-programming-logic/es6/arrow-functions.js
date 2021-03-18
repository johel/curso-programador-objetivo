// function identity(id) {
//   return id;
// }

// const identity = function (id) {
//   return id;
// };

// const identity = (id) => {
//   return id;
// };

// const identity = (id) => id;

// function sum(a, b) {
//   return a + b;
// }

// const sum = function (a, b) {
//   return a + b;
// };

// const sum = (a, b) => {
//   return a + b;
// };

// const sum = (a, b) => a + b;

// function largerFunction(a, b) {
//   if (a + b > 100) {
//     return a + b;
//   } else {
//     return a * b;
//   }
// }

// const largerFunction = (a, b) => {
//   if (a + b > 100) {
//     return a + b;
//   } else {
//     return a * b;
//   }
// };

const usuarios = [
  {
    name: "josé",
    age: 21,
    sex: "m",
    height: 1.7,
    weight: 60,
    salary: 1000,
    married: false,
  },
  {
    name: "maria",
    age: 18,
    sex: "f",
    height: 1.6,
    weight: 60,
    salary: 2000,
    married: false,
  },
  {
    name: "antonieta",
    age: 28,
    sex: "f",
    height: 1.65,
    weight: 60,
    salary: 3000,
    married: true,
  },
  {
    name: "silva",
    age: 38,
    sex: "m",
    height: 1.85,
    weight: 70,
    salary: 5000,
    married: true,
  },
  {
    name: "joão",
    age: 48,
    sex: "m",
    height: 1.9,
    weight: 70,
    salary: 4000,
    married: false,
  },
];

// function printBigNumbers(number) {
//   if (number > 1000) {
//     console.log(number);
//   }
// }

// const printBigNumbers = (number) => {
//   if (number > 1000) {
//     console.log(number);
//   }
// };

function comNome() {
  return "com nome";
}

var funcaoComNome = comNome;

var funcaoComNome2 = function comNome2() {
  return "sem nome";
};

var funcaoSemNome = function () {
  return "sem nome";
};

function tudoEhVerdadeiro(user) {
  return true;
}

function tudoEhFalso(user) {
  return false;
}

function apenasCasados(user) {
  return user.married === true;
}

const all = usuarios.filter(tudoEhVerdadeiro);
const empty = usuarios.filter(tudoEhFalso);
const marriedUsers = usuarios.filter(apenasCasados);
const femaleUsers = usuarios.filter(function (user) {
  return user.sex === "f";
});
const maleUsers = usuarios.filter((user) => {
  return user.sex === "m";
});

function apenasJovem(user) {
  return user.age <= 40;
}
const youngUsers = usuarios.filter(apenasJovem);

const youngUsers2 = usuarios.filter(function (user) {
  return user.age <= 40;
});

const youngUsers3 = usuarios.filter((user) => {
  return user.age <= 40;
});

const usuarioJose = usuarios.find(function (user) {
  return user.name === "josé";
});

const usuarioJoseDeNovo = usuarios.find((user) => {
  return user.name === "josé";
});

const usuarioJoseDeNovoPoisEhOPrimeiroMasculino = usuarios.find((user) => {
  return user.sex === "m";
});

const usuariosMaculinos = usuarios.filter((user) => {
  return user.sex === "m";
});

const usuariaMariaPoisEhOPrimeiraFeminino = usuarios.find((user) => {
  return user.sex === "f";
});

const nenhumUsuario = usuarios.find((user) => {
  return user.sex === "outroSexo";
});

function findfUserByName(items, nombre) {
  return items.find((item) => {
    return item.name === nombre;
  });
}

// Map
function formulaDoImposto(salary) {
  return salary * 0.2;
}

function calculateUserTax(user) {
  return formulaDoImposto(user.salary);
}

const tax = calculateUserTax(usuarios[0]);

const allTaxes = usuarios.map(calculateUserTax);
const usuariosComTaxas = usuarios.map((user) => {
  return Object.assign({}, user, { tax: user.salary * 0.2 });
});

// Tarefa de Casa
// const IMCs = usuarios.map(funcaoMapeadoraDeIMC);

// function calculaImc(weight, height){
//   return weight / (height * height);
// }

const calculaImc = (weight, height) => {
  return weight / (height * height);
};

function getUserImc(user) {
  return calculaImc(user.weight, user.height);
}

const listaImcUsuarios = usuarios.map(getUserImc);

const listaImcUsuarios = usuarios.map((usuario) => {
  return calculaImc(usuario.weight, usuario.height);
});

const listaImcUsuarios = usuarios.map((usuario) => {
  return usuario.weight / (usuario.height * usuario.height);
});

console.log(listaImcUsuarios);
