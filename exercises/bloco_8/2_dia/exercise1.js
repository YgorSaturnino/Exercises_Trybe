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
// function authorBornIn1947() {
//   const name = books.find((book) => book.author.birthYear === 1947);
//   return name.author.name;
//   }
  
//   assert.strictEqual(authorBornIn1947(), 'Stephen King');

//Exercício 2
// function smallerName() {
//     let nameBook;
//     books.sort((a, b) => a.name.length - b.name.length);
//     nameBook = books[0].name;
//     return nameBook;
//   }
//   assert.strictEqual(smallerName(), 'Duna');

//Exercício 3
// const expectedResult = {
//     author: {
//       birthYear: 1948,
//       name: 'George R. R. Martin',
//     },
//     genre: 'Fantasia',
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     releaseYear: 1991,
//   };
  
//   function getNamedBook() {
//     return books.find((book) => book.name.length === 26);
//   }
  
//   assert.deepStrictEqual(getNamedBook(), expectedResult);

//Exercício 4
// const expectedResult = [
//     {
//       id: 1,
//       name: 'As Crônicas de Gelo e Fogo',
//       genre: 'Fantasia',
//       author: { name: 'George R. R. Martin', birthYear: 1948 },
//       releaseYear: 1991,
//     },
//     {
//       id: 5,
//       name: 'A Coisa',
//       genre: 'Terror',
//       author: { name: 'Stephen King', birthYear: 1947 },
//       releaseYear: 1986,
//     },
//     {
//       id: 4,
//       name: 'Duna',
//       genre: 'Ficção Científica',
//       author: { name: 'Frank Herbert', birthYear: 1920 },
//       releaseYear: 1965,
//     },
//     {
//       id: 2,
//       name: 'O Senhor dos Anéis',
//       genre: 'Fantasia',
//       author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//       releaseYear: 1954,
//     },
//     {
//       id: 3,
//       name: 'Fundação',
//       genre: 'Ficção Científica',
//       author: { name: 'Isaac Asimov', birthYear: 1920 },
//       releaseYear: 1951,
//     },
//     {
//       id: 6,
//       name: 'O Chamado de Cthulhu',
//       genre: 'Terror',
//       author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//       releaseYear: 1928,
//     },
//   ];
  
//   function booksOrderedByReleaseYearDesc() {
//     return books.sort((a, b) => b.releaseYear - a.releaseYear)
//   }
  
//   assert.deepStrictEqual(booksOrderedByReleaseYearDesc(), expectedResult);

//Exercício 5
// const expectedResult = false;

// function everyoneWasBornOnSecXX() {
//   return books.every((book) => 1901 > book.author.birthYear && book.author.birthYear < 2000);
// }

// assert.strictEqual(everyoneWasBornOnSecXX(), expectedResult);

//Exercício 6
// const expectedResult = true;

// function someBookWasReleaseOnThe80s() {
//   return books.some((book) => 1980 >= book.releaseYear && book.releaseYear =< 1989);
// }

// assert.strictEqual(someBookWasReleaseOnThe80s(), expectedResult);

//Exercício 7
const expectedResult = false;

function authorUnique() {
    return books.every((book) =>
      !books.some((bookSome) =>
        (bookSome.author.birthYear === book.author.birthYear)
        && (bookSome.author.name !== book.author.name)));
  }

assert.strictEqual(authorUnique(), expectedResult);