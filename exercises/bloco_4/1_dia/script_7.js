let nota = parseInt("%"); //digitar nota aqui
let resultado;

if (nota >= 90 && nota <= 100 ){
    console.log("Nota A")
}
else if(nota >= 80 && nota < 90){
    console.log("Nota B")
}
else if(nota >= 70 && nota < 80){
    console.log("nota C")
}
else if(nota >= 60 && nota < 70){
    console.log("nota D")
}
else if(nota >= 50 && nota < 60){
    console.log("nota E")
}
else if(nota >= 0 && nota < 50){
    console.log("nota F")
}
else {
    console.log("Essa nota não está nos parâmetros")
}