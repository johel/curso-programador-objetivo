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

// Encontrar usuários que ganham acima de 4mil reais;

function filterUsersBySalary(userList, minSalary) {
  let result = [];
  for (let j = 0; j < userList.length; j++) {
    let user = userList[j];
    if (user.salary > minSalary) {
      result.push(user);
    }
  }

  return result;
}

function filterUsersBySalary(userList, minSalary) {
  const filteredUsers = userList.filter(function (user) {
    return user.salary > minSalary;
  });

  return filteredUsers;
}

function filterUsersByCertainAge(userList, age) {
  const filteredUsers = userList.filter(function (user) {
    return user.age === age;
  });

  return filteredUsers;
}

filterUsersBySalaryGreaterThan4000(usuarios);
