let custo = 10;
let valorDeVenda = 11.5;
let custoTotal = 0;
let lucro = 0;

custoTotal = custo + (custo * 0,2);
lucro = valorDeVenda - custoTotal;

if(custo < 0 || valorDeVenda < 0){
    console.log("Valor inserido incorreto!");
}
else if(valorDeVenda <= custoTotal){
    console.log("O prejuízo foi de:" + lucro);
}
else{
    console.log("O lucro foi de: " + lucro);
}