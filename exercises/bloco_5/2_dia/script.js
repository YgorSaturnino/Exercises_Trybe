let body = document.querySelector('body');
let title = document.createElement('h1');
    title.className = 'title';
    title.innerHTML = 'Exercício 5.2 - JavaScript DOM';
    body.appendChild(title);


let div = document.createElement('div');
    div.className = 'main-content';
    body.appendChild(div);

let div2 = document.createElement('div');
    div2.className = 'center-content';
    div.appendChild(div2);

let text = document.createElement('p');
    text.innerHTML = 'Pequeno texto como exemplo para praticar';
    div2.appendChild(text);

let div3 = document.createElement('div');
    div3.className = 'left-content';
    div.appendChild(div3);

let div4 = document.createElement('div');
    div4.className = 'right-content';
    div.appendChild(div4);

let img = document.createElement('IMG');
    img.src = "https://picsum.photos/200"
    img.className = 'small-image';
    div3.append(img);

let arr = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
let listPai = document.createElement('ul');
    listPai.className = 'listaPai';
for (let index = 0; index < arr.length; index += 1) {
    let list = document.createElement('li');
    list.className = 'lista';
    list.innerHTML = arr[index];
    listPai.appendChild(list);
}
    div4.appendChild(listPai);

for (let index = 0; index < 3; index += 1) {
    let title3 = document.createElement('h3');
    title3.className = 'description'
    div.appendChild(title3);
}

let rem = document.querySelector('.main-content');
    rem.removeChild(rem.childNodes[1]);

    div4.style.marginRight = 'auto';

let pai = document.querySelector('.center-content').parentNode;
    pai.style.backgroundColor = 'green';
   
let listRem = document.querySelectorAll('.lista');

for (let index = 0; index < listRem.length; index += 1) {
    let element = listRem[index];
    if (element.innerText.includes('nove') || element.innerText.includes('dez')) {
        listPai.removeChild(element);
    }
}