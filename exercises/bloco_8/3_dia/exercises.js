const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//Exercício 1
// const expectedResult = [
//     'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
//     'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
//     'Fundação - Ficção Científica - Isaac Asimov',
//     'Duna - Ficção Científica - Frank Herbert',
//     'A Coisa - Terror - Stephen King',
//     'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
//   ];
  
//   function formatedBookNames() {
//     const string = books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
//     return string;
//   }
  
//   assert.deepStrictEqual(formatedBookNames(), expectedResult);

//Exercício 2
// const expectedResult = [
//     {
//       age: 31,
//       author: 'Isaac Asimov',
//     },
//     {
//       age: 38,
//       author: 'H. P. Lovecraft',
//     },
//     {
//       age: 39,
//       author: 'Stephen King',
//     },
//     {
//       age: 43,
//       author: 'George R. R. Martin',
//     },
//     {
//       age: 45,
//       author: 'Frank Herbert',
//     },
//     {
//       age: 62,
//       author: 'J. R. R. Tolkien',
//     },
//   ];
  
//   function nameAndAge() {
//     const newObject = books.map((book) => {
//         return {
//             age: (book.releaseYear - book.author.birthYear),
//             author: book.author.name,
//         }
//     })
//     newObject.sort((a, b) => a.age - b.age);
//     return newObject;
//   }

//   assert.deepStrictEqual(nameAndAge(), expectedResult);

//Exercício 3
// const expectedResult = [
//     { 
//       id: 1,
//       name: 'As Crônicas de Gelo e Fogo',
//       genre: 'Fantasia',
//       author: { name: 'George R. R. Martin', birthYear: 1948 },
//       releaseYear: 1991
//     },
//     {
//       id: 2,
//       name: 'O Senhor dos Anéis',
//       genre: 'Fantasia',
//       author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//       releaseYear: 1954
//     },
//     {
//       id: 3,
//       name: 'Fundação',
//       genre: 'Ficção Científica',
//       author: { name: 'Isaac Asimov', birthYear: 1920 },
//       releaseYear: 1951
//     },
//     {
//       id: 4,
//       name: 'Duna',
//       genre: 'Ficção Científica',
//       author: { name: 'Frank Herbert', birthYear: 1920 },
//       releaseYear: 1965
//     }
//   ];
  
//   function fantasyOrScienceFiction() {
//     return books.filter((book) => book.genre === `Ficção Científica` || book.genre === `Fantasia`);
//   }
  
//   console.log(fantasyOrScienceFiction())
//   assert.deepStrictEqual(fantasyOrScienceFiction(), expectedResult);

//Exercício 4
// const expectedResult = [
//     {
//       id: 6,
//       name: 'O Chamado de Cthulhu',
//       genre: 'Terror',
//       author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//       releaseYear: 1928,
//     },
//     {
//       id: 3,
//       name: 'Fundação',
//       genre: 'Ficção Científica',
//       author: { name: 'Isaac Asimov', birthYear: 1920 },
//       releaseYear: 1951,
//     },
//     {
//       id: 2,
//       name: 'O Senhor dos Anéis',
//       genre: 'Fantasia',
//       author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//       releaseYear: 1954,
//     },
//   ];
  
//   function oldBooksOrdered() {
//     const oldBooks = books.filter((book) => (2021 - book.releaseYear) >= 60);
//     oldBooks.sort((a, b) => a.releaseYear - b.releaseYear);
//     return oldBooks;
//   }
  
//   assert.deepStrictEqual(oldBooksOrdered(), expectedResult);

//Exercício 5
// const expectedResult = [
//     'Frank Herbert',
//     'George R. R. Martin',
//     'Isaac Asimov',
//     'J. R. R. Tolkien',
//   ];
  
//   function fantasyOrScienceFictionAuthors() {
//     const booksFF = books.filter((book) => book.genre === `Ficção Científica` || book.genre === `Fantasia`);
//     const booksOrder = booksFF.sort((a, b) => (a.author.name > b.author.name) ? 1 : ((b.author.name > a.author.name) ? -1 : 0));
//     return booksOrder.map((book) => book.author.name);
//   }
  
//   assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);

//Exercício 6
// const expectedResult = [
//     'O Senhor dos Anéis',
//     'Fundação',
//     'O Chamado de Cthulhu',
//   ];
  
//   function oldBooks() {
//     const oldBooks = books.filter((book) => (2021 - book.releaseYear) >= 60);
//     const bookNames = oldBooks.map((book) => book.name);
//     return bookNames;
//   }
  
//   assert.deepStrictEqual(oldBooks(), expectedResult);

//Exercício 7
// const expectedResult = 'O Senhor dos Anéis';

// function authorWith3DotsOnName() {
//   const bookInit = books.find((book) => (
//       book.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3
//   )).name;
//   return bookInit;
// }

// assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);