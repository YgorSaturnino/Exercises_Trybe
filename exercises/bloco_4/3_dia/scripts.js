let n = 12;

for(let index = 1; index <= n; index += 1){
    let asteriscos = "";
    for(index2 = n; index2 >= n - index; index2 -= 1){
        if(index2 >= index){
            asteriscos += " ";
        }
        else{
            asteriscos += "*";
        }
    }
    console.log(asteriscos);
}