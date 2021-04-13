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

// Encontrar um usuário com o id 4;

// Encontrar o usuário com maior salário da uma lista;

// Encontrar usuários que ganham acima de 4mil reais;

// Retornar o primeiro nome de todos os usuários;

// Retornar a quantidade de receita gerada pela venda dos produtos;

// Retornar uma lista idêntica à de usuários, mas com uma propriedade
// a mais chamada faixaEtaria (jovem, meia-idade ou idoso);

// Verificar se todos os usuários estão ativos;

// Inativar os usuários menores de 18 anos;

// Retornar uma lista de usuários sem o usuário de id 3;

// Contar quantidade de produtos em determinada categoria;

// Contar quantidade de produtos de todas as categorias;

// Obter todas as categorias distintas;

// Agrupar todos os produtos pelo id do usuário;

// Obter o total gasto em cada categoria de produto;

// Descobrir qual userId mais gastou na plataforma;

// Descobrir qual usuário comprou maior quantidade
// de produtos na plataforma;

// Encontrar os usuários que não compraram nenhum produto;

// Encontrar usuarios comuns entre arrays diferentes;
