// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';
const body = document.getElementById("body");

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => {
        const h3 = document.createElement('h3');
        h3.innerHTML = data.joke;
        body.appendChild(h3);
    });
};

window.onload = () => fetchJoke();

const promise = new Promise((resolve, reject) => {
  let array = [];
  for (let index = 0; index < 10; index += 1) {
    let num = (Math.round(Math.random() * 50));
    array.push(num * num);
  }
  const result = array.reduce((acc, curr) => acc + curr);
  if (result > 8000 ) {
    const newArray = [
      Math.round(result / 2), 
      Math.round(result / 3), 
      Math.round(result /5), 
      Math.round(result / 10)
    ]
    return resolve(newArray);
  }
  return reject(result, console.log(`É mais de oito mil! Essa promise deve estar quebrada!`));
})
.then(newArray => console.log(`Promisse resolvida ${newArray}`))
.catch(result => console.log(`Promisse rejeitada ${result}`))
