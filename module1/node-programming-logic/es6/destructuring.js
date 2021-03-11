var user = {
  name: "fulano",
  age: 21,
  wallet: {
    value: 100.21,
    currency: "BRL",
  },
};

function imprime(user) {
  const { wallet, age, name } = user;

  // mesma coisa que:
  // const wallet = user.wallet;
  // const age = user.age;
  // const name = user.name;

  console.log(wallet, age, name);
}

function imprimeMaisVerboso(user) {
  console.log(user.wallet, user.age, user.name);
}

function traduzMoeda(currency) {
  if (currency === "BRL") {
    return "Olá, brasileiro!";
  } else {
    return "Olá, estrangeiro!";
  }
}

function imprimeTraduzido(user) {
  const { wallet: carteira, age: idade, name: nome } = user;

  // mesma coisa que:
  // const carteira = user.wallet;
  // const idade = user.age;
  // const nome = user.name;

  console.log(carteira, idade, nome);
}

imprimeTraduzido(user);
