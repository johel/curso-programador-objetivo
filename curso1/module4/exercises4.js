const users = [
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

const userProducts = [
  {
    id: 1,
    userId: 1,
    name: "Maçã",
    category: "Comida",
    price: 10,
  },
  {
    id: 2,
    userId: 1,
    name: "Blusa",
    category: "Roupa",
    price: 50,
  },
  {
    id: 3,
    userId: 2,
    name: "Calça Jeans",
    category: "Roupa",
    price: 300,
  },
  {
    id: 4,
    userId: 2,
    name: "Sapatos",
    category: "Roupa",
    price: 100,
  },
  {
    id: 5,
    userId: 2,
    name: "Sapatos",
    category: "Roupa",
    price: 120,
  },
  {
    id: 6,
    userId: 2,
    name: "Toalha",
    category: "Cama e Mesa",
    price: 35,
  },
  {
    id: 7,
    userId: 3,
    name: "Uber",
    category: "Transporte",
    price: 20,
  },
  {
    id: 8,
    userId: 3,
    name: "Uber",
    category: "Transporte",
    price: 20,
  },
  {
    id: 9,
    userId: 3,
    name: "Taxi",
    category: "Transporte",
    price: 30,
  },
  {
    id: 10,
    userId: 6,
    name: "Computador",
    category: "Tecnologia",
    price: 5000,
  },
];

// 1. Encontrar um usuário pelo nome;

// 2. Encontrar um usuário pelo valor de uma propriedade qualquer;
// Dica: a assinatura do método é findUserByPropValue(users, prop, value)

// 3. Encontrar a usuária do sexo feminino com o salário maior.

// 4. Encontre os usuários de um dado estado e com peso maior
// que um dado peso;

// 5. Encontre os usuários de um dado estado ou que são casados;

// 6. Cria uma função que recebe a lista de usuários e retorna
// uma lista com o IMC dos respectivos usuários;
// OBS: imc = peso/(altura x altura)

// 7. Cria uma função que recebe a lista de usuários e retorna
// a lista dos nomes completos capitalizados;
// OBS: o nome 'joao da silva' capitalizado, seria: Joao Da Silva
// Dica1: Criar uma função auxiliar somente para capitalizar
// uma única palavra.
// Dica2: Criar outra função auxiliar para capitalizar
// um nome completo, com mais de uma palavra.
// Usar: split e join e a função da dica1

// 8. Calcular a média de altura de todos os usuários;

// 9. Retornar os usuários com altura abaixo da média;

// 10. Verificar se um dado produto foi consumido
// mais de uma vez.

// 11. Verificar se um dado produto foi consumido
// mais de um usuário.

// 12. Verificar se existe algum produto
// que foi comprado por mais de um usuário

// 13. Retornar a lista de usuários sem o usuário mais novo da lista.

// 14. Retornar um objeto que mapeia usuários pelo próprio
// id do usuário.
// ex: {
//   1: {
//     id: 1,
//     city: "São Paulo",
//     name: "josé da silva",
//     age: 21,
//     weight: 70,
//     sex: "m",
//     height: 1.7,
//     salary: 1000,
//     married: false,
//     active: true,
//   },
//   .
//   .
//   .
// }

// 15. Contar a quantidade de usuários de uma dada cidade;

// 16. Agrupar usuários pela cidade;

// 17. Contar a quantidade de usuários por cidade;

// 18. Obter a média salarial dos usuários por cidade;

// 19. Obter os nomes distintos de produtos;

// 20. Retornar os usuários que gastaram mais que preço
// médio dos produtos vendidos;

// 21. Encontre o userId que menos gastou;

// 22. Encontre o userId que comprou menos produtos, mas
// que comprou sim algum produto;

// 23. Encontre os usuários (objetos completos)
// que compraram algum produto;

// 24. Encontre os usuários comuns a duas listas de usuários.
// Dois usuários são idênticos, se tiverem o mesmo id;
// ex: lista1=[{id:2}, {id:3}] e lista2=[{id:3},{id:4}]
// usuariosComuns => [{id:3}]

// 25. Encontre os usuários não-comuns a duas listas de usuários.
// ex: lista1=[{id:2}, {id:3}] e lista2=[{id:3},{id:4}]
// usuariosNaoComuns => [{id:2}, {id:4}]
