const numbers = [5, 3, 5, 14, 13, 35, 27, 48, 3, 9];
const bigNumbers = numbers.filter(number => number >= 13);
// console.log(bigNumbers);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
];

// const black = products.filter(product => product.color == 'black');
const black = products.find(product => product.color == 'black');
console.log(black);