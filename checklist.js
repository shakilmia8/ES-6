// const nums = [1, 2, 3, 4, 5];
// let output = nums.filter(n => n % 2); console.log(output);

// 1.declared const and let variable
const myName = 'shakil';
let myAge = 27;

// 2. declared a templete string with dynamic
const products = { name: 'iphone-6', price: 17000, color: 'black' };

const about = `Hello! I am ${myName}. I am ${myAge} years old. I have a phone, phone model is ${products.name} and it's price is ${products.price} taka & this color is ${products.color}`;
// console.log(about);

// 3.1. declared arrow function with one parameter
const result = x => x / 5;
// console.log(result(45));

// 3.2. declared arrow function with two parameter
const output = (x, y) => {
    const a = x + 2;
    const b = y + 2;
    const z = a * b;
    return z;
};
// console.log(output(5, 5));

// 3.3. declared arrow function with three parameter
const multiply = (a, b, c) => a * b * c;
// console.log(multiply(2, 2, 2));

// 3.4  declared arrow function with two parameter
const outputs = (x, y) => {
    const a = x + 2;
    const b = y + 2;
    const z = a * b;
    return z;
};
// console.log(outputs(5, 5));

// 4.

// 4.5

// 5. declared a array with map used in arrow function
const numbers = [4, 5, 6, 7, 8, 9];
const mul = numbers.map(number => number * 5);
// console.log(mul);

// 6. declared a array with filter used in arrow function
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddNumbers = numbers2.filter(number => number % 2 != 0);
// console.log(oddNumbers);

// 7. 
const products2 = [
    { name: 'iphone-12', price: 95000, color: 'black' },
    { name: 'smart-watch', price: 5000, color: 'black' },
    { name: 'smart-bag', price: 5000, color: 'black' },
];
const price = products2.find(product => product.price == 5000);
// console.log(price);

// 7.5 summary of map,forEach,filter,find

map = ` ekta variable declar kore, sei variable e value set kore, sei value ta return kore.`
forEach = ` al most same of map but can not return of value.`
filter = ` jei name e filter kora hoy, kono ekta object theke sei namer joto property ache sobgulo value dibe. `
find = ` jei name e find kora hoy, kono ekta object theke sei namer first property tar value dibe. `

// 8.
const products3 = { name: 'iphone-12', price2: 95000, color2: 'black' };
const { price2, color2 } = products3;
// console.log(price2, color);

// 9.
const products4 = { name: 'iphone-12', price: 95000, color: 'black' };
const { color } = products4;
const three = color;
// console.log(three);

// 10.
const sum = (a, b, c = 7) => a + b + c;
// console.log(sum(7, 7, 8));

// 11.
const company = {
    name: 'RFL',
    ceo: { id: '0001', name: 'Rafsan Chowdhury', food: 'Beef-Biriyani' },
    site: {
        work: 'Product Billed', employee: 102, framework: 'Computer', tech: {
            first: 'Electrical',
            second: 'Machine',
            third: 'Delivery'
        }
    }
};
// const { tech } = company?.web;
// console.log(tech);
// console.log(company.site.tech);
// console.log(company.web?.tech);
// console.log(company.backend?.tech.third);
// console.log(company.web?.tech.third);