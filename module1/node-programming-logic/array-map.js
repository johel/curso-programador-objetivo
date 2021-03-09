var usuarios = [
  {
    id: 1,
    name: "josé conceição",
    sex: "m",
    height: 1.7,
    weight: 100,
    salary: 1000,
    married: false,
    email: "jose@gmail.com",
    active: true,
    birthday: "03/04/1990",
  },
  {
    id: 2,
    name: "maria da silva",
    sex: "f",
    height: 1.6,
    weight: 53,
    salary: 2000,
    married: false,
    email: "maria@gmail.com",
    active: true,
    birthday: "03/05/1980",
  },
  {
    id: 3,
    name: "antonieta julieta",
    sex: "f",
    height: 1.65,
    weight: 70,
    salary: 3000,
    married: true,
    email: "antonieta@gmail.com",
    active: true,
    birthday: "07/12/1999",
  },
  {
    id: 4,
    name: "silva barbosa",
    sex: "m",
    height: 1.85,
    weight: 80,
    salary: 5000,
    married: true,
    email: "silva@gmail.com",
    active: true,
    birthday: "07/11/1979",
  },
  {
    id: 5,
    name: "joão cordeiro",
    sex: "m",
    height: 1.9,
    weight: 85,
    salary: 4000,
    married: false,
    email: "joao@gmail.com",
    active: true,
    birthday: "07/01/2021",
  },
];

function getFirstName(fullName) {
  var nameParts = fullName.split(" "); // ["antonieta", "julieta"]
  return nameParts[0];
}

function getUsersFirstNames(users) {
  var result = [];
  for (var i = 0; i < users.length; i = i + 1) {
    var user = users[i];
    var firstName = getFirstName(user.name);
    result.push(firstName);
  }

  return result;
}

// getUsersFirstNames(usuarios);

function getAge(birthday) {
  // 02/09/1988
  var today = new Date();
  var birthDate = getBirthdate(birthday);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function getBirthdate(birthday) {
  birthdayParts = birthday.split("/");
  var day = parseInt(birthdayParts[0]);
  var month = parseInt(birthdayParts[1]) - 1;
  var year = parseInt(birthdayParts[2]);
  var birthDate = new Date(year, month, day);

  return birthDate;
}

function getUsersAges(users) {
  var result = [];
  for (var i = 0; i < users.length; i = i + 1) {
    var user = users[i];
    var age = getAge(user.birthday);
    result.push(age);
  }

  return result;
}

function getUsersAgesUsingMap(users) {
  var result = users.map((user) => getAge(user.birthday));
  return result;
}

// Exercício de casa

// getUsersAgesIMCs(users)
// getUsersAgesIMCs(usuarios) => [peso/(altura*altura)]
// criar uma função auxiliar getUserIMC(user){}
// getUserIMC(usuarios[0]) => 100/(1.7*1.7)
