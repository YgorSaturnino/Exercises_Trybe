let a;
let b;

//Adição
console.log(a + b);

//Subtraçãpo
console.log(a - b);

//Multiplicação
console.log(a * b);

//Divisão
console.log(a / b);

//Módulo
console.log(a % b);

//Maior número
let resultado = 0;
if(a > b){
    resultado = a;
}
else{
    resultado = b;
}

//maior de 3 números
let c;
if ( a > b && a > c){
    resultado = a;
    return resultado;
}
else if (b > a && b > c ){
    resultado = b;
    return resultado;
}
else if ( c > b && c > a){
    resultado = c;
    return resultado;
}
else{
    return console.log("não existe número maior")
}

//Return positive, negative or zero
if (a > 0){
    return console.log("Positive");
}
else if(a == 0){
    return console.log("Zero");
}
else if(a < 0){
    return console.log("Negative");
}
else{
    console.log ("Não é número natural")
}

//Ângulos triângulo
if (a > 0 && b > 0 && c >0){
    if((a + b + c) == 180){
        return console.log("true");
    }
    else if ((a + b + c) != 180){
        return console.log("false");
    }
}
else{
    return console.log("Erro");
}

//Moves chess pieces

let piece;
String.toLowerCase(piece)

switch (piece){
    case "king":
        console.log("Move in all directions in 1 case");
        break;
    case "queen":
        console.log("Moves in all directions until the end");
        break;
    case "bishop":
        console.log("Moves on the diagonals");
        break;
    case "horse":
        console.log("Only piece that can skip the others. The horse's movement is in the shape of an (L), that is, two squares horizontally and one more vertically or vice versa.");
        break;
    case "tower":
        console.log("The tower moves vertically or horizontally");
        break;
    case "pawn":
        console.log("The pawn moves only one square forward and only captures other pieces diagonally. Optionally, each pawn can advance two squares on its first move in the game.");
        break;
    default:
        console.log("This isn't a chess piece");
        break;
}

//Percent note
