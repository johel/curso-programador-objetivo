const usuarios = [
  {
    id: 1,
    city: "São Paulo",
    name: "josé da silva",
    age: 21,
    weight: 70,
    sex: "m",
    height: 1.7,
    salary: 1000,
    married: false,
    active: true,
  },
  {
    id: 2,
    city: "Rio de Janeiro",
    name: "maria clementina correia",
    age: 17,
    weight: 70,
    sex: "f",
    height: 1.6,
    salary: 2000,
    married: false,
    active: true,
  },
  {
    id: 3,
    city: "Rio de Janeiro",
    name: "antonieta francesa rainha",
    age: 28,
    weight: 70,
    sex: "f",
    height: 1.65,
    salary: 3000,
    married: true,
    active: true,
  },
  {
    id: 4,
    city: "Rio de Janeiro",
    name: "silva melo de aguiar",
    age: 38,
    weight: 70,
    sex: "m",
    height: 1.85,
    salary: 5000,
    married: true,
    active: true,
  },
  {
    id: 5,
    city: "São Paulo",
    name: "joão carvalho da conceição",
    age: 48,
    weight: 70,
    sex: "m",
    height: 1.9,
    salary: 9000,
    married: false,
    active: true,
  },
  {
    id: 6,
    city: "São Paulo",
    name: "zé rico programador",
    age: 62,
    weight: 90,
    sex: "m",
    height: 1.82,
    salary: 30000, // 30 mil
    married: false,
    active: true,
  },
];

// Criar uma única função que retorna três tipos de
// listas de usuários diferentes com base na lista original.
// A primeira de usuaŕios do sexo feminino.
// A segunda de usuários acima de de 1.8m
// A terceira de usuários solteiros com salário maior que 5 mil reais

function verifyFemale(user) {
  return user.sex === "f";
}

function verifyTall(user) {
  return user.height > 1.8;
}

function verifyRichSingle(user) {
  return user.married === false && user.salary > 5000;
}

function threeTypesOfList(userList) {
  const femaleUsers = userList.filter((user) => {
    return user.sex === "f";
  });

  const tallUsers = userList.filter((user) => {
    return user.height > 1.8;
  });

  const singleRichUsers = userList.filter((user) => {
    return user.married === false && user.salary > 5000;
  });

  return {
    firstList: femaleUsers,
    secondList: tallUsers,
    thirdList: singleRichUsers,
  };
}

threeTypesOfList(usuarios);
