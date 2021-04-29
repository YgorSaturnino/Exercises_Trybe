function adicao(a, b){
    return a + b;
};

function subtracao(a, b){
    if ( a >= b ){
        return a -b; 
    }
    else{
        return b - a;
    };
};

function multiplicacao(a, b){
    return a * b;
};

function divisao(a, b){
    if (a >= b){
        return a / b;
    }
    else{
        return b / a;
    };
};

function modulo(a, b){
    if (a >= b){
        return a % b;
    }
    else{
        return b % a;
    };
};

function maiorNumero(a, b){
    if (a > b){
        return a;
    }
    else if(b > a){
        return b;
    }
    else{
        return console.log("numéros iguais");
    };
};

function maiorEntre3Numeros(a, b, c){
    if ( a > b && a > c){
        return a;
    }
    else if (b > a && b > c ){
        return c;
    }
    else if ( c > b && c > a){
        return c;
    }
    else{
        return console.log("não existe número maior")
    };
};

function posNegZero(a){
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
        return console.log ("Não é número natural")
    };
};