var users = [
  {
    name: "josé",
    age: 21,
    sex: "m",
    height: 1.7,
    salary: 1000,
    married: false,
  },
  {
    name: "maria",
    age: 18,
    sex: "f",
    height: 1.6,
    salary: 2000,
    married: false,
  },
  {
    name: "antonieta",
    age: 28,
    sex: "f",
    height: 1.65,
    salary: 3000,
    married: true,
  },
  {
    name: "silva",
    age: 38,
    sex: "m",
    height: 1.85,
    salary: 5000,
    married: true,
  },
  {
    name: "joão",
    age: 48,
    sex: "m",
    height: 1.9,
    salary: 4000,
    married: false,
  },
];

function getUsersTotalSalary(users) {
  var sum = 0;
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    sum = sum + user.salary;
  }

  return sum;
}

function getMarriedUsers(users) {
  var marriedUsers = [];
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    if (user.married) {
      marriedUsers.push(user);
    }
  }

  return marriedUsers;
}

function getUsersUnderAge(users, age) {
  // return all users under specified age;
}

// getUsersTotalSalary(users);
// getMarriedUsers(users);
