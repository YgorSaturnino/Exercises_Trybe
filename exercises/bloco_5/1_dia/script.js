function modCor (text) {
    document.getElementsByTagName('p')[0].innerText = text;
}
modCor('Testando se a função está correta');

function modCorSquad(element, cor) {
    var doc = document.getElementsByClassName(element);
    doc[0].style.backgroundColor = cor;
}
modCorSquad('main-content', 'rgb(76,164,109)');
modCorSquad('center-content', 'white');

function modH1(tag, title) {
    document.getElementsByTagName(tag)[0].innerText = title;
}
modH1('h1', 'Exercícios para fixação');


/*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */