const usuario = {
  nome: "Flávia",
  idade: 18,
  email: "flavia18@hotmail.com",
};

const conta = {
  email: "flavia@gmail.com",
  password: "123456",
};

const trabalho = {
  nome: "propriedade repetida",
  empresa: "Tesla",
  salario: 1000,
};

function getCompleteUser(user, account) {
  const completeUser = Object.assign({}, user, account);
  return completeUser;
}

// getCompleteUser(usuario, conta);

function mergeSameProperties(user, account, work) {
  const completeUser = Object.assign({}, user, account, work);

  // 1. objeto {} absorve o user => { nome: "Flávia", idade: 18, email: "flavia18@hotmail.com"}
  // 2. objeto anterior absorve o account => { nome: "Flávia", idade: 18, email: "flavia@gmail.com", "password: 123456"}
  // 3. objeto anterior absorve o work => { nome: "propriedade repetida", idade: 18, email: "flavia@gmail.com", "password: 123456", empresa:"Tela", salario:1000}

  return completeUser;
}

mergeSameProperties(usuario, conta, trabalho);
