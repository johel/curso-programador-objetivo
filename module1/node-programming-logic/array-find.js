var usuarios = [
  {
    id: 1,
    name: "josé",
    age: 21,
    sex: "m",
    height: 1.7,
    salary: 1000,
    married: false,
    email: "jose@gmail.com",
    active: true,
  },
  {
    id: 2,
    name: "maria",
    age: 18,
    sex: "f",
    height: 1.6,
    salary: 2000,
    married: false,
    email: "maria@gmail.com",
    active: true,
  },
  {
    id: 3,
    name: "antonieta",
    age: 28,
    sex: "f",
    height: 1.65,
    salary: 3000,
    married: true,
    email: "antonieta@gmail.com",
    active: true,
  },
  {
    id: 4,
    name: "silva",
    age: 38,
    sex: "m",
    height: 1.85,
    salary: 5000,
    married: true,
    email: "silva@gmail.com",
    active: true,
  },
  {
    id: 5,
    name: "joão",
    age: 48,
    sex: "m",
    height: 1.9,
    salary: 4000,
    married: false,
    email: "joao@gmail.com",
    active: true,
  },
];

function getUserById(users, id) {
  var result = null;

  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    if (user.id === id) {
      result = user;
      break;
    }
  }

  return result;
}

function getUserByEmail(users, emailToVerify) {
  var result = null;

  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    if (user.email === emailToVerify) {
      result = user;
      break;
    }
  }

  return result;
}

function getUserByName(users, nameToVerify) {
  var result = null;

  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    if (user.name === nameToVerify) {
      result = user;
      break;
    }
  }

  return result;
}

function getUserByEmailUsingFind(users, emailToVerify) {
  var result = users.find((user) => user.email === emailToVerify);
  return result;
}

function getUserByNameUsingFind(users, name) {
  var result = users.find((user) => user.name === name);
  return result;
}

// getUserByEmail(usuarios, "jose@gmail.com");
// getUserById(usuarios, 6809486095);

// doesUserAlreadyExist(users, name){}
// doesUserAlreadyExist(usuarios, 'maria') => true
// doesUserAlreadyExist(usuarios, 'mariana') => false

function doesUserAlreadyExist(users, name) {
  var user = getUserByName(users, name);
  if (user) {
    return true;
  } else {
    return false;
  }
}

function doesUserAlreadyExist2(users, name) {
  return !!getUserByName(users, name);
}

function inactivateUser(users, userEmail) {
  var user = getUserByEmail(users, userEmail);
  user.active = false;
}

inactivateUser(usuarios, "antonieta@gmail.com");
