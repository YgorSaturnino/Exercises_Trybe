let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;
let menor = numbers[1];

for (let index = 0; index < numbers.length; index += 1){
    if(numbers[index] > maior){
        maior = numbers[index];
    }
}

for (let index = 0; index < numbers.length; index += 1){
    if(numbers[index] < menor){
        menor = numbers[index];
    }
}

console.log(maior);
console.log(menor);