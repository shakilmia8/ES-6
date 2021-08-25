const friends = ['tom share', 'tom chfes', 'tom shahin', 'tom solaiman'];
const fLength = friends.map(f => f.length);
console.log(fLength);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
];

const produtNames = products.map(name => name.name);
products.map(name => console.log(name));
products.forEach(name => console.log(name));

// console.log(produtNames);