//RESUELVE LOS EJERCICIOS AQUI

//Ejercicio 1

let numbers = [4, 5, 6, 7, 8, 9, 10];

const elevados = () =>
  numbers.map((x) => {
    return Math.pow(x, x);
  });

//Ejercicios 2

const foodList = ["Pizza", "Ramen", "Paella", "Entrecot"];

const result2 = foodList.map((food) => {
  switch (food) {
    case "Pizza":
      return "Como soy de Italia, amo comer pizza ";
    case "Ramen":
      return "Como soy de Japón, amo comer reamen";
    case "Paella":
      return "Como soy de Valencia, amo comer paella";
    default:
      return "Aunque no como carne, el Entrecot";
  }
});

// Ejercicio 3
let staff = [
  {
    name: "Pepe",
    role: "The Boss",
    hobbies: ["leer", "ver pelis"],
  },
  {
    name: "Ana",
    role: "becaria",
    hobbies: ["nadar", "bailar"],
  },
  {
    name: "Luis",
    role: "programador",
    hobbies: ["dormir", "comprar"],
  },
  {
    name: "Carlos",
    role: "secretario",
    hobbies: ["futbol", "queso"],
  },
];

const staffDescription = [];

const result3 = staff.map(function callback(currentValue, index) {
  staffDescription.push;
  return `${staff[index].name} es ${staff[index].role} y le gusta ${staff[index].hobbies[0]} y ${staff[index].hobbies[1]}`;
});

// ### Filter ###

// - [ ] 4.- Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares

// ```
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result4 = numbers2.filter((x) => !(x % 2 == 0));

// - [ ] 5.- Dado el array foodList2, genera un segundo array result5 que filtre los platos veganos
//y saque una sentencia como la del ejemplo

const foodList2 = [
  {
    name: "Tempeh",
    isVeggie: true,
  },
  {
    name: "Cheesbacon burguer",
    isVeggie: false,
  },
  {
    name: "Tofu burguer",
    isVeggie: true,
  },
  {
    name: "Entrecot",
    isVeggie: false,
  },
];

let foodListFiltered = foodList2.filter((food) => {
  if (food.isVeggie == true) {
    return food;
  }
});

const result5 = foodListFiltered.map((food) => {
  if (food.name == "Tempeh") {
    return "Que rico Tempeh me voy a comer!";
  } else if (food.name == "Tofu burguer") {
    return "Que rica Tofu burguer me voy a comer!";
  }
});

// 6.- Dado el array **inventory**, devolver un array con los nombres de los elementos que valgan más de 300 euros.

const inventory = [
  {
    name: "Mobile phone",
    price: 199,
  },
  {
    name: "TV Samsung",
    price: 459,
  },
  {
    name: "Viaje a cancún",
    price: 600,
  },
  {
    name: "Mascarilla",
    price: 1,
  },
];

const priceFilter = inventory
  .filter((inventories) => {
    if (inventories.price > 300) return inventories;
  })
  .map((product) => {
    return product.name;
  });

// ### Reduce ###

//Ejercicio 6
const numeros3 = [39, 2, 4, 25, 62];

const result7 = numeros3.reduce((n, nMult) => {
  return n * nMult;
});

//Ejercicio 7
//  Concatena todos los elementos del array con reduce para que devuelva una sola frase

const sentenceElements = [
  "Me",
  "llamo",
  "Alicia",
  "y",
  "quiero",
  "sentir",
  "la",
  "fuerza",
  "con",
  "javascript",
];

let result8 = sentenceElements.reduce((acc, palabra) => {
  return acc + palabra + " ";
}, "");
