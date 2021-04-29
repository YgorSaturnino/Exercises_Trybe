let array = [];

for (let index = 1; index <= 25; index += 1){
    array.push(index);
};

console.log(array);
let resultado = [];

for (index = 0; index < array.length; index += 1){
    resultado.push(array[index] / 2); 
}

console.log(resultado);