// const newEmployees = () => {
//     const employees = {
//       id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
//       id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
//       id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
//     }
//     return employees;
//   };

// const infos = (name, lastName) => {
//     const obj = {
//         nome: `${name} ${lastName}`,
//         email: `${name}@trybe.com`,
//     };
//     return obj;
// }
// newEmployees.id1 = infos('Pedro', 'Guerra');
// newEmployees.id2 = infos('Luiza', 'Drumond');
// newEmployees.id3 = infos('Carla', 'Paiva');

// console.log(newEmployees);


// Exercício 2:

const sorteio = (number, callback) => {
  const numeroSorteado = Math.round(Math.random() * (10 - 1) + 1);
  if (callback(numeroSorteado, number) === true) {
    return `Parabéns você ganhou!`;
  } else {
    return `Tente Novamente! 
    Número sorteado: ${numeroSorteado}
    Seu número: ${number}`;
  }
}

const verifica = (number, numSort) => {
  if(number === numSort) {
    return true;
  }
  return false;
};

console.log(sorteio(8, verifica));