let nota = parseInt("90%");
let resultado;

switch (nota){
    case (nota >= 90 && nota < 100):
        resultado = "A";
        return console.log(resultado);
        break;
    case (nota >= 80 && nota < 90):
        resultado = "B";
        return console.log(resultado);
        break;
    case (nota >= 70 && nota < 80):
        resultado = "C";
        return console.log(resultado);
        break;
    case (nota >= 60 && nota < 70):
        resultado = "D";
        return console.log(resultado);
        break;
    case (nota >=50 && nota < 60):
        resultado = "E";
        return console.log(resultado);
        break;
    case (nota < 50 && nota >= 0):
        resultado = "F";
        return console.log(resultado);
        break;
    default:
        return console.log("Número inválido");
        break;
}